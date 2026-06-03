import { Redis } from '@upstash/redis';

// Rate limiting cache (in-memory for serverless)
const rateLimitCache = new Map();

// Function to get country from IP
async function getCountryFromIP(ip) {
  try {
    console.log('🌍 Attempting geolocation for IP:', ip);
    
    // Use ipapi.co for geolocation (free tier: 1000 requests/day)
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    console.log('📡 ipapi.co response status:', response.status);
    
    if (!response.ok) {
      console.error('❌ ipapi.co returned error status:', response.status, response.statusText);
      return 'Unknown';
    }
    
    const data = await response.json();
    console.log('📊 ipapi.co data:', JSON.stringify(data, null, 2));
    
    const country = data.country_name || 'Unknown';
    console.log('✅ Resolved country:', country);
    
    return country;
  } catch (error) {
    console.error('❌ Error fetching country:', error.message, error);
    return 'Unknown';
  }
}

// Rate limiting function (prevent spam)
function isRateLimited(ip) {
  const now = Date.now();
  const lastRequest = rateLimitCache.get(ip);
  
  // Allow only 1 request per 30 minutes per IP
  if (lastRequest && now - lastRequest < 30 * 60 * 1000) {
    return true;
  }
  
  rateLimitCache.set(ip, now);
  
  // Clean up old entries (older than 1 hour)
  for (const [key, value] of rateLimitCache.entries()) {
    if (now - value > 60 * 60 * 1000) {
      rateLimitCache.delete(key);
    }
  }
  
  return false;
}

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check if environment variables are configured
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!redisUrl || !redisToken) {
    return res.status(500).json({
      error: 'Redis configuration missing',
      details: {
        hasUrl: !!redisUrl,
        hasToken: !!redisToken,
        message: 'Please configure UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN in Vercel environment variables'
      }
    });
  }

  // Initialize Redis client with validated credentials
  const redis = new Redis({
    url: redisUrl,
    token: redisToken,
  });

  try {
    // Get visitor's IP address
    const ip = 
      req.headers['x-forwarded-for']?.split(',')[0] ||
      req.headers['x-real-ip'] ||
      req.socket.remoteAddress ||
      'unknown';

    // Check rate limiting
    if (isRateLimited(ip)) {
      return res.status(200).json({ 
        success: true, 
        message: 'Already tracked recently',
        cached: true 
      });
    }

    // Get country from IP
    const country = await getCountryFromIP(ip);

    // Increment country counter in Redis
    await redis.zincrby('visitor_countries', 1, country);

    // Increment total visitor count
    await redis.incr('total_visitors');

    // Store last visit timestamp
    await redis.set(`last_visit:${ip}`, Date.now(), { ex: 1800 }); // 30 min expiry

    return res.status(200).json({
      success: true,
      country,
      message: 'Visitor tracked successfully'
    });
  } catch (error) {
    console.error('Error tracking visitor:', error);
    return res.status(500).json({ 
      error: 'Failed to track visitor',
      message: error.message 
    });
  }
}

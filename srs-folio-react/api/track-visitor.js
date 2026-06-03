import { Redis } from '@upstash/redis';

// Rate limiting cache (in-memory for serverless)
const rateLimitCache = new Map();

// Function to get country from IP with fallback APIs
async function getCountryFromIP(ip) {
  console.log('🌍 Attempting geolocation for IP:', ip);
  
  // Try ipapi.co first (free tier: 1000 requests/day)
  try {
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    console.log('📡 ipapi.co response status:', response.status);
    
    if (response.ok) {
      const data = await response.json();
      const country = data.country_name;
      if (country) {
        console.log('✅ Resolved country from ipapi.co:', country);
        return country;
      }
    } else if (response.status === 429) {
      console.warn('⚠️ ipapi.co rate limit exceeded, trying fallback...');
    }
  } catch (error) {
    console.warn('⚠️ ipapi.co failed:', error.message, '- trying fallback...');
  }
  
  // Fallback 1: ip-api.com (unlimited for non-commercial)
  try {
    const response = await fetch(`http://ip-api.com/json/${ip}`);
    console.log('📡 ip-api.com response status:', response.status);
    
    if (response.ok) {
      const data = await response.json();
      const country = data.country;
      if (country && data.status === 'success') {
        console.log('✅ Resolved country from ip-api.com:', country);
        return country;
      }
    }
  } catch (error) {
    console.warn('⚠️ ip-api.com failed:', error.message, '- trying next fallback...');
  }
  
  // Fallback 2: ipwhois.io (10K requests/month free)
  try {
    const response = await fetch(`https://ipwhois.app/json/${ip}`);
    console.log('📡 ipwhois.io response status:', response.status);
    
    if (response.ok) {
      const data = await response.json();
      const country = data.country;
      if (country && data.success) {
        console.log('✅ Resolved country from ipwhois.io:', country);
        return country;
      }
    }
  } catch (error) {
    console.warn('⚠️ ipwhois.io failed:', error.message);
  }
  
  console.error('❌ All geolocation services failed, returning Unknown');
  return 'Unknown';
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

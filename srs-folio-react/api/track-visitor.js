import { Redis } from '@upstash/redis';

// Initialize Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

// Rate limiting cache (in-memory for serverless)
const rateLimitCache = new Map();

// Function to get country from IP
async function getCountryFromIP(ip) {
  try {
    // Use ipapi.co for geolocation (free tier: 1000 requests/day)
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    if (!response.ok) {
      return 'Unknown';
    }
    const data = await response.json();
    return data.country_name || 'Unknown';
  } catch (error) {
    console.error('Error fetching country:', error);
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

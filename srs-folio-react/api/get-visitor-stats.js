import { Redis } from '@upstash/redis';

// Initialize Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get all countries with their visit counts (sorted by count, descending)
    const countriesWithScores = await redis.zrange('visitor_countries', 0, -1, {
      withScores: true,
      rev: true, // Reverse order (highest to lowest)
    });

    // Get total visitor count
    const totalVisitors = await redis.get('total_visitors') || 0;

    // Format the data
    const countries = [];
    for (let i = 0; i < countriesWithScores.length; i += 2) {
      const country = countriesWithScores[i];
      const count = countriesWithScores[i + 1];
      countries.push({
        country,
        count: parseInt(count)
      });
    }

    // Limit to top 10 countries
    const topCountries = countries.slice(0, 10);

    return res.status(200).json({
      success: true,
      totalVisitors: parseInt(totalVisitors),
      countries: topCountries,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error fetching visitor stats:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch visitor stats',
      message: error.message 
    });
  }
}

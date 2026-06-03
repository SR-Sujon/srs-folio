import { useState, useEffect } from 'react';

// Mock data for local development
const MOCK_DATA = {
  totalVisitors: 42,
  countries: [
    { country: 'United States', count: 15 },
    { country: 'India', count: 8 },
    { country: 'United Kingdom', count: 6 },
    { country: 'Bangladesh', count: 5 },
    { country: 'Canada', count: 4 },
    { country: 'Germany', count: 2 },
    { country: 'Australia', count: 2 }
  ]
};

export function useVisitorStats() {
  const [stats, setStats] = useState({
    totalVisitors: 0,
    countries: [],
    loading: true,
    error: null
  });

  useEffect(() => {
    let mounted = true;
    const isDevelopment = import.meta.env.DEV;

    // Track current visitor
    async function trackVisitor() {
      if (isDevelopment) {
        console.log('📊 [DEV MODE] Visitor tracking disabled in development');
        return;
      }

      try {
        await fetch('/api/track-visitor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });
      } catch (error) {
        console.error('Error tracking visitor:', error);
        // Don't block if tracking fails
      }
    }

    // Fetch visitor statistics
    async function fetchStats() {
      try {
        // In development, use mock data
        if (isDevelopment) {
          console.log('📊 [DEV MODE] Using mock visitor data');
          console.log('💡 To test with real data, use: vercel dev');
          
          if (mounted) {
            // Simulate API delay
            setTimeout(() => {
              setStats({
                totalVisitors: MOCK_DATA.totalVisitors,
                countries: MOCK_DATA.countries,
                loading: false,
                error: null
              });
            }, 800);
          }
          return;
        }

        // In production, fetch from API
        const response = await fetch('/api/get-visitor-stats');
        
        if (!response.ok) {
          throw new Error('Failed to fetch visitor stats');
        }

        const data = await response.json();
        
        if (mounted) {
          setStats({
            totalVisitors: data.totalVisitors,
            countries: data.countries,
            loading: false,
            error: null
          });
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
        if (mounted) {
          setStats(prev => ({
            ...prev,
            loading: false,
            error: error.message
          }));
        }
      }
    }

    // Track visitor first, then fetch stats
    trackVisitor().then(() => {
      // In development, fetch immediately; in production, wait for tracking
      const delay = isDevelopment ? 0 : 500;
      setTimeout(fetchStats, delay);
    });

    return () => {
      mounted = false;
    };
  }, []);

  return stats;
}

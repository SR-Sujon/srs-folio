// Debug endpoint to check IP detection and geolocation
export default async function handler(req, res) {
  // Get visitor's IP address
  const ip = 
    req.headers['x-forwarded-for']?.split(',')[0] ||
    req.headers['x-real-ip'] ||
    req.socket.remoteAddress ||
    'unknown';

  // Try to get country from ipapi.co
  let ipApiResponse = null;
  let ipApiError = null;
  let countryResult = 'Unknown';
  
  try {
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await response.json();
    ipApiResponse = {
      status: response.status,
      ok: response.ok,
      statusText: response.statusText,
      data: data
    };
    
    // Extract country just like track-visitor does
    countryResult = data.country_name || 'Unknown';
  } catch (error) {
    ipApiError = error.message;
  }

  // Check if IP is private/local
  const isPrivateIP = 
    ip === 'unknown' ||
    ip === '127.0.0.1' ||
    ip === '::1' ||
    ip.startsWith('192.168.') ||
    ip.startsWith('10.') ||
    ip.startsWith('172.16.') ||
    ip.startsWith('172.17.') ||
    ip.startsWith('172.18.') ||
    ip.startsWith('172.19.') ||
    ip.startsWith('172.20.') ||
    ip.startsWith('172.21.') ||
    ip.startsWith('172.22.') ||
    ip.startsWith('172.23.') ||
    ip.startsWith('172.24.') ||
    ip.startsWith('172.25.') ||
    ip.startsWith('172.26.') ||
    ip.startsWith('172.27.') ||
    ip.startsWith('172.28.') ||
    ip.startsWith('172.29.') ||
    ip.startsWith('172.30.') ||
    ip.startsWith('172.31.');

  return res.status(200).json({
    summary: {
      detectedIP: ip,
      isPrivateIP: isPrivateIP,
      countryResult: countryResult,
      status: ipApiResponse ? 'success' : 'error'
    },
    headers: {
      'x-forwarded-for': req.headers['x-forwarded-for'],
      'x-real-ip': req.headers['x-real-ip'],
      'cf-connecting-ip': req.headers['cf-connecting-ip'],
      'x-vercel-forwarded-for': req.headers['x-vercel-forwarded-for']
    },
    ipApiResponse,
    ipApiError,
    diagnosis: isPrivateIP 
      ? '⚠️ Private/Local IP detected - cannot geolocate'
      : ipApiError 
        ? '❌ Error calling ipapi.co'
        : ipApiResponse && !ipApiResponse.ok
          ? '❌ ipapi.co returned error status'
          : ipApiResponse && !ipApiResponse.data.country_name
            ? '⚠️ ipapi.co returned data but no country_name field'
            : '✅ Geolocation working correctly'
  });
}

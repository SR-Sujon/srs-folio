// Debug endpoint to check IP detection and all geolocation APIs
export default async function handler(req, res) {
  // Get visitor's IP address
  const ip = 
    req.headers['x-forwarded-for']?.split(',')[0] ||
    req.headers['x-real-ip'] ||
    req.socket.remoteAddress ||
    'unknown';

  // Test all three geolocation APIs
  const apiTests = {};
  
  // Test 1: ipapi.co
  try {
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await response.json();
    apiTests.ipapi_co = {
      status: response.status,
      ok: response.ok,
      country: data.country_name || null,
      error: data.error ? data.reason : null
    };
  } catch (error) {
    apiTests.ipapi_co = { error: error.message };
  }
  
  // Test 2: ip-api.com
  try {
    const response = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await response.json();
    apiTests.ip_api_com = {
      status: response.status,
      ok: response.ok,
      country: data.country || null,
      apiStatus: data.status
    };
  } catch (error) {
    apiTests.ip_api_com = { error: error.message };
  }
  
  // Test 3: ipwhois.io
  try {
    const response = await fetch(`https://ipwhois.app/json/${ip}`);
    const data = await response.json();
    apiTests.ipwhois_io = {
      status: response.status,
      ok: response.ok,
      country: data.country || null,
      success: data.success
    };
  } catch (error) {
    apiTests.ipwhois_io = { error: error.message };
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

  // Determine best result
  const bestCountry = 
    apiTests.ipapi_co?.country ||
    apiTests.ip_api_com?.country ||
    apiTests.ipwhois_io?.country ||
    'Unknown';

  return res.status(200).json({
    summary: {
      detectedIP: ip,
      isPrivateIP: isPrivateIP,
      resolvedCountry: bestCountry,
      workingAPIs: [
        apiTests.ipapi_co?.country ? 'ipapi.co' : null,
        apiTests.ip_api_com?.country ? 'ip-api.com' : null,
        apiTests.ipwhois_io?.country ? 'ipwhois.io' : null
      ].filter(Boolean)
    },
    headers: {
      'x-forwarded-for': req.headers['x-forwarded-for'],
      'x-real-ip': req.headers['x-real-ip'],
      'cf-connecting-ip': req.headers['cf-connecting-ip'],
      'x-vercel-forwarded-for': req.headers['x-vercel-forwarded-for']
    },
    apiTests,
    diagnosis: isPrivateIP 
      ? '⚠️ Private/Local IP detected - cannot geolocate'
      : bestCountry === 'Unknown'
        ? '❌ All geolocation APIs failed'
        : '✅ Geolocation working with fallback support'
  });
}

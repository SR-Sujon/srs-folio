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
  
  try {
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    ipApiResponse = {
      status: response.status,
      ok: response.ok,
      data: await response.json()
    };
  } catch (error) {
    ipApiError = error.message;
  }

  return res.status(200).json({
    detectedIP: ip,
    headers: {
      'x-forwarded-for': req.headers['x-forwarded-for'],
      'x-real-ip': req.headers['x-real-ip'],
      'cf-connecting-ip': req.headers['cf-connecting-ip']
    },
    ipApiResponse,
    ipApiError
  });
}

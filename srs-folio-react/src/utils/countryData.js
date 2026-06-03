// Map country names to their ISO 3166-1 alpha-2 codes for flags
export const countryCodeMap = {
  'United States': 'US',
  'United Kingdom': 'GB',
  'India': 'IN',
  'Bangladesh': 'BD',
  'Canada': 'CA',
  'Germany': 'DE',
  'France': 'FR',
  'Australia': 'AU',
  'Japan': 'JP',
  'China': 'CN',
  'Brazil': 'BR',
  'Mexico': 'MX',
  'Spain': 'ES',
  'Italy': 'IT',
  'Netherlands': 'NL',
  'Sweden': 'SE',
  'Norway': 'NO',
  'Denmark': 'DK',
  'Finland': 'FI',
  'Poland': 'PL',
  'Russia': 'RU',
  'South Korea': 'KR',
  'Singapore': 'SG',
  'Malaysia': 'MY',
  'Thailand': 'TH',
  'Vietnam': 'VN',
  'Philippines': 'PH',
  'Indonesia': 'ID',
  'Pakistan': 'PK',
  'Turkey': 'TR',
  'Saudi Arabia': 'SA',
  'United Arab Emirates': 'AE',
  'South Africa': 'ZA',
  'Nigeria': 'NG',
  'Egypt': 'EG',
  'Argentina': 'AR',
  'Chile': 'CL',
  'Colombia': 'CO',
  'Peru': 'PE',
  'New Zealand': 'NZ',
  'Ireland': 'IE',
  'Belgium': 'BE',
  'Switzerland': 'CH',
  'Austria': 'AT',
  'Portugal': 'PT',
  'Greece': 'GR',
  'Czech Republic': 'CZ',
  'Romania': 'RO',
  'Hungary': 'HU',
  'Israel': 'IL',
  'Ukraine': 'UA',
  'Unknown': 'XX', // Use XX for unknown countries
};

// Get country code from country name
export function getCountryCode(countryName) {
  return countryCodeMap[countryName] || 'XX';
}

// Format number with commas
export function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

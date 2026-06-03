# Visitor Tracking Setup Guide

## 🚀 Overview
Now includes visitor tracking by country with descending order display in the footer.

## 📦 What We've Implemented

### 1. **API Routes** (Serverless Functions)
- **`/api/track-visitor`** - Tracks each visitor's country based on their IP
- **`/api/get-visitor-stats`** - Returns visitor statistics sorted by count

### 2. **Frontend Components**
- **`useVisitorStats` Hook** - Custom React hook to fetch visitor data
- **Updated Footer Component** - Displays visitor stats with country flags
- **Country Utilities** - Helper functions for country codes and formatting

### 3. **Features**
✅ Automatic IP-based country detection  
✅ Real-time visitor counting  
✅ Top 10 countries displayed in descending order  
✅ Country flags using flagcdn.com API  
✅ Rate limiting (1 track per IP every 30 minutes)  
✅ Responsive grid layout (1-5 columns based on screen size)  
✅ Loading states and error handling  
✅ Beautiful animations with Framer Motion  

---

## 🔧 Setup Instructions

### Step 1: Create Upstash Redis Database

1. **Go to Upstash**: https://console.upstash.com/
2. **Sign up/Login** (free tier available)
3. **Create a new Redis database**:
   - Click "Create Database"
   - Choose a region close to your Vercel deployment
   - Select "Free" tier
   - Click "Create"

4. **Get your credentials**:
   - After creation, go to the database dashboard
   - Scroll down to "REST API" section
   - Copy `UPSTASH_REDIS_REST_URL`
   - Copy `UPSTASH_REDIS_REST_TOKEN`

### Step 2: Configure Environment Variables

#### For Local Development:
1. Create a `.env` file in the project root (if not exists):
   ```bash
   cp .env.example .env
   ```

2. Add your Upstash credentials to `.env`:
   ```env
   UPSTASH_REDIS_REST_URL=https://your-database-url.upstash.io
   UPSTASH_REDIS_REST_TOKEN=your-token-here
   ```

#### For Vercel Production:
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add these variables:
   - **Name**: `UPSTASH_REDIS_REST_URL`  
     **Value**: Your Upstash REST URL
   - **Name**: `UPSTASH_REDIS_REST_TOKEN`  
     **Value**: Your Upstash REST Token
4. Click "Save"

### Step 3: Deploy to Vercel

```bash
# Commit your changes
git add .
git commit -m "feat: add visitor tracking by country"

# Push to your repository
git push origin your-branch

# Vercel will automatically deploy
```

Or use Vercel CLI:
```bash
vercel --prod
```

---

## 🧪 Testing

### Test Locally:
```bash
npm run dev
```

Visit `http://localhost:5173` and check the footer. The visitor stats should appear after a brief loading animation.

### Test API Routes:

1. **Track a visitor**:
   ```bash
   curl -X POST http://localhost:5173/api/track-visitor
   ```

2. **Get stats**:
   ```bash
   curl http://localhost:5173/api/get-visitor-stats
   ```

### Expected Response:
```json
{
  "success": true,
  "totalVisitors": 5,
  "countries": [
    { "country": "United States", "count": 3 },
    { "country": "India", "count": 1 },
    { "country": "United Kingdom", "count": 1 }
  ]
}
```

---

## 🎨 Customization Options

### Change Number of Countries Displayed
In `/api/get-visitor-stats.js`, line 31:
```javascript
const topCountries = countries.slice(0, 10); // Change 10 to any number
```

### Adjust Rate Limiting
In `/api/track-visitor.js`, line 35:
```javascript
if (lastRequest && now - lastRequest < 30 * 60 * 1000) { // Change 30 minutes
```

### Modify Grid Layout
In `Footer.jsx`, line 213:
```jsx
className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3"
// Adjust column numbers for different breakpoints
```

### Add More Countries to Map
In `/src/utils/countryData.js`, add entries to `countryCodeMap`:
```javascript
'Your Country': 'XX', // Use ISO 3166-1 alpha-2 code
```

---

## 📊 How It Works

```
┌─────────────┐
│   Visitor   │
│   Arrives   │
└──────┬──────┘
       │
       ▼
┌─────────────────────┐
│  Footer Component   │
│     Loads           │
└──────┬──────────────┘
       │
       ├──► useVisitorStats Hook
       │
       ▼
┌──────────────────────┐
│  POST /api/track-    │
│    visitor           │
└──────┬───────────────┘
       │
       ├──► Get IP Address
       ├──► Detect Country (ipapi.co)
       ├──► Rate Limit Check
       └──► Store in Redis
       
       ▼
┌──────────────────────┐
│  GET /api/get-       │
│    visitor-stats     │
└──────┬───────────────┘
       │
       ├──► Fetch from Redis
       ├──► Sort by Count
       └──► Return Top 10
       
       ▼
┌──────────────────────┐
│   Display in         │
│   Footer with Flags  │
└──────────────────────┘
```

---

## 🐛 Troubleshooting

### Issue: Stats not showing
- **Check**: Redis credentials in environment variables
- **Check**: API routes are accessible (`/api/track-visitor`, `/api/get-visitor-stats`)
- **Check**: Browser console for errors

### Issue: Rate limiting too aggressive
- Adjust the time window in `track-visitor.js`
- Clear your browser cookies/cache

### Issue: Wrong country detection
- The free geolocation API (ipapi.co) has limits
- Consider upgrading to a paid geolocation service
- Alternative: Use Vercel's built-in geolocation headers

### Issue: Flags not showing
- Check internet connection (flags loaded from flagcdn.com)
- Verify country codes in `countryData.js`
- Fallback: Globe icon shows for unknown countries

---

## 💡 Future Enhancements

- [ ] Add visitor map visualization
- [ ] Track city-level data
- [ ] Add time-based analytics (daily, weekly, monthly)
- [ ] Export visitor data
- [ ] Admin dashboard for stats
- [ ] Real-time visitor count (WebSocket)

---

## 📝 Notes

- **Free Tier Limits**:
  - Upstash Redis: 10K commands/day
  - ipapi.co: 1,000 requests/day
  - flagcdn.com: Unlimited (CDN)

- **Privacy**: Only IP and country are tracked (no personal data)
- **Performance**: Serverless functions are cached by Vercel
- **Cost**: Completely free for portfolios with moderate traffic

---


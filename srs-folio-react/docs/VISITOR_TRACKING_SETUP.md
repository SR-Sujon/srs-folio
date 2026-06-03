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

### Quick Checks

#### Issue: Stats not showing
- **Check**: Redis credentials in environment variables
- **Check**: API routes are accessible (`/api/track-visitor`, `/api/get-visitor-stats`)
- **Check**: Browser console for errors

#### Issue: Rate limiting too aggressive
- Adjust the time window in `track-visitor.js`
- Clear your browser cookies/cache

#### Issue: Wrong country detection
- The free geolocation API (ipapi.co) has limits
- Consider upgrading to a paid geolocation service
- Alternative: Use Vercel's built-in geolocation headers

#### Issue: Flags not showing
- Check internet connection (flags loaded from flagcdn.com)
- Verify country codes in `countryData.js`
- Fallback: Globe icon shows for unknown countries

---

## 🔍 Detailed Troubleshooting Guide

### Step 1: Check Environment Variables in Vercel ⚙️

**This is the most common issue!**

#### Check if variables are set:

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Verify these variables exist:
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`

#### If missing, add them:

1. Get your credentials from [Upstash Console](https://console.upstash.com/)
2. Click on your database
3. Scroll to **REST API** section
4. Copy:
   - **UPSTASH_REDIS_REST_URL**: `https://xxxxx.upstash.io`
   - **UPSTASH_REDIS_REST_TOKEN**: `AXo...` (long token)
5. Add both to Vercel:
   - Click **"Add New"**
   - Enter variable name and value
   - Select **"All Environments"** (or just Production + Preview)
   - Click **"Save"**

#### Redeploy after adding variables:

```bash
# Option 1: Push a new commit
git commit --allow-empty -m "Trigger redeploy with env vars"
git push origin your-branch

# Option 2: Use Vercel dashboard
# Go to Deployments → Click "..." → "Redeploy"
```

---

### Step 2: Test API Routes Directly 🔌

#### Test if API routes are accessible:

Open your browser and visit:

```
https://your-deployment-url.vercel.app/api/get-visitor-stats
```

**Expected responses:**

✅ **Success** (with data):
```json
{
  "totalVisitors": 5,
  "countries": [
    {"country": "United States", "count": 3},
    {"country": "Canada", "count": 2}
  ]
}
```

✅ **Success** (empty/first visit):
```json
{
  "totalVisitors": 0,
  "countries": []
}
```

❌ **Error** (missing env vars):
```json
{
  "error": "Redis configuration missing"
}
```

❌ **Error** (500):
```
Internal Server Error
```

#### If you see errors:

- **"Redis configuration missing"** → Go back to Step 1
- **500 error** → Check Vercel Function Logs (Step 3)
- **404 error** → API routes not deployed (check vercel.json)

---

### Step 3: Check Vercel Function Logs 📋

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your deployment
3. Click **"Functions"** tab (or "Logs")
4. Look for errors from:
   - `/api/track-visitor`
   - `/api/get-visitor-stats`

#### Common error messages:

| Error | Cause | Solution |
|-------|-------|----------|
| `UPSTASH_REDIS_REST_URL is not defined` | Missing env var | Add in Vercel settings |
| `ECONNREFUSED` | Wrong Redis URL | Check Upstash credentials |
| `401 Unauthorized` | Wrong Redis token | Verify token from Upstash |
| `Rate limit exceeded` | Too many ipapi.co requests | Wait or upgrade ipapi plan |
| `429 Too Many Requests` | ipapi.co rate limit hit | Automatic fallback to other APIs |

---

### Step 4: Check Browser Console 🖥️

1. Open your Vercel preview URL
2. Press **F12** (or Cmd+Option+I on Mac)
3. Go to **Console** tab
4. Refresh the page

#### What to look for:

✅ **Success** (should see these logs):
```
✅ Visitor tracked successfully
✅ Visitor stats loaded: 5 visitors from 3 countries
```

❌ **Errors to check**:
```
❌ Error tracking visitor: ...
❌ Failed to fetch visitor stats
```

#### Check Network Tab:

1. Switch to **Network** tab
2. Filter by **Fetch/XHR**
3. Refresh page
4. Look for:
   - `track-visitor` (POST) - Should return 200
   - `get-visitor-stats` (GET) - Should return 200

**If you see 500 errors:**
- Click on the request
- Check **Response** tab for error message
- This often reveals missing env vars or Redis connection issues

---

### Step 5: Verify Redis Database 🗄️

1. Go to [Upstash Console](https://console.upstash.com/)
2. Click on your database
3. Go to **Data Browser** or **CLI**
4. Run these commands:

```redis
# Check total visitors
GET total_visitors

# Check countries (sorted set)
ZRANGE visitor_countries 0 -1 WITHSCORES
```

**If empty:**
- Database is working, just no visitors yet
- Try visiting your site from different browsers/devices
- Check rate limiting (30 min per IP)

**If errors:**
- Database might be deleted or credentials changed
- Create new database and update Vercel env vars

#### Clean up "Unknown" entries:
```redis
# Remove the Unknown country from the sorted set
ZREM visitor_countries Unknown

# Reset total visitor count if needed
DEL total_visitors
```

---

### Step 6: Check for Rate Limiting ⏱️

The system rate-limits to **1 request per 30 minutes per IP**.

#### To test:

1. Open your site in **Incognito/Private mode**
2. Wait a few seconds
3. Check if visitor appears

#### Test from different IPs:

- Use mobile phone (different network)
- Use VPN
- Ask a friend to visit

---

### Step 7: Verify vercel.json Configuration 📄

Make sure `vercel.json` exists in `srs-folio-react/`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**Note:** API routes (`/api/*`) are automatically handled by Vercel and **don't need** to be in `vercel.json`.

---

### Step 8: Debug IP Detection & Geolocation 🔍

Visit the debug endpoint to see detailed diagnostics:

```
https://your-site.vercel.app/api/debug-visitor
```

This will show you:
- The detected IP address
- Whether it's a private/local IP
- Results from all three geolocation APIs (ipapi.co, ip-api.com, ipwhois.io)
- Which APIs are working
- A diagnosis of any issues

---

## Quick Diagnostic Commands

### Check if environment variables are loaded:

Use the test endpoint:

```
https://your-site.vercel.app/api/test-env
```

You should see:
```json
{
  "hasUrl": true,
  "hasToken": true,
  "urlLength": 43,
  "tokenLength": 300,
  "urlStart": "https://modern-crappie...",
  "tokenStart": "gQAAAAAAAWMOAAIgcDIzOTFlNDI..."
}
```

**⚠️ Delete this file after testing!**

---

## Most Common Solutions ✅

**90% of the time, the issue is one of these:**

1. ✅ **Missing environment variables in Vercel**
   - Add `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`
   - Make sure to select correct environments (Preview/Production)
   - Redeploy after adding

2. ✅ **API rate limit exceeded**
   - ipapi.co free tier: 1,000 requests/day
   - System automatically falls back to ip-api.com and ipwhois.io
   - Wait 24 hours or the fallback will handle it

3. ✅ **Rate limiting per IP**
   - Each IP can only be tracked once every 30 minutes
   - Test from different devices/networks
   - Use Incognito mode to test

4. ✅ **Redis credentials changed**
   - Check if database still exists in Upstash
   - Verify credentials match between Upstash and Vercel
   - Update if needed and redeploy

5. ✅ **Cache issues**
   - Clear browser cache
   - Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
   - Wait a few seconds after deployment

---

## Still Not Working?

### Test the complete flow:

1. **Manual API test:**
   ```bash
   # Test track visitor
   curl -X POST https://your-site.vercel.app/api/track-visitor
   
   # Test get stats
   curl https://your-site.vercel.app/api/get-visitor-stats
   
   # Test debug endpoint
   curl https://your-site.vercel.app/api/debug-visitor
   ```

2. **Check Upstash status:**
   - Go to [Upstash Status](https://status.upstash.com/)
   - Verify no outages

3. **Create new database:**
   - If all else fails, create a fresh Upstash database
   - Update environment variables in Vercel
   - Redeploy

---

## Development vs Preview vs Production

| Environment | Uses Mock Data? | Needs Env Vars? |
|------------|----------------|-----------------|
| Local (`npm run dev`) | ✅ Yes | ❌ No |
| Local (`vercel dev`) | ❌ No | ✅ Yes (from `.env`) |
| Vercel Preview | ❌ No | ✅ Yes (from Vercel) |
| Vercel Production | ❌ No | ✅ Yes (from Vercel) |

**Common issue:** Preview deployment needs environment variables set in Vercel dashboard!

---

## 💡 Future Enhancements

- [ ] Add visitor map visualization
- [ ] Track city-level data
- [ ] Add time-based analytics (daily, weekly, monthly)
- [ ] Export visitor data
- [ ] Admin dashboard for stats
- [ ] Real-time visitor count (WebSocket)
- [ ] Add more geolocation API fallbacks
- [ ] Implement caching layer for API responses

---

## 📝 Notes

- **Free Tier Limits**:
  - Upstash Redis: 10K commands/day
  - ipapi.co: 1,000 requests/day (primary)
  - ip-api.com: Unlimited for non-commercial (fallback 1)
  - ipwhois.io: 10K requests/month (fallback 2)
  - flagcdn.com: Unlimited (CDN)

- **Fallback System**: Automatically switches between 3 geolocation APIs if one fails
- **Privacy**: Only IP and country are tracked (no personal data)
- **Performance**: Serverless functions are cached by Vercel
- **Cost**: Completely free for portfolios with moderate traffic

---

## 📖 Related Documentation

- [ENV_VARIABLES_GUIDE.md](./ENV_VARIABLES_GUIDE.md) - Environment variables reference
- [LOCAL_DEVELOPMENT.md](./LOCAL_DEVELOPMENT.md) - Development modes explained
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide with checklist

---


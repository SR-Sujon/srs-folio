# 🔍 Troubleshooting Visitor Tracking on Vercel

## Issue: No Visitor List Showing on Vercel Preview Deployment

Follow these steps to diagnose and fix the issue:

---

## Step 1: Check Environment Variables in Vercel ⚙️

**This is the most common issue!**

### Check if variables are set:

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Verify these variables exist:
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`

### If missing, add them:

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

### Redeploy after adding variables:

```bash
# Option 1: Push a new commit
git commit --allow-empty -m "Trigger redeploy with env vars"
git push origin renovate/srs-folio-2

# Option 2: Use Vercel dashboard
# Go to Deployments → Click "..." → "Redeploy"
```

---

## Step 2: Test API Routes Directly 🔌

### Test if API routes are accessible:

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

### If you see errors:

- **"Redis configuration missing"** → Go back to Step 1
- **500 error** → Check Vercel Function Logs (Step 3)
- **404 error** → API routes not deployed (check vercel.json)

---

## Step 3: Check Vercel Function Logs 📋

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your deployment
3. Click **"Functions"** tab (or "Logs")
4. Look for errors from:
   - `/api/track-visitor`
   - `/api/get-visitor-stats`

### Common error messages:

| Error | Cause | Solution |
|-------|-------|----------|
| `UPSTASH_REDIS_REST_URL is not defined` | Missing env var | Add in Vercel settings |
| `ECONNREFUSED` | Wrong Redis URL | Check Upstash credentials |
| `401 Unauthorized` | Wrong Redis token | Verify token from Upstash |
| `Rate limit exceeded` | Too many ipapi.co requests | Wait or upgrade ipapi plan |

---

## Step 4: Check Browser Console 🖥️

1. Open your Vercel preview URL
2. Press **F12** (or Cmd+Option+I on Mac)
3. Go to **Console** tab
4. Refresh the page

### What to look for:

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

### Check Network Tab:

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

## Step 5: Verify Redis Database 🗄️

1. Go to [Upstash Console](https://console.upstash.com/)
2. Click on your database
3. Go to **Data Browser** or **CLI**
4. Run these commands:

```redis
# Check total visitors
GET visitor_count

# Check countries (sorted set)
ZRANGE countries 0 -1 WITHSCORES
```

**If empty:**
- Database is working, just no visitors yet
- Try visiting your site from different browsers/devices
- Check rate limiting (30 min per IP)

**If errors:**
- Database might be deleted or credentials changed
- Create new database and update Vercel env vars

---

## Step 6: Check for Rate Limiting ⏱️

The system rate-limits to **1 request per 30 minutes per IP**.

### To test:

1. Open your site in **Incognito/Private mode**
2. Wait a few seconds
3. Check if visitor appears

### Test from different IPs:

- Use mobile phone (different network)
- Use VPN
- Ask a friend to visit

---

## Step 7: Verify vercel.json Configuration 📄

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

## Quick Diagnostic Commands

### Check if environment variables are loaded:

Add a test endpoint temporarily:

```javascript
// api/test-env.js
export default async function handler(req, res) {
  const hasUrl = !!process.env.UPSTASH_REDIS_REST_URL;
  const hasToken = !!process.env.UPSTASH_REDIS_REST_TOKEN;
  
  res.json({
    hasUrl,
    hasToken,
    urlStart: process.env.UPSTASH_REDIS_REST_URL?.substring(0, 20),
  });
}
```

Then visit: `https://your-site.vercel.app/api/test-env`

**⚠️ Delete this file after testing!**

---

## Most Common Solution ✅

**90% of the time, the issue is missing environment variables!**

### Quick fix:

1. ✅ Add `UPSTASH_REDIS_REST_URL` in Vercel
2. ✅ Add `UPSTASH_REDIS_REST_TOKEN` in Vercel  
3. ✅ Redeploy (push new commit or manual redeploy)
4. ✅ Clear browser cache and refresh
5. ✅ Wait 30 seconds for stats to appear

---

## Still Not Working?

### Test the complete flow:

1. **Manual API test:**
   ```bash
   # Test track visitor
   curl -X POST https://your-site.vercel.app/api/track-visitor
   
   # Test get stats
   curl https://your-site.vercel.app/api/get-visitor-stats
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

**Your issue:** Preview deployment needs environment variables set in Vercel dashboard!

---

## Need More Help?

📖 See also:
- [VISITOR_TRACKING_SETUP.md](./VISITOR_TRACKING_SETUP.md) - Complete setup guide
- [ENV_VARIABLES_GUIDE.md](./ENV_VARIABLES_GUIDE.md) - Environment variables reference
- [LOCAL_DEVELOPMENT.md](./LOCAL_DEVELOPMENT.md) - Development modes explained

🐛 **Still stuck?** Check:
- Vercel Function Logs (most detailed errors)
- Browser Console (frontend errors)
- Upstash Data Browser (database state)

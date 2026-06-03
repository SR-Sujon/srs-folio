# Local Development Guide

## 🚀 Running Locally

You have **two options** for local development:

### Option 1: Standard Vite Dev Server (Mock Data) ⭐ **Recommended for Development**

```bash
npm run dev
```

**What happens:**
- ✅ Fast hot-reload
- ✅ Shows **mock visitor data** (example countries)
- ✅ No API setup needed
- ✅ Perfect for UI/UX testing
- 📊 Mock data includes 7 sample countries

**Note:** The visitor stats you see are FAKE data for development purposes. Real tracking happens in production.

---

### Option 2: Vercel Dev Server (Real API) 🔧 **For Testing APIs**

```bash
# Install Vercel CLI globally (one-time)
npm install -g vercel

# Run with serverless functions
vercel dev
```

**What happens:**
- ✅ Real API routes work (`/api/track-visitor`, `/api/get-visitor-stats`)
- ✅ Tests actual Redis connection
- ✅ Simulates production environment
- ⚠️ Slower than Vite (serverless cold starts)
- ⚠️ Requires Vercel CLI installation

**When to use:** Testing visitor tracking API, debugging Redis issues, pre-deployment checks.

---

## 🔍 How to Tell the Difference

### Development Mode (Mock Data)
Open browser console and you'll see:
```
📊 [DEV MODE] Visitor tracking disabled in development
📊 [DEV MODE] Using mock visitor data
💡 To test with real data, use: vercel dev
```

### Production/Vercel Dev Mode (Real Data)
No [DEV MODE] messages in console, real visitor counts displayed.

---

## 🎯 Recommended Workflow

### Daily Development:
```bash
npm run dev
```
Use this 99% of the time. Mock data is enough for UI work.

### Before Deploying:
```bash
vercel dev
```
Test with real APIs to ensure everything works.

### Production:
```bash
git push
```
Vercel auto-deploys with real visitor tracking.

---

## 🐛 Troubleshooting

### "I see mock data in localhost"
✅ **This is normal!** Mock data appears in development mode (`npm run dev`).

### "I want to test real visitor tracking locally"
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel dev`
3. Add `.env` credentials when prompted

### "vercel dev not working"
- Ensure `.env` has Upstash credentials
- Run `vercel login` first
- Link project with `vercel link`

---

## 📝 Current Development Status

| Feature | `npm run dev` | `vercel dev` | Production |
|---------|--------------|--------------|------------|
| Hot reload | ✅ Fast | ⚠️ Slower | N/A |
| UI/UX testing | ✅ Perfect | ✅ Works | ✅ Works |
| Visitor tracking | ❌ Mock only | ✅ Real | ✅ Real |
| Redis connection | ❌ No | ✅ Yes | ✅ Yes |
| API routes | ❌ No | ✅ Yes | ✅ Yes |

---

## 💡 Pro Tips

1. **Use `npm run dev` for regular work** - It's faster and mock data is sufficient for UI
2. **Use `vercel dev` before pushing** - Quick production check
3. **Check browser console** - Look for `[DEV MODE]` messages
4. **Mock data is customizable** - Edit `src/hooks/useVisitorStats.js` if needed

---

**Current Mode:** Open http://localhost:5173 and check the console to see which mode you're in! 🚀

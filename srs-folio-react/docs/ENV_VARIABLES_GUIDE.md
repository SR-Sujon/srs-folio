# Environment Variables Quick Reference

## 📋 Current Setup

### Required (Visitor Tracking)
- `UPSTASH_REDIS_REST_URL` - Your Upstash Redis URL
- `UPSTASH_REDIS_REST_TOKEN` - Your Upstash Redis token

### Optional (Currently Implemented)
- `VITE_FORMSPREE_ENDPOINT` - Contact form endpoint (if you add one)

## 🔑 Variable Naming Rules

### Client-Side Variables (Exposed to Browser)
**Prefix:** `VITE_`

These are embedded in your built JavaScript and visible to users:
```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_GITHUB_USERNAME=SR-Sujon
VITE_CLOUDINARY_CLOUD_NAME=your-cloud
```

✅ **Safe to use:** Public IDs, usernames, API endpoints, feature flags  
❌ **Never use for:** API secrets, tokens, passwords, private keys

### Server-Side Variables (API Routes Only)
**No prefix needed**

These are only accessible in your `/api` routes:
```env
UPSTASH_REDIS_REST_TOKEN=secret-token
SENDGRID_API_KEY=SG.secret
OPENAI_API_KEY=sk-secret
```

✅ **Use for:** API secrets, database credentials, private tokens

## 📁 Files Overview

| File | Purpose | Commit to Git? |
|------|---------|----------------|
| `.env` | Your actual secrets | ❌ NO |
| `.env.example` | Template with placeholders | ✅ YES |
| `.env.local` | Local overrides | ❌ NO |
| `.env.production` | Production-only vars | ❌ NO |

## 🚀 Setup Steps

### 1. Local Development
```bash
# Copy template
cp .env.example .env

# Edit .env with your actual values
# Add your Upstash Redis credentials
```

### 2. Vercel Production
1. Go to: https://vercel.com/dashboard
2. Select project → **Settings** → **Environment Variables**
3. Add each variable (they apply to Production, Preview, or Development)
4. Click **Save**

## 🔄 When to Restart

You MUST restart your dev server after changing `.env`:
```bash
# Stop server (Ctrl+C)
# Restart
npm run dev
```

## 📝 Common Use Cases

### Currently Active:
```env
# Visitor tracking (Required)
UPSTASH_REDIS_REST_URL=https://your-db.upstash.io
UPSTASH_REDIS_REST_TOKEN=AY...token...
```

### Future Additions:

#### Analytics
```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

#### Contact Form
```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/abc123
```

#### Dynamic GitHub Repos
```env
VITE_GITHUB_TOKEN=ghp_your_token
VITE_GITHUB_USERNAME=SR-Sujon
```

#### Blog with CMS
```env
VITE_CMS_API_URL=https://api.contentful.com
VITE_CMS_SPACE_ID=your-space-id
```

#### Newsletter
```env
VITE_MAILCHIMP_API_KEY=your-key
VITE_MAILCHIMP_AUDIENCE_ID=your-audience
```

## ⚠️ Security Best Practices

1. ✅ **Never commit** `.env` to Git (it's in `.gitignore`)
2. ✅ **Use VITE_ prefix** only for public data
3. ✅ **Rotate secrets** if accidentally exposed
4. ✅ **Use different values** for dev and production
5. ✅ **Document variables** in `.env.example`
6. ❌ **Never log** secret values in console
7. ❌ **Never share** `.env` file contents

## 🔍 Accessing Variables

### In Vite App (Client-Side)
```javascript
// Only works with VITE_ prefix
const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
const username = import.meta.env.VITE_GITHUB_USERNAME;
```

### In API Routes (Server-Side)
```javascript
// All env variables available
const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
const apiKey = process.env.OPENAI_API_KEY;
```

## 🐛 Troubleshooting

### Variable is `undefined`
- ✅ Check spelling (case-sensitive)
- ✅ Restart dev server
- ✅ Client-side: Ensure `VITE_` prefix
- ✅ Check file is named `.env` (not `.env.txt`)

### Variable works locally but not on Vercel
- ✅ Add to Vercel dashboard environment variables
- ✅ Redeploy after adding variables
- ✅ Check correct environment (Production/Preview)

### Security warning in browser
- ✅ Make sure secrets don't have `VITE_` prefix
- ✅ Never use secrets in client-side code

## 📚 Resources

- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)
- [Upstash Console](https://console.upstash.com/)

---

**Current Status:** ✅ `.env` created with comprehensive template  
**Next Step:** Add your Upstash Redis credentials to `.env`

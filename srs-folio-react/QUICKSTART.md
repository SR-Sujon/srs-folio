# 🚀 Quick Start: Deploy to Vercel in 5 Minutes

## Step 1: Test Your Build Locally (2 min)

```bash
cd F:\GitHub\srs-folio\srs-folio-react
npm run build
npm run preview
```

Open browser → Check everything works → Close preview

## Step 2: Push to GitHub (1 min)

```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

## Step 3: Deploy to Vercel (2 min)

### Option A: Vercel Dashboard (Easiest) 👍

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Select your repository: `srs-folio`
5. Configure:
   - **Root Directory**: `srs-folio-react` ⚠️ Important!
   - Everything else auto-detected ✅
6. Click **"Deploy"**
7. Wait ~1 minute
8. Done! 🎉

### Option B: Vercel CLI (Alternative)

```bash
npm install -g vercel
vercel login
cd F:\GitHub\srs-folio\srs-folio-react
vercel --prod
```

## ✅ Files Already Configured

Your project is ready with:
- ✅ `vercel.json` - Vercel config
- ✅ `package.json` - Build scripts
- ✅ `vite.config.js` - Optimized build
- ✅ `.gitignore` - Excludes build files
- ✅ All image paths correctly formatted

## 🎯 Important Settings for Vercel

**Root Directory**: `srs-folio-react` ⚠️ **Don't forget this!**

Everything else is auto-detected:
- Framework: Vite ✅
- Build Command: `npm run build` ✅
- Output Directory: `dist` ✅
- Install Command: `npm install` ✅

## 📱 After Deployment

Your site will be live at:
```
https://your-project-name.vercel.app
```

**Auto-deploy on every push**: Push to GitHub → Vercel rebuilds automatically

## 🎨 Customization (Before Deployment)

### Must Update:
- [ ] Social media links in `src/components/SocialLinks.jsx`
- [ ] Contact info in `src/components/Contact.jsx`
- [ ] Replace CV files in `public/files/CV/`

### Should Update:
- [ ] Your images in `public/images/`
- [ ] Project descriptions
- [ ] About section content
- [ ] Skills and experience

## 🐛 Troubleshooting

**"Root Directory" not set?**
→ Set to `srs-folio-react` in Vercel settings

**Build fails?**
→ Check Vercel build logs → Fix errors → Push again

**Images not loading?**
→ All images should be in `public/` folder with paths like `/images/photo.jpg`

## 📚 Detailed Guides

- 📖 **Full Instructions**: See [DEPLOYMENT.md](./DEPLOYMENT.md)
- ✅ **Pre-Deploy Checklist**: See [PRE-DEPLOYMENT-CHECKLIST.md](./PRE-DEPLOYMENT-CHECKLIST.md)
- 📘 **Project Setup**: See [README.md](./README.md)

## 🎉 That's It!

Your portfolio will be live on Vercel in minutes. Share your link! 🚀

---

**Need Help?**
- [Vercel Docs](https://vercel.com/docs)
- [Vite Docs](https://vitejs.dev)

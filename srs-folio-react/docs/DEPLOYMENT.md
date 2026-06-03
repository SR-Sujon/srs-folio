# 🚀 Deploying SRS Portfolio to Vercel

This guide will help you deploy your React portfolio to Vercel in minutes.

## 📋 Prerequisites

- A [GitHub](https://github.com) account
- A [Vercel](https://vercel.com) account (you can sign up with GitHub)
- Your code pushed to a GitHub repository

## 🎯 Deployment Steps

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   cd F:\GitHub\srs-folio\srs-folio-react
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click **"Sign Up"** or **"Log In"** with GitHub

3. **Import Your Repository**
   - Click **"Add New Project"**
   - Click **"Import Git Repository"**
   - Select your `srs-folio` repository
   - Click **"Import"**

4. **Configure Project Settings**
   - **Framework Preset**: Vite (auto-detected)
   - **Root Directory**: `srs-folio-react`
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

5. **Deploy**
   - Click **"Deploy"**
   - Wait 1-2 minutes for the build to complete
   - Your site will be live at `https://your-project-name.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Navigate to your project**
   ```bash
   cd F:\GitHub\srs-folio\srs-folio-react
   ```

4. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Select "Yes" to set up and deploy
   - Choose your account/scope
   - Confirm project settings

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## ⚙️ Project Configuration

Your project is already configured with:

- ✅ `vercel.json` - Vercel configuration file
- ✅ `package.json` - Build scripts
- ✅ `vite.config.js` - Vite configuration
- ✅ `.gitignore` - Excludes build files and dependencies

## 🔄 Automatic Deployments

Once deployed, Vercel will automatically:
- Deploy on every push to your main branch
- Create preview deployments for pull requests
- Provide unique URLs for each deployment

## 🌐 Custom Domain (Optional)

1. Go to your project in Vercel Dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain
4. Follow the DNS configuration instructions

## 🛠️ Local Testing Before Deployment

Test your production build locally:

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

Visit `http://localhost:4173` to preview your production build.

## 📝 Environment Variables

### Required for Visitor Tracking

The visitor tracking feature requires Upstash Redis credentials:

1. **Get Upstash Credentials**:
   - Go to [Upstash Console](https://console.upstash.com/)
   - Create a new Redis database (or use existing)
   - Copy the REST URL and REST Token from the database details

2. **Add to Vercel**:
   - Go to Vercel Dashboard → Your Project → **Settings** → **Environment Variables**
   - Add the following variables:
   
   | Variable Name | Value | Description |
   |--------------|-------|-------------|
   | `UPSTASH_REDIS_REST_URL` | `https://your-db-name.upstash.io` | Upstash Redis REST endpoint |
   | `UPSTASH_REDIS_REST_TOKEN` | `AXo...` | Upstash Redis REST token |
   
3. **Redeploy**:
   - Click **"Redeploy"** in your latest deployment
   - Or push a new commit to trigger automatic deployment

### Optional Environment Variables

For future features, you can add:
- Analytics services (Google Analytics, Plausible, etc.)
- Authentication providers (Auth0, Supabase, etc.)
- Email services (SendGrid, Mailgun, etc.)

**See also**: [ENV_VARIABLES_GUIDE.md](./ENV_VARIABLES_GUIDE.md) for complete environment variable documentation.

**Without these variables**, the visitor tracking will not work in production. The app will still run, but visitor stats won't be displayed in the footer.

## 🎨 Optimization Tips

Your project is already optimized with:
- ✅ Vite for fast builds
- ✅ React 19 with modern features
- ✅ Tailwind CSS with tree-shaking
- ✅ Framer Motion for animations
- ✅ Code splitting

## 📱 Post-Deployment Checklist

- [ ] Test all sections work correctly
- [ ] Check mobile responsiveness
- [ ] Verify animations work smoothly
- [ ] Test navigation and scroll behavior
- [ ] Ensure contact form works
- [ ] Check all links and social media icons

## 🐛 Troubleshooting

**Build fails?**
- Check that all dependencies are in `package.json`
- Ensure no import errors in your code
- Check Vercel build logs for specific errors

**Routing issues?**
- The `vercel.json` file handles SPA routing
- All routes redirect to `index.html`

**Images not loading?**
- Ensure images are in the `public` folder
- Use absolute paths starting with `/` (e.g., `/images/logo.png`)

## 📚 Useful Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

## 🎉 Success!

Your portfolio is now live! Share your link:
- 🔗 Vercel URL: `https://your-project-name.vercel.app`
- 📱 Mobile-friendly and optimized
- 🚀 Auto-deploys on every push

---

**Need help?** Check [Vercel Documentation](https://vercel.com/docs) or [Vite Documentation](https://vitejs.dev)

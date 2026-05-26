# 🚀 Pre-Deployment Checklist

Complete this checklist before deploying to ensure everything works perfectly.

## ✅ Code & Configuration

- [x] All dependencies are listed in `package.json`
- [x] `vercel.json` configuration file created
- [x] `.gitignore` includes `node_modules` and `dist`
- [x] No hardcoded localhost URLs
- [x] All image paths use absolute paths (`/images/...`)
- [x] Build command: `npm run build` works without errors
- [x] No TypeScript errors or ESLint warnings

## ✅ Content Review

- [ ] Update your personal information in components
- [ ] Replace placeholder images with your actual images
- [ ] Update CV/Resume files in `public/files/CV/`
- [ ] Verify contact form endpoint (Formspree)
- [ ] Check all social media links are correct
- [ ] Update email addresses and phone numbers
- [ ] Verify all project links in Portfolio section
- [ ] Check certification links
- [ ] Verify research publication links

## ✅ Testing

- [ ] Test on different screen sizes (mobile, tablet, desktop)
- [ ] Check all navigation links work
- [ ] Test smooth scrolling to sections
- [ ] Verify active section highlighting in navbar
- [ ] Test contact form submission
- [ ] Check all animations play correctly
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify all images load correctly

## ✅ Performance

- [ ] Run `npm run build` successfully
- [ ] Run `npm run preview` and test locally
- [ ] Check browser console for errors
- [ ] Optimize large images (compress if needed)
- [ ] Remove any console.log statements

## ✅ SEO & Meta Tags (Optional Enhancement)

Consider adding to `index.html`:
```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="your, keywords, here">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="/images/og-image.jpg">
```

## ✅ Git & GitHub

- [ ] All changes are committed
- [ ] Code is pushed to GitHub
- [ ] Repository is public (or Vercel has access)
- [ ] Branch name is correct (usually `main` or `master`)

## ✅ Vercel Configuration

- [ ] Root Directory set to: `srs-folio-react`
- [ ] Framework Preset: Vite
- [ ] Build Command: `npm run build`
- [ ] Output Directory: `dist`
- [ ] Install Command: `npm install`

## 🎯 Quick Test Commands

```bash
# Navigate to project
cd F:\GitHub\srs-folio\srs-folio-react

# Install dependencies (if needed)
npm install

# Run linter
npm run lint

# Test development build
npm run dev
# Visit: http://localhost:5173

# Test production build
npm run build
npm run preview
# Visit: http://localhost:4173
```

## 🐛 Common Issues & Solutions

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading
- Ensure images are in `public/` folder
- Use absolute paths: `/images/photo.jpg`
- Check file names match exactly (case-sensitive)

### Form Not Working
- Verify Formspree endpoint URL
- Check form action attribute
- Ensure all required fields have `required` attribute

## 📸 Final Checks

- [ ] Take screenshots of all sections
- [ ] Test sharing on social media
- [ ] Check mobile responsiveness
- [ ] Verify loading speed
- [ ] Test all external links open in new tabs

## 🎉 Ready to Deploy!

Once all items are checked, follow the deployment instructions in [DEPLOYMENT.md](./DEPLOYMENT.md)

---

**Remember**: You can always redeploy by pushing updates to GitHub. Vercel will automatically rebuild and deploy your site!

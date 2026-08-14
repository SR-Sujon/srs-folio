# 🎯 Version Management Guide

## 🚀 Quick Reference

### Version Display
- **Footer**: Shows "v3.2.0" at the bottom of your site
- **Auto-updated**: Pulls from package.json automatically

### Quick Commands
```bash
npm run version:patch   # Bug fixes: 3.2.0 → 3.2.1
npm run version:minor   # New features: 3.2.0 → 3.3.0
npm run version:major   # Breaking changes: 3.2.0 → 4.0.0
```

### Version Types

| Type | When to Use | Example |
|------|-------------|---------|
| **Patch** | Bug fixes, typos, small tweaks | 3.2.0 → 3.2.1 |
| **Minor** | New features, sections, enhancements | 3.2.0 → 3.3.0 |
| **Major** | Complete redesign, breaking changes | 3.2.0 → 4.0.0 |

---

## Current Version

**v3.3.2** - WorldQuant University Graduate Credentials & Interactive Certification Nav

The version is displayed in the footer of the website and stored in `package.json`.

### Latest Changes (v3.3.2)
- **WorldQuant University Graduate Credential**: Added WQU **Foundations of Financial Engineering** (8 Graduate Credits) to graduate credentials category.
- **Detailed MScFE Syllabus**: Comprehensive curriculum breakdown for **MScFE 560 (Financial Markets — 4 credits)** and **MScFE 600 (Financial Data — 4 credits)** covering credit risk, securitization, derivatives, SVD/PCA linear algebra, yield curves, Expected Shortfall, FinBERT NLP, geospatial data, and GARCH modeling.
- **Dual-View Description & Learn More Anchor Navigation**: Implemented concise card summary on homepage with interactive **"Learn More →"** button linking directly to `/certifications#cert-9` on the dedicated page.
- **Enhanced Brand Logo Sizing**: Optimized brand logo container height and width scaling for single rectangular logos on homepage cards.
- **i18n Localization**: Complete English (`en.json`) and Japanese (`ja.json`) translations for titles, short/full descriptions, badges, links, and category headings.

---

## Versioning Strategy

This project follows [Semantic Versioning](https://semver.org/) (SemVer):

```
MAJOR.MINOR.PATCH (e.g., 3.2.0)
```

### When to Increment:

1. **MAJOR** version (X.0.0) - Breaking changes
   - Complete redesign
   - Major architectural changes
   - Removal of features
   - Changes that break backward compatibility
   
   Example: `3.2.0 → 4.0.0`

2. **MINOR** version (x.X.0) - New features (backward compatible)
   - New sections added
   - New components
   - Feature enhancements
   - Non-breaking improvements
   
   Example: `3.2.0 → 3.3.0`

3. **PATCH** version (x.x.X) - Bug fixes and small changes
   - Bug fixes
   - Typo corrections
   - Performance improvements
   - Small styling adjustments
   
   Example: `3.2.0 → 3.2.1`

---

## 🚀 Quick Start: Release Your First Update

Let's say you fix a bug:

```bash
# 1. Make your fix and commit
git add .
git commit -m "Fix navigation bug"

# 2. Bump version automatically
npm run version:patch

# 3. Update CHANGELOG.md (add your changes)

# 4. Commit changelog
git add CHANGELOG.md
git commit -m "Update changelog for v3.2.1"

# 5. Create Git tag
git tag -a v3.2.1 -m "Bug fix release"

# 6. Push everything
git push origin renovate/srs-folio-2 --tags
```

Done! Vercel auto-deploys, and your site shows v3.2.1 in the footer!

---

## Complete Release Process

### Step-by-Step

1. **Make your changes** and commit them:
   ```bash
   git add .
   git commit -m "Add new feature X"
   ```

2. **Bump the version** using npm scripts:
   ```bash
   npm run version:patch   # or minor/major
   ```

3. **Update CHANGELOG.md**:
   - Add a new section with version number and date
   - List all changes under appropriate categories (Added, Changed, Fixed, Removed)
   - See CHANGELOG.md for format examples

4. **Commit the changelog**:
   ```bash
   git add CHANGELOG.md
   git commit -m "Update changelog for v3.2.1"
   ```

5. **Create a Git tag**:
   ```bash
   git tag -a v3.2.1 -m "Release v3.2.1: Bug fixes and improvements"
   ```

6. **Push everything to GitHub**:
   ```bash
   git push origin renovate/srs-folio-2
   git push origin --tags
   ```

7. **Create a GitHub Release** (optional but recommended):
   - Go to GitHub repository
   - Click "Releases" → "Create a new release"
   - Select the tag you just created
   - Copy content from CHANGELOG.md
   - Publish the release

8. **Deploy automatically**:
   - Vercel will auto-deploy the new version
   - Verify the deployment

---

## Manual Version Update

If you prefer to update the version manually:

1. Edit `package.json`:
   ```json
   {
     "version": "3.2.1"
   }
   ```

2. Follow steps 3-8 from the Complete Release Process above.

---

## 🎨 What You'll See

**Website Footer (Bottom):**
```
Copyright © 2026, SR Sujon. All rights reserved.
Made with ❤ by SR Sujon
v3.2.0
```

The version updates automatically when you change package.json!

---

## Example Release Scenarios

### Scenario 1: Fixed a typo in About section
```bash
# Make the fix
git add .
git commit -m "Fix typo in About section"

# Bump patch version (3.2.0 → 3.2.1)
npm run version:patch

# Update changelog
# ... edit CHANGELOG.md ...

git add CHANGELOG.md
git commit -m "Update changelog for v3.2.1"

# Tag and push
git tag -a v3.2.1 -m "Fix typo in About section"
git push origin renovate/srs-folio-2 --tags
```

### Scenario 2: Added a new Blog section
```bash
# Make the changes
git add .
git commit -m "Add Blog section with article listings"

# Bump minor version (3.2.0 → 3.3.0)
npm run version:minor

# Update changelog
# ... edit CHANGELOG.md ...

git add CHANGELOG.md
git commit -m "Update changelog for v3.3.0"

# Tag and push
git tag -a v3.3.0 -m "Add Blog section"
git push origin renovate/srs-folio-2 --tags
```

### Scenario 3: Complete redesign
```bash
# Make the changes
git add .
git commit -m "Complete portfolio redesign with new architecture"

# Bump major version (3.2.0 → 4.0.0)
npm run version:major

# Update changelog with breaking changes
# ... edit CHANGELOG.md ...

git add CHANGELOG.md
git commit -m "Update changelog for v4.0.0"

# Tag and push
git tag -a v4.0.0 -m "Version 4.0.0: Complete redesign"
git push origin renovate/srs-folio-2 --tags
```

---

## Best Practices

1. **Always update CHANGELOG.md** when releasing
2. **Use meaningful commit messages** following conventional commits
3. **Test thoroughly** before bumping version
4. **Create Git tags** for all releases
5. **Document breaking changes** clearly in CHANGELOG
6. **Keep versions in sync** between package.json and Git tags
7. **Test the dev server** before deploying: `npm run dev`
8. **Verify footer displays** the correct version

---

## Rollback a Version

If you need to rollback to a previous version:

```bash
# List all tags
git tag -l

# Checkout a specific version
git checkout v3.2.0

# Or revert to a previous version in the current branch
git revert <commit-hash>
```

---

## 📁 Files Modified by Version System

1. **package.json**
   - Version field: Stores current version
   - Scripts: version:patch, version:minor, version:major

2. **Footer.jsx**
   - Imports version from package.json
   - Displays version below copyright

3. **CHANGELOG.md**
   - Documents all changes
   - Template for future updates

4. **VERSION.md** (this file)
   - Complete versioning guide
   - Step-by-step examples
   - Best practices

---

## 📖 Need Help?

- **This guide**: VERSION.md (you are here)
- **Change history**: CHANGELOG.md
- **Semantic Versioning**: https://semver.org/
- **Keep a Changelog**: https://keepachangelog.com/
- **npm version docs**: https://docs.npmjs.com/cli/v8/commands/npm-version

---

## 🎉 You're All Set!

Your portfolio now has professional version management. Every release is tracked, documented, and visible to visitors!

**Next Steps:**
1. Test the dev server: `npm run dev`
2. Check footer shows current version
3. When you make changes, use the version scripts
4. Keep CHANGELOG.md updated

Happy versioning! 🚀

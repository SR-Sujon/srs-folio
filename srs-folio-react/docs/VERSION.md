# Version Management Guide

This document explains how to manage versions for the SR Sujon Portfolio project.

## Current Version

**v1.0.0** - Initial Production Release

The version is displayed in the footer of the website and stored in `package.json`.

---

## Versioning Strategy

This project follows [Semantic Versioning](https://semver.org/) (SemVer):

```
MAJOR.MINOR.PATCH (e.g., 1.2.3)
```

### When to Increment:

1. **MAJOR** version (X.0.0) - Breaking changes
   - Complete redesign
   - Major architectural changes
   - Removal of features
   - Changes that break backward compatibility
   
   Example: `1.5.3 → 2.0.0`

2. **MINOR** version (x.X.0) - New features (backward compatible)
   - New sections added
   - New components
   - Feature enhancements
   - Non-breaking improvements
   
   Example: `1.5.3 → 1.6.0`

3. **PATCH** version (x.x.X) - Bug fixes and small changes
   - Bug fixes
   - Typo corrections
   - Performance improvements
   - Small styling adjustments
   
   Example: `1.5.3 → 1.5.4`

---

## How to Release a New Version

### Quick Commands

```bash
# For bug fixes (1.0.0 → 1.0.1)
npm run version:patch

# For new features (1.0.0 → 1.1.0)
npm run version:minor

# For breaking changes (1.0.0 → 2.0.0)
npm run version:major
```

### Complete Release Process

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
   - List all changes under appropriate categories
   - See CHANGELOG.md for format examples

4. **Commit the changelog**:
   ```bash
   git add CHANGELOG.md
   git commit -m "Update changelog for v1.0.1"
   ```

5. **Create a Git tag**:
   ```bash
   git tag -a v1.0.1 -m "Release v1.0.1: Bug fixes and improvements"
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
   - Verify at https://sr-sujon.com

---

## Manual Version Update

If you prefer to update the version manually:

1. Edit `package.json`:
   ```json
   {
     "version": "1.0.1"
   }
   ```

2. Follow steps 3-8 from the Complete Release Process above.

---

## Version Display

The current version is automatically displayed in the website footer:
- Location: Footer component (bottom of every page)
- Format: "v1.0.0"
- Source: Imported from `package.json`

---

## Best Practices

1. **Always update CHANGELOG.md** when releasing
2. **Use meaningful commit messages** following conventional commits
3. **Test thoroughly** before bumping version
4. **Create Git tags** for all releases
5. **Document breaking changes** clearly in CHANGELOG
6. **Keep versions in sync** between package.json and Git tags

---

## Example Scenarios

### Scenario 1: Fixed a typo in About section
```bash
# Make the fix
git add .
git commit -m "Fix typo in About section"

# Bump patch version (1.0.0 → 1.0.1)
npm run version:patch

# Update changelog
# ... edit CHANGELOG.md ...

git add CHANGELOG.md
git commit -m "Update changelog for v1.0.1"

# Tag and push
git tag -a v1.0.1 -m "Fix typo in About section"
git push origin renovate/srs-folio-2 --tags
```

### Scenario 2: Added a new Blog section
```bash
# Make the changes
git add .
git commit -m "Add Blog section with article listings"

# Bump minor version (1.0.0 → 1.1.0)
npm run version:minor

# Update changelog
# ... edit CHANGELOG.md ...

git add CHANGELOG.md
git commit -m "Update changelog for v1.1.0"

# Tag and push
git tag -a v1.1.0 -m "Add Blog section"
git push origin renovate/srs-folio-2 --tags
```

### Scenario 3: Complete redesign
```bash
# Make the changes
git add .
git commit -m "Complete portfolio redesign with new architecture"

# Bump major version (1.5.3 → 2.0.0)
npm run version:major

# Update changelog with breaking changes
# ... edit CHANGELOG.md ...

git add CHANGELOG.md
git commit -m "Update changelog for v2.0.0"

# Tag and push
git tag -a v2.0.0 -m "Version 2.0.0: Complete redesign"
git push origin renovate/srs-folio-2 --tags
```

---

## Rollback a Version

If you need to rollback to a previous version:

```bash
# List all tags
git tag -l

# Checkout a specific version
git checkout v1.0.0

# Or revert to a previous version in the current branch
git revert <commit-hash>
```

---

## Questions?

For questions or issues with version management, refer to:
- [Semantic Versioning Specification](https://semver.org/)
- [Keep a Changelog](https://keepachangelog.com/)
- [npm version documentation](https://docs.npmjs.com/cli/v8/commands/npm-version)

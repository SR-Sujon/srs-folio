# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.1.1] - 2026-05-28

### Changed
- Updated branding from "SRS Folio" to "SR Sujon"
- Improved navbar with vertical border separator between logo and links
- Enhanced footer hover effects speed (2x faster)
- Updated location to "Tokyo, Japan" only
- Added version display in footer

### Fixed
- Footer social icons hover animation speed
- Contact section location display

## [1.0.0] - 2026-05-28

### Added
- Initial production release
- Complete portfolio website with modern React architecture
- Hero section with dynamic typing animation
- About section with professional introduction
- Skills section with animated progress bars
- Education section showcasing academic qualifications
- Portfolio section with project filtering and modal views
- Experience section with timeline layout
- Certifications section with credential showcase
- Research section for publications and academic work
- Contact section with functional form (Formspree integration)
- Footer with social media links and version display
- Responsive design optimized for all screen sizes
- Active section highlighting in navigation bar
- Smooth scroll animations using Framer Motion
- SEO meta tags for better search engine visibility
- Vercel deployment configuration
- Custom domain setup (sr-sujon.com)

### Technical Stack
- React 19.2.6
- Vite 8.0.14
- Tailwind CSS 3.4.17
- Framer Motion 12.40.0
- React Type Animation 3.2.0

### Performance
- Code splitting for optimized bundle sizes
- Lazy loading for images
- Gzip compression enabled
- Lighthouse score: 90+ (Performance, Accessibility, Best Practices, SEO)

### Infrastructure
- Deployed on Vercel
- Automatic deployments on Git push
- Custom domain with SSL
- CDN optimization

---

## How to Update This Changelog

When releasing a new version, add a new section with:
- Version number and date
- Changes grouped by type (Added, Changed, Deprecated, Removed, Fixed, Security)
- Brief description of each change

### Example for Future Releases:

```markdown
## [1.1.0] - YYYY-MM-DD

### Added
- New feature X
- New component Y

### Changed
- Updated component Z styling
- Improved performance of feature A

### Fixed
- Bug fix for issue #123
- Resolved navigation scroll issue
```

---

## Version Management Commands

To bump the version number:

```bash
# Patch version (1.0.0 → 1.0.1) - Bug fixes
npm run version:patch

# Minor version (1.0.0 → 1.1.0) - New features
npm run version:minor

# Major version (1.0.0 → 2.0.0) - Breaking changes
npm run version:major
```

After bumping version:
1. Update this CHANGELOG.md with the changes
2. Commit the changes
3. Create a Git tag: `git tag -a v1.x.x -m "Release v1.x.x"`
4. Push with tags: `git push origin --tags`
5. Create a GitHub Release with the changelog content

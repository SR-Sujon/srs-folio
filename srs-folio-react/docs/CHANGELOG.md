# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.3.1] - 2026-08-11

### Added
- **Dark Mode System**:
  - `ThemeContext` & `ThemeToggle` component supporting light/dark theme switching with persistent `localStorage` state.
  - High-contrast dark styling across all 11 homepage sections and 4 subpages (`/portfolio`, `/experience`, `/certifications`, `/research`).
  - White-background logo containers for transparent institute & company badges in dark mode.
- **Spotlight Command Palette (`Ctrl+K` / `Cmd+K`)**:
  - Keyboard shortcut & search button to launch global command palette for fast site search, section navigation, language selection, and theme controls.
- **Dual-Pillar Opportunity Hub**:
  - Redesigned Contact section into balanced Industry (full-stack CV download) and Academic (IEEE research publications) callout cards.
- **Expandable Portfolio Cards**:
  - Added smooth Framer Motion `Read More ▼` / `Show Less ▲` layout animation on project cards.
- **Experience Company Logos & Content Updates**:
  - Integrated official company/institute logo badges across experience cards.
  - Refined **The Sparks Foundation (GRIP)** entry with accurate Singapore non-profit details, data science responsibilities, and Power BI visualization achievements.
- **Visual Effects**:
  - Updated profile picture to `srs_portfolio_pl_1.jpeg` with soft 3D elevation shadow in Light Mode and ambient blue/purple glowing aura in Dark Mode.

## [3.2.1] - 2026-06-03

### Added
- **Fallback Geolocation APIs**: Multi-API cascading system to prevent "Unknown" countries
  - Primary: ipapi.co (1K requests/day)
  - Fallback 1: ip-api.com (unlimited for non-commercial)
  - Fallback 2: ipwhois.io (10K requests/month)
  - Automatic failover when one API is rate-limited or unavailable
- **Debug Endpoint**: `/api/debug-visitor` for troubleshooting IP detection and geolocation
  - Tests all three geolocation APIs simultaneously
  - Shows detected IP address and headers
  - Identifies private/local IPs
  - Provides diagnostic messages
- **Environment Validation**: API endpoints now validate Redis credentials before initialization
  - Prevents crashes from undefined environment variables
  - Returns helpful error messages when credentials are missing
  - Improved error handling in serverless functions

### Changed
- **Documentation Consolidation**:
  - Merged `TROUBLESHOOTING_VISITOR_TRACKING.md` into `VISITOR_TRACKING_SETUP.md`
  - Merged `QUICK_VERSION_GUIDE.md` into `VERSION.md`
  - Single comprehensive guide for each topic
  - Updated documentation index in `docs/README.md`
- **Enhanced Logging**: Added detailed console logs in API routes for debugging
  - IP detection logging
  - Geolocation API response tracking
  - Redis operation logging
- **Improved Error Handling**: Better error messages in visitor tracking APIs
  - Clear indication of which service failed
  - Fallback service selection logged

### Fixed
- **Critical**: Fixed API crash when Redis credentials are undefined
  - Moved Redis client initialization from module level to inside handler
  - Added validation checks before creating Redis client
  - Prevents 500 FUNCTION_INVOCATION_FAILED errors
- **429 Rate Limit**: Resolved "Unknown" country issue caused by ipapi.co rate limiting
  - Automatic failover to alternative geolocation services
  - No more "Unknown" countries during high traffic or testing
- **Environment Variables**: Fixed missing credential detection in Vercel deployments
  - Added test endpoint for environment variable verification
  - Clear error messages guide users to configure variables

### Documentation
- Updated `VISITOR_TRACKING_SETUP.md` with 8-step detailed troubleshooting guide
- Added fallback API information to all relevant documentation
- Updated `VERSION.md` with quick reference at the top
- Enhanced troubleshooting steps with common solutions
- Added diagnostic command examples
- Included environment-specific behavior tables (dev/preview/production)

### Technical
- Redis client now initialized per-request instead of module-level
- Environment variable validation added to all API endpoints
- Improved error response structure for easier debugging
- Added IP header inspection for better geolocation accuracy

## [3.2.0] - 2026-06-03

### Added
- **Visitor Tracking System**: Real-time visitor analytics by country
  - Serverless API routes: `/api/track-visitor` and `/api/get-visitor-stats`
  - Upstash Redis integration for data storage
  - IP geolocation using ipapi.co (1K requests/day free tier)
  - Top 10 countries displayed in footer with country flags
  - Total visitor count display
  - Rate limiting: 30 minutes per IP address
  - Privacy-friendly: Only stores country, not IP addresses
- **Custom React Hook**: `useVisitorStats()` with automatic dev/prod detection
  - Mock data for local development (7 countries, 42 visitors)
  - Production mode calls real API endpoints
  - Automatic mode detection via `import.meta.env.DEV`
- **Country Data Utilities**: 
  - Country code mapping (50+ countries)
  - Flag display using flagcdn.com CDN
  - Number formatting utilities
- **Environment Variables**: 
  - Comprehensive `.env` template with 10+ categories
  - Support for analytics, auth, databases, email, storage, AI services
  - Server-side and client-side variable handling
- **New Documentation**:
  - `VISITOR_TRACKING_SETUP.md` - Complete setup guide
  - `ENV_VARIABLES_GUIDE.md` - Environment variables reference
  - `LOCAL_DEVELOPMENT.md` - Development modes guide
- **Footer Enhancements**:
  - Visitor statistics section with responsive grid (1-5 columns)
  - Country flags with fallback for unknown countries
  - Loading animation for visitor stats
  - Graceful error handling

### Dependencies
- Added `@upstash/redis` v1.34.3 - Serverless Redis client
- Added `country-flag-icons` v1.5.15 - SVG country flag library

### Technical
- Vercel Serverless Functions for API routes
- Redis sorted sets (ZINCRBY) for efficient counting
- CORS headers configured for API endpoints
- Mock data pattern for development UX

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

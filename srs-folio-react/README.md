# SRS Folio - React Portfolio Website

A modern, scalable portfolio website built with React 19, featuring a **Featured + Archive Pattern** architecture for optimal SEO and user experience. Live at [sr-sujon.com](https://sr-sujon.com)

## 🏗️ Architecture Overview

This portfolio implements a **Featured + Archive Pattern** with dedicated pages for better SEO and scalability:

- **Landing Page** (`/`) - Showcases best/featured items from each section
- **Dedicated Pages** - Full content with filtering, search, and pagination
  - `/portfolio` - All 12 projects with category filtering
  - `/experience` - Complete work history timeline
  - `/certifications` - All credentials with category filtering
  - `/research` - Publications with type filtering

### Key Architecture Benefits
✅ **Scalable**: Easy to add new items without cluttering the homepage  
✅ **SEO Optimized**: Unique meta tags, Open Graph, and Twitter Cards per page  
✅ **User Experience**: Featured items on landing, full details on dedicated pages  
✅ **Performance**: Code splitting with React Router for faster initial load  

## ✨ Features

### Core Features
- **Featured Mode Pattern**: Components accept `featured={true}` prop to limit displayed items
- **Dark & Light Mode System**: Full theme toggling with `ThemeContext`, persistent `localStorage` preference, and high-contrast dark styles across all sections and subpages (`<html class="dark">`)
- **Spotlight Command Palette (`Ctrl+K` / `Cmd+K`)**: Fast keyboard-driven command palette for instant site search, section jumping, language switching, and dark mode toggling
- **Dual-Pillar Opportunity Hub**: Redesigned Contact section targeting both Engineering Recruiters (CV download) and PhD Supervisors (IEEE publications)
- **Multi-Language Support (i18n)**: Full English 🇺🇸 and Japanese 🇯🇵 localization with Navbar flag switcher
- **Client-Side Routing**: Seamless navigation with React Router DOM 7.16
- **Hybrid Navigation**: Hash-based section links + route-based page navigation
- **Dynamic SEO**: Meta tags update per route with unique titles/descriptions
- **Visitor Analytics**: Real-time visitor tracking by country with Redis backend
- **Smooth Animations**: Framer Motion for scroll effects, fluid layout transitions, and card expansion
- **Responsive Design**: Mobile-first approach with Tailwind CSS utilities
- **Form Integration**: Contact form with Formspree backend
- **Scroll-to-Top**: Animated rocket button for easy navigation

### Advanced Features
- **Dark / Light Theme System**: Instant theme switching with custom `ThemeContext`, smooth CSS transitions, soft 3D light shadows, and dark ambient glowing profile aura
- **Command Palette Search**: Global modal dialog with fuzzy matching across sections, subpages, language switching, and theme controls
- **Expandable Portfolio Cards**: Smooth Framer Motion `Read More ▼` / `Show Less ▲` layout animation on project cards
- **Timeline & Company Logos**: Professional experience cards featuring official institute & company logos (MASS Holdings, AUST, Devskill, Upwork, Sparks Foundation)
- **Internationalization (i18n)**: Custom `LanguageContext` provider with `localStorage` persistence, fallback resolution, and full inner content translations across all 11 sections
- **Visitor Tracking**: Serverless visitor analytics with country detection and top 10 display
- **Search & Filter**: Real-time filtering on Portfolio, Certifications, Research pages
- **Category Filters**: Multi-category support with active state indicators
- **Certification Gallery**: Grid layout with graduate credential (WorldQuant University Foundations of Financial Engineering), exam, training, and course categorization
- **Publication Cards**: Research papers with ResearchGate, IEEE Xplore, Presenter Certificates, Slides, and DOI links
- **Intersection Observer**: Navbar active state based on visible sections
- **TypeScript-Ready**: Modern tooling with Vite 8 and ESLint

## 🚀 Tech Stack

### Frontend
- **[React 19.2.6](https://react.dev/)** - Latest UI library with concurrent features
- **[React Router DOM 7.16.0](https://reactrouter.com/)** - Client-side routing
- **[Vite 8.0.14](https://vite.dev/)** - Next-gen build tool with HMR
- **[Tailwind CSS 3.4.17](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion 12.40.0](https://www.framer.com/motion/)** - Production-ready animation library
- **[React Icons 5.5.0](https://react-icons.github.io/react-icons/)** - Icon library (Font Awesome, Simple Icons)
- **[React Type Animation 3.3.0](https://www.npmjs.com/package/react-type-animation)** - Typing effect
- **[Country Flag Icons](https://www.npmjs.com/package/country-flag-icons)** - SVG country flags

### Backend & Infrastructure
- **[Upstash Redis](https://upstash.com/)** - Serverless Redis for visitor tracking
- **[Vercel Serverless Functions](https://vercel.com/docs/functions)** - API routes for visitor analytics
- **[ipapi.co](https://ipapi.co/)** - IP geolocation service (free tier: 1K req/day)

### Testing & Quality
- **[Playwright 1.50.3](https://playwright.dev/)** - End-to-end testing framework
- **32 Tests**: 100% passing rate covering routing, SEO, filtering, and navigation
- **Test Suites**:
  - Homepage Tests (4 tests)
  - Routing & Navigation (8 tests)
  - Dedicated Pages (15 tests)
  - SEO Meta Tags (5 tests)

### DevOps & Tools
- **[ESLint 9.18.0](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing with Tailwind
- **Git** - Version control on branch `renovate/srs-folio-2`

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ and npm

### Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SR-Sujon/srs-folio.git
   cd srs-folio/srs-folio-react
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables** (optional for visitor tracking):
   ```bash
   cp .env.example .env
   # Add your Upstash Redis credentials (see docs/VISITOR_TRACKING_SETUP.md)
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser
   
   **Note**: Visitor tracking shows mock data in development. Real tracking requires Vercel deployment or `vercel dev`.

5. **Run tests**:
   ```bash
   npm test
   ```

6. **Build for production**:
   ```bash
   npm run build
   ```

7. **Preview production build**:
   ```bash
   npm run preview
   ```
   Opens at [http://localhost:4173](http://localhost:4173)

## 🏗️ Project Structure

```
srs-folio-react/
├── api/                     # Vercel serverless functions
│   ├── track-visitor.js     # Track visitor by IP and country
│   └── get-visitor-stats.js # Fetch visitor statistics
├── public/
│   ├── images/              # All images organized by section
│   │   ├── about/
│   │   ├── portfolio/
│   │   ├── experience/
│   │   ├── certifications/
│   │   ├── publications/
│   │   └── illustrations/   # SVG illustrations
│   └── files/
│       └── CV/              # Resume/CV files
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx       # Navigation with hybrid routing & language selector
│   │   ├── Hero.jsx         # Hero section with typing animation
│   │   ├── About.jsx        # About section
│   │   ├── Skills.jsx       # Skills section
│   │   ├── Education.jsx    # Education timeline
│   │   ├── Portfolio.jsx    # Portfolio with featured mode
│   │   ├── Experience.jsx   # Work experience with featured mode
│   │   ├── Certifications.jsx # Certifications with featured mode
│   │   ├── Research.jsx     # Research with featured mode & MonBarta details
│   │   ├── Contact.jsx      # Contact form
│   │   ├── Footer.jsx       # Footer with visitor stats
│   │   └── SEO.jsx          # Dynamic SEO meta tags
│   ├── contexts/            # React contexts
│   │   └── LanguageContext.jsx # i18n state & translation provider
│   ├── i18n/                # Internationalization dictionaries
│   │   ├── en.json          # English translations
│   │   └── ja.json          # Japanese translations
│   ├── pages/               # Route-based pages
│   │   ├── HomePage.jsx     # Landing page (/)
│   │   ├── PortfolioPage.jsx # Full portfolio (/portfolio)
│   │   ├── ExperiencePage.jsx # Full experience (/experience)
│   │   ├── CertificationsPage.jsx # Full certifications (/certifications)
│   │   └── ResearchPage.jsx # Full research (/research)
│   ├── hooks/               # Custom React hooks
│   │   └── useVisitorStats.js # Visitor tracking hook
│   ├── utils/               # Utility functions
│   │   └── countryData.js   # Country code mapping
│   ├── App.jsx              # Main app with routing
│   ├── App.css              # App-specific styles
│   ├── index.css            # Global styles with Tailwind
│   └── main.jsx             # Entry point
├── tests/                   # Playwright E2E tests
│   ├── homepage.spec.js     # Homepage tests
│   ├── routing.spec.js      # Routing & navigation tests
│   ├── dedicated-pages.spec.js # Page functionality tests
│   └── seo.spec.js          # SEO meta tag tests
├── docs/                    # Documentation files
│   ├── VISITOR_TRACKING_SETUP.md # Visitor tracking setup guide
│   ├── ENV_VARIABLES_GUIDE.md # Environment variables reference
│   ├── LOCAL_DEVELOPMENT.md # Local development guide
│   ├── PRE-DEPLOYMENT-CHECKLIST.md # Pre-deployment checklist
│   ├── DEPLOYMENT.md        # Deployment guide
│   ├── QUICKSTART.md        # Quick start guide
│   ├── IMPLEMENTATION_SUMMARY.md # Technical summary
│   ├── CHANGELOG.md         # Version history
│   ├── VERSION.md           # Version information
│   └── QUICK_VERSION_GUIDE.md # Version reference
├── .env                     # Environment variables (not in git)
├── .env.example             # Environment template
├── playwright.config.js     # Playwright configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
├── vercel.json              # Vercel deployment config
├── package.json             # Dependencies (v3.1.0)
└── README.md                # This file
```

## 🎨 Component Architecture

### Featured Mode Pattern
Components support a `featured` prop to display limited items on the homepage:

```jsx
// HomePage - Shows featured items
<Portfolio featured={true} />  // Shows 6 of 13 projects
<Experience featured={true} /> // Shows 4 positions
<Certifications featured={true} /> // Shows 6 of 8 certifications
<Research featured={true} />   // Shows 2 of 3 publications

// Dedicated Pages - Shows all items
<Portfolio />  // Shows all 13 projects with filtering
<Experience /> // Shows complete timeline (4 positions)
```

### Internationalization System (i18n)
- **LanguageContext**: Custom React Context managing `en` and `ja` locales.
- **Language Switcher**: Flag dropdown menu in `Navbar.jsx` (🇺🇸 English & 🇯🇵 日本語).
- **LocalStorage Persistence**: Saves user language preference in `localStorage.setItem('srs-folio-lang', lang)`.
- **Fallback Resolution**: Safe lookup fallback preventing missing string crashes or raw translation key outputs.
- **Full Coverage**: 100% inner content localization across all 11 components & pages.

### Routing System
**App.jsx** - Main router with 5 routes:
- `/` - HomePage (landing with featured items)
- `/portfolio` - PortfolioPage (all projects)
- `/experience` - ExperiencePage (work history)
- `/certifications` - CertificationsPage (credentials)
- `/research` - ResearchPage (publications)

### Hybrid Navigation
**Navbar.jsx** handles two navigation types:
1. **Hash Links** - Scroll to sections on homepage (`#home`, `#about`, etc.)
2. **Route Links** - Navigate to dedicated pages (`/portfolio`, `/experience`, etc.)

Uses `useLocation()` to detect current route and `IntersectionObserver` for active section highlighting.

### SEO Component
**SEO.jsx** - Dynamic meta tag management:
- Updates `document.title` per route
- Sets `meta[name="description"]` and `meta[name="keywords"]`
- Configures Open Graph tags (`og:title`, `og:description`, `og:image`)
- Sets Twitter Card tags for social sharing
- All images use absolute URLs with `sr-sujon.com` domain

### Key Components

#### Footer (with Visitor Analytics)
- Real-time visitor tracking by country
- Top 10 countries displayed with flags
- Total visitor count display
- Mock data in development, live data in production
- Rate limiting (30 min per IP)
- Responsive grid layout (1-5 columns)
- Social media links (9 platforms)
- Scroll-to-top rocket button
- Smooth animations with Framer Motion

#### Visitor Tracking System
**API Routes** (Vercel Serverless):
- `/api/track-visitor` - Tracks visitor IP and country
- `/api/get-visitor-stats` - Returns visitor statistics

**Frontend Hook**:
- `useVisitorStats()` - Custom hook with mock/live mode detection

**Features**:
- Automatic IP-based geolocation
- Redis sorted set for efficient counting
- Descending order display
- Privacy-friendly (country only)
- Free tier friendly (Upstash + ipapi.co)

#### Navbar
- Responsive with mobile hamburger menu
- Sticky header on scroll with backdrop blur
- Active link highlighting (hash + route based)
- Language selection dropdown with flags (🇺🇸 EN / 🇯🇵 JP)
- Smooth scroll for section navigation
- Desktop & mobile layouts with Tailwind breakpoints

#### Hero Section
- Two-column layout with SVG illustration
- Typing animation: "Full Stack Developer | AI Engineer | Researcher"
- Social media links (9 platforms)
- CTA buttons: Download CV, Get In Touch
- Fade-in animations with Framer Motion

#### Portfolio (Featured Mode)
- Grid layout with project cards
- Category badges (Web Dev, AI/ML, Data Analytics, Desktop App, Hardware, Game Dev)
- Featured mode: Shows 6 of 13 projects
- View All button → navigates to `/portfolio`
- Smooth animations on scroll

#### PortfolioPage (Dedicated)
- Full 13 projects with images and descriptions
- 7 category filters: All, Web Development, AI & ML, Data Analytics, Desktop App, Hardware, Game Dev
- Real-time search by title/description
- Responsive grid layout (1-2-3 columns)

#### Experience (Featured Mode)
- Timeline layout with company logos
- "Present" badge with pulse animation for current role (Software Engineer at MASS HOLDINGS)
- Responsibilities list and certificate links
- Featured mode: Shows 4 positions
- View All button → `/experience`

#### ExperiencePage (Dedicated)
- Complete work history timeline (4 positions: MASS HOLDINGS, Research Assistant, Freelancer, Brain Station 20)
- Company details with locations (Tokyo, Japan & Dhaka, Bangladesh)
- Expandable responsibility sections
- Professional layout with gradients

#### Certifications (Featured Mode)
- Grid gallery layout
- Three categories: Professional Examination, Training Programs, Online Courses
- Featured mode: Shows 1 exam + 2 training + 3 coursera = 6 total (of 8 total)
- Certification images with hover effects
- View All button → `/certifications`

#### CertificationsPage (Dedicated)
- All 8 credentials with category filtering
- 4 filters: All, Government Certification, Professional Training, Online Course
- Search by certification name
- Card layout with institution logos (BD-ITEC, North South University, University of Miyazaki, Vanderbilt University, University of Michigan, Google)
- Details: Issue date, skills learned

#### Research (Featured Mode)
- Publication cards with journal info
- Featured mode: Shows 2 publications (MonBarta ICSECS 2025, BSMDD)
- External links: DOI, ResearchGate, IEEE Xplore, Presenter Certificate, Presentation Slides, Mendeley Data, Google Scholar, arXiv, GitHub, ELSEVIER, Proof of Acceptance, Video Demo
- View All button → `/research`

#### ResearchPage (Dedicated)
- Full publication details (MonBarta ICSECS 2025, BSMDD, ELSEVIER Natural Language Processing Journal)
- Type filters: All, Conference, Journal, Dataset
- Search by title/description
- Citation information
- Multiple external source links including ResearchGate & PDF certificates

#### Contact
- Form with Formspree integration
- Fields: Name, Email, Subject, Message
- Contact info cards: Email, WhatsApp, Location
- Form validation and submit handling
- Success/error messages

#### Footer
- Social media links
- Version display (v2.1.1 from package.json)
- Animated rocket scroll-to-top button
- Copyright with current year
- Gradient background

## 🧪 Testing

### Test Suite Overview
**32 tests** using **Playwright** with **100% pass rate**:

```bash
npm test              # Run all tests
npm run test:ui       # Open Playwright UI
npm run test:headed   # Run with browser visible
npm run test:report   # View HTML report
```

### Test Coverage

#### 1. Homepage Tests (4 tests)
- ✅ Homepage loads with correct title
- ✅ All 9 main sections display correctly
- ✅ Featured portfolio items show (6 projects)
- ✅ View All buttons present for Portfolio/Experience/Certifications/Research

#### 2. Routing & Navigation Tests (8 tests)
- ✅ Navigate to Portfolio page via View All button
- ✅ Navigate to Experience page via View All button
- ✅ Navigate to Certifications page via View All button
- ✅ Navigate to Research page via View All button
- ✅ Back navigation works from dedicated pages
- ✅ Navbar navigates to dedicated pages
- ✅ Logo navigation returns to homepage
- ✅ Browser back button functions correctly

#### 3. Dedicated Pages Tests (15 tests)
**Portfolio Page (6 tests)**:
- ✅ Displays all projects
- ✅ Filter by category (AI & ML, Web Dev, etc.)
- ✅ Search projects by keyword
- ✅ Show "no results" message
- ✅ Reset filter to show all

**Experience Page (2 tests)**:
- ✅ Display all experience positions
- ✅ Show "Present" badge for current position

**Certifications Page (3 tests)**:
- ✅ Display all certifications
- ✅ Filter by category (Exam, Training, Online Course)
- ✅ Search certifications

**Research Page (4 tests)**:
- ✅ Display all publications
- ✅ Filter by type (Paper, Dataset)
- ✅ Search publications
- ✅ External links work (DOI, ResearchGate, etc.)

#### 4. SEO Meta Tags Tests (5 tests)
- ✅ Homepage has proper meta tags
- ✅ Portfolio page has unique title/description
- ✅ Experience page has unique title/description
- ✅ Certifications page has unique title/description
- ✅ Research page has unique title/description
- ✅ All pages have Open Graph images

### Test Configuration
- **Browser**: Chromium (Chrome for Testing 148.0.7778.96)
- **Base URL**: http://localhost:5173
- **Reporter**: HTML with screenshots on failure
- **Trace**: Enabled on first retry
- **Web Server**: Auto-starts with `npm run dev`

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at http://localhost:5173 |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview production build at http://localhost:4173 |
| `npm test` | Run Playwright tests (32 tests) |
| `npm run test:ui` | Open Playwright UI for interactive testing |
| `npm run test:headed` | Run tests with visible browser |
| `npm run test:report` | Open HTML test report |
| `npm run lint` | Run ESLint on source files |

## 🚀 Development Workflow

### 1. Feature Development
```bash
# Create feature branch
git checkout -b feature/new-feature

# Start dev server
npm run dev

# Make changes and test
# Dev server has HMR - changes reflect instantly
```

### 2. Testing
```bash
# Run tests
npm test

# Open test UI for debugging
npm run test:ui

# Run with browser visible
npm run test:headed
```

### 3. Production Build
```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Test production build
npm test
```

### 4. Deployment
```bash
# Build and deploy to hosting
npm run build
# Upload dist/ folder to hosting provider
```

## 🎯 Completed Features Checklist

### ✅ Core Features
- [x] React 19 + Vite 8 setup with Tailwind CSS
- [x] Responsive Navbar with mobile menu
- [x] Hero section with typing animation
- [x] About section with skills grid
- [x] Skills section with technology icons
- [x] Education timeline
- [x] Portfolio with project cards
- [x] Work experience timeline
- [x] Certifications gallery
- [x] Research publications
- [x] Contact form with Formspree
- [x] Footer with social links
- [x] Scroll-to-top rocket button

### ✅ Advanced Features
- [x] React Router DOM integration (5 routes)
- [x] Featured + Archive Pattern architecture
- [x] Dedicated pages for Portfolio/Experience/Certifications/Research
- [x] Hybrid navigation (hash + route based)
- [x] Dynamic SEO with meta tags per page
- [x] Search & filter functionality
- [x] Category filtering on multiple pages
- [x] Smooth animations with Framer Motion
- [x] Intersection Observer for active sections
- [x] "View All" buttons with navigation
- [x] "Present" badge for current job

### ✅ Testing & Quality
- [x] Playwright E2E testing setup
- [x] 32 comprehensive tests (100% passing)
- [x] Homepage functionality tests
- [x] Routing and navigation tests
- [x] Dedicated page functionality tests
- [x] SEO meta tag validation tests
- [x] ESLint configuration
- [x] HTML test reports with screenshots

## 📊 Project Stats

- **Version**: 2.1.1
- **Total Components**: 15+
- **Total Pages**: 5 (1 landing + 4 dedicated)
- **Projects Showcased**: 12
- **Work Experience**: 3 positions
- **Certifications**: 6+ credentials
- **Research Papers**: 2 publications
- **Test Coverage**: 32 tests (100% passing)
- **Dependencies**: 221 packages, 0 vulnerabilities

## � Documentation

Additional documentation is available in the [`docs/`](./docs/) folder:

- **[PRE-DEPLOYMENT-CHECKLIST.md](./docs/PRE-DEPLOYMENT-CHECKLIST.md)** - Pre-deployment verification checklist
- **[DEPLOYMENT.md](./docs/DEPLOYMENT.md)** - Deployment guide and instructions
- **[QUICKSTART.md](./docs/QUICKSTART.md)** - Quick start guide for developers
- **[IMPLEMENTATION_SUMMARY.md](./docs/IMPLEMENTATION_SUMMARY.md)** - Implementation details and technical summary
- **[CHANGELOG.md](./docs/CHANGELOG.md)** - Version history and change log
- **[VERSION.md](./docs/VERSION.md)** - Version information
- **[QUICK_VERSION_GUIDE.md](./docs/QUICK_VERSION_GUIDE.md)** - Quick version reference guide

## �🔗 Links

- **Live Site**: [sr-sujon.com](https://sr-sujon.com)
- **Repository**: [SR-Sujon/srs-folio](https://github.com/SR-Sujon/srs-folio)
- **Branch**: `renovate/srs-folio-2`
- **React**: [react.dev](https://react.dev/)
- **Vite**: [vite.dev](https://vite.dev/)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com/)
- **Playwright**: [playwright.dev](https://playwright.dev/)

## 👤 Author

**Saidur Rahman Sujon (SR Sujon)**
- Portfolio: [sr-sujon.com](https://sr-sujon.com)
- GitHub: [@SR-Sujon](https://github.com/SR-Sujon)
- LinkedIn: [SR Sujon](https://linkedin.com/in/sr-sujon)

## 📄 License

This project is licensed under the terms specified in [LICENSE-free.txt](../LICENSE-free.txt).

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
- `npm run lint` - Run ESLint
- `npm run version:patch` - Bump patch version (bug fixes)
- `npm run version:minor` - Bump minor version (new features)
- `npm run version:major` - Bump major version (breaking changes)

## 📌 Version Management

Current Version: **v1.0.0**

This project follows [Semantic Versioning](https://semver.org/). The version is displayed in the website footer and managed through `package.json`.

### Quick Version Update

```bash
# For bug fixes (1.0.0 → 1.0.1)
npm run version:patch

# For new features (1.0.0 → 1.1.0)
npm run version:minor

# For breaking changes (1.0.0 → 2.0.0)
npm run version:major
```

### Documentation

- **VERSION.md** - Complete versioning guide with examples
- **CHANGELOG.md** - Detailed change history
- **Git Tags** - All releases are tagged in Git

For detailed instructions, see [VERSION.md](./docs/VERSION.md)

## 🚀 Deployment

This project is ready to deploy on Vercel! 

### Quick Deploy to Vercel:

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project" → Import your repository
4. Set **Root Directory** to `srs-folio-react`
5. Click "Deploy"

**That's it!** Your site will be live in 1-2 minutes.

📖 **For detailed deployment instructions**, see [DEPLOYMENT.md](./docs/DEPLOYMENT.md)

### Project Configuration for Vercel

The project includes:
- ✅ `vercel.json` - Vercel configuration
- ✅ Optimized build settings
- ✅ SPA routing configuration
- ✅ All dependencies properly defined

## 🎯 Features Implemented

✅ Responsive Navbar with active section highlighting
✅ Hero/Home section with typing animation
✅ About section with services
✅ Skills section with progress bars and animations
✅ Education section with timeline
✅ Portfolio section with project showcase
✅ Experience section with company history
✅ Certifications section (Exam, Training, Coursera)
✅ Research publications section
✅ Contact form with Formspree integration
✅ Footer with social links

## 🎨 Customization

### Update Personal Information

1. **Social Links**: Edit `src/components/SocialLinks.jsx`
2. **Resume/CV**: Replace files in `public/files/CV/`
3. **Images**: Add your images to `public/images/`
4. **Contact Form**: Update Formspree endpoint in `src/components/Contact.jsx`

### Styling

- **Colors**: Edit theme colors in `tailwind.config.js`
- **Fonts**: Update in `index.css` and Tailwind config
- **Animations**: Modify Framer Motion settings in component files

## 📦 Building for Production

```bash
# Build the project
npm run build

# Preview the production build locally
npm run preview
```

The build output will be in the `dist/` folder.

## 🐛 Troubleshooting

**Development server won't start?**
- Delete `node_modules` and run `npm install` again
- Make sure you're using Node.js 18 or higher

**Build fails?**
- Check for any import errors
- Ensure all images are in the `public/` folder
- Run `npm run lint` to check for code issues

**Images not showing?**
- Use absolute paths: `/images/your-image.png`
- Make sure images are in the `public/` folder

## 📄 License

This project is based on the original HTML template and converted to React.

## 👨‍💻 Author

**Saidur Rahman Sujon**
- Portfolio: [Your Vercel URL]
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

---

Built with ❤️ using React, Vite, and Tailwind CSS
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```js
colors: {
  primary: {
    bg: '#3d3f41',
    header: '#555555',
  },
  // ... more colors
}
```

### Animations
Animations are configured in `tailwind.config.js` and can be easily modified or extended.

## 🔮 Next Steps

The following sections are ready to be implemented:
- About Section
- Skills Section
- Portfolio Section
- Experience Section
- Education Section
- Certifications Section
- Research/Publications Section
- Snapshots/Gallery Section
- Contact Section

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

See LICENSE-free.txt in the root directory.

## 👤 Author

**Saidur Rahman Sujon**
- LinkedIn: [@sr-sujon](https://linkedin.com/in/sr-sujon)
- GitHub: [@SR-Sujon](https://github.com/SR-Sujon)

---

Built with ❤️ using React and Tailwind CSS

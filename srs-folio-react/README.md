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
- **Client-Side Routing**: Seamless navigation with React Router DOM 7.16
- **Hybrid Navigation**: Hash-based section links + route-based page navigation
- **Dynamic SEO**: Meta tags update per route with unique titles/descriptions
- **Smooth Animations**: Framer Motion for scroll effects and transitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS utilities
- **Form Integration**: Contact form with Formspree backend
- **Scroll-to-Top**: Animated rocket button for easy navigation

### Advanced Features
- **Search & Filter**: Real-time filtering on Portfolio, Certifications, Research pages
- **Category Filters**: Multi-category support with active state indicators
- **Timeline Layout**: Professional experience with company logos and badges
- **Certification Gallery**: Grid layout with exam/training/course categorization
- **Publication Cards**: Research papers with DOI links and external sources
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

3. **Start development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser

4. **Run tests**:
   ```bash
   npm test
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

6. **Preview production build**:
   ```bash
   npm run preview
   ```
   Opens at [http://localhost:4173](http://localhost:4173)

## 🏗️ Project Structure

```
srs-folio-react/
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
│   │   ├── Navbar.jsx       # Navigation with hybrid routing
│   │   ├── Hero.jsx         # Hero section with typing animation
│   │   ├── About.jsx        # About section
│   │   ├── Skills.jsx       # Skills section
│   │   ├── Education.jsx    # Education timeline
│   │   ├── Portfolio.jsx    # Portfolio with featured mode
│   │   ├── Experience.jsx   # Work experience with featured mode
│   │   ├── Certifications.jsx # Certifications with featured mode
│   │   ├── Research.jsx     # Research with featured mode
│   │   ├── Contact.jsx      # Contact form
│   │   ├── Footer.jsx       # Footer with scroll-to-top
│   │   └── SEO.jsx          # Dynamic SEO meta tags
│   ├── pages/               # Route-based pages
│   │   ├── HomePage.jsx     # Landing page (/)
│   │   ├── PortfolioPage.jsx # Full portfolio (/portfolio)
│   │   ├── ExperiencePage.jsx # Full experience (/experience)
│   │   ├── CertificationsPage.jsx # Full certifications (/certifications)
│   │   └── ResearchPage.jsx # Full research (/research)
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
│   ├── PRE-DEPLOYMENT-CHECKLIST.md # Pre-deployment checklist
│   ├── DEPLOYMENT.md        # Deployment guide
│   ├── QUICKSTART.md        # Quick start guide
│   ├── IMPLEMENTATION_SUMMARY.md # Technical summary
│   ├── CHANGELOG.md         # Version history
│   ├── VERSION.md           # Version information
│   └── QUICK_VERSION_GUIDE.md # Version reference
├── playwright.config.js     # Playwright configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
├── package.json             # Dependencies (v2.1.1)
└── README.md                # This file
```

## 🎨 Component Architecture

### Featured Mode Pattern
Components support a `featured` prop to display limited items on the homepage:

```jsx
// HomePage - Shows featured items
<Portfolio featured={true} />  // Shows 6 of 12 projects
<Experience featured={true} /> // Shows 3 of 3 positions
<Certifications featured={true} /> // Shows 6 certifications
<Research featured={true} />   // Shows 2 of 2 publications

// Dedicated Pages - Shows all items
<Portfolio />  // Shows all 12 projects with filtering
<Experience /> // Shows complete timeline
```

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

#### Navbar
- Responsive with mobile hamburger menu
- Sticky header on scroll with backdrop blur
- Active link highlighting (hash + route based)
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
- Category badges (Web Dev, AI/ML, Data Analytics, etc.)
- Featured mode: Shows 6 of 12 projects
- View All button → navigates to `/portfolio`
- Smooth animations on scroll

#### PortfolioPage (Dedicated)
- Full 12 projects with images and descriptions
- 7 category filters: All, Web Development, AI & ML, Data Analytics, Desktop App, Hardware, Game Dev
- Real-time search by title/description
- Responsive grid layout (1-2-3 columns)

#### Experience (Featured Mode)
- Timeline layout with company logos
- "Present" badge with pulse animation for current role
- Responsibilities list and certificate links
- Featured mode: Shows all 3 positions
- View All button → `/experience`

#### ExperiencePage (Dedicated)
- Complete work history timeline
- Company details with locations
- Expandable responsibility sections
- Certificate download links
- Professional layout with gradients

#### Certifications (Featured Mode)
- Grid gallery layout
- Three categories: Exam, Training, Coursera
- Featured mode: Shows 1 exam + 2 training + 3 coursera = 6 total
- Certification images with hover effects
- View All button → `/certifications`

#### CertificationsPage (Dedicated)
- All credentials with category filtering
- 4 filters: All, Government Certification, Professional Training, Online Course
- Search by certification name
- Card layout with institution logos
- Details: Issue date, skills learned

#### Research (Featured Mode)
- Publication cards with journal info
- Featured mode: Shows 2 publications
- External links: DOI, ResearchGate, Google Scholar, arXiv, GitHub
- View All button → `/research`

#### ResearchPage (Dedicated)
- Full publication details
- Type filters: All, Research Paper, Dataset
- Search by title/description
- Citation information
- Multiple external source links

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

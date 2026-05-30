# SRS Folio - React Portfolio Website

A modern, scalable portfolio website built with React 19, featuring a **Featured + Archive Pattern** architecture for optimal SEO and user experience. Live at [sr-sujon.com](https://sr-sujon.com)

> **📂 Project Location**: The React application is in the [`srs-folio-react/`](./srs-folio-react) directory

## 🌐 Live Site

**Visit**: [https://sr-sujon.com](https://sr-sujon.com)

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
   cd srs-folio

### Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SR-Sujon/srs-folio.git
   cd srs-folio
   ```

2. **Navigate to the React project**:
   ```bash
   cd srs-folio-react
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser

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

## 📝 Available Scripts

Navigate to `srs-folio-react/` and run:

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

## 🧪 Testing

**32 comprehensive tests** using **Playwright** with **100% pass rate**:

### Test Suites
- ✅ **Homepage Tests (4)**: Load, sections, featured items, View All buttons
- ✅ **Routing Tests (8)**: Navigation, back button, logo, browser history
- ✅ **Dedicated Pages Tests (15)**: Functionality, filtering, search across all pages
- ✅ **SEO Tests (5)**: Unique meta tags and Open Graph images per page

```bash
cd srs-folio-react
npm test              # Run all tests
npm run test:ui       # Open Playwright UI
npm run test:headed   # Run with browser visible
npm run test:report   # View HTML report
```

## 🎯 Features Checklist

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

## 📚 Documentation

Additional documentation is available in [`srs-folio-react/docs/`](./srs-folio-react/docs/):

- **[PRE-DEPLOYMENT-CHECKLIST.md](./srs-folio-react/docs/PRE-DEPLOYMENT-CHECKLIST.md)** - Pre-deployment verification checklist
- **[DEPLOYMENT.md](./srs-folio-react/docs/DEPLOYMENT.md)** - Deployment guide and instructions
- **[QUICKSTART.md](./srs-folio-react/docs/QUICKSTART.md)** - Quick start guide for developers
- **[IMPLEMENTATION_SUMMARY.md](./srs-folio-react/docs/IMPLEMENTATION_SUMMARY.md)** - Implementation details and technical summary
- **[CHANGELOG.md](./srs-folio-react/docs/CHANGELOG.md)** - Version history and change log
- **[VERSION.md](./srs-folio-react/docs/VERSION.md)** - Version information
- **[QUICK_VERSION_GUIDE.md](./srs-folio-react/docs/QUICK_VERSION_GUIDE.md)** - Quick version reference guide

For complete technical documentation, see [`srs-folio-react/README.md`](./srs-folio-react/README.md)

## 🚀 Deployment

This project is deployed on **Vercel** with automatic deployments.

### Quick Deploy to Vercel:
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project" → Import your repository
4. Set **Root Directory** to `srs-folio-react`
5. Click "Deploy"

📖 For detailed deployment instructions, see [DEPLOYMENT.md](./srs-folio-react/docs/DEPLOYMENT.md)

## 🔗 Links

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

This project is licensed under the terms specified in [LICENSE-free.txt](./LICENSE-free.txt).

---

**Built with ❤️ using React, Vite, and Tailwind CSS**






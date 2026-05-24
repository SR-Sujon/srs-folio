# SRS Folio - React + Tailwind CSS

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. This is a complete recreation of the original HTML portfolio website with enhanced animations and modern web technologies.

## ✨ Features

- **Modern Stack**: Built with React 18, Vite 8, and Tailwind CSS
- **Smooth Animations**: Framer Motion for page transitions and scroll animations
- **Typing Effect**: Dynamic typing animation for the hero section
- **Responsive Design**: Mobile-first approach with responsive navigation
- **Icon Library**: React Icons with Font Awesome, Simple Icons support
- **Fast Performance**: Optimized with Vite for lightning-fast HMR
- **Clean Code**: Component-based architecture with reusable components

## 🚀 Tech Stack

- **React 18** - UI library
- **Vite 8** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Type Animation** - Typing effect

## 📦 Installation

1. Navigate to the project directory:
   ```bash
   cd srs-folio-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit: `http://localhost:5173/`

## 🏗️ Project Structure

```
srs-folio-react/
├── public/
│   ├── images/
│   │   └── illustrations/    # SVG illustrations
│   └── files/
│       └── CV/               # CV/Resume files
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation component
│   │   ├── Hero.jsx          # Hero/Home section
│   │   └── SocialLinks.jsx   # Social media links
│   ├── App.jsx               # Main app component
│   ├── App.css               # App-specific styles
│   ├── index.css             # Global styles with Tailwind
│   └── main.jsx              # Entry point
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
├── vite.config.js            # Vite configuration
└── package.json              # Dependencies
```

## 🎨 Components

### Navbar
- Responsive navigation with mobile menu
- Sticky header on scroll
- Smooth scroll to sections
- Animated underline effect on hover

### Hero Section
- Two-column layout (illustration + content)
- Typing animation for title
- Social media links with hover effects
- Call-to-action buttons (Download CV, Get In Touch)
- Fade-in and slide-up animations

### Social Links
- 9 social platforms (LinkedIn, GitHub, LeetCode, HackerRank, Kaggle, Research Gate, Google Scholar, Medium, YouTube)
- Hover effects with transform and color transitions
- Staggered animation on load

## 🎯 Completed Features (Home Section)

✅ Set up React + Vite project with Tailwind CSS
✅ Created responsive Navbar component
✅ Created Hero/Home section component
✅ Added social media links component
✅ Implemented typing animation effect
✅ Added smooth scrolling and animations

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
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

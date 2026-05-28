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

For detailed instructions, see [VERSION.md](./VERSION.md)

## 🚀 Deployment

This project is ready to deploy on Vercel! 

### Quick Deploy to Vercel:

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project" → Import your repository
4. Set **Root Directory** to `srs-folio-react`
5. Click "Deploy"

**That's it!** Your site will be live in 1-2 minutes.

📖 **For detailed deployment instructions**, see [DEPLOYMENT.md](./DEPLOYMENT.md)

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

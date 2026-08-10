import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ onOpenCmdPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Only set up intersection observer on homepage
    if (!isHomePage) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [isHomePage]);

  const navLinks = [
    { name: t('navbar.home'), href: '#home', isSection: true },
    { name: t('navbar.about'), href: '#about', isSection: true },
    { name: t('navbar.skills'), href: '#skills', isSection: true },
    { name: t('navbar.education'), href: '#education', isSection: true },
    { name: t('navbar.portfolio'), href: '/portfolio', isSection: false },
    { name: t('navbar.experience'), href: '/experience', isSection: false },
    { name: t('navbar.certifications'), href: '/certifications', isSection: false },
    { name: t('navbar.research'), href: '/research', isSection: false },
    { name: t('navbar.contact'), href: '#contact', isSection: true },
  ];

  const isLinkActive = (link) => {
    if (link.isSection) {
      return isHomePage && `#${activeSection}` === link.href;
    } else {
      return location.pathname === link.href;
    }
  };

  const handleSectionClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (isHomePage) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/' + href);
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <motion.header
      className={`bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300 ${
        isScrolled ? 'fixed top-0 left-0 right-0 z-40 shadow-md dark:shadow-gray-950/50' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4" role="navigation">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="text-gray-800 dark:text-gray-100 text-xl font-bold hover:text-gray-600 dark:hover:text-gray-300 transition-colors flex-shrink-0 lg:border-r-2 lg:border-gray-300 dark:lg:border-gray-700 lg:pr-6 lg:mr-2">
            SR Sujon
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex lg:space-x-6 items-center lg:flex-1 lg:justify-center lg:mx-4">
            {navLinks.map((link, index) => {
              const isActive = isLinkActive(link);
              const linkClasses = `transition-colors text-sm font-medium ${
                isActive
                  ? 'text-blue-600 dark:text-blue-400 font-extrabold underline underline-offset-4 decoration-2'
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`;
              
              return (
                <li key={index} className="hover-underline-animation">
                  {link.isSection ? (
                    <a
                      href={link.href}
                      className={linkClasses}
                      onClick={(e) => handleSectionClick(e, link.href)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className={linkClasses}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Right Action Tools - Desktop & Mobile */}
          <div className="flex items-center space-x-2.5">
            {/* Command Palette Button */}
            <button
              onClick={onOpenCmdPalette}
              className="flex items-center space-x-1.5 px-3 py-1.5 text-xs rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-sm cursor-pointer"
              title="Command Palette (Ctrl+K)"
              aria-label="Open Command Palette"
            >
              <FiSearch className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
              <span className="hidden sm:inline font-mono text-[11px] font-semibold text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 px-1 py-0.5 rounded">
                ⌘K
              </span>
            </button>

            {/* Language Switcher */}
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`h-0.5 w-full bg-gray-800 dark:bg-gray-200 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`h-0.5 w-full bg-gray-800 dark:bg-gray-200 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 w-full bg-gray-800 dark:bg-gray-200 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-[500px] pb-4 border-t border-gray-200 dark:border-gray-800 pt-3' : 'max-h-0'
          }`}
        >
          {/* Language Switcher - Mobile */}
          <div className="flex justify-center mb-3 sm:hidden">
            <LanguageSwitcher />
          </div>

          <ul className="flex flex-col space-y-3 items-center">
            {navLinks.map((link, index) => {
              const isActive = isLinkActive(link);
              const linkClasses = `block transition-colors text-sm font-medium py-1.5 ${
                isActive
                  ? 'text-blue-600 dark:text-blue-400 font-extrabold underline underline-offset-4 decoration-2'
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`;
              
              return (
                <li key={index}>
                  {link.isSection ? (
                    <a
                      href={link.href}
                      className={linkClasses}
                      onClick={(e) => handleSectionClick(e, link.href)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className={linkClasses}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;


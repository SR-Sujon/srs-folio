import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

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
    { name: 'Home', href: '#home', isSection: true },
    { name: 'About', href: '#about', isSection: true },
    { name: 'Skills', href: '#skills', isSection: true },
    { name: 'Education', href: '#education', isSection: true },
    { name: 'Portfolio', href: '/portfolio', isSection: false },
    { name: 'Experience', href: '/experience', isSection: false },
    { name: 'Certifications', href: '/certifications', isSection: false },
    { name: 'Research', href: '/research', isSection: false },
    { name: 'Contact', href: '#contact', isSection: true },
  ];

  const isLinkActive = (link) => {
    if (link.isSection) {
      // For sections, check if we're on homepage and if the section is active
      return isHomePage && `#${activeSection}` === link.href;
    } else {
      // For pages, check if the current route matches
      return location.pathname === link.href;
    }
  };

  const handleSectionClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (isHomePage) {
      // If on homepage, just scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to homepage then scroll to section
      navigate('/' + href);
      // Small delay to ensure DOM is ready
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
      className={`bg-gray-50 transition-all duration-300 ${
        isScrolled ? 'fixed top-0 left-0 right-0 z-50 shadow-md' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4" role="navigation">
        <div className="flex items-center justify-center lg:justify-between py-4">
          {/* Logo */}
          <Link to="/" className="text-gray-800 text-xl font-bold hover:text-gray-600 transition-colors lg:flex-shrink-0 lg:border-r-2 lg:border-gray-300 lg:pr-8 lg:mr-4">
            SR Sujon
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-200 transition-colors absolute right-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-gray-800 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-full bg-gray-800 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-full bg-gray-800 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex lg:space-x-8 items-center lg:flex-1 lg:justify-center lg:ml-12">
            {navLinks.map((link, index) => {
              const isActive = isLinkActive(link);
              const linkClasses = `transition-colors text-sm font-medium ${
                isActive
                  ? 'text-blue-600 font-extrabold underline underline-offset-4 decoration-2'
                  : 'text-gray-700 hover:text-gray-900'
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
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <ul className="flex flex-col space-y-3 items-center">
            {navLinks.map((link, index) => {
              const isActive = isLinkActive(link);
              const linkClasses = `block transition-colors text-sm font-medium py-2 ${
                isActive
                  ? 'text-blue-600 font-extrabold underline underline-offset-4 decoration-2'
                  : 'text-gray-700 hover:text-gray-900'
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

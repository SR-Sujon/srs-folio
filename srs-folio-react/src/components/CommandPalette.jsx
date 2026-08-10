import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiSearch, FiHome, FiUser, FiCode, FiBookOpen, 
  FiBriefcase, FiAward, FiFileText, FiMail, FiMoon, 
  FiSun, FiGlobe, FiDownload, FiCopy, FiCheck, FiX, FiCommand
} from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const CommandPalette = ({ isOpen, setIsOpen }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { t, language, setLanguage } = useLanguage();
  const { isDarkMode, toggleTheme } = useTheme();

  const isHomePage = location.pathname === '/';

  // Toggle Command Palette with Ctrl+K / Cmd+K / Slash key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, setIsOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setQuery('');
        setSelectedIndex(0);
        inputRef.current?.focus();
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleNavigateSection = (href) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
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
        }, 150);
      }
    } else {
      navigate(href);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sujon.sr88@gmail.com');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setIsOpen(false);
    }, 1200);
  };

  const handleToggleLanguage = () => {
    setLanguage(language === 'en' ? 'ja' : 'en');
    setIsOpen(false);
  };

  const handleToggleTheme = () => {
    toggleTheme();
    setIsOpen(false);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'SR_Sujon_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  // Commands definition
  const navigationItems = [
    { id: 'nav-home', name: t('navbar.home') || 'Home', icon: FiHome, action: () => handleNavigateSection('#home'), category: 'navigation' },
    { id: 'nav-about', name: t('navbar.about') || 'About', icon: FiUser, action: () => handleNavigateSection('#about'), category: 'navigation' },
    { id: 'nav-skills', name: t('navbar.skills') || 'Skills', icon: FiCode, action: () => handleNavigateSection('#skills'), category: 'navigation' },
    { id: 'nav-education', name: t('navbar.education') || 'Education', icon: FiBookOpen, action: () => handleNavigateSection('#education'), category: 'navigation' },
    { id: 'nav-portfolio', name: t('navbar.portfolio') || 'Portfolio', icon: FiBriefcase, action: () => handleNavigateSection('/portfolio'), category: 'navigation' },
    { id: 'nav-experience', name: t('navbar.experience') || 'Experience', icon: FiBriefcase, action: () => handleNavigateSection('/experience'), category: 'navigation' },
    { id: 'nav-certifications', name: t('navbar.certifications') || 'Certifications', icon: FiAward, action: () => handleNavigateSection('/certifications'), category: 'navigation' },
    { id: 'nav-research', name: t('navbar.research') || 'Research & Publications', icon: FiFileText, action: () => handleNavigateSection('/research'), category: 'navigation' },
    { id: 'nav-contact', name: t('navbar.contact') || 'Contact', icon: FiMail, action: () => handleNavigateSection('#contact'), category: 'navigation' },
  ];

  const actionItems = [
    { 
      id: 'action-theme', 
      name: isDarkMode ? (t('theme.switchToLight') || 'Switch to Light Mode') : (t('theme.switchToDark') || 'Switch to Dark Mode'), 
      icon: isDarkMode ? FiSun : FiMoon, 
      action: handleToggleTheme, 
      category: 'actions' 
    },
    { 
      id: 'action-lang', 
      name: `${t('cmdPalette.switchLang') || 'Switch Language'} (${language === 'en' ? '日本語へ' : 'Switch to English'})`, 
      icon: FiGlobe, 
      action: handleToggleLanguage, 
      category: 'actions' 
    },
    { 
      id: 'action-email', 
      name: copied ? (t('cmdPalette.emailCopied') || 'Copied!') : (t('cmdPalette.copyEmail') || 'Copy Contact Email'), 
      icon: copied ? FiCheck : FiCopy, 
      action: handleCopyEmail, 
      category: 'actions' 
    },
    { 
      id: 'action-resume', 
      name: t('cmdPalette.downloadResume') || 'Download Resume', 
      icon: FiDownload, 
      action: handleDownloadResume, 
      category: 'actions' 
    },
  ];

  const allItems = [...navigationItems, ...actionItems];

  const filteredItems = allItems.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase().trim())
  );

  // Handle Keyboard Arrows & Enter
  const handleKeyDownList = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Palette Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800 z-10"
          >
            {/* Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-gray-200 dark:border-gray-800">
              <FiSearch className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDownList}
                placeholder={t('cmdPalette.placeholder') || 'Type a command or search...'}
                className="w-full bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none text-base font-sans"
              />
              {query ? (
                <button 
                  onClick={() => setQuery('')}
                  className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-full"
                >
                  <FiX className="w-4 h-4" />
                </button>
              ) : (
                <span className="text-xs text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-700 px-1.5 py-0.5 rounded font-mono">
                  ESC
                </span>
              )}
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filteredItems.length === 0 ? (
                <div className="py-8 text-center text-gray-500 dark:text-gray-400 text-sm">
                  {t('cmdPalette.noResults') || 'No results found for'} "{query}"
                </div>
              ) : (
                filteredItems.map((item, index) => {
                  const Icon = item.icon;
                  const isSelected = index === selectedIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-colors text-sm font-medium ${
                        isSelected
                          ? 'bg-blue-500 text-white dark:bg-blue-600'
                          : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-blue-500 dark:text-blue-400'}`} />
                        <span>{item.name}</span>
                      </div>
                      <span
                        className={`text-xs capitalize font-mono ${
                          isSelected ? 'text-blue-100' : 'text-gray-400 dark:text-gray-500'
                        }`}
                      >
                        {item.category === 'navigation' ? (t('cmdPalette.navigation') || 'Nav') : (t('cmdPalette.actions') || 'Action')}
                      </span>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <FiCommand className="w-3.5 h-3.5" />
                <span>{t('cmdPalette.shortcut') || 'Ctrl+K or ⌘K'}</span>
              </div>
              <div className="flex items-center space-x-3 font-mono">
                <span>↑↓ {language === 'ja' ? '移動' : 'Navigate'}</span>
                <span>↵ {language === 'ja' ? '選択' : 'Select'}</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;

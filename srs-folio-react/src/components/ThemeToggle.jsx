import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const ThemeToggle = ({ className = '' }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className={`p-2.5 rounded-full transition-colors duration-200 border cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        isDarkMode
          ? 'bg-gray-800 text-amber-300 border-gray-700 hover:bg-gray-700 hover:text-amber-200'
          : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100 hover:text-gray-900 shadow-sm'
      } ${className}`}
      aria-label={isDarkMode ? t('theme.switchToLight') || 'Switch to Light Mode' : t('theme.switchToDark') || 'Switch to Dark Mode'}
      title={isDarkMode ? t('theme.switchToLight') || 'Switch to Light Mode' : t('theme.switchToDark') || 'Switch to Dark Mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDarkMode ? 180 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="flex items-center justify-center"
      >
        {isDarkMode ? (
          <FiSun className="w-4 h-4 text-amber-300" />
        ) : (
          <FiMoon className="w-4 h-4 text-slate-700" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;

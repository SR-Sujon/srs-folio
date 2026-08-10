import { motion } from 'framer-motion';
import { 
  FaLinkedin, 
  FaGithub, 
  FaHackerrank,
  FaMedium,
  FaYoutube,
  FaHeart,
  FaRocket,
  FaGlobe
} from 'react-icons/fa';
import packageJson from '../../package.json';
import { 
  SiLeetcode,
  SiKaggle,
  SiResearchgate,
  SiGooglescholar
} from 'react-icons/si';
import { useVisitorStats } from '../hooks/useVisitorStats';
import { getCountryCode, formatNumber } from '../utils/countryData';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const { totalVisitors, countries, loading, error } = useVisitorStats();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/sr-sujon',
      color: '#0A66C2'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/SR-Sujon',
      color: '#181717'
    },
    {
      name: 'LeetCode',
      icon: SiLeetcode,
      url: 'https://leetcode.com/srsuj0n/',
      color: '#FFA116'
    },
    {
      name: 'HackerRank',
      icon: FaHackerrank,
      url: 'https://www.hackerrank.com/profile/sr_sujon_cyb',
      color: '#00EA64'
    },
    {
      name: 'Kaggle',
      icon: SiKaggle,
      url: 'https://www.kaggle.com/srsujon',
      color: '#20BEFF'
    },
    {
      name: 'ResearchGate',
      icon: SiResearchgate,
      url: 'https://www.researchgate.net/profile/Md-Saidur-Rahman-Sujon',
      color: '#00796B'
    },
    {
      name: 'Google Scholar',
      icon: SiGooglescholar,
      url: 'https://scholar.google.com/citations?user=6_LoU_kAAAAJ&hl=en',
      color: '#4285F4'
    },
    {
      name: 'Medium',
      icon: FaMedium,
      url: 'https://medium.com/@sr.sujon.cyb',
      color: '#000000'
    },
    {
      name: 'YouTube',
      icon: FaYoutube,
      url: 'https://www.youtube.com/@craftedbysrs',
      color: '#FF0000'
    }
  ];

  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-950 dark:to-black text-white pt-12 pb-8 relative overflow-hidden transition-colors duration-300 border-t border-gray-800/40">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>

      <div className="container mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Name & Title */}
          <motion.h3
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-4xl font-bold mb-3"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Saidur Rahman Sujon
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg font-semibold text-gray-300 mb-8"
          >
            {t('footer.subtitle')}
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10"
          >
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      default: { duration: 0.3, delay: 0.4 + index * 0.05 },
                      scale: { duration: 0.15 },
                      y: { duration: 0.15 }
                    }}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl shadow-lg hover:shadow-2xl transition-shadow duration-150 group relative"
                    style={{ backgroundColor: social.color }}
                    title={social.name}
                  >
                    <Icon className="relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-white rounded-xl opacity-0 group-hover:opacity-20"
                      whileHover={{ opacity: 0.2 }}
                      transition={{ duration: 0.15 }}
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-8"
          />

          {/* Visitor Stats Section */}
          {!error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mb-8 max-w-3xl mx-auto"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <FaGlobe className="text-blue-400 text-xl" />
                <h4 className="text-lg font-semibold text-gray-300">
                  {t('footer.visitors')}
                </h4>
              </div>

              {loading ? (
                <div className="flex justify-center items-center py-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <>
                  {totalVisitors > 0 && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center text-sm text-gray-400 mb-4"
                    >
                      {t('footer.totalVisitors')} <span className="font-bold text-blue-400">{formatNumber(totalVisitors)}</span>
                    </motion.p>
                  )}

                  {countries.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                      {countries.map((item, index) => {
                        const countryCode = getCountryCode(item.country);
                        return (
                          <motion.div
                            key={item.country}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.3, 
                              delay: 0.6 + index * 0.05 
                            }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-2xl" role="img" aria-label={item.country}>
                                {countryCode !== 'XX' ? (
                                  <img 
                                    src={`https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`}
                                    alt={item.country}
                                    className="w-6 h-4 object-cover rounded"
                                  />
                                ) : (
                                  <FaGlobe className="w-5 h-5 text-gray-400" />
                                )}
                              </span>
                              <span className="text-xs font-semibold text-blue-400">
                                {item.count}
                              </span>
                            </div>
                            <p className="text-xs text-gray-300 truncate" title={item.country}>
                              {item.country}
                            </p>
                          </motion.div>
                        );
                      })}
                    </div>
                  )}
                </>
              )}
            </motion.div>
          )}

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-8"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-400 text-sm"
          >
            <p className="flex items-center justify-center gap-2 flex-wrap">
              {t('footer.copyright', { year: currentYear })}
              <span className="inline-flex items-center gap-1">
                {t('footer.madeWith')} <FaHeart className="text-red-500 text-xs animate-pulse" /> {t('footer.by')}
              </span>
            </p>
            <p className="text-gray-500 text-xs mt-2">
              v{packageJson.version}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
        whileHover={{ scale: 1.15, y: -3 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer z-20"
        title={t('footer.backToTop')}
      >
        <FaRocket className="transform group-hover:-translate-y-1 transition-transform duration-300" />
        <motion.div
          className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20"
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { 
  FaPaperPlane, 
  FaFileAlt, 
  FaGraduationCap, 
  FaChevronDown, 
  FaDownload, 
  FaExternalLinkAlt 
} from 'react-icons/fa';
import SocialLinks from './SocialLinks';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDropdownOpen]);

  return (
    <section className="section bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative" id="home">
      <div className="cover">
        <div className="container mx-auto px-3 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Illustration */}
            <motion.div
              className="p-2 order-2 lg:order-1 transform-gpu"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                className="w-full h-auto will-change-transform"
                src="/images/illustrations/computer_with_person.svg"
                alt="An animated image of Working on desktop computer"
                loading="eager"
              />
            </motion.div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2">
              <div className="mt-5 text-left">
                {/* Book Announcement Pill */}
                <motion.a
                  href="#research"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-3.5 rounded-full text-xs font-medium bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-rose-500/10 dark:from-amber-400/15 dark:via-orange-400/15 dark:to-rose-400/15 border border-amber-500/30 dark:border-amber-400/30 text-amber-900 dark:text-amber-200 hover:scale-[1.02] hover:border-amber-500/60 dark:hover:border-amber-400/60 transition-all shadow-sm group cursor-pointer"
                >
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                  </span>
                  <span className="font-bold uppercase tracking-wider text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-xs">
                    {t('hero.bookPillBadge')}
                  </span>
                  <span className="font-semibold text-gray-800 dark:text-gray-100">
                    {t('hero.bookPillText')}
                  </span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold group-hover:translate-x-0.5 transition-transform">→</span>
                </motion.a>

                {/* Welcome Text */}
                <motion.p
                  className="text-sm md:text-base uppercase mb-1 font-extrabold tracking-wide text-gray-700 dark:text-gray-300 transform-gpu"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {t('hero.welcome')}
                </motion.p>

                {/* Typing Animation Title */}
                <motion.h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white transform-gpu min-h-[3.5rem] lg:min-h-[4rem]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent inline-block">
                    <TypeAnimation
                      key={language}
                      sequence={[
                        t('hero.typing.name'),
                        2000,
                        t('hero.typing.role1'),
                        2000,
                        t('hero.typing.role2'),
                        2000,
                        t('hero.typing.role3'),
                        2000,
                        t('hero.typing.role4'),
                        2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      deletionSpeed={70}
                      repeat={Infinity}
                      style={{ display: 'inline-block' }}
                    />
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  className="text-base md:text-lg font-normal mt-3 mb-3 text-gray-700 dark:text-gray-300 transform-gpu"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <strong>{t('hero.subtitle')}</strong>
                </motion.p>

                {/* Social Links */}
                <motion.div
                  className="my-6 transform-gpu"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <SocialLinks />
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  className="mt-6 flex flex-wrap gap-4 items-center transform-gpu relative z-30"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Resume / CV Dropdown */}
                  <div className="relative inline-block" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="true"
                      aria-label="Download Resume or CV options"
                      className="btn-primary !w-auto min-w-[10.5rem] px-5 flex items-center justify-center gap-2 group select-none shadow-md"
                    >
                      <FaFileAlt className="w-4 h-4 text-white/95 group-hover:scale-110 transition-transform" />
                      <span className="font-bold tracking-wide">{t('hero.resumeCv')}</span>
                      <FaChevronDown
                        className={`w-3.5 h-3.5 text-white/90 transition-transform duration-200 ${
                          isDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute left-0 mt-2.5 z-50 w-80 sm:w-[22rem] p-3 rounded-2xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border border-gray-200/90 dark:border-gray-700/80 shadow-2xl shadow-blue-500/10 dark:shadow-black/50 text-left"
                        >
                          {/* Dropdown Header */}
                          <div className="flex items-center justify-between px-2 pt-1 pb-2 border-b border-gray-100 dark:border-gray-700/60 mb-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                              {t('hero.dropdownHeader')}
                            </span>
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/40 px-2 py-0.5 rounded-full">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                              {language === 'ja' ? '最新更新' : 'Updated 2026'}
                            </span>
                          </div>

                          {/* Option 1: Resume (1-Page) - FIRST */}
                          <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-50/70 via-indigo-50/40 to-transparent dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-transparent border border-blue-200/70 dark:border-blue-800/50 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-200 group">
                            <div className="flex items-start gap-3">
                              <div className="p-2.5 rounded-xl bg-blue-600 text-white shadow-sm shadow-blue-500/30 shrink-0 group-hover:scale-105 transition-transform">
                                <FaFileAlt className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <h4 className="font-bold text-sm text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {t('hero.resumeTitle')}
                                  </h4>
                                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300 border border-blue-200/80 dark:border-blue-700/60 shadow-xs">
                                    {t('hero.resumeBadge')}
                                  </span>
                                </div>
                                <p className="text-xs text-gray-600 dark:text-gray-300 mt-0.5 leading-relaxed">
                                  {t('hero.resumeDesc')}
                                </p>
                              </div>
                            </div>

                            {/* Resume Actions */}
                            <div className="mt-2.5 pt-2 border-t border-blue-100/80 dark:border-blue-900/40 flex items-center gap-2 justify-end">
                              <a
                                href="/files/CV/SR_Sujon_Resume.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsDropdownOpen(false)}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg text-blue-700 dark:text-blue-300 bg-blue-100/70 dark:bg-blue-900/40 hover:bg-blue-200 dark:hover:bg-blue-800/60 transition-colors cursor-pointer"
                                title="View interactive HTML version in browser"
                              >
                                <FaExternalLinkAlt className="w-2.5 h-2.5" />
                                {t('hero.resumeWeb')}
                              </a>
                              <a
                                href="/files/CV/SR_Sujon_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download="SR_Sujon_Resume.pdf"
                                onClick={() => setIsDropdownOpen(false)}
                                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-xs shadow-blue-500/20 transition-all cursor-pointer hover:scale-[1.02]"
                                title="Download 1-page PDF Resume"
                              >
                                <FaDownload className="w-2.5 h-2.5" />
                                {t('hero.resumePdf')}
                              </a>
                            </div>
                          </div>

                          {/* Option 2: Full CV - SECOND */}
                          <div className="mt-2 p-2.5 rounded-xl bg-gradient-to-br from-purple-50/70 via-fuchsia-50/40 to-transparent dark:from-purple-950/30 dark:via-fuchsia-950/20 dark:to-transparent border border-purple-200/70 dark:border-purple-800/50 hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-200 group">
                            <div className="flex items-start gap-3">
                              <div className="p-2.5 rounded-xl bg-purple-600 text-white shadow-sm shadow-purple-500/30 shrink-0 group-hover:scale-105 transition-transform">
                                <FaGraduationCap className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <h4 className="font-bold text-sm text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                    {t('hero.cvTitle')}
                                  </h4>
                                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/60 dark:text-purple-300 border border-purple-200/80 dark:border-purple-700/60 shadow-xs">
                                    {t('hero.cvBadge')}
                                  </span>
                                </div>
                                <p className="text-xs text-gray-600 dark:text-gray-300 mt-0.5 leading-relaxed">
                                  {t('hero.cvDesc')}
                                </p>
                              </div>
                            </div>

                            {/* CV Action */}
                            <div className="mt-2.5 pt-2 border-t border-purple-100/80 dark:border-purple-900/40 flex items-center justify-end">
                              <a
                                href="/files/CV/SRS_CVS_Latest.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download="SR_Sujon_CV.pdf"
                                onClick={() => setIsDropdownOpen(false)}
                                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-lg text-white bg-purple-600 hover:bg-purple-700 shadow-xs shadow-purple-500/20 transition-all cursor-pointer hover:scale-[1.02]"
                                title="Download full academic & industry CV"
                              >
                                <FaDownload className="w-2.5 h-2.5" />
                                {t('hero.cvPdf')}
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Get In Touch Button */}
                  <a
                    href="#contact"
                    className="btn-primary !w-auto min-w-[10.5rem] px-5 flex items-center justify-center gap-2 select-none shadow-md"
                  >
                    <span className="font-bold tracking-wide">{t('hero.getInTouch')}</span>
                    <FaPaperPlane className="w-4 h-4" />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-home dark:from-gray-900"></div>
    </section>
  );
};

export default Hero;

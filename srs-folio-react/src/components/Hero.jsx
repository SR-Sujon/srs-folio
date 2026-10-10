import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaPaperclip, FaPaperPlane } from 'react-icons/fa';
import SocialLinks from './SocialLinks';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();

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
                  className="mt-6 flex flex-wrap gap-4 transform-gpu"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href="/files/CV/SRS_CVS_Latest.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2"
                  >
                    {t('hero.downloadCv')}
                    <FaPaperclip className="w-4 h-4" />
                  </a>
                  <a
                    href="#contact"
                    className="btn-primary flex items-center gap-2"
                  >
                    {t('hero.getInTouch')}
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

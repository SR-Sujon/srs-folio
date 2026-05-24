import { motion } from 'framer-motion';
import {
  FaLinkedin,
  FaGithub,
  FaHackerrank,
  FaYoutube,
  FaMedium,
} from 'react-icons/fa';
import { SiLeetcode, SiKaggle, SiResearchgate, SiGooglescholar } from 'react-icons/si';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/sr-sujon',
      icon: <FaLinkedin className="w-5 h-5" />,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/SR-Sujon',
      icon: <FaGithub className="w-5 h-5" />,
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/srsuj0n/',
      icon: <SiLeetcode className="w-5 h-5" />,
    },
    {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com/profile/sr_sujon_cyb',
      icon: <FaHackerrank className="w-5 h-5" />,
    },
    {
      name: 'Kaggle',
      url: 'https://www.kaggle.com/srsujon',
      icon: <SiKaggle className="w-5 h-5" />,
    },
    {
      name: 'Research Gate',
      url: 'https://www.researchgate.net/profile/Md-Saidur-Rahman-Sujon',
      icon: <SiResearchgate className="w-5 h-5" />,
    },
    {
      name: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=6_LoU_kAAAAJ&hl=en',
      icon: <SiGooglescholar className="w-5 h-5" />,
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@sr.sujon.cyb',
      icon: <FaMedium className="w-5 h-5" />,
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@craftedbysrs',
      icon: <FaYoutube className="w-5 h-5" />,
    },
  ];

  return (
    <motion.nav
      className="flex justify-start"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <ul className="flex flex-wrap gap-3">
        {socialLinks.map((link, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 hover:text-white text-gray-700 transition-all"
              title={link.name}
              aria-label={link.name}
            >
              {link.icon}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default SocialLinks;

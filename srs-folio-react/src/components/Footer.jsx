import { motion } from 'framer-motion';
import { 
  FaLinkedin, 
  FaGithub, 
  FaHackerrank,
  FaMedium,
  FaYoutube,
  FaHeart
} from 'react-icons/fa';
import { 
  SiLeetcode,
  SiKaggle,
  SiResearchgate,
  SiGooglescholar
} from 'react-icons/si';

const Footer = () => {
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

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-12 pb-8 relative overflow-hidden">
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
            Full Stack Developer | AI Engineer | Researcher
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
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl shadow-lg hover:shadow-2xl transition-all duration-300 group relative"
                    style={{ backgroundColor: social.color }}
                    title={social.name}
                  >
                    <Icon className="relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-white rounded-xl opacity-0 group-hover:opacity-20"
                      whileHover={{ opacity: 0.2 }}
                      transition={{ duration: 0.3 }}
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

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-400 text-sm"
          >
            <p className="flex items-center justify-center gap-2">
              Copyright © {currentYear}, SRS. All rights reserved.
              <span className="inline-flex items-center gap-1">
                Made with <FaHeart className="text-red-500 text-xs animate-pulse" /> by SRS
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;

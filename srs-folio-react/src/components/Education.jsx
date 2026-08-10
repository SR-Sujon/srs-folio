import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaCalendarAlt, FaUniversity } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const Education = () => {
  const { t } = useLanguage();

  const educationData = [
    {
      id: 1,
      degree: 'B.Sc. in Computer Science and Engineering (CSE)',
      institution: 'Ahsanullah University of Science and Technology',
      shortName: 'AUST',
      duration: '2019 - 2023',
      grade: 'CGPA: 3.578 / 4.00',
      logo: '/images/education/aust_logo.png',
      color: 'from-blue-500 to-indigo-600',
      achievements: [
        'Completed Bachelor\'s degree in Computer Science and Engineering',
        'Strong foundation in Software Development and Machine Learning',
        'Participated in various technical workshops and projects'
      ]
    },
    {
      id: 2,
      degree: 'Higher Secondary School Certificate (H.S.C.)',
      institution: 'Dhaka Imperial College',
      shortName: 'DIC',
      duration: '2016 - 2018',
      grade: 'GPA: 5.00 / 5.00',
      logo: '/images/education/dic_logo.png',
      color: 'from-purple-500 to-pink-600',
      achievements: [
        'Achieved perfect GPA of 5.00',
        'Science background with focus on Mathematics and Physics',
        'Developed strong analytical and problem-solving skills'
      ]
    }
  ];

  return (
    <section id="education" className="section px-4 lg:px-8 pt-20 pb-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-100 dark:bg-pink-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block p-4 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 mb-4"
          >
            <FaGraduationCap className="text-4xl" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            {t('education.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('education.subtitle')}
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-gray-800/90 rounded-2xl p-8 shadow-xl dark:shadow-gray-950/40 hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700/80 relative overflow-hidden"
              >
                {/* Background Gradient Line */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${edu.color}`}></div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Content Container */}
                  <div className="lg:col-span-12">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
                      {/* Logo and Badge */}
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-24 h-24 rounded-2xl p-3 bg-white border border-gray-200 flex items-center justify-center shadow-md">
                          <img
                            src={edu.logo}
                            alt={edu.institution}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className={`px-4 py-2 rounded-full bg-gradient-to-r ${edu.color} text-white text-sm font-semibold shadow-md`}
                        >
                          {edu.shortName}
                        </motion.div>
                      </div>

                      {/* Right Side - Content */}
                      <div className="flex-1">
                        {/* Degree Title */}
                        <motion.h3
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.2 }}
                          className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3"
                        >
                          {t(`items.education.${edu.id}.degree`)}
                        </motion.h3>

                        {/* Institution Name */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.3 }}
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-2"
                        >
                          <FaUniversity className="text-blue-500 dark:text-blue-400" />
                          <span className="font-medium">{t(`items.education.${edu.id}.institution`)}</span>
                        </motion.div>

                        {/* Duration and Grade */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.4 }}
                          className="flex flex-wrap gap-4 mb-4"
                        >
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 px-4 py-2 rounded-lg border border-transparent dark:border-gray-700/60">
                            <FaCalendarAlt className="text-purple-500 dark:text-purple-400" />
                            <span className="text-sm font-medium">{edu.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 px-4 py-2 rounded-lg border border-transparent dark:border-gray-700/60">
                            <FaAward className="text-yellow-500 dark:text-yellow-400" />
                            <span className="text-sm font-bold">{edu.grade}</span>
                          </div>
                        </motion.div>

                        {/* Achievements */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.5 }}
                          className="mt-4"
                        >
                          <ul className="space-y-2">
                            {(t(`items.education.${edu.id}.achievements`) || edu.achievements).map((achievement, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 + 0.6 + i * 0.1 }}
                                className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                              >
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${edu.color} mt-2 shrink-0`}></div>
                                <span className="text-base leading-relaxed">{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Education;

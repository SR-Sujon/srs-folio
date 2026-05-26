import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaCalendarAlt, FaUniversity } from 'react-icons/fa';

const Education = () => {
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
    <section id="education" className="section px-4 lg:px-8 pt-20 pb-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

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
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <FaGraduationCap className="text-6xl text-blue-600 mx-auto" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Education</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic journey and qualifications
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
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Connector */}
              {index < educationData.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 top-full h-12 w-1 bg-gradient-to-b from-blue-400 to-purple-400 transform -translate-x-1/2 z-0"></div>
              )}

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100`}>
                  {/* Decorative Top Bar */}
                  <div className={`h-2 bg-gradient-to-r ${edu.color}`}></div>

                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row gap-6 items-start">
                      {/* Left Side - Logo and Icon */}
                      <div className="flex flex-col items-center gap-4 lg:w-48 shrink-0">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${edu.color} p-0.5 shadow-lg`}
                        >
                          <div className="w-full h-full bg-white rounded-2xl p-3 flex items-center justify-center">
                            <img 
                              src={edu.logo} 
                              alt={`${edu.shortName} Logo`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.3 }}
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
                          className="text-2xl font-bold text-gray-800 mb-3"
                        >
                          {edu.degree}
                        </motion.h3>

                        {/* Institution Name */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.3 }}
                          className="flex items-center gap-2 text-gray-600 mb-2"
                        >
                          <FaUniversity className="text-blue-500" />
                          <span className="font-medium">{edu.institution}</span>
                        </motion.div>

                        {/* Duration and Grade */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.4 }}
                          className="flex flex-wrap gap-4 mb-4"
                        >
                          <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-4 py-2 rounded-lg">
                            <FaCalendarAlt className="text-purple-500" />
                            <span className="text-sm font-medium">{edu.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-4 py-2 rounded-lg">
                            <FaAward className="text-yellow-500" />
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
                            {edu.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 + 0.6 + i * 0.1 }}
                                className="flex items-start gap-3 text-gray-600"
                              >
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${edu.color} mt-2 shrink-0`}></div>
                                <span className="text-sm leading-relaxed">{achievement}</span>
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

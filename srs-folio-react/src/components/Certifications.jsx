import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaAward, FaUniversity, FaTrophy } from 'react-icons/fa';

const Certifications = () => {
  const certifications = {
    exam: [
      {
        id: 1,
        title: 'ITEE Level-II: Fundamental Exam (FE)',
        institution: 'BANGLADESH IT-ENGINEERS EXAMINATION CENTER (BD-ITEC)',
        date: 'April 2024',
        badge: '/images/certifications/exam.png',
        type: 'exam',
        achievements: [
          { label: 'Full-Passer', id: 'FE01-0172', date: 'April 2024', color: '#1278c7' },
          { label: 'Half-Passer', id: 'FE01-0160', date: 'October 2023', color: '#af3212' }
        ],
        certificates: [
          {
            title: 'April-2024 Govt. Issued Certificate',
            url: 'https://drive.google.com/file/d/17CRZu6sF3Qb2m7LtsFolYxNfXidBWLn9/view',
            color: '#1278c7'
          },
          {
            title: 'October-2023 Exam Result',
            url: 'http://bditec.gov.bd/wp-content/uploads/2023/11/ITEE-Exam-Result-Oct-2023.pdf',
            color: '#af3212'
          }
        ],
        description: 'Topics Covered: Programming, Logic, Data Structures (Lists/Arrays, Queues/Stacks, Trees/Graphs), Sorting/Searching, OOP, DevOps, Basic Linux, and Cyber Security.'
      }
    ],
    training: [
      {
        id: 2,
        title: 'Bangladesh-Japan ICT Engineers Training Program (B-JET): Basic Plus Course',
        institution: 'North South University | Bangladesh & University of Miyazaki | Japan',
        date: 'October 21, 2024 - December 6, 2024',
        logos: [
          '/images/certifications/B-JET/North_South_University_Monogram.png',
          '/images/certifications/B-JET/bjet_logo_circle.png',
          '/images/certifications/B-JET/uni_of_miyazaki_logo.png'
        ],
        certificates: [
          { title: 'Certificate of Completion', url: 'https://drive.google.com/open?id=1x-V-zQe5LnwtL-n6AGP6Ti44l8u8XXZT&usp=drive_fs', color: '#1278c7' },
          { title: 'Achievement & Attendance', url: 'https://drive.google.com/open?id=1wsLJOWurhBIjiZhLIwUXBedKkltYOwBY&usp=drive_fs', color: '#be4820' },
          { title: 'High Performance Award', url: 'https://drive.google.com/open?id=1x3L_MzQlBnP492MJhwqXSdAmVEc0JinW&usp=drive_fs', color: '#D97706' },
          { title: 'Perfect Attendance (100%)', url: 'https://drive.google.com/open?id=1x09AdXIFZpaxZ-AtYI-XwtBDaZ9Oc1dJ&usp=drive_fs', color: '#2f8d09' }
        ],
        description: 'N4 to N3 (partial) level Japanese Language Proficiency, Japanese Traditions and Business Ethics, IT skills including Design Pattern Techniques, Cloud computing, CI/CD pipelines. Created video contents introducing Bangladeshi culture, Developed Nihongo project with Takachiho High School students.'
      },
      {
        id: 3,
        title: 'Bangladesh-Japan ICT Engineers Training Program (B-JET): Basic Course',
        institution: 'North South University | Bangladesh & University of Miyazaki | Japan',
        date: 'June 3, 2024 - October 18, 2024',
        logos: [
          '/images/certifications/B-JET/North_South_University_Monogram.png',
          '/images/certifications/B-JET/bjet_logo_circle.png',
          '/images/certifications/B-JET/uni_of_miyazaki_logo.png'
        ],
        certificates: [
          { title: 'Confirmation of Completion', url: 'https://drive.google.com/open?id=1x8o4sFkMD6YH00XeKSht1LljpdYiObml&usp=drive_fs', color: '#1674bd' },
          { title: 'Certificate of Completion', url: 'https://drive.google.com/open?id=1wuc7B5WDs2vT4-BCSpj6SY47qvjWu_2N&usp=drive_fs', color: '#156bad' },
          { title: 'Achievement & Attendance', url: 'https://drive.google.com/open?id=1wtbXaA-bOIecHnhLysNNdFS574ynxzXB&usp=drive_fs', color: '#c04a23' },
          { title: 'Programming Contest Achievement', url: 'https://drive.google.com/open?id=1x6RLPKbnK5qdt_M4cWBQ9kDm4QcX4kah&usp=drive_fs', color: '#2c910d' }
        ],
        description: 'N5 to N4 level Japanese Language Proficiency, Japanese Culture and Business Manners, IT skills including Project Management techniques, Github collaboration, Developed a Full-Stack Online Learning Management System with Next.js, PostgreSQL and Microservice Architecture. Participated in B-JET Programming Contest.'
      }
    ],
    coursera: [
      {
        id: 4,
        title: 'Prompt Engineering for ChatGPT',
        institution: 'Vanderbilt University',
        instructor: 'Professor Dr. Jules White',
        platform: 'Coursera',
        logos: ['/images/certifications/chat-gpt.png', '/images/certifications/Coursera/vanderbilt-university-logo.png'],
        certificates: [
          { title: 'Certificate of Completion', url: 'https://www.coursera.org/account/accomplishments/verify/8E4J77LNGANF', color: '#1278c7' }
        ],
        description: 'Prompt engineering, Utilizing Large Language Models (LLMs) like ChatGPT, Crafting prompt patterns, Zero-shot, Few-shot tactics, structured generative format.'
      },
      {
        id: 5,
        title: 'Python for Everybody Specialization',
        institution: 'University of Michigan',
        instructor: 'Charles Russell Severance',
        platform: 'Coursera',
        logos: ['/images/certifications/python.png', '/images/certifications/Coursera/Michigan_university_Logo..png'],
        certificates: [
          { title: 'Certificate of Completion', url: 'https://www.coursera.org/account/accomplishments/specialization/AG6LT49T5QJR', color: '#1278c7' }
        ],
        description: 'Fundamentals of Python, using databases with Python, accessing web data, data structures, DBMS, parsing JSON and XML, retrieving, processing, and visualizing data.'
      },
      {
        id: 6,
        title: 'IT Security: Defense against the digital dark arts',
        institution: 'Google',
        platform: 'Coursera',
        logos: ['/images/certifications/cyber-security.png', '/images/certifications/Coursera/google_logo.png'],
        certificates: [
          { title: 'Certificate of Completion', url: 'https://www.coursera.org/account/accomplishments/certificate/CGYEZ6PHJGNT', color: '#1278c7' }
        ],
        description: 'Understanding encryption algorithms, authentication systems, differentiating between authentication and authorization, evaluating potential risks and security concepts.'
      },
      {
        id: 7,
        title: 'The Bits and Bytes of Computer Networking',
        institution: 'Google',
        platform: 'Coursera',
        logos: ['/images/certifications/computer-network.png', '/images/certifications/Coursera/google_logo.png'],
        certificates: [
          { title: 'Certificate of Completion', url: 'https://www.coursera.org/account/accomplishments/certificate/GZQZRYKBB7UQ', color: '#1278c7' }
        ],
        description: 'Computer networks using five-layer model, TCP/IP communication, network troubleshooting, DNS and DHCP management, cloud computing concepts and storage solutions.'
      },
      {
        id: 8,
        title: 'Technical Support Fundamentals',
        institution: 'Google',
        platform: 'Coursera',
        logos: ['/images/certifications/technical-support.png', '/images/certifications/Coursera/google_logo.png'],
        certificates: [
          { title: 'Certificate of Completion', url: 'https://www.coursera.org/account/accomplishments/certificate/4NVYT3H9UKJR', color: '#1278c7' }
        ],
        description: 'Foundational IT skills, understanding binary system, assembling computers, installing operating systems, problem-solving methodologies and communication skills.'
      }
    ]
  };

  const CertificateCard = ({ cert, index, category }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="h-full"
    >
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
        {/* Decorative Header */}
        <div className={`h-2 ${
          category === 'exam' ? 'bg-gradient-to-r from-yellow-400 to-orange-500' :
          category === 'training' ? 'bg-gradient-to-r from-blue-500 to-purple-600' :
          'bg-gradient-to-r from-green-400 to-blue-500'
        }`}></div>

        <div className="p-6 flex-1 flex flex-col">
          {/* Logo Section */}
          <div className="flex justify-center items-center mb-4 gap-2 flex-wrap min-h-[80px]">
            {cert.badge && (
              <motion.img 
                whileHover={{ scale: 1.1, rotate: 5 }}
                src={cert.badge} 
                alt="Badge" 
                className="h-16 w-16 object-contain"
              />
            )}
            {cert.logos && cert.logos.map((logo, i) => (
              <motion.img 
                key={i}
                whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 5 : -5 }}
                src={logo} 
                alt="Logo" 
                className="h-12 w-12 object-contain"
              />
            ))}
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
            {cert.title}
          </h3>

          {/* Institution */}
          <div className="flex items-start gap-2 mb-3">
            <FaUniversity className="text-blue-500 mt-1 shrink-0" />
            <p className="text-sm text-gray-600 font-medium">
              {cert.institution}
            </p>
          </div>

          {/* Instructor (if exists) */}
          {cert.instructor && (
            <p className="text-sm text-gray-500 mb-2 italic">
              {cert.instructor}
            </p>
          )}

          {/* Date */}
          <p className="text-sm text-gray-500 mb-4">
            {cert.date}
          </p>

          {/* Achievements (for exam) */}
          {cert.achievements && (
            <div className="mb-4 flex gap-2 flex-wrap">
              {cert.achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ backgroundColor: achievement.color }}
                >
                  <FaTrophy className="inline mr-1" />
                  {achievement.label}
                </motion.div>
              ))}
            </div>
          )}

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
            <span className="font-semibold">Skills gained: </span>
            {cert.description}
          </p>

          {/* Certificate Links */}
          <div className="border-t border-gray-100 pt-4 mt-auto">
            <div className="flex flex-wrap gap-2">
              {cert.certificates.map((certificate, i) => (
                <motion.a
                  key={i}
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-white transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: certificate.color }}
                  title={certificate.title}
                >
                  <FaCertificate className="text-sm" />
                  <span className="hidden sm:inline">{certificate.title}</span>
                  <FaExternalLinkAlt className="text-xs opacity-70 group-hover:opacity-100" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="certificate" className="section px-4 lg:px-8 pt-20 pb-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Main Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <FaAward className="text-6xl text-yellow-500 mx-auto" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Professional Certifications</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Continuous learning and professional development achievements
          </p>
        </motion.div>

        {/* Professional Exam Certifications */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
            <h3 className="text-2xl font-bold text-gray-800">Professional Exam Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {certifications.exam.map((cert, index) => (
              <CertificateCard key={cert.id} cert={cert} index={index} category="exam" />
            ))}
          </div>
        </motion.div>

        {/* Professional Training Certifications */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            <h3 className="text-2xl font-bold text-gray-800">Professional Training Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {certifications.training.map((cert, index) => (
              <CertificateCard key={cert.id} cert={cert} index={index} category="training" />
            ))}
          </div>
        </motion.div>

        {/* Online Course Certifications */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
            <h3 className="text-2xl font-bold text-gray-800">Online Course Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.coursera.map((cert, index) => (
              <CertificateCard key={cert.id} cert={cert} index={index} category="coursera" />
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Certifications;

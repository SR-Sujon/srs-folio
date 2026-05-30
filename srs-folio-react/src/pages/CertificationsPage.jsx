import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCertificate, FaSearch } from 'react-icons/fa';
import SEO from '../components/SEO';

const CertificationsPage = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const certData = {
    exam: [
      {
        id: 1,
        title: 'ITEE Level-II: Fundamental Exam (FE)',
        institution: 'BANGLADESH IT-ENGINEERS EXAMINATION CENTER (BD-ITEC)',
        date: 'April 2024',
        badge: '/images/certifications/exam.png',
        type: 'Government Certification',
        certificates: [
          { title: 'April-2024 Govt. Issued Certificate', url: 'https://drive.google.com/file/d/17CRZu6sF3Qb2m7LtsFolYxNfXidBWLn9/view', color: '#1278c7' },
          { title: 'October-2023 Exam Result', url: 'http://bditec.gov.bd/wp-content/uploads/2023/11/ITEE-Exam-Result-Oct-2023.pdf', color: '#af3212' }
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
        logos: ['/images/certifications/B-JET/North_South_University_Monogram.png', '/images/certifications/B-JET/bjet_logo_circle.png', '/images/certifications/B-JET/uni_of_miyazaki_logo.png'],
        type: 'Professional Training',
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
        logos: ['/images/certifications/B-JET/North_South_University_Monogram.png', '/images/certifications/B-JET/bjet_logo_circle.png', '/images/certifications/B-JET/uni_of_miyazaki_logo.png'],
        type: 'Professional Training',
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
        platform: 'Coursera',
        type: 'Online Course',
        logos: ['/images/certifications/chat-gpt.png', '/images/certifications/Coursera/vanderbilt-university-logo.png'],
        certificates: [{ title: 'Certificate of Completion', url: 'https://www.coursera.org/account/accomplishments/verify/8E4J77LNGANF', color: '#1278c7' }],
        description: 'Prompt engineering, Utilizing Large Language Models (LLMs) like ChatGPT, Crafting prompt patterns, Zero-shot, Few-shot tactics, structured generative format.'
      },
      {
        id: 5,
        title: 'Python for Everybody Specialization',
        institution: 'University of Michigan',
        platform: 'Coursera',
        type: 'Online Course',
        logos: ['/images/certifications/python.png', '/images/certifications/Coursera/Michigan_university_Logo..png'],
        certificates: [{ title: 'Certificate of Completion', url: 'https://www.coursera.org/account/accomplishments/specialization/AG6LT49T5QJR', color: '#1278c7' }],
        description: 'Fundamentals of Python, using databases with Python, accessing web data, data structures, DBMS, parsing JSON and XML, retrieving, processing, and visualizing data.'
      }
    ]
  };

  const allCertifications = [...certData.exam, ...certData.training, ...certData.coursera];
  const categories = ['All', 'Government Certification', 'Professional Training', 'Online Course'];

  const filteredCertifications = allCertifications.filter(cert => {
    const matchesCategory = filter === 'All' || cert.type === filter;
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO 
        title="Certifications - SR Sujon | Professional Credentials"
        description="Complete list of certifications and professional training by Saidur Rahman Sujon including B-JET programs, ITEE certification, Coursera courses, and specialized training in AI, web development, and Japanese language."
        keywords="certifications, professional training, B-JET, ITEE, Coursera, Japanese language, IT certifications, programming courses"
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto max-w-7xl px-4 lg:px-8">
            <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-gray-200 transition-colors mb-6 group">
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">All Certifications</h1>
              <p className="text-xl text-gray-100">Professional credentials and training programs</p>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 lg:px-8 py-12">
          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            {/* Search Bar */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search certifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pl-12 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 text-gray-800"
              />
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setFilter(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    filter === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-400'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-gray-600 mb-6 text-center"
          >
            Showing {filteredCertifications.length} of {allCertifications.length} certifications
          </motion.p>

          {/* Certifications Grid */}
          <div className="space-y-8">
            {filteredCertifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gray-100"
              >
                <div className="p-8">
                  {/* Type Badge */}
                  <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                    {cert.type}
                  </span>

                  {/* Title & Institution */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{cert.title}</h3>
                  <p className="text-lg text-blue-600 font-semibold mb-2">{cert.institution}</p>
                  <p className="text-sm text-gray-500 mb-4">{cert.date}</p>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6">{cert.description}</p>

                  {/* Logos */}
                  {cert.logos && (
                    <div className="flex flex-wrap gap-4 mb-6">
                      {cert.logos.map((logo, idx) => (
                        <img key={idx} src={logo} alt="Logo" className="h-16 object-contain" />
                      ))}
                    </div>
                  )}

                  {/* Badge */}
                  {cert.badge && (
                    <div className="mb-6">
                      <img src={cert.badge} alt="Badge" className="h-24 object-contain" />
                    </div>
                  )}

                  {/* Certificates */}
                  <div className="flex flex-wrap gap-3">
                    {cert.certificates.map((certificate, idx) => (
                      <motion.a
                        key={idx}
                        href={certificate.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-5 py-2.5 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
                        style={{ backgroundColor: certificate.color }}
                      >
                        <FaCertificate className="text-lg" />
                        {certificate.title}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredCertifications.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No certifications found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default CertificationsPage;

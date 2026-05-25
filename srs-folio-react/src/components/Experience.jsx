import { motion } from 'framer-motion';
import { 
  FaCertificate, 
  FaBriefcase 
} from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      year: '2025',
      isPresent: true,
      position: 'Software Engineer',
      company: 'MASS HOLDINGS CO. LTD',
      location: 'Tokyo, Japan',
      duration: '2025 - Present',
      image: '/images/experience/exp_mass_holdings.png',
      description: 'Working as a Software Engineer in the IT Department at MASS HOLDINGS headquarters, developing and maintaining warehouse management systems. Contributing to solutions that handle daily order processing, integrating frontend interfaces with backend systems and automated label printing functionality.',
      responsibilities: [
        {
          title: 'Full Stack Development',
          details: 'Developing and maintaining warehouse management applications using Java Spring Boot for backend APIs, React JS with Tailwind CSS for user interfaces, and PostgreSQL for data storage. Working with containerized deployments using Docker and Kubernetes for application deployment and management.',
        },
        {
          title: 'System Integration & Development',
          details: 'Implementing order fulfillment workflows that connect frontend interfaces with backend services and automated printing systems. Contributing to legacy system updates through C# integration. Using development tools including WebStorm, Rider, DataGrip, DBeaver, and IntelliJ IDEA for daily development tasks.',
        },
      ],
      closing: 'Contributing to logistics technology solutions by developing and maintaining systems that support daily order processing and warehouse operations.',
      certificates: [],
      side: 'right',
      delay: 0.2,
    },
    {
      id: 2,
      year: '2024',
      isPresent: false,
      position: 'Full Stack Developer & AI Engineer',
      company: 'Upwork',
      location: 'Freelancer',
      duration: '2024 - 2025',
      image: '/images/experience/upwork.png',
      description: 'As a Freelance AI & Web Developer, I built high-performance websites and AI-driven solutions by integrating Front-end, Back-end, and Machine Learning technologies.',
      responsibilities: [
        {
          title: 'Web Development',
          details: 'Crafted responsive UIs with HTML, CSS, JavaScript, React.js, and Vue.js. Implemented scalable Back-end logic with Node.js and Python, managed databases (MongoDB, MySQL, PostgreSQL), and developed RESTful APIs for seamless integration.',
        },
        {
          title: 'AI & Machine Learning',
          details: 'Developed predictive models, fine-tuned LLMs, and trained custom GPT models. Built AI-powered chatbots with NLP and leveraged Generative AI for automation and business optimization.',
        },
      ],
      closing: 'Delivered efficient, client-focused solutions that enhanced user experience and streamlined operations.',
      certificates: [],
      side: 'left',
      delay: 0.3,
    },
    {
      id: 3,
      year: '2023',
      isPresent: false,
      position: 'Data Science and Business Analytics Intern',
      company: 'The Sparks Foundation',
      location: 'Singapore | Remote',
      duration: 'Nov 2023 - Dec 2023',
      image: '/images/experience/exp_tsf.jpg',
      description: 'As an Intern, I was assigned to various real-world projects to extract meaningful insights from data and develop machine learning models for efficient and accurate predictions and create interactive data visualization using Power BI.',
      responsibilities: [
        {
          title: 'Key Responsibilities',
          details: 'Performing data acquisition, cleaning, and preparation using NumPy and Pandas to ensure high-quality input for analysis. Conducting exploratory data analysis (EDA) to identify patterns, trends, and anomalies in datasets. Applying statistical methods and machine learning algorithms for trend prediction, classification, and clustering tasks. Implementing feature engineering techniques to enhance model performance. Creating data visualizations and interactive reports using Power BI to effectively communicate findings. Collaborating with the team to optimize model accuracy, validate results, and derive actionable business insights.',
        },
      ],
      certificates: [
        {
          title: 'Certificate of Selection',
          url: 'https://links-truecertificates.s3.ap-south-1.amazonaws.com/published/2023-25-25/AYLXR32TXN.png',
          color: '#2ca50d',
        },
        {
          title: 'Certificate of Completion',
          url: 'https://links-truecertificates.s3.ap-south-1.amazonaws.com/published/2024-33-02/5VJTFN32RT.png',
          color: '#1278c7',
        },
      ],
      side: 'right',
      delay: 0.4,
    },
  ];

  return (
    <section id="experience" className="section px-4 lg:px-8 pt-20 pb-20 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">Experience</h2>
        </motion.div>

        {/* Experience Content */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start relative">
              {/* Left Side - Year Badge with Connector Line */}
              <div className="lg:w-32 flex flex-col items-center shrink-0 self-stretch">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  {/* Year Badge */}
                  <motion.div
                    animate={{
                      boxShadow: exp.isPresent
                        ? [
                            '0 0 20px rgba(34, 197, 94, 0.6)',
                            '0 0 40px rgba(16, 185, 129, 0.9)',
                            '0 0 20px rgba(34, 197, 94, 0.6)',
                          ]
                        : [
                            '0 0 15px rgba(59, 130, 246, 0.4)',
                            '0 0 30px rgba(147, 51, 234, 0.6)',
                            '0 0 15px rgba(59, 130, 246, 0.4)',
                          ],
                    }}
                    transition={{
                      duration: exp.isPresent ? 2 : 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className={`relative ${
                      exp.isPresent
                        ? 'bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-600'
                        : 'bg-gradient-to-br from-blue-500 via-purple-600 to-blue-500'
                    } rounded-full p-1.5 shadow-xl`}
                  >
                    <div className="bg-white rounded-full px-5 py-3 shadow-inner">
                      <div className="flex flex-col items-center">
                        {exp.isPresent && (
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                            className="w-2.5 h-2.5 rounded-full bg-green-500 mb-1.5 shadow-lg"
                            style={{ boxShadow: '0 0 8px rgba(34, 197, 94, 0.8)' }}
                          />
                        )}
                        <span
                          className={`text-xl font-extrabold ${
                            exp.isPresent ? 'text-emerald-600' : 'text-blue-600'
                          }`}
                          style={{
                            textShadow: exp.isPresent
                              ? '0 2px 6px rgba(5,150,105,0.4)'
                              : '0 2px 6px rgba(37,99,235,0.4)',
                          }}
                        >
                          {exp.year}
                        </span>
                        {exp.isPresent && (
                          <span className="text-[10px] text-green-600 mt-0.5 font-bold tracking-wide">NOW</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Connector Line to next experience (except for last item) */}
                {index < experiences.length - 1 && (
                  <div className="hidden lg:block w-1 flex-1 bg-gradient-to-b from-blue-400 via-purple-400 to-blue-300 mt-6 mb-6 rounded-full opacity-60" 
                       style={{ minHeight: '120px' }}
                  />
                )}
              </div>

              {/* Right Side - Experience Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="flex-1"
              >
                <motion.div
                  whileHover={{ scale: 1.01, boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.2)' }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-blue-300 transition-all duration-300"
                >
                  <div className="grid md:grid-cols-4 gap-6 p-6">
                    {/* Company Logo/Image */}
                    <div className="md:col-span-1 flex items-start justify-center md:justify-start">
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 3 }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                      >
                        <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                          <img
                            src={exp.image}
                            alt={exp.company}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Timeline Dot Badge */}
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg border-3 border-white">
                          <FaBriefcase className="text-white text-sm" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Experience Details */}
                    <div className="md:col-span-3 flex flex-col">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-2xl font-bold text-gray-800">{exp.position}</h3>
                          {exp.isPresent && (
                            <span className="px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold rounded-full shadow-md">
                              CURRENT
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p className="font-semibold text-lg text-blue-600">{exp.company}</p>
                          <p className="flex items-center gap-2">
                            <span>📍</span>
                            {exp.location}
                          </p>
                          <p className="flex items-center gap-2">
                            <span>📅</span>
                            {exp.duration}
                          </p>
                        </div>
                        
                        {/* Certificates */}
                        {exp.certificates.length > 0 && (
                          <div className="flex gap-2 mt-3">
                            {exp.certificates.map((cert, certIndex) => (
                              <motion.a
                                key={certIndex}
                                href={cert.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={cert.title}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-lg text-sm hover:border-blue-400 transition-all shadow-sm"
                              >
                                <FaCertificate style={{ color: cert.color }} className="text-base" />
                                <span className="text-xs font-semibold text-gray-700">Certificate</span>
                              </motion.a>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                        {exp.description}
                      </p>

                      {/* Responsibilities */}
                      <div className="space-y-3 mb-4">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <div
                            key={respIndex}
                            className="border-l-4 border-blue-500 pl-4 py-2 bg-gradient-to-r from-blue-50/50 to-transparent rounded-r"
                          >
                            <h4 className="font-bold text-gray-800 text-sm mb-1">{resp.title}:</h4>
                            <p className="text-gray-600 text-xs leading-relaxed">{resp.details}</p>
                          </div>
                        ))}
                      </div>

                      {/* Closing Statement */}
                      {exp.closing && (
                        <p className="text-gray-600 text-sm leading-relaxed italic border-t pt-3 mt-auto">
                          {exp.closing}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="relative -mt-20">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl pointer-events-none"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-to-tr from-purple-400/20 to-blue-600/20 rounded-full blur-3xl pointer-events-none"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

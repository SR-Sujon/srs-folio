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
      image: '/images/experience/fs1.png',
      description: 'Serving as a Software Engineer in the IT Department at MASS HOLDINGS headquarters, spearheading the development and evolution of mission-critical warehouse management systems. Architecting solutions that orchestrate thousands of daily orders through a seamless pipeline from frontend interactions to backend processing and automated label printing.',
      responsibilities: [
        {
          title: 'Full Stack Engineering',
          details: 'Architecting and maintaining enterprise-grade warehouse management solutions leveraging Java Spring Boot for robust backend APIs, React JS with Tailwind CSS for intuitive user interfaces, and PostgreSQL for high-performance data persistence. Orchestrating containerized deployments with Docker and managing production environments through Kubernetes for optimal scalability and reliability.',
        },
        {
          title: 'System Integration & DevOps',
          details: 'Engineering end-to-end order fulfillment workflows, seamlessly connecting frontend experiences with backend business logic and automated printing systems. Modernizing legacy systems through strategic C# integration. Leveraging industry-leading tools including WebStorm, Rider, DataGrip, DBeaver, and IntelliJ IDEA to deliver production-ready code efficiently.',
        },
      ],
      closing: 'Driving innovation in logistics technology by building resilient, scalable systems that power thousands of daily transactions, ensuring operational excellence across the entire supply chain.',
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
      image: '/images/experience/fs1.png',
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
      image: '/images/experience/ds1.png',
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

        {/* Experience Cards - Horizontal Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="w-full lg:w-1/3 relative"
              style={{ 
                marginTop: `${index * 3}rem`,
                zIndex: 20 
              }}
            >
              {/* Year Badge */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                className="flex justify-center mb-6"
              >
                <motion.div
                  animate={{
                    boxShadow: exp.isPresent
                      ? [
                          '0 0 25px rgba(34, 197, 94, 0.7)',
                          '0 0 50px rgba(16, 185, 129, 1)',
                          '0 0 25px rgba(34, 197, 94, 0.7)',
                        ]
                      : [
                          '0 0 20px rgba(59, 130, 246, 0.5)',
                          '0 0 40px rgba(147, 51, 234, 0.7)',
                          '0 0 20px rgba(59, 130, 246, 0.5)',
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
                  } rounded-full p-1.5 shadow-2xl`}
                >
                  <div className="bg-white rounded-full px-6 py-3 shadow-inner">
                    <div className="flex flex-col items-center">
                      {exp.isPresent && (
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.8, 1, 0.8],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                          className="w-3 h-3 rounded-full bg-green-500 mb-2 shadow-lg"
                          style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.8)' }}
                        />
                      )}
                      <span
                        className={`text-xl font-extrabold ${
                          exp.isPresent ? 'text-emerald-600' : 'text-blue-600'
                        }`}
                        style={{
                          textShadow: exp.isPresent
                            ? '0 2px 8px rgba(5,150,105,0.5)'
                            : '0 2px 8px rgba(37,99,235,0.5)',
                        }}
                      >
                        {exp.year}
                      </span>
                      {exp.isPresent && (
                        <span className="text-xs text-green-600 mt-1 font-bold">PRESENT</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Timeline Dot */}
              <div className="flex justify-center mb-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg border-4 border-white"
                >
                  <FaBriefcase className="text-white text-xl" />
                </motion.div>
              </div>

              {/* Experience Card */}
              <motion.div
                whileHover={{ scale: 1.02, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-blue-300 transition-all duration-300"
              >
                      {/* Card Header */}
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-2">{exp.position}</h3>
                            <div className="text-blue-100 text-sm space-y-1">
                              <p className="font-semibold">{exp.company}</p>
                              <p>{exp.location}</p>
                              <p className="text-xs bg-white/20 inline-block px-3 py-1 rounded-full mt-2">
                                {exp.duration}
                              </p>
                            </div>
                          </div>
                          <motion.img
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            src={exp.image}
                            alt={exp.company}
                            className="w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover ml-4"
                          />
                        </div>

                        {/* Certificates */}
                        {exp.certificates.length > 0 && (
                          <div className="flex gap-3 mt-3">
                            {exp.certificates.map((cert, certIndex) => (
                              <motion.a
                                key={certIndex}
                                href={cert.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={cert.title}
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                className="flex items-center gap-2 bg-white/20 px-3 py-2 rounded-lg text-sm hover:bg-white/30 transition-all"
                              >
                                <FaCertificate style={{ color: cert.color }} className="text-lg" />
                                <span className="text-xs hidden sm:inline">View Certificate</span>
                              </motion.a>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Card Body */}
                      <div className="p-6 space-y-4">
                        <p className="text-gray-700 leading-relaxed">{exp.description}</p>

                        {/* Responsibilities */}
                        <div className="space-y-3">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <div key={respIndex} className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
                              <h4 className="font-bold text-gray-800 mb-2">{resp.title}:</h4>
                              <p className="text-gray-700 text-sm leading-relaxed">{resp.details}</p>
                            </div>
                          ))}
                        </div>

                        {/* Closing Statement */}
                        {exp.closing && (
                          <p className="text-gray-700 leading-relaxed italic border-t pt-4 mt-4">
                            {exp.closing}
                          </p>
                        )}
                      </div>
                    </motion.div>
            </motion.div>
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

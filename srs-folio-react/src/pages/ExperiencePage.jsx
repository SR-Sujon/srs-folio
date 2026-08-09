import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCertificate } from 'react-icons/fa';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';

const ExperiencePage = () => {
  const { t } = useLanguage();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const experiences = [
    {
      id: 1,
      year: '2025',
      isPresent: true,
      position: 'Software Engineer',
      company: 'MASS HOLDINGS CO., LTD',
      location: 'Tokyo, Japan',
      duration: '2025.4 - Present (1 year+)',
      jobType: 'Full-time',
      image: '/images/experience/exp_mass_holdings.png',
      description: 'Working as a Software Engineer in the IT Solution and Development Department at the MASS HOLDINGS CO., LTD head office, developing and maintaining company\'s warehouse management systems. Contributing to solutions that handle daily order processing, integrating frontend interfaces with backend systems and automated label printing functionality.',
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
      position: 'Research Assistant',
      company: 'Ahsanullah University of Science and Technology (AUST)',
      location: 'Dhaka, Bangladesh',
      duration: '2024.11 - 2025.9 (10 months)',
      jobType: 'Contract',
      image: '/images/experience/aust_logo.png',
      description: 'Worked as a Research Assistant under the AUST Internal Research Grant (AIRG) project developing PsychAI, a Bengali-supported mental health assistant powered by large language models. Contributed to advancing NLP and culturally-grounded AI research addressing mental health accessibility in underserved Bengali-speaking communities.',
      responsibilities: [
        {
          title: 'Chatbot Development & Mental Health Assessment',
          details: 'Engineered a functional Bengali chatbot capable of analyzing text and audio input to detect signs of mental health conditions including depression, anxiety, PTSD, schizophrenia-related disorders, and trauma. Implemented conversational AI pipelines optimized for clinical relevance and user engagement.',
        },
        {
          title: 'Clinical Decision Support System',
          details: 'Developed the PsychAI Analyzer Model (PAM) to assist psychologists in identifying potential mental disorder cases by generating comprehensive summary reports and evidence-based talking points from user interactions. Achieved 86.84% accuracy in symptom classification with an Average Human Evaluation Score of 4.34/5.0 by clinical psychologists.',
        },
        {
          title: 'Dataset Creation & Model Fine-tuning',
          details: 'Created MonBarta, a synthetic dataset of 200 validated mental health conversations in Bengali using few-shot generation supervised by clinical psychologists. Fine-tuned large language models using methodologies optimized for low-resource languages and specialized mental health contexts.',
        },
        {
          title: 'Research Publication',
          details: 'Published peer-reviewed research on PsychAI framework demonstrating how linguistically and culturally grounded AI can enable early mental health assessment in under-resourced communities. Research validates the effectiveness of LLM-based approaches for accessible psychological support in Bengali.',
        },
      ],
      closing: 'Delivered an end-to-end AI system bridging the mental health professional shortage in Bangladesh, combining rigorous clinical validation with practical chatbot deployment for early assessment and intervention.',
      certificates: [],
      side: 'left',
      delay: 0.3,
    },
    {
      id: 3,
      year: '2024',
      isPresent: false,
      position: 'Full Stack Developer & AI Engineer',
      company: 'Upwork',
      location: 'Freelancer',
      duration: '2024.01 - 2024.12 (1 year)',
      jobType: 'Part-Time',
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
      side: 'right',
      delay: 0.4,
    },
    {
      id: 4,
      year: '2023',
      isPresent: false,
      position: 'Data Science and Business Analytics Intern',
      company: 'The Sparks Foundation',
      location: 'Singapore | Remote',
      duration: '2023.11 - 2023.12 (1 month)',
      jobType: 'Internship',
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
      side: 'left',
      delay: 0.5,
    },
  ];

  return (
    <>
      <SEO 
        title={t('seo.experience.title')}
        description={t('seo.experience.description')}
        keywords={t('seo.experience.keywords')}
      />

      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto max-w-6xl px-4 lg:px-8">
            <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-gray-200 transition-colors mb-6 group">
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              {t('common.backToHome')}
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t('experience.title')}</h1>
              <p className="text-xl text-gray-100">{t('experience.subtitle')}</p>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto max-w-6xl px-4 lg:px-8 py-16">
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                {/* Year Badge & Present Indicator */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
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
                    } rounded-full px-6 py-3 shadow-lg`}
                  >
                    <span className="text-white font-bold text-lg">{exp.year}</span>
                  </motion.div>
                  
                  {exp.isPresent && (
                    <motion.span
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold"
                    >
                      NOW
                    </motion.span>
                  )}
                </div>

                {/* Company Info Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  {/* Company Logo */}
                  <div className="md:col-span-1">
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="w-full h-48 object-contain rounded-xl bg-gray-50 p-4"
                    />
                  </div>

                  {/* Position Details */}
                  <div className="md:col-span-2">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">{t(`items.experience.${exp.id}.position`)}</h2>
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">{exp.company}</h3>
                    <p className="text-gray-600 mb-2">{t(`items.experience.${exp.id}.location`)}</p>
                    <p className="flex items-center gap-3">
                      <span className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-semibold border border-blue-100">
                        {t(`items.experience.${exp.id}.duration`)}
                      </span>
                      {exp.jobType && (
                        <span className="inline-flex items-center px-2 py-0.5 bg-gray-100 text-xs rounded-full text-gray-700 font-semibold border border-gray-200">
                          {t(`items.experience.${exp.id}.jobType`)}
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-6">{t(`items.experience.${exp.id}.description`)}</p>

                {/* Responsibilities */}
                <div className="space-y-4 mb-6">
                  <h4 className="text-xl font-bold text-gray-800">{t('experience.responsibilities')}:</h4>
                  {(t(`items.experience.${exp.id}.responsibilities`) || exp.responsibilities).map((resp, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-5 border-l-4 border-blue-500">
                      <h5 className="font-bold text-gray-800 mb-2">{resp.title}</h5>
                      <p className="text-gray-700 leading-relaxed">{resp.details}</p>
                    </div>
                  ))}
                </div>

                {/* Closing */}
                {exp.closing && (
                  <p className="text-gray-600 italic mb-6">{t(`items.experience.${exp.id}.closing`)}</p>
                )}

                {/* Certificates */}
                {exp.certificates.length > 0 && (
                  <div className="border-t-2 border-gray-100 pt-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <FaCertificate className="text-blue-600" />
                      Certifications:
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {exp.certificates.map((cert, idx) => (
                        <motion.a
                          key={idx}
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-5 py-2.5 rounded-lg text-white font-medium shadow-md hover:shadow-lg transition-all duration-300"
                          style={{ backgroundColor: cert.color }}
                        >
                          {cert.title}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperiencePage;

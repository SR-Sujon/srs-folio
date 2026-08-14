import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaCertificate, 
  FaBriefcase,
  FaArrowRight
} from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const Experience = ({ featured = false }) => {
  const { t } = useLanguage();

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
          details: 'Architecting dedicated microservices for thermal label printers to automate warehouse delivery slip generation and streamline order fulfillment workflows. Integrating frontend interfaces with backend services, modernizing legacy systems through C# integration, and utilizing WebStorm, Rider, DataGrip, DBeaver, and IntelliJ IDEA for daily development tasks.',
        },
        {
          title: 'Software Release & Deployment Management',
          details: 'Orchestrating end-to-end software releases and production deployments for company warehouse management systems, maintaining release stability, version control, and seamless deployment workflows to minimize system downtime.',
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
      position: 'Research Assistant (AIRG Grant)',
      company: 'Ahsanullah University of Science and Technology (AUST)',
      location: 'Dhaka, Bangladesh',
      duration: '2024.11 - 2025.8 (10 months)',
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
          details: 'Created and annotated specialized datasets for Bengali mental health analysis. Fine-tuned LLMs using domain-specific prompts and RAG architectures to optimize performance for culturally sensitive medical conversations.',
        },
      ],
      closing: 'Bridging technical AI capabilities with clinical psychology to create accessible mental health detection tools for low-resource languages.',
      certificates: [],
      side: 'right',
      delay: 0.4,
    },
    {
      id: 3,
      year: '2023',
      isPresent: false,
      position: 'Data Analyst Trainee',
      company: 'Devskill',
      location: 'Dhaka, Bangladesh',
      duration: '2023.11 - 2024.2 (4 months)',
      jobType: 'Trainee',
      image: '/images/experience/devskill.png',
      description: 'Gained practical training in data analysis techniques, data processing pipelines, and data visualization tools to support business decision-making processes.',
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

  const displayedExperiences = featured ? experiences.slice(0, 2) : experiences;

  return (
    <section id="experience" className="section px-4 lg:px-8 pt-20 pb-20 bg-white dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
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
            <FaBriefcase className="text-4xl" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">{t('experience.title')}</h2>
        </motion.div>

        {/* Experience Content */}
        <div className="space-y-12">
          {displayedExperiences.map((exp, index) => (
            <div key={exp.id} className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start relative">
              {/* Left Side - Year Badge */}
              <div className="lg:w-32 flex flex-col items-center shrink-0 self-stretch">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className={`relative ${exp.isPresent ? 'bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-600' : 'bg-gradient-to-br from-blue-500 via-purple-600 to-blue-500'} rounded-full p-1.5 shadow-xl`}>
                    <div className="bg-white dark:bg-gray-900 rounded-full px-5 py-3 shadow-inner">
                      <div className="flex flex-col items-center">
                        {exp.isPresent && (
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500 mb-1.5 shadow-lg" />
                        )}
                        <span className={`text-lg font-extrabold ${exp.isPresent ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'}`}>
                          {exp.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Side - Experience Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex-1 bg-white dark:bg-gray-900 rounded-2xl shadow-lg dark:shadow-gray-950/40 p-6 lg:p-8 border-2 border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-4">
                    {exp.image && (
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white p-1.5 border border-gray-200 dark:border-gray-700 shadow-md shrink-0 flex items-center justify-center overflow-hidden">
                        <img
                          src={exp.image}
                          alt={t(`items.experience.${exp.id}.company`, exp.company)}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{t(`items.experience.${exp.id}.position`, exp.position)}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">{t(`items.experience.${exp.id}.company`, exp.company)}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{t(`items.experience.${exp.id}.location`, exp.location)} • {t(`items.experience.${exp.id}.duration`, exp.duration)}</p>
                    </div>
                  </div>
                  {exp.certificates && exp.certificates.length > 0 && (
                    <div className="flex gap-2">
                      {exp.certificates.map((cert, certIdx) => (
                        <a
                          key={certIdx}
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-semibold hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                        >
                          <FaCertificate className="text-xs" />
                          <span>{cert.title}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {t(`items.experience.${exp.id}.description`, exp.description)}
                </p>

                {/* Responsibilities */}
                <div className="space-y-3">
                  {exp.responsibilities.map((resp, respIdx) => (
                    <div key={respIdx} className="p-3 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-100 dark:border-gray-800">
                      <h4 className="text-xs font-bold text-gray-800 dark:text-gray-200 mb-1">
                        {t(`items.experience.${exp.id}.responsibilities.${respIdx}.title`, resp.title)}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                        {t(`items.experience.${exp.id}.responsibilities.${respIdx}.details`, resp.details)}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}

          {featured && (
            <div className="text-center pt-8">
              <Link to="/experience">
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t('experience.viewAll')}
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm">
                {t('experience.showing', { filtered: Math.min(2, experiences.length), total: experiences.length })}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;

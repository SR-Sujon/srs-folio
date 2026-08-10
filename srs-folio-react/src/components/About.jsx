import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const rdServices = [
    {
      key: 'machineLearning',
      icon: '/images/services/ml.svg',
      delay: 100,
    },
    {
      key: 'dataScience',
      icon: '/images/services/eda.svg',
      delay: 200,
    },
    {
      key: 'generativeAI',
      icon: '/images/services/gen-ai.png',
      delay: 300,
    },
    {
      key: 'promptEngineering',
      icon: '/images/services/prompt.png',
      delay: 400,
    },
  ];

  const ddServices = [
    {
      key: 'frontEnd',
      icon: '/images/services/programming.svg',
      delay: 100,
    },
    {
      key: 'backEnd',
      icon: '/images/services/back-end.svg',
      delay: 200,
    },
    {
      key: 'uiux',
      icon: '/images/services/designer.svg',
      delay: 300,
    },
    {
      key: 'appDev',
      icon: '/images/services/app.svg',
      delay: 400,
    },
  ];

  return (
    <section id="about" className="section pt-16 px-4 lg:px-8 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="container-narrow max-w-6xl mx-auto">
        {/* About Me Section */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-32">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100">
              {t('about.title')}
            </h2>
            <div className="relative pl-8 pb-8 border-l-4 border-gray-300 dark:border-gray-700 italic">
              <span className="absolute -left-1 -top-4 text-7xl text-gray-300 dark:text-gray-700 font-serif leading-none">"</span>
              <p className="text-justify text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {t('about.paragraph1')}
              </p>
              <p className="text-justify text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
                {t('about.paragraph2')}
              </p>
              <p className="text-justify text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
                {t('about.paragraph3')}
              </p>
              <span className="absolute -right-5 -bottom-4 text-7xl text-gray-300 dark:text-gray-700 font-serif leading-none">"</span>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="flex flex-col items-center">
              <img
                className="rounded-lg shadow-lg dark:shadow-gray-900 w-full max-w-md object-cover border border-transparent dark:border-gray-800"
                src="/images/about/Profile_1.png"
                alt="Saidur Rahman Sujon"
              />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 italic flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {t('about.photoCaption')}
              </p>
            </div>
          </motion.div>
        </div>

        {/* What I Do Section */}
        <div className="mt-36">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              {t('about.whatIDo.title')}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700 dark:text-gray-300">
              {t('about.whatIDo.subtitle')}
            </p>
          </motion.div>

          {/* Full Stack Development Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16 mb-8"
          >
            <h4 className="text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-gray-200">
              {t('about.whatIDo.fullStack')}
            </h4>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8 justify-items-center">
            {ddServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: service.delay / 1000 }}
                className="text-center flex flex-col items-center p-4 rounded-xl dark:bg-gray-900/60 dark:border dark:border-gray-800 w-full"
              >
                <img
                  className="mb-4 h-24 w-24 object-contain"
                  src={service.icon}
                  alt={t(`about.services.${service.key}`)}
                />
                <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {t(`about.services.${service.key}`)}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Research and Development Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12 mb-8"
          >
            <h4 className="text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-gray-200">
              {t('about.whatIDo.research')}
            </h4>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8 justify-items-center">
            {rdServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: service.delay / 1000 }}
                className="text-center flex flex-col items-center p-4 rounded-xl dark:bg-gray-900/60 dark:border dark:border-gray-800 w-full"
              >
                <img
                  className="mb-4 h-24 w-24 object-contain"
                  src={service.icon}
                  alt={t(`about.services.${service.key}`)}
                />
                <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {t(`about.services.${service.key}`)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { motion } from 'framer-motion';

const About = () => {
  const rdServices = [
    {
      name: 'Machine Learning',
      icon: '/images/services/ml.svg',
      delay: 100,
    },
    {
      name: 'Data Science',
      icon: '/images/services/eda.svg',
      delay: 200,
    },
    {
      name: 'Generative AI',
      icon: '/images/services/gen-ai.png',
      delay: 300,
    },
    {
      name: 'Prompt Engineering',
      icon: '/images/services/prompt.png',
      delay: 400,
    },
  ];

  const ddServices = [
    {
      name: 'Front-End Development',
      icon: '/images/services/programming.svg',
      delay: 100,
    },
    {
      name: 'Back-End Development',
      icon: '/images/services/back-end.svg',
      delay: 200,
    },
    {
      name: 'UI/UX Design',
      icon: '/images/services/designer.svg',
      delay: 300,
    },
    {
      name: 'App Development',
      icon: '/images/services/app.svg',
      delay: 400,
    },
  ];

  return (
    <section id="about" className="section pt-16 px-4 lg:px-8 bg-white">
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-800">
              About Me
            </h2>
            <div className="relative pl-8 pb-8 border-l-4 border-gray-300 italic">
              <span className="absolute -left-1 -top-4 text-7xl text-gray-300 font-serif leading-none">"</span>
              <p className="text-justify text-lg leading-relaxed text-gray-700">
                I'm a software engineer with 2+ years of experience building web applications end-to-end — from polished frontends to robust backend systems. I work primarily with React, Node.js, Java, and PostgreSQL, and I'm equally at home on both sides of the stack.
              </p>
              <p className="text-justify text-lg leading-relaxed text-gray-700 mt-4">
                Currently, I'm based in Tokyo, building and maintaining full-stack solutions for a logistics company — where reliability, scalability, and maintainability aren't afterthoughts, they're the baseline.
              </p>
              <p className="text-justify text-lg leading-relaxed text-gray-700 mt-4">
                Beyond my day job, I actively research AI — with a focus on NLP and generative AI. I've several publications in reputed journals & conferences and build AI-powered apps that go beyond demos into things that are actually useful. Ultimately, I believe technology has the power to reshape how humanity lives, works, and connects — and I want to be part of building that future.
              </p>
              <span className="absolute -right-5 -bottom-4 text-7xl text-gray-300 font-serif leading-none">"</span>
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
                className="rounded-lg shadow-lg w-full max-w-md object-cover"
                src="/images/about/Profile_1.png"
                alt="Saidur Rahman Sujon"
              />
              <p className="mt-2 text-sm text-gray-500 italic flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Mount Takao, Tokyo
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              What I Do
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700">
              I build robust, full-stack web applications from end-to-end—specializing in the MERN stack, Java Spring Boot, and relational databases. Leveraging a strong background in AI research, I also design and implement intelligent machine learning pipelines and NLP solutions that bridge the gap between complex data and real-world utility.
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
            <h4 className="text-2xl lg:text-3xl font-semibold text-gray-800">
              Full Stack Development
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
                className="text-center flex flex-col items-center"
              >
                <img
                  className="mb-4 h-24 w-24 object-contain"
                  src={service.icon}
                  alt={service.name}
                />
                <div className="text-lg font-semibold text-gray-800">
                  {service.name}
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
            <h4 className="text-2xl lg:text-3xl font-semibold text-gray-800">
              Research and Automation
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
                className="text-center flex flex-col items-center"
              >
                <img
                  className="mb-4 h-24 w-24 object-contain"
                  src={service.icon}
                  alt={service.name}
                />
                <div className="text-lg font-semibold text-gray-800">
                  {service.name}
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

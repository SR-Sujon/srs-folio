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
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start mb-32">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
              About Me
            </h2>
            <p className="text-justify text-lg leading-relaxed text-gray-700">
              As a <strong>B.Sc. in Computer Science and Engineering (CSE) graduate</strong>, my professional journey
              has been focused on the roles of a <strong>full-stack developer & AI engineer</strong>. My expertise
              lies in building full-stack web applications with <strong>MERN framework</strong>. Also integrating the
              latest AI technologies, such as <strong>generative AI and applied machine learning</strong>, with
              existing frameworks. Being also proficient in data science, I design optimized <strong>ML
              algorithms </strong>for extracting actionable insights from data. My portfolio spans diverse projects,
              including e-commerce web apps, gen-ai apps and immersive 3D games. My research interest area currently lies
              in <strong>GenAI, NLP, computer vision, and data science.</strong>
            </p>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center md:justify-end"
          >
            <img
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
              src="/images/about/Latest.png"
              alt="Saidur Rahman Sujon"
            />
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
              I develop AI models & pipelines for industry level solution. I
              also design systems & build softwares from Front-end to
              Back-end, especially MERN stack applications, with optimized
              code writing.
            </p>
          </motion.div>

          {/* Research and Development Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12 mb-8"
          >
            <h4 className="text-2xl lg:text-3xl font-semibold text-gray-800">
              Research and Development (R&D)
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

          {/* Design and Development Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16 mb-8"
          >
            <h4 className="text-2xl lg:text-3xl font-semibold text-gray-800">
              Design and Development (D&D)
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
        </div>
      </div>
    </section>
  );
};

export default About;

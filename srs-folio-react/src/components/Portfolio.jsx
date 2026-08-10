import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaYoutube, FaMedium, FaGlobe, FaArrowRight } from 'react-icons/fa';
import { SiStreamlit, SiKaggle } from 'react-icons/si';
import { useLanguage } from '../contexts/LanguageContext';

const Portfolio = ({ featured = false }) => {
  const { t } = useLanguage();
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleExpand = (id) => {
    setExpandedProjects((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const projects = [
    {
      id: 13,
      title: 'Japan Bangladesh Advisory',
      image: '/images/portfolio/freelance/japan_bd_advisory.png',
      duration: '2025.5 - 2025.7',
      description: 'Explore the official digital portal for Japan Bangladesh Advisory, built on a modern React component architecture that delivers a fast, seamless single-page application experience. Styled with Tailwind CSS, the site features a sleek, mobile-responsive user interface with tailored layouts for corporate services, interactive hero carousels, downloadable resources, and expand-on-click FAQ sections. Built-in Google Maps API integration provides instant location details for the main corporate branch in Gulshan, Dhaka, while streamlined contact forms and direct WhatsApp connectivity allow instant client inquiry submissions.',
      technologies: ['React Js', 'Tailwind CSS', 'Google Maps API', 'HTML5', 'SPA'],
      category: 'Web Development',
      links: [
        { type: 'live', url: 'https://www.jbadvisory.org/', icon: FaGlobe, title: 'Live Website' },
      ],
      delay: 400,
    },
    {
      id: 12,
      title: 'Takaramichi',
      image: '/images/portfolio/takaramichi/Takaramichi_Book.JPG',
      duration: '2024.9-2024.10 (1 month)',
      description: 'Takaramichi is a web application designed to streamline the management of inbound accommodation and ski rentals in the popular Japanese resorts of Nozawa Onsen and Hakuba Village. This user-friendly platform simplifies booking, rental management, and customer interactions, tailored specifically for businesses in these regions. Built with React js and Tailwind CSS.',
      technologies: ['React Js', 'HTML5', 'Tailwind CSS', 'Node Js', 'MongoDB'],
      links: [
        { type: 'live', url: 'https://takaramichi.vercel.app/', icon: FaGlobe, title: 'Live Website' },
        { type: 'github', url: 'https://github.com/SR-Sujon/takaramichi', icon: FaGithub, title: 'See GitHub Repo' },
      ],
      delay: 500,
    },
    {
      id: 11,
      title: 'LlamaChirp: Chat with PDF using Local LLMs',
      image: '/images/portfolio/ai/llamachirp.png',
      duration: '2024.4-2024.5 (1 month)',
      description: 'LlamaChirp is an innovative project enabling users to engage in dynamic conversations with PDFs to extract and comprehend information using locally hosted LLM variants of Ollama by integrating Retrieval-Augmented Generation (RAG) techniques. Experience seamless interaction, precise responses, and personalized conversational experiences with LlamaChirp.',
      technologies: ['Chainlit', 'LangChain', 'Ollama', 'ChromaDB', 'RAG', 'Gen-AI', 'LLM', 'Python', 'PyPDF2'],
      links: [
        { type: 'medium', url: 'https://medium.com/@sr.sujon.cyb/llamachirp-chat-with-your-pdf-files-for-free-using-ollama-models-rag-6ac1a4853189', icon: FaMedium, title: 'Read on Medium' },
        { type: 'github', url: 'https://github.com/SR-Sujon/llamachirp', icon: FaGithub, title: 'See GitHub Repo' },
      ],
      delay: 600,
    },
    {
      id: 10,
      title: 'Chatter AI: Chat with Website',
      image: '/images/portfolio/ai/Chatter-Ai Thumbnail.png',
      duration: '2024.3-2024.4 (1 month)',
      description: 'Chatter.AI is a web application that allows you to chat with websites and extract information from them. It uses the OpenAI API and LangChain library to process and understand the content of the website and allow users to interact with it on the Streamlit interface. It has two output formats: JSON and Q/A, including I/O configuration flexibility.',
      technologies: ['Streamlit', 'LangChain', 'OpenAI', 'ChromaDB', 'Gen-AI', 'LLM', 'Python', 'BeautifulSoup', 'RAG'],
      links: [
        { type: 'youtube', url: 'https://youtu.be/zPF2KedHxxU', icon: FaYoutube, title: 'Watch on YouTube' },
        { type: 'github', url: 'https://github.com/SR-Sujon/Chatter-AI', icon: FaGithub, title: 'See GitHub Repo' },
        { type: 'streamlit', url: 'https://chatter-ai.streamlit.app/', icon: SiStreamlit, title: 'Use it on Streamlit CC' },
      ],
      delay: 700,
    },
    {
      id: 9,
      title: 'Job Lagbe',
      image: '/images/portfolio/job-lagbe.PNG',
      duration: '2024.3-2024.6 (3 months)',
      description: 'A job hunting Full-Stack MERN web application that helps candidates find their dream jobs and job recruiters find their best candidates. It is a dynamic React front-end application created using VITE and contains pages: Landing, Error, Register, and Dashboard with seamless page transitions. Established a robust server application using Node.js, Express, MongoDB, including navigating with React Router 6.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'HTML5', 'CSS3'],
      links: [
        { type: 'github', url: 'https://github.com/SR-Sujon/Job-Lagbe/', icon: FaGithub, title: 'See GitHub Repo' },
        { type: 'live', url: 'https://joblagbe.netlify.app/', icon: FaGlobe, title: 'Live Site' },
      ],
      delay: 500,
    },
    {
      id: 7,
      title: 'Stock Price Prediction Using News Sentiment & LSTM',
      image: '/images/portfolio/machine-learning/STMP.PNG',
      duration: '2023.11-2023.12 (1 month)',
      description: 'A hybrid stock forecasting model combining quantitative historical market data of Apple Inc. (AAPL) with qualitative news sentiment analysis. Features data integration using NLTK VADER sentiment analyzer, feature scaling with MinMaxScaler, and a multi-layer LSTM neural network trained with Adam optimizer and MSE loss to predict market trends.',
      technologies: ['LSTM', 'Machine Learning', 'NLP', 'VADER', 'Python', 'Keras', 'NLTK', 'Pandas'],
      category: 'AI & Machine Learning',
      links: [
        { type: 'youtube', url: 'https://youtu.be/ifHkbfKj4C0', icon: FaYoutube, title: 'Watch on YouTube' },
        { type: 'kaggle', url: 'https://www.kaggle.com/code/srsujon/stock-market-price-prediction-based-on-news', icon: SiKaggle, title: 'Lets hover to Kaggle' },
      ],
      delay: 700,
    },
    {
      id: 6,
      title: 'EDA: US-based Retail Store',
      image: '/images/portfolio/data-analytics/EDA.PNG',
      duration: '2023.11-2023.12 (1 month)',
      description: 'Exploratory Data Analysis of a US-based reatil store highlights the sales report with interactive data visualization graphs and charts in PowerBI. This project was an internship task of The Sparks Foundation. Slicers, geographical analysis, matrix, hierarchy, tree map, bar, gauge and pie charts etc. were used to finding valuable insights from the data.',
      technologies: ['Data Analytics', 'PowerBI', 'Excel', 'Data Visualization'],
      links: [
        { type: 'youtube', url: 'https://youtu.be/UzLW6n-iJvE', icon: FaYoutube, title: 'Watch on YouTube' },
        { type: 'github', url: 'https://github.com/SR-Sujon/thesparksfoundation/tree/main/Data Science %26 Business Analytics', icon: FaGithub, title: 'See GitHub Repo' },
      ],
      delay: 500,
    },
    {
      id: 5,
      title: 'Rubiks Realm',
      image: '/images/portfolio/rubiks_realm.PNG',
      duration: '2023.6-2023.8 (3 months)',
      description: 'Fully interactive and customizable 3D Rubik\'s Cube, with options for changing the cube size, flip-type, scramble length, camera angle, and color scheme. keeps track of user statistics, options for starting a new game, resetting the cube, and customizable game settings',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Three.js'],
      links: [
        { type: 'github', url: 'https://github.com/SR-Sujon/Rubiks-Realm', icon: FaGithub, title: 'See GitHub Repo' },
        { type: 'live', url: 'https://rubiksrealm.netlify.app/', icon: FaGlobe, title: 'Lets Play the Game!' },
      ],
      delay: 600,
    },
    {
      id: 4,
      title: 'BharaDibo',
      image: '/images/portfolio/bharadibo.png',
      duration: '2023.2-2023.4 (3 months)',
      description: 'BharaDibo is an ASP.NET MVC 5 web app for renting individual properties, enforcing policy constraints. Admins manage user accounts, product info, and customize features using PHP and MS SQL. It is a valuable tool for efficient rental property management and product discovery for both renters and landlords.',
      technologies: ['ASP.NET MVC 5', 'HTML5', 'CSS3', 'SCSS', 'JavaScript'],
      links: [
        { type: 'github', url: 'https://github.com/SR-Sujon/BharaDibo-1/tree/master', icon: FaGithub, title: 'See GitHub Repo' },
        { type: 'live', url: 'https://github.com/SR-Sujon/BharaDibo-1/tree/master', icon: FaGlobe, title: 'Watch on YouTube' },
      ],
      delay: 700,
    },
    {
      id: 3,
      title: 'Weekend Music Store',
      image: '/images/portfolio/weekend_ms_large.png',
      duration: '2022.6-2022.8 (3 months)',
      description: 'An e-commerce management system for online shopping, created with JavaFX, SceneBuilder on Netbeans; implemented with RDBMS. Multiple dashboards designed for users and admins, Inventory management, Sales Analysis, Product searching, and credit card transaction gateway are implemented. The project is designed to be used for both online and offline shopping as self-service.',
      technologies: ['JavaFX', 'SceneBuilder', 'Netbeans', 'MySQL', 'CSS'],
      links: [
        { type: 'github', url: 'https://github.com/SR-Sujon/University-Projects/tree/main/Weekend%20Music%20Store', icon: FaGithub, title: 'See GitHub Repo' },
        { type: 'youtube', url: 'https://www.youtube.com/watch?v=bNxgYZN0Kgk&t=157s', icon: FaYoutube, title: 'Watch on YouTube' },
      ],
      delay: 500,
    },
    {
      id: 2,
      title: 'Arithmetic Logic Unit Implementation',
      image: '/images/portfolio/hardware/ALU.png',
      duration: '2022.3-2022.6 (3 months)',
      description: 'This project involves building an Arithmetic Logic Unit (ALU) for a Digital System Design lab. The ALU performs binary operations such as addition, carry addition, complement, and AND logic. Essential components include a power adapter, logic board, wires, LED bulbs, and switches. It demonstrates practical implementation of digital logic concepts. The project showcases both hardware integration and functional logic design.',
      technologies: ['Logic Board', 'Power Adapter', 'Wires', 'LED bulbs', 'Switch'],
      links: [
        { type: 'youtube', url: 'https://www.youtube.com/watch?v=YTz-Um-eXAU&ab_channel=AsifMamunHridoy', icon: FaYoutube, title: 'Watch on YouTube' },
      ],
      delay: 600,
    },
    {
      id: 1,
      title: 'Fullmetal Alchemist Redemption',
      image: '/images/portfolio/fmar.jpg',
      duration: '2021.6-2021.8 (3 months)',
      description: 'A 2D Shooting game inspired by the anime Fullmetal, made with igraphics engine using OpenGL library in C and C++. Intuitive keyboard-controlled aiming and movement, firing bullets towards ground and sky enemy fleet, that add a unique challenge, multiple levels, each with different enemy adversaries, health points availability, immersive soundtracks and visuals, easy controls and score board.',
      technologies: ['C#', 'C++', 'iGraphics', 'OpenGL', 'MS Visual Studio'],
      links: [
        { type: 'github', url: 'https://github.com/SR-Sujon/Fullmetal-Alchemist-Redemption', icon: FaGithub, title: 'See GitHub Repo' },
        { type: 'youtube', url: 'https://github.com/SR-Sujon/Fullmetal-Alchemist-Redemption', icon: FaYoutube, title: 'Watch on Youtube' },
      ],
      delay: 700,
    },
    {
      id: 8,
      title: 'RMA agro',
      image: '/images/portfolio/rma_agro.PNG',
      duration: '2024.1-2024.2 (1 month)',
      description: 'RMA Agro is a modern and user-friendly agricultural website built with HTML5, CSS3, and a JavaScript framework, designed to connect consumers directly with farmers for fresh, organic, and high-quality products. This fully responsive platform ensures seamless browsing across all devices, featuring an intuitive UI, a well-organized product catalog, and a secure ordering system. Users can explore a variety of farm-fresh fruits, vegetables, and dairy products.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      links: [
        { type: 'github', url: 'https://github.com/SR-Sujon/RMA_agro', icon: FaGithub, title: 'See GitHub Repo' },
        { type: 'live', url: 'https://sr-sujon.github.io/RMA_agro/', icon: FaGlobe, title: 'Live Site' },
      ],
      delay: 600,
    }
  ];

  const displayedProjects = featured ? projects.slice(0, 6) : projects;

  return (
    <section id="portfolio" className="section pt-16 px-4 lg:px-8 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="container-narrow max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            {t('portfolio.title')}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700 dark:text-gray-300">
            {t('portfolio.subtitle')}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex"
            >
              <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800/80 rounded-xl shadow-lg dark:shadow-gray-950/40 overflow-hidden flex flex-col w-full hover:shadow-xl dark:hover:border-gray-700 transition-all duration-300">
                {/* Image */}
                <div className="relative overflow-hidden h-48 bg-gray-100 dark:bg-gray-800">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    src={project.image}
                    alt={t(`items.portfolio.items.${project.id}.title`, project.title)}
                  />
                  {project.category && (
                    <span className="absolute top-3 right-3 max-w-[85%] truncate px-3 py-1 bg-black/75 backdrop-blur-md text-white text-xs font-semibold rounded-full shadow-md z-10" title={t(`items.portfolio.categories.${project.category}`, project.category)}>
                      {t(`items.portfolio.categories.${project.category}`, project.category)}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Title and Links */}
                  <div className="flex justify-between items-start mb-3 gap-2">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {t(`items.portfolio.items.${project.id}.title`, project.title)}
                    </h3>
                    <div className="flex gap-2 shrink-0">
                      {project.links.map((link, linkIndex) => {
                        const Icon = link.icon;
                        return (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                            title={link.title}
                          >
                            <Icon className="w-5 h-5" />
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  {/* Duration */}
                  <h6 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                    {t('portfolio.duration', { duration: t(`items.portfolio.items.${project.id}.duration`, project.duration) })}
                  </h6>

                  {/* Description */}
                  <div className="mb-4 flex-grow">
                    {(() => {
                      const fullDescription = t(`items.portfolio.items.${project.id}.description`, project.description);
                      const isExpanded = expandedProjects[project.id];
                      const isLong = fullDescription && fullDescription.length > 170;

                      return (
                        <>
                          <motion.div
                            layout
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <p className={`text-gray-700 dark:text-gray-300 text-sm leading-relaxed transition-all duration-300 ${!isExpanded ? 'line-clamp-4' : ''}`}>
                              {fullDescription}
                            </p>
                          </motion.div>
                          {isLong && (
                            <button
                              type="button"
                              onClick={() => toggleExpand(project.id)}
                              className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline focus:outline-none transition-colors"
                            >
                              {isExpanded ? t('portfolio.readLess', 'Show Less ▲') : t('portfolio.readMore', 'Read More ▼')}
                            </button>
                          )}
                        </>
                      );
                    })()}
                  </div>

                  {/* Technologies */}
                  <div className="mt-auto">
                    <ul className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, techIndex) => (
                        <li
                          key={techIndex}
                          className="px-2.5 py-0.5 bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full border border-transparent dark:border-blue-800/40"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* View All Button - Only shown in featured mode */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center pt-8 col-span-full"
            >
              <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t('portfolio.viewAll', { count: projects.length })}
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm">
                {t('portfolio.showing', { filtered: Math.min(6, projects.length), total: projects.length })}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

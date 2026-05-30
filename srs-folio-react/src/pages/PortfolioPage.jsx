import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaYoutube, FaMedium, FaGlobe, FaArrowLeft, FaSearch } from 'react-icons/fa';
import { SiStreamlit, SiKaggle } from 'react-icons/si';
import SEO from '../components/SEO';

const PortfolioPage = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 12,
      title: 'Takaramichi',
      image: '/images/portfolio/takaramichi/Takaramichi_Book.JPG',
      duration: '2024.9-2024.10 (1 month)',
      description: 'Takaramichi is a web application designed to streamline the management of inbound accommodation and ski rentals in the popular Japanese resorts of Nozawa Onsen and Hakuba Village. This user-friendly platform simplifies booking, rental management, and customer interactions, tailored specifically for businesses in these regions. Built with React js and Tailwind CSS.',
      technologies: ['React Js', 'HTML5', 'Tailwind CSS', 'Node Js', 'MongoDB'],
      category: 'Web Development',
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
      category: 'AI & Machine Learning',
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
      category: 'AI & Machine Learning',
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
      category: 'Web Development',
      links: [
        { type: 'github', url: 'https://github.com/SR-Sujon/Job-Lagbe/', icon: FaGithub, title: 'See GitHub Repo' },
        { type: 'live', url: 'https://joblagbe.netlify.app/', icon: FaGlobe, title: 'Live Site' },
      ],
      delay: 500,
    },
    {
      id: 8,
      title: 'RMA agro',
      image: '/images/portfolio/rma_agro.PNG',
      duration: '2024.1-2024.2 (1 month)',
      description: 'RMA Agro is a modern and user-friendly agricultural website built with HTML5, CSS3, and a JavaScript framework, designed to connect consumers directly with farmers for fresh, organic, and high-quality products. This fully responsive platform ensures seamless browsing across all devices, featuring an intuitive UI, a well-organized product catalog, and a secure ordering system. Users can explore a variety of farm-fresh fruits, vegetables, and dairy products.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      category: 'Web Development',
      links: [
        { type: 'github', url: 'https://github.com/SR-Sujon/RMA_agro', icon: FaGithub, title: 'See GitHub Repo' },
        { type: 'live', url: 'https://sr-sujon.github.io/RMA_agro/', icon: FaGlobe, title: 'Live Site' },
      ],
      delay: 600,
    },
    {
      id: 7,
      title: 'ML: Stock Market Price Prediction',
      image: '/images/portfolio/machine-learning/STMP.PNG',
      duration: '2023.11-2023.12 (1 month)',
      description: 'Unveiling stock market trends thorugh news report analysis and price prediction using numerical and textual data. Machine Learning methods like Feature Engineering, Data Preprocessing, Modeling, Evaluation and Plotting etc. were implemented in this project. The final output shows the predicted trends with the testing close price with greater accuracy.',
      technologies: ['Machine Learning', 'NLP', 'NumPy', 'Pandas', 'Seaborn', 'Matplotlib', 'Keras', 'NLTK'],
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
      category: 'Data Analytics',
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
      category: 'Web Development',
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
      category: 'Web Development',
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
      category: 'Desktop Application',
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
      category: 'Hardware',
      links: [
        { type: 'youtube', url: 'https://www.youtube.com/watch?v=YTz-Um-eXAU&ab_channel=AsifMamunHridoy', icon: FaYoutube, title: 'Watch on YouTube' },
      ],
      delay: 600,
    },
    {
      id: 1,
      title: 'Fullmetal Alchemist Redemption',
      image: '/images/portfolio/fmar.bmp',
      duration: '2021.6-2021.8 (3 months)',
      description: 'A 2D Shooting game inspired by the anime Fullmetal, made with igraphics engine using OpenGL library in C and C++. Intuitive keyboard-controlled aiming and movement, firing bullets towards ground and sky enemy fleet, that add a unique challenge, multiple levels, each with different enemy adversaries, health points availability, immersive soundtracks and visuals, easy controls and score board.',
      technologies: ['C#', 'C++', 'iGraphics', 'OpenGL', 'MS Visual Studio'],
      category: 'Game Development',
      links: [
        { type: 'github', url: 'https://github.com/SR-Sujon/Fullmetal-Alchemist-Redemption', icon: FaGithub, title: 'See GitHub Repo' },
        { type: 'youtube', url: 'https://github.com/SR-Sujon/Fullmetal-Alchemist-Redemption', icon: FaYoutube, title: 'Watch on Youtube' },
      ],
      delay: 700,
    },
  ];

  const categories = ['All', 'Web Development', 'AI & Machine Learning', 'Data Analytics', 'Desktop Application', 'Hardware', 'Game Development'];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === 'All' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO 
        title="Portfolio - SR Sujon | All Projects & Work"
        description="Explore all projects by Saidur Rahman Sujon including web applications, AI/ML projects, data analytics, hardware implementations, and game development. Full portfolio with live demos and source code."
        keywords="portfolio, projects, web development, AI projects, machine learning, MERN stack, React projects, data analytics, hardware projects"
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Complete Portfolio</h1>
              <p className="text-xl text-gray-100 mb-2">Showcasing {projects.length} projects across multiple domains</p>
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
                placeholder="Search projects by name, description, or technology..."
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
            Showing {filteredProjects.length} of {projects.length} projects
          </motion.p>

          {/* Projects Grid */}
          <div className="space-y-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gray-100"
              >
                <div className="grid md:grid-cols-3 gap-6 p-6">
                  {/* Project Image */}
                  <div className="md:col-span-1">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-full object-cover rounded-xl"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      {/* Category Badge */}
                      <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">
                        {project.category}
                      </span>
                      
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-500 mb-3">{project.duration}</p>
                      <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3">
                      {project.links.map((link, idx) => {
                        const Icon = link.icon;
                        return (
                          <motion.a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
                            title={link.title}
                          >
                            <Icon className="text-lg" />
                            {link.title}
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No projects found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;

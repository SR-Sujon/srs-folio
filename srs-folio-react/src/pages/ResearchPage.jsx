import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaGithub, FaYoutube, FaAward, FaSearch } from 'react-icons/fa';
import { SiResearchgate, SiGooglescholar, SiArxiv, SiElsevier, SiMendeley } from 'react-icons/si';
import SEO from '../components/SEO';

const ResearchPage = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const publications = [
    {
      id: 1,
      type: 'Dataset',
      title: 'Bengali Social Media Depressive Dataset (BSMDD)',
      venue: 'Mendeley Data',
      date: 'Published: 14 October 2024',
      version: 'Version 1',
      doi: '10.17632/pdtyb7df6z.1',
      image: '/images/publications/Mendeley_Logo_Vertical.png',
      description: 'Our dataset, BSMDD, was collected from various open social media platforms and translated and annotated by native Bengali speakers with expertise in both language and mental health. It contains 21,910 cleaned samples, including 10,961 labeled as Depressed and 10,949 as Non-Depressed. The dataset is publicly accessible, providing a valuable resource for further research in depression detection in Bengali social media content. The expert annotation process, conducted by professionals, ensures high validity, making BSMDD particularly important for advancing mental health research through social media analysis.',
      tags: ['Mental Health', 'Data Science', 'Bengali NLP', 'Social Media Data', 'GenAI', 'Explainable-AI', 'Psychology'],
      links: [
        { icon: SiResearchgate, title: 'ResearchGate', url: 'https://www.researchgate.net/publication/384660753_Bengali_Social_Media_Depressive_Dataset_BSMDD', color: '#00796B' },
        { icon: SiMendeley, title: 'Mendeley Data', url: 'https://data.mendeley.com/datasets/pdtyb7df6z/1', color: '#9D1620' },
        { icon: SiGooglescholar, title: 'Google Scholar', url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=6_LoU_kAAAAJ&citation_for_view=6_LoU_kAAAAJ:d1gkVwhDpl0C', color: '#4285F4' },
        { icon: SiArxiv, title: 'arXiv', url: 'https://arxiv.org/html/2401.07310v1', color: '#B31B1B' },
        { icon: FaGithub, title: 'GitHub', url: 'https://github.com/SR-Sujon/Harnessing-LLMs-over-transformer-models-for-detecting-Bengali-depressive-text-A-comprehensive-study', color: '#181717' }
      ],
      gradient: 'from-purple-500 via-pink-500 to-red-500'
    },
    {
      id: 2,
      type: 'Research Paper',
      title: 'Harnessing Large Language Models Over Transformer Models for Detecting Bengali Depressive Social Media Text: A Comprehensive Study',
      venue: 'Natural Language Processing Journal | ELSEVIER',
      date: 'Volume 7, June 2024, 100075',
      image: '/images/publications/ELSEVIER_NLP.png',
      description: 'This study focuses on early detection of depression, particularly in extroverted social media users, using LLMs such as GPT 3.5, GPT 4 and our proposed GPT 3.5 fine-tuned model DepGPT, as well as advanced Deep learning models(LSTM, Bi-LSTM, GRU, BiGRU) and Transformer models(BERT, BanglaBERT, SahajBERT, BanglaBERT-Base). The study categorized Reddit and X datasets into "Depressive" and "Non-Depressive" segments, translated into Bengali by native speakers with expertise in mental health, resulting in the creation of the Bengali Social Media Depressive Dataset (BSMDD).',
      tags: ['LLMs', 'Transformers', 'Deep Learning', 'Prompt Engineering', 'Fine-tuning', 'Explainable-AI', 'Psychology', 'GenAI'],
      links: [
        { icon: SiResearchgate, title: 'ResearchGate', url: 'https://www.researchgate.net/publication/380628761_Harnessing_large_language_models_over_transformer_models_for_detecting_Bengali_depressive_social_media_text_A_comprehensive_study', color: '#00796B' },
        { icon: SiElsevier, title: 'ELSEVIER', url: 'https://www.sciencedirect.com/science/article/pii/S2949719124000232?via%3Dihub', color: '#FF6C00' },
        { icon: SiGooglescholar, title: 'Google Scholar', url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=6_LoU_kAAAAJ&citation_for_view=6_LoU_kAAAAJ:d1gkVwhDpl0C', color: '#4285F4' },
        { icon: SiArxiv, title: 'arXiv', url: 'https://arxiv.org/html/2401.07310v1', color: '#B31B1B' },
        { icon: FaAward, title: 'Proof of Acceptance', url: 'https://drive.google.com/file/d/1cveaaJXQnT5mTy_pQ6J-c_jRw8dwj7Ij/view?usp=sharing', color: '#D97706' },
        { icon: FaYoutube, title: 'Video Demo', url: 'https://youtu.be/re6NRP1HtE0', color: '#FF0000' },
        { icon: FaGithub, title: 'GitHub', url: 'https://github.com/SR-Sujon/Harnessing-LLMs-over-transformer-models-for-detecting-Bengali-depressive-text-A-comprehensive-study', color: '#181717' }
      ],
      gradient: 'from-blue-500 via-cyan-500 to-teal-500'
    }
  ];

  const types = ['All', 'Research Paper', 'Dataset'];

  const filteredPublications = publications.filter(pub => {
    const matchesType = filter === 'All' || pub.type === filter;
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesType && matchesSearch;
  });

  return (
    <>
      <SEO 
        title="Research & Publications - SR Sujon | Academic Work"
        description="Academic research and publications by Saidur Rahman Sujon in AI, NLP, and Mental Health. Published in ELSEVIER Natural Language Processing Journal, featuring Bengali depression detection using LLMs and BSMDD dataset."
        keywords="research publications, academic papers, AI research, NLP, mental health AI, ELSEVIER, Bengali NLP, depression detection, LLM research, BSMDD dataset"
      />

      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Research & Publications</h1>
              <p className="text-xl text-gray-100">Academic contributions to AI and NLP in Mental Health</p>
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
                placeholder="Search publications by title, tags, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pl-12 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 text-gray-800"
              />
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            </div>

            {/* Type Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {types.map((type) => (
                <motion.button
                  key={type}
                  onClick={() => setFilter(type)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    filter === type
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-400'
                  }`}
                >
                  {type}
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
            Showing {filteredPublications.length} of {publications.length} publications
          </motion.p>

          {/* Publications */}
          <div className="space-y-12">
            {filteredPublications.map((pub, index) => (
              <motion.article
                key={pub.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100"
              >
                {/* Gradient Top Bar */}
                <div className={`h-3 bg-gradient-to-r ${pub.gradient}`}></div>

                <div className="p-8 lg:p-10">
                  <div className="grid lg:grid-cols-4 gap-8">
                    {/* Left Side - Logo/Image */}
                    <div className="lg:col-span-1">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${pub.gradient} blur-xl opacity-30 rounded-2xl`}></div>
                        <div className="relative bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
                          <img 
                            src={pub.image} 
                            alt={pub.venue}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </motion.div>

                      {/* Type Badge */}
                      <div className="mt-6 text-center">
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold">
                          {pub.type}
                        </span>
                      </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="lg:col-span-3">
                      {/* Title */}
                      <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3 leading-tight">
                        {pub.title}
                      </h2>

                      {/* Venue & Date */}
                      <div className="mb-4">
                        <p className="text-lg font-semibold text-blue-600">{pub.venue}</p>
                        <p className="text-sm text-gray-600">{pub.date}</p>
                        {pub.version && <p className="text-sm text-gray-500">{pub.version}</p>}
                        {pub.doi && <p className="text-sm text-gray-500 font-mono">DOI: {pub.doi}</p>}
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {pub.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {pub.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap gap-3">
                        {pub.links.map((link, idx) => {
                          const Icon = link.icon;
                          return (
                            <motion.a
                              key={idx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center gap-2 px-5 py-2.5 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
                              style={{ backgroundColor: link.color }}
                            >
                              <Icon className="text-lg" />
                              {link.title}
                            </motion.a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* No Results */}
          {filteredPublications.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No publications found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default ResearchPage;

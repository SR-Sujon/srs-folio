import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaBookOpen, 
  FaDatabase, 
  FaGithub, 
  FaYoutube, 
  FaExternalLinkAlt,
  FaQuoteLeft,
  FaAward,
  FaArrowRight
} from 'react-icons/fa';
import { 
  SiResearchgate, 
  SiGooglescholar, 
  SiArxiv,
  SiElsevier,
  SiMendeley
} from 'react-icons/si';

const Research = ({ featured = false }) => {
  const publications = [
    {
      id: 1,
      type: 'dataset',
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
      type: 'paper',
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

  return (
    <section id="research" className="section px-4 lg:px-8 pt-20 pb-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Academic Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 40px),
                            repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 40px)`,
        }}></div>
      </div>

      {/* Floating Academic Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <FaBookOpen className="text-6xl text-blue-600 mx-auto" />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -inset-4 bg-blue-400 rounded-full blur-xl"
              />
            </div>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Research & Publications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Contributing to the advancement of AI and Natural Language Processing in Mental Health Research
          </p>
        </motion.div>

        {/* Publications Grid */}
        <div className="space-y-16">
          {(featured ? publications.slice(0, 2) : publications).map((pub, index) => (
            <motion.article
              key={pub.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative"
            >
              {/* Publication Card */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100"
              >
                {/* Gradient Top Bar */}
                <div className={`h-3 bg-gradient-to-r ${pub.gradient}`}></div>

                <div className="p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Side - Badge/Logo */}
                    <div className="flex flex-col items-center gap-4 lg:w-64 shrink-0">
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 2 }}
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
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                        className={`px-6 py-2 rounded-full bg-gradient-to-r ${pub.gradient} text-white font-semibold shadow-lg uppercase text-sm tracking-wide`}
                      >
                        {pub.type === 'dataset' ? (
                          <><FaDatabase className="inline mr-2" />Dataset</>
                        ) : (
                          <><FaBookOpen className="inline mr-2" />Journal</>
                        )}
                      </motion.div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex-1">
                      {/* Title */}
                      <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.2 }}
                        className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 leading-tight"
                        style={{ fontFamily: 'Georgia, serif' }}
                      >
                        {pub.title}
                      </motion.h3>

                      {/* Venue and Date */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                        className="mb-4"
                      >
                        <p className="text-lg font-semibold text-blue-600 mb-1">{pub.venue}</p>
                        <p className="text-sm text-gray-600">
                          {pub.date} {pub.version && `| ${pub.version}`}
                        </p>
                        {pub.doi && (
                          <p className="text-sm text-gray-500 mt-1">
                            <span className="font-semibold">DOI:</span> {pub.doi}
                          </p>
                        )}
                      </motion.div>

                      {/* Description */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.4 }}
                        className="mb-6"
                      >
                        <div className="relative pl-6 border-l-4 border-blue-300">
                          <FaQuoteLeft className="absolute -left-2 -top-1 text-blue-300 text-xl" />
                          <p className="text-gray-700 leading-relaxed italic">
                            {pub.description}
                          </p>
                        </div>
                      </motion.div>

                      {/* Tags */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.5 }}
                        className="mb-6"
                      >
                        <div className="flex flex-wrap gap-2">
                          {pub.tags.map((tag, i) => (
                            <motion.span
                              key={i}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className={`px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${pub.gradient} shadow-md`}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>

                      {/* Links */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.6 }}
                        className="border-t-2 border-gray-100 pt-6"
                      >
                        <h4 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wide">
                          Access & Resources
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {pub.links.map((link, i) => {
                            const Icon = link.icon;
                            return (
                              <motion.a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative flex items-center gap-2 px-4 py-3 rounded-xl text-white font-medium text-sm transition-all duration-300 shadow-md hover:shadow-xl"
                                style={{ backgroundColor: link.color }}
                                title={link.title}
                              >
                                <Icon className="text-lg" />
                                <span className="hidden sm:inline">{link.title}</span>
                                <FaExternalLinkAlt className="text-xs opacity-70 group-hover:opacity-100" />
                                
                                {/* Shine effect on hover */}
                                <motion.div
                                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-xl"
                                  whileHover={{ opacity: 0.2 }}
                                  transition={{ duration: 0.3 }}
                                />
                              </motion.a>
                            );
                          })}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Academic Corner */}
              <motion.div
                initial={{ opacity: 0, rotate: 0 }}
                whileInView={{ opacity: 1, rotate: 45 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.7 }}
                className={`absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br ${pub.gradient} rounded-lg opacity-20`}
              />
            </motion.article>
          ))}

          {/* View All Button - Only shown in featured mode */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center pt-8"
            >
              <Link to="/research">
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View All Publications
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <p className="text-gray-500 mt-3 text-sm">
                Showing {Math.min(2, publications.length)} of {publications.length} publications
              </p>
            </motion.div>
          )}
        </div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-1">
            <div className="bg-white rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                Research Impact
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our research contributes to the critical field of mental health detection using cutting-edge AI technologies. 
                By developing novel approaches for detecting depression in Bengali social media text, we're helping bridge 
                the gap in low-resource language NLP and making mental health detection more accessible globally.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Research;

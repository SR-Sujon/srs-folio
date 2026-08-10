import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPaperPlane,
  FaWhatsapp,
  FaBriefcase,
  FaGraduationCap,
  FaDownload,
  FaBookOpen
} from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: FaEnvelope,
      labelKey: 'email',
      value: 'sr.sujon.cyb@gmail.com',
      link: 'mailto:sr.sujon.cyb@gmail.com',
      color: '#EA4335'
    },
    {
      icon: FaWhatsapp,
      labelKey: 'whatsapp',
      value: '+880-1729-545654',
      link: 'https://wa.me/8801729545654',
      color: '#25D366'
    },
    {
      icon: FaMapMarkerAlt,
      labelKey: 'location',
      value: 'Tokyo, Japan',
      link: 'https://maps.google.com/?q=Tokyo,Japan',
      color: '#EA4335'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/mqakojka', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section px-4 lg:px-8 pt-20 pb-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 dark:bg-blue-950/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 dark:bg-purple-950/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      
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
              <FaPaperPlane className="text-6xl text-blue-600 dark:text-blue-400 mx-auto" />
            </div>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* Top 2-Column Grid: Form & Opportunity Hub */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-12">
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full"
          >
            <div className="bg-white dark:bg-gray-900/90 rounded-3xl shadow-xl dark:shadow-gray-950/50 p-6 sm:p-8 lg:p-10 border-2 border-gray-100 dark:border-gray-800 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 font-sans">{t('contact.formTitle')}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 font-sans">{t('contact.formSubtitle')}</p>

                <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                      {t('contact.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700/80 bg-gray-50/50 dark:bg-gray-800/80 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 outline-none transition-all duration-200 text-sm font-sans"
                      placeholder={t('contact.namePlaceholder')}
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                      {t('contact.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700/80 bg-gray-50/50 dark:bg-gray-800/80 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 outline-none transition-all duration-200 text-sm font-sans"
                      placeholder={t('contact.emailPlaceholder')}
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                      {t('contact.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700/80 bg-gray-50/50 dark:bg-gray-800/80 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 outline-none transition-all duration-200 text-sm font-sans resize-none"
                      placeholder={t('contact.messagePlaceholder')}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3.5 rounded-xl font-semibold text-white text-base shadow-lg transition-all duration-200 flex items-center justify-center gap-3 font-sans
                      ${isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl'
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        {t('contact.sending')}
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        {t('contact.send')}
                      </>
                    )}
                  </motion.button>

                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3.5 rounded-xl bg-green-100 border border-green-500 text-green-700 text-xs font-medium font-sans"
                    >
                      {t('contact.success')}
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3.5 rounded-xl bg-red-100 border border-red-500 text-red-700 text-xs font-medium font-sans"
                    >
                      {t('contact.error')}
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Opportunities & Research Hub */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full"
          >
            <div className="bg-gradient-to-br from-blue-50/90 via-purple-50/60 to-indigo-50/90 dark:from-blue-950/40 dark:via-purple-950/30 dark:to-indigo-950/40 rounded-3xl p-6 sm:p-8 border-2 border-blue-100 dark:border-gray-800 shadow-xl dark:shadow-gray-950/40 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 font-sans">{t('contact.talkTitle')}</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed font-sans">
                  {t('contact.talkSubtitle')}
                </p>

                <div className="space-y-4 font-sans">
                  {/* Pillar 1: Industry Recruiters */}
                  <div className="bg-white/90 dark:bg-gray-900/90 rounded-2xl p-4 sm:p-5 border border-blue-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 shrink-0">
                        <FaBriefcase className="text-base" />
                      </div>
                      <h4 className="font-bold text-gray-800 dark:text-gray-100 text-sm sm:text-base font-sans">
                        {t('contact.industryTitle')}
                      </h4>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-3 font-sans">
                      {t('contact.industryDesc')}
                    </p>
                    <a
                      href="/documents/SR_Sujon_CV.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-sm hover:shadow transition-all duration-200 font-sans"
                    >
                      <FaDownload className="text-xs" />
                      {t('contact.industryBadge')}
                    </a>
                  </div>

                  {/* Pillar 2: PhD Supervisors */}
                  <div className="bg-white/90 dark:bg-gray-900/90 rounded-2xl p-4 sm:p-5 border border-purple-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 shrink-0">
                        <FaGraduationCap className="text-base" />
                      </div>
                      <h4 className="font-bold text-gray-800 dark:text-gray-100 text-sm sm:text-base font-sans">
                        {t('contact.academicTitle')}
                      </h4>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-3 font-sans">
                      {t('contact.academicDesc')}
                    </p>
                    <Link
                      to="/research"
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-xs font-semibold rounded-lg shadow-sm hover:shadow transition-all duration-200 font-sans"
                    >
                      <FaBookOpen className="text-xs" />
                      {t('contact.academicBadge')}
                    </Link>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-xs font-bold text-blue-600 dark:text-blue-400 text-center tracking-wide font-sans">
                {t('contact.talkCta')}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Horizontal Bar: Contact Cards (Email, WhatsApp, Location) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 font-sans"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-5 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-800 group"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl shadow-md group-hover:scale-110 transition-transform duration-300 shrink-0"
                  style={{ backgroundColor: info.color }}
                >
                  <Icon />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider font-sans">
                    {t(`contact.labels.${info.labelKey}`)}
                  </div>
                  <div className="text-gray-800 dark:text-gray-100 font-semibold text-xs sm:text-sm mt-0.5 truncate font-sans">
                    {info.value}
                  </div>
                </div>
              </motion.a>
            );
          })}
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

export default Contact;

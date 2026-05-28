import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPaperPlane,
  FaSkype,
  FaWhatsapp
} from 'react-icons/fa';

const Contact = () => {
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
      label: 'Email',
      value: 'sr.sujon.cyb@gmail.com',
      link: 'mailto:sr.sujon.cyb@gmail.com',
      color: '#EA4335'
    },
    {
      icon: FaSkype,
      label: 'Skype',
      value: 'live:.cid.898ae0f212f36140',
      link: 'skype:live:.cid.898ae0f212f36140?chat',
      color: '#00AFF0'
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: '+880-1729-545654',
      link: 'https://wa.me/8801729545654',
      color: '#25D366'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
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
    <section id="contact" className="section px-4 lg:px-8 pt-20 pb-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      
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
              <FaPaperPlane className="text-6xl text-blue-600 mx-auto" />
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
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border-2 border-gray-100">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Send me a message</h3>
                <p className="text-gray-600">Fill out the form below and I'll get back to you as soon as possible.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold text-white text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-3
                    ${isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl'
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-green-100 border-2 border-green-500 text-green-700 font-medium"
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-red-100 border-2 border-red-500 text-red-700 font-medium"
                  >
                    ✗ Oops! Something went wrong. Please try again.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Let's Talk Section */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border-2 border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Let's talk how I can help you!</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  If you like my work and want to avail my services then drop me a message using the contact form.
                </p>
                <p>
                  Or get in touch using my email, Skype or WhatsApp number.
                </p>
                <p className="font-semibold text-blue-600">See you! 👋</p>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, x: 5 }}
                    className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 group"
                  >
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl shadow-md group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: info.color }}
                    >
                      <Icon />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        {info.label}
                      </div>
                      <div className="text-gray-800 font-semibold mt-1">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
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

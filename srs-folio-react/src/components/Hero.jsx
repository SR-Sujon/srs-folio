import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaPaperclip, FaPaperPlane } from 'react-icons/fa';
import SocialLinks from './SocialLinks';

const Hero = () => {
  return (
    <section className="section bg-gray-50 relative" id="home">
      <div className="cover">
        <div className="container mx-auto px-3 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Illustration */}
            <motion.div
              className="p-2 order-2 lg:order-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                className="w-full h-auto"
                src="/images/illustrations/computer_with_person.svg"
                alt="An animated image of Working on desktop computer"
              />
            </motion.div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2">
              <div className="mt-5 text-left">
                {/* Welcome Text */}
                <motion.p
                  className="text-sm md:text-base uppercase mb-1 font-extrabold tracking-wide text-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Hi, Welcome to my website!
                </motion.p>

                {/* Typing Animation Title */}
                <motion.h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    <TypeAnimation
                      sequence={[
                        "I'm Saidur Rahman Sujon",
                        2000,
                        "I'm a Full-Stack Developer",
                        2000,
                        "I'm an AI Engineer",
                        2000,
                        "I'm a Researcher",
                        2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  className="text-base md:text-lg font-normal mt-3 mb-3 text-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <strong>Full-Stack Developer | AI Engineer | Researcher</strong>
                </motion.p>

                {/* Social Links */}
                <motion.div
                  className="my-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <SocialLinks />
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  className="mt-6 flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <a
                    href="/files/CV/SRS_CVS_Latest.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2"
                  >
                    Download CV
                    <FaPaperclip className="w-4 h-4" />
                  </a>
                  <a
                    href="#contact"
                    className="btn-primary flex items-center gap-2"
                  >
                    Get In Touch
                    <FaPaperPlane className="w-4 h-4" />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-home"></div>
    </section>
  );
};

export default Hero;

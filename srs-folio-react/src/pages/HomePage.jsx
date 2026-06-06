import { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Portfolio from '../components/Portfolio';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Research from '../components/Research';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="SR Sujon - Software Engineer | Full Stack Developer | AI Researcher"
        description="Saidur Rahman Sujon - Software Engineer with 2+ years of experience building full-stack web applications. Based in Tokyo, specializing in React, Node.js, Java, PostgreSQL, NLP, and Generative AI. Published AI researcher with industry experience in logistics technology."
        keywords="Saidur Rahman Sujon, SR Sujon, Software Engineer, Full Stack Developer, React, Node.js, Java, PostgreSQL, AI Researcher, NLP, Generative AI, Tokyo, Machine Learning, Web Development, MERN Stack, AI Engineer, Portfolio"
      />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Portfolio featured={true} />
      <Experience featured={true} />
      <Certifications featured={true} />
      <Research featured={true} />
      <Contact />
    </>
  );
};

export default HomePage;

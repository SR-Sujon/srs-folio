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
        title="SR Sujon - Full Stack Developer | AI Engineer | Researcher"
        description="Portfolio of Saidur Rahman Sujon - Full Stack Developer, AI Engineer, and Researcher specializing in React, Node.js, Machine Learning, and Data Analytics. View my projects, research publications, and professional experience."
        keywords="Saidur Rahman Sujon, SR Sujon, Full Stack Developer, AI Engineer, Machine Learning, React Developer, Node.js, MERN Stack, Data Analytics, Researcher, Portfolio"
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

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
import { useLanguage } from '../contexts/LanguageContext';

const HomePage = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title={t('seo.home.title')}
        description={t('seo.home.description')}
        keywords={t('seo.home.keywords')}
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

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

  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://sr-sujon.com/#website',
        'url': 'https://sr-sujon.com/',
        'name': 'Saidur Rahman Sujon - Portfolio & Author',
        'description': 'Software Engineer, Solution Architect, and Author of Architecting for Scale & Chaos',
        'publisher': {
          '@id': 'https://sr-sujon.com/#person'
        }
      },
      {
        '@type': 'Person',
        '@id': 'https://sr-sujon.com/#person',
        'name': 'Saidur Rahman Sujon',
        'url': 'https://sr-sujon.com/',
        'image': 'https://sr-sujon.com/images/about/srs_portfolio_pl_1.jpeg',
        'jobTitle': 'Software Engineer & Solution Architect',
        'sameAs': [
          'https://github.com/SR-Sujon',
          'https://sujoncyb.gumroad.com/l/the-solution-architects-handbook',
          'https://scholar.google.com/citations?user=6_LoU_kAAAAJ'
        ],
        'author': [
          {
            '@type': 'Book',
            'name': 'Architecting for Scale & Chaos',
            'url': 'https://sujoncyb.gumroad.com/l/the-solution-architects-handbook'
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO 
        title={t('seo.home.title')}
        description={t('seo.home.description')}
        keywords={t('seo.home.keywords')}
        canonicalUrl="https://sr-sujon.com/"
        schema={homeSchema}
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

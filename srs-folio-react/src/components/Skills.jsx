import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  FaReact, 
  FaNodeJs, 
  FaJava, 
  FaDocker,
  FaGitAlt,
  FaPython,
  FaBrain,
  FaRobot,
  FaDatabase,
  FaChartLine
} from 'react-icons/fa';
import { 
  SiPostgresql, 
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiSpringboot,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiKeras
} from 'react-icons/si';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { t } = useLanguage();

  const levelMap = {
    'Beginner': { value: 20, segments: 2 },
    'Intermediate': { value: 40, segments: 4 },
    'Advanced': { value: 60, segments: 6 },
    'Expert': { value: 80, segments: 8 },
    'Master': { value: 100, segments: 10 }
  };

  const softwareEngineeringSkills = [
    { name: 'React.js', icon: FaReact, level: 'Expert', color: '#61DAFB' },
    { name: 'Node.js', icon: FaNodeJs, level: 'Expert', color: '#339933' },
    { name: 'Java', icon: FaJava, level: 'Advanced', color: '#007396' },
    { name: 'PostgreSQL', icon: SiPostgresql, level: 'Advanced', color: '#336791' },
    { name: 'TypeScript', icon: SiTypescript, level: 'Advanced', color: '#3178C6' },
    { name: 'Spring Boot', icon: SiSpringboot, level: 'Advanced', color: '#6DB33F' },
    { name: 'MongoDB', icon: SiMongodb, level: 'Advanced', color: '#47A248' },
    { name: 'Express.js', icon: SiExpress, level: 'Advanced', color: '#000000' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Advanced', color: '#06B6D4' },
    { name: 'Docker', icon: FaDocker, level: 'Intermediate', color: '#2496ED' },
    { name: 'Git', icon: FaGitAlt, level: 'Expert', color: '#F05032' }
  ];

  const researchSkills = [
    { name: 'Python', icon: FaPython, level: 'Master', color: '#3776AB' },
    { name: 'TensorFlow', icon: SiTensorflow, level: 'Expert', color: '#FF6F00' },
    { name: 'PyTorch', icon: SiPytorch, level: 'Advanced', color: '#EE4C2C' },
    { name: 'NLP', icon: FaBrain, level: 'Expert', color: '#8B5CF6' },
    { name: 'Scikit-learn', icon: SiScikitlearn, level: 'Expert', color: '#F7931E' },
    { name: 'Pandas', icon: SiPandas, level: 'Expert', color: '#150458' },
    { name: 'NumPy', icon: SiNumpy, level: 'Expert', color: '#013243' },
    { name: 'Generative AI', icon: FaRobot, level: 'Advanced', color: '#10B981' },
    { name: 'Keras', icon: SiKeras, level: 'Advanced', color: '#D00000' },
    { name: 'Jupyter', icon: SiJupyter, level: 'Expert', color: '#F37626' },
    { name: 'Data Analytics', icon: FaChartLine, level: 'Advanced', color: '#3B82F6' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const renderSkillItem = (skill, index, delay) => {
    const Icon = skill.icon;
    const levelData = levelMap[skill.level];
    const totalSegments = 10;
    const filledSegments = levelData.segments;
    
    return (
      <div 
        key={index} 
        className={`space-y-3 transition-all duration-700 group cursor-pointer ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: `${delay + index * 100}ms` }}
      >
        <div className="flex items-center gap-3">
          <Icon 
            className="text-2xl flex-shrink-0 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" 
            style={{ color: skill.color }} 
          />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-700 transition-colors duration-300 group-hover:text-gray-900">
                {skill.name}
              </span>
              <span 
                className="text-xs text-white font-semibold px-2 py-0.5 rounded-full transition-all duration-300 group-hover:px-3 group-hover:shadow-lg" 
                style={{ backgroundColor: skill.color }}
              >
                {t(`skills.levels.${skill.level}`)}
              </span>
            </div>
          </div>
        </div>
        
        {/* 3D Segmented Progress Bar */}
        <div className="flex gap-1">
          {Array.from({ length: totalSegments }).map((_, segIndex) => {
            const isFilled = segIndex < filledSegments;
            return (
              <div
                key={segIndex}
                className={`flex-1 h-5 rounded-sm relative overflow-hidden transition-all duration-300 ${
                  isFilled ? 'shadow-md group-hover:shadow-xl group-hover:scale-105' : 'shadow-inner'
                }`}
                style={{
                  backgroundColor: isFilled ? skill.color : '#e5e7eb',
                  transitionDelay: `${delay + index * 100 + segIndex * 50}ms`,
                  transform: isVisible && isFilled ? 'scaleY(1)' : 'scaleY(0)',
                  transformOrigin: 'bottom'
                }}
              >
                {/* 3D highlight effect */}
                {isFilled && (
                  <>
                    <div 
                      className="absolute top-0 left-0 right-0 h-1/3 opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                      style={{ backgroundColor: 'white' }}
                    />
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-1/3 opacity-20 transition-opacity duration-300"
                      style={{ backgroundColor: 'black' }}
                    />
                    {/* Glow effect on hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                      style={{ 
                        backgroundColor: 'white',
                        filter: 'blur(4px)'
                      }}
                    />
                  </>
                )}
                {/* Inner border for 3D effect */}
                <div className={`absolute inset-0 border ${isFilled ? 'border-white/20' : 'border-gray-300/50'}`} />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section 
      id="skills" 
      className="section pt-16 px-4 lg:px-8 bg-gray-50"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div 
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="space-y-12">
          {/* Software Engineering Section */}
          <div 
            className={`bg-white rounded-lg shadow-md p-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <FaDatabase className="text-3xl text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800">
                {t('skills.softwareEngineering')}
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              {softwareEngineeringSkills
                .sort((a, b) => levelMap[b.level].value - levelMap[a.level].value)
                .map((skill, index) => renderSkillItem(skill, index, 500))}
            </div>
          </div>

          {/* Research & AI Section */}
          <div 
            className={`bg-white rounded-lg shadow-md p-8 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <FaBrain className="text-3xl text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-800">
                {t('skills.researchAI')}
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              {researchSkills
                .sort((a, b) => levelMap[b.level].value - levelMap[a.level].value)
                .map((skill, index) => renderSkillItem(skill, index, 700))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

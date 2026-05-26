import { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    {
      category: 'left',
      items: [
        { name: 'React.js', level: 'Advance', value: 90 },
        { name: 'Tailwind CSS', level: 'Advance', value: 85 },
        { name: 'Next.js', level: 'Intermediate', value: 60 },
        { name: 'MongoDB', level: 'Intermediate', value: 75 },
        { name: 'C/C++', level: 'Intermediate', value: 75 }
      ]
    },
    {
      category: 'right',
      items: [
        { name: 'Python', level: 'Advance', value: 90 },
        { name: 'Java', level: 'Advance', value: 85 },
        { name: 'MySQL', level: 'Advance', value: 80 },
        { name: 'ASP.NET', level: 'Intermediate', value: 70 },
        { name: 'PHP Laravel', level: 'Intermediate', value: 70 }
      ]
    }
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

  return (
    <section 
      id="skills" 
      className="section pt-16 px-4 lg:px-8 bg-gray-50"
      ref={sectionRef}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div 
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            My Skills
          </h2>
        </div>

        {/* Description */}
        <div 
          className={`text-center mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I am a fast learner, specialized in multitude of skills required
            for Software Development and Machine Learning operations. From
            design to development, research to deployment, my strength in
            multiple programming stack allows me to leverage the ability to
            build innovative solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div 
          className={`bg-white rounded-lg shadow-sm p-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column */}
            <div className="space-y-6">
              {skills[0].items.map((skill, index) => (
                <div 
                  key={index} 
                  className={`space-y-2 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                >
                  <div className="flex justify-between items-center text-sm font-semibold text-gray-700 group">
                    <span className="group-hover:text-blue-600 transition-colors duration-300">
                      {skill.name}
                    </span>
                    <span className="text-gray-500 group-hover:text-blue-500 transition-colors duration-300">
                      {skill.level}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden group hover:bg-gray-300 transition-colors duration-300">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out group-hover:bg-blue-700 group-hover:shadow-lg"
                      style={{ 
                        width: isVisible ? `${skill.value}%` : '0%'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {skills[1].items.map((skill, index) => (
                <div 
                  key={index} 
                  className={`space-y-2 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                >
                  <div className="flex justify-between items-center text-sm font-semibold text-gray-700 group">
                    <span className="group-hover:text-blue-600 transition-colors duration-300">
                      {skill.name}
                    </span>
                    <span className="text-gray-500 group-hover:text-blue-500 transition-colors duration-300">
                      {skill.level}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden group hover:bg-gray-300 transition-colors duration-300">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out group-hover:bg-blue-700 group-hover:shadow-lg"
                      style={{ 
                        width: isVisible ? `${skill.value}%` : '0%'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useAnimateOnScroll } from '@/hooks/useAnimateOnScroll';
import { TechIcon } from './TechIcon';

const About = () => {
  const { t } = useLanguage();
  const aboutRef = useAnimateOnScroll<HTMLDivElement>("animate-fade-in", 100);

  const skills = {
    'Programming Languages': ['JavaScript', 'TypeScript', 'Python', 'PHP'],
    'Frontend': ['React', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
    'Backend': ['Node.js', 'Express.js', 'Laravel', 'REST API'],
    'Database': ['MongoDB', 'MySQL', 'Supabase'],
    'DevOps & Tools': ['Git', 'n8n', 'Webhooks', 'Vercel']
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <div ref={aboutRef} className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            {t('about.title')}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.description')}
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Computer Science graduate from the University of Peshawar with hands-on experience 
                in building scalable web applications. I specialize in the MERN stack and have a passion 
                for creating seamless user experiences and robust backend systems.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Based in Islamabad, Pakistan, I work remotely with clients worldwide, delivering 
                high-quality solutions that drive business growth and user engagement.
              </p>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-2xl font-bold gradient-text">
                {t('about.skills')}
              </h3>
              
              <div className="space-y-6">
                {Object.entries(skills).map(([category, techs]) => (
                  <div key={category} className="bg-white/70 dark:bg-slate-800/70 rounded-2xl p-6 backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all duration-300">
                    <h4 className="font-semibold text-lg mb-4 text-primary">{category}</h4>
                    <div className="flex flex-wrap gap-3">
                      {techs.map((tech) => (
                        <span 
                          key={tech}
                          className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                        >
                          <TechIcon tech={tech} className="w-4 h-4" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

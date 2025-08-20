import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Microscope, 
  Users, 
  Globe, 

  Zap,
  Star,
  ChevronRight
} from 'lucide-react';
import { SKILLS, TECH_STACK } from '@/utils/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useMagneticHover } from '@/hooks/useMagneticHover';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('programming');
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  const categoryRef = useMagneticHover({ strength: 0.1, scale: 1.02 });

  const categories = [
    { 
      id: 'programming', 
      label: 'Programming & Analysis', 
      icon: Code, 
      color: 'purple',
      description: 'Technical skills in programming and data analysis'
    },
    { 
      id: 'agricultural', 
      label: 'Agricultural Technology', 
      icon: Microscope, 
      color: 'emerald',
      description: 'Specialized agricultural and research techniques'
    },
    { 
      id: 'management', 
      label: 'Management & Leadership', 
      icon: Users, 
      color: 'coral',
      description: 'Leadership and organizational skills'
    },
    { 
      id: 'languages', 
      label: 'Languages', 
      icon: Globe, 
      color: 'cyan',
      description: 'Communication across cultures'
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'purple': return {
        bg: 'bg-accent-purple/10',
        text: 'text-accent-purple',
        border: 'border-accent-purple/20',
        glow: 'shadow-glow-purple'
      };
      case 'emerald': return {
        bg: 'bg-accent-emerald/10',
        text: 'text-accent-emerald',
        border: 'border-accent-emerald/20',
        glow: 'shadow-glow-emerald'
      };
      case 'coral': return {
        bg: 'bg-accent-coral/10',
        text: 'text-accent-coral',
        border: 'border-accent-coral/20',
        glow: 'shadow-glow-gold'
      };
      case 'cyan': return {
        bg: 'bg-accent-cyan/10',
        text: 'text-accent-cyan',
        border: 'border-accent-cyan/20',
        glow: 'shadow-glow-purple'
      };
      default: return {
        bg: 'bg-gray-100',
        text: 'text-gray-600',
        border: 'border-gray-200',
        glow: 'shadow-lg'
      };
    }
  };

  const SkillBar: React.FC<{ skill: any, index: number }> = ({ skill, index }) => {
    const colors = getColorClasses(categories.find(cat => cat.id === activeCategory)?.color || 'gray');
    
    return (
      <motion.div
        className="space-y-3"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-gray-900">{skill.name}</h4>
            <p className="text-sm text-gray-600">{skill.description}</p>
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-bold ${colors.bg} ${colors.text}`}>
            {skill.level}%
          </div>
        </div>
        
        <div className="relative">
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className={`h-full rounded-full bg-gradient-to-r ${colors.text.replace('text-', 'from-')} to-accent-gold`}
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ delay: 0.5 + index * 0.1, duration: 1, ease: "easeOut" }}
            />
          </div>
          <motion.div
            className="absolute top-0 left-0 h-3 bg-white/30 rounded-full"
            animate={{ x: [`${Math.max(0, skill.level - 20)}%`, `${skill.level}%`] }}
            transition={{ delay: 1 + index * 0.1, duration: 0.8, ease: "easeInOut" }}
            style={{ width: '20%' }}
          />
        </div>
      </motion.div>
    );
  };

  const InfiniteScrollRow: React.FC<{ 
    technologies: typeof TECH_STACK, 
    direction: 'left' | 'right',
    speed: string,
    delay?: number 
  }> = ({ technologies, direction, speed, delay = 0 }) => {
    const duplicatedTech = [...technologies, ...technologies];
    
    return (
      <motion.div
        className="flex space-x-6 will-change-transform"
        animate={{
          x: direction === 'left' ? [0, -1920] : [-1920, 0]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: parseInt(speed),
            ease: "linear",
            delay: delay
          }
        }}
        style={{ width: 'fit-content' }}
      >
        {duplicatedTech.map((tech, index) => (
          <motion.div
            key={`${tech.name}-${index}`}
            className="flex-shrink-0 card-glass px-6 py-4 hover:shadow-premium-hover transition-all duration-300 group cursor-pointer"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </span>
              <div>
                <h5 className="font-semibold text-gray-900 group-hover:text-accent-gold transition-colors">
                  {tech.name}
                </h5>
                <p className="text-xs text-gray-600">{tech.category}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container-premium">
        {/* Section Header */}
        <motion.div
          ref={elementRef}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-accent-emerald/10 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4 text-accent-emerald" />
            <span className="text-accent-emerald font-semibold">Skills & Expertise</span>
          </motion.div>

          <h2 className="text-display text-gray-900 mb-6">
            Mastering <span className="text-gradient">Diverse Technologies</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From cutting-edge programming languages to advanced agricultural technologies, 
            I continuously expand my toolkit to tackle complex challenges in bio-agricultural engineering.
          </p>
        </motion.div>

        {/* Infinite Scrolling Technology Stack */}
        <motion.div
          className="mb-20 -mx-6 lg:-mx-8"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="space-y-6 overflow-hidden">
            {/* Row 1 - Programming & Analysis (Left to Right) */}
            <div className="overflow-hidden">
              <InfiniteScrollRow
                technologies={TECH_STACK.slice(0, Math.min(6, TECH_STACK.length))}
                direction="left"
                speed="20"
              />
            </div>

            {/* Row 2 - Agricultural Technology (Right to Left) */}
            <div className="overflow-hidden">
              <InfiniteScrollRow
                technologies={TECH_STACK.slice(6, Math.min(12, TECH_STACK.length))}
                direction="right"
                speed="25"
                delay={1}
              />
            </div>

            {/* Row 3 - Research & Lab (Left to Right) */}
            <div className="overflow-hidden">
              <InfiniteScrollRow
                technologies={TECH_STACK.slice(12, Math.min(18, TECH_STACK.length))}
                direction="left"
                speed="30"
                delay={2}
              />
            </div>

            {/* Row 4 - Management & Communication (Right to Left) */}
            <div className="overflow-hidden">
              <InfiniteScrollRow
                technologies={TECH_STACK.slice(18, Math.min(24, TECH_STACK.length))}
                direction="right"
                speed="22"
                delay={0.5}
              />
            </div>
          </div>
        </motion.div>

        {/* Detailed Skills Section */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Category Navigation */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Skill Categories</h3>
            {categories.map((category, index) => {
              const Icon = category.icon;
              const colors = getColorClasses(category.color);
              const isActive = activeCategory === category.id;

              return (
                <motion.button
                  key={category.id}
                  ref={index === 0 ? categoryRef : undefined}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                    isActive
                      ? `${colors.bg} ${colors.border} ${colors.glow}`
                      : 'bg-gray-800 border-gray-600 hover:border-gray-500 hover:shadow-lg text-white'
                  }`}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${isActive ? colors.bg : 'bg-gray-700'} border ${isActive ? colors.border : 'border-gray-500'}`}>
                      <Icon className={`w-6 h-6 ${isActive ? colors.text : 'text-gray-300'}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold mb-1 ${isActive ? colors.text : 'text-white'}`}>
                        {category.label}
                      </h4>
                      <p className={`text-sm ${isActive ? 'text-gray-600' : 'text-gray-300'}`}>{category.description}</p>
                      {isActive && (
                        <motion.div
                          className="flex items-center space-x-1 mt-2 text-sm"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          <span className={colors.text}>View Details</span>
                          <ChevronRight className={`w-4 h-4 ${colors.text}`} />
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Skills Display */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                className="card-premium p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center space-x-3 mb-8">
                  {(() => {
                    const category = categories.find(cat => cat.id === activeCategory);
                    if (!category) return null;
                    const Icon = category.icon;
                    const colors = getColorClasses(category.color);
                    
                    return (
                      <>
                        <div className={`p-3 rounded-xl ${colors.bg} border ${colors.border}`}>
                          <Icon className={`w-6 h-6 ${colors.text}`} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{category.label}</h3>
                          <p className="text-gray-600">{category.description}</p>
                        </div>
                      </>
                    );
                  })()}
                </div>

                <div className="space-y-8">
                  {SKILLS[activeCategory as keyof typeof SKILLS]?.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>

                {/* Proficiency Legend */}
                <motion.div
                  className="mt-8 p-6 bg-gray-50 rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                    <Star className="w-4 h-4 text-accent-gold" />
                    <span>Proficiency Levels</span>
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <span className="text-gray-600">Beginner (0-40%)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-600">Intermediate (40-70%)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-gray-600">Advanced (70-90%)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-accent-gold rounded-full"></div>
                      <span className="text-gray-600">Expert (90%+)</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

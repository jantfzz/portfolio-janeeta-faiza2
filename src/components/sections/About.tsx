import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, Target, Heart, BookOpen, Users, Lightbulb, Trophy } from 'lucide-react';
import { PERSONAL_INFO, RESEARCH_ACHIEVEMENTS } from '@/utils/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { use3DTilt, useMagneticHover } from '@/hooks/useMagneticHover';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('story');
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  const photoRef = use3DTilt({ maxTilt: 8 });
  const tabRefs = [
    useMagneticHover({ strength: 0.1, scale: 1.02 }),
    useMagneticHover({ strength: 0.1, scale: 1.02 }),
    useMagneticHover({ strength: 0.1, scale: 1.02 }),
  ];

  const tabs = [
    { id: 'story', label: 'My Story', icon: BookOpen },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'values', label: 'Values', icon: Heart },
  ];

  const timeline = [
    {
      year: '2022',
      title: 'Started Bio-Agricultural Engineering',
      description: 'Began journey at Institut Teknologi Bandung',
      icon: GraduationCap,
      color: 'emerald'
    },
    {
      year: '2023',
      title: 'First Leadership Role',
      description: 'Joined KPA-ITB as HR Department Officer',
      icon: Users,
      color: 'purple'
    },
    {
      year: '2024',
      title: 'Research Excellence',
      description: 'Multiple national competition awards',
      icon: Award,
      color: 'gold'
    },
    {
      year: '2025',
      title: 'Innovation Leadership',
      description: 'Leading agricultural research initiatives',
      icon: Lightbulb,
      color: 'cyan'
    },
  ];

  const values = [
    {
      title: 'Sustainability',
      description: 'Committed to developing eco-friendly agricultural solutions that protect our planet for future generations.',
      icon: Target,
      color: 'emerald'
    },
    {
      title: 'Innovation',
      description: 'Constantly exploring new technologies and methodologies to revolutionize agricultural practices.',
      icon: Lightbulb,
      color: 'purple'
    },
    {
      title: 'Collaboration',
      description: 'Believing in the power of teamwork and knowledge sharing to achieve greater impact.',
      icon: Users,
      color: 'coral'
    },
    {
      title: 'Excellence',
      description: 'Striving for the highest standards in research, leadership, and personal development.',
      icon: Award,
      color: 'gold'
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'emerald': return 'text-accent-emerald bg-accent-emerald/10 border-accent-emerald/20';
      case 'purple': return 'text-accent-purple bg-accent-purple/10 border-accent-purple/20';
      case 'coral': return 'text-accent-coral bg-accent-coral/10 border-accent-coral/20';
      case 'gold': return 'text-accent-gold bg-accent-gold/10 border-accent-gold/20';
      case 'cyan': return 'text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-premium">
        <motion.div
          ref={elementRef}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-accent-gold/10 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 bg-accent-gold rounded-full animate-pulse" />
            <span className="text-accent-gold font-semibold">About Me</span>
          </motion.div>
          
          <h2 className="text-display text-gray-900 mb-6">
            Passionate About{' '}
            <span className="text-gradient">Sustainable Innovation</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Driven by curiosity and a commitment to making agriculture more sustainable, 
            I combine scientific research with leadership to create meaningful impact.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Photo and Quick Facts */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Professional Photo */}
            <div className="relative">
              <motion.div
                ref={photoRef}
                className="relative overflow-hidden rounded-3xl shadow-premium hover:shadow-premium-hover transition-all duration-500"
                whileHover={{ y: -5 }}
              >
                <div className="aspect-[4/5] bg-gradient-to-br from-accent-gold/20 to-accent-purple/20 flex items-center justify-center relative">
                  {/* Replace this div with your actual image */}
                  <img 
                    src="/images/profile.jpg" 
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover rounded-3xl"
                    onError={(e) => {
                      // Fallback to initials if image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-32 h-32 bg-gradient-to-br from-accent-gold to-accent-orange rounded-full flex items-center justify-center text-4xl font-bold text-primary-950"
                    style={{ display: 'none' }}
                  >
                    {PERSONAL_INFO.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                
                {/* Floating Achievement Badges */}
                <motion.div
                  className="absolute -top-4 -right-4 p-3 bg-white rounded-full shadow-premium"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Award className="w-6 h-6 text-accent-gold" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 p-3 bg-white rounded-full shadow-premium"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                >
                  <GraduationCap className="w-6 h-6 text-accent-purple" />
                </motion.div>
              </motion.div>
              
              {/* Quick Stats */}
              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {[
                  { label: 'Research Papers', value: '25+' },
                  { label: 'Awards', value: '3' },
                  { label: 'Years', value: '3+' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="card-glass px-4 py-3 text-center min-w-[80px]"
                    whileHover={{ y: -3, scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="text-lg font-bold text-gradient">{stat.value}</div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Tabbed Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Tab Navigation */}
            <div className="flex space-x-2 bg-gray-100 p-2 rounded-2xl">
              {tabs.map((tab, index) => {
                const Icon = tab.icon;
                return (
                  <motion.button
                    key={tab.id}
                    ref={tabRefs[index]}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-white text-accent-gold shadow-lg'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              {activeTab === 'story' && (
                <motion.div
                  key="story"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      My journey in Bio-Agricultural Engineering began with a simple question: 
                      How can we feed the world while preserving our planet? This curiosity led me 
                      to Institut Teknologi Bandung, where I've been exploring innovative solutions 
                      at the intersection of biology, technology, and sustainability.
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed mb-8">
                      From laboratory research to organizational leadership, I've discovered that 
                      the most impactful solutions emerge when diverse perspectives collaborate 
                      toward a common goal. My experience spans microbiology research, team 
                      management, and strategic planning.
                    </p>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-6">Academic Journey</h4>
                    {timeline.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={item.year}
                          className="flex items-start space-x-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                          <div className={`p-3 rounded-full ${getColorClasses(item.color)} border flex-shrink-0`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1 pb-6 border-l-2 border-gray-100 pl-6 ml-6">
                            <div className="flex items-center space-x-3 mb-2">
                              <span className="text-sm font-bold text-accent-gold bg-accent-gold/10 px-2 py-1 rounded-full">
                                {item.year}
                              </span>
                            </div>
                            <h5 className="font-semibold text-gray-900 mb-1">{item.title}</h5>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {activeTab === 'achievements' && (
                <motion.div
                  key="achievements"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">Research Excellence</h4>
                  {RESEARCH_ACHIEVEMENTS.map((achievement, index) => (
                    <motion.div
                      key={achievement.id}
                      className="card-premium p-6 hover:shadow-premium-hover transition-all duration-500"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ y: -3 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-full ${getColorClasses(achievement.color)} border flex-shrink-0`}>
                          <Trophy className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${getColorClasses(achievement.color)}`}>
                              {achievement.level}
                            </span>
                            <span className="text-xs text-gray-500">{achievement.year}</span>
                          </div>
                          <h5 className="font-semibold text-gray-900 mb-2">{achievement.title}</h5>
                          <p className="text-sm text-gray-600 mb-2">{achievement.research}</p>
                          <p className="text-xs text-gray-500">{achievement.impact}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'values' && (
                <motion.div
                  key="values"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                  {values.map((value, index) => {
                    const Icon = value.icon;
                    return (
                      <motion.div
                        key={value.title}
                        className="card-premium p-6 text-center hover:shadow-premium-hover transition-all duration-500"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                      >
                        <div className={`inline-flex p-4 rounded-full ${getColorClasses(value.color)} border mb-4`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <h5 className="font-semibold text-gray-900 mb-3">{value.title}</h5>
                        <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

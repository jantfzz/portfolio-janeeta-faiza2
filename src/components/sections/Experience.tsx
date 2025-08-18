import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  GraduationCap, 
  Users, 
  Calendar, 
  MapPin, 
  TrendingUp, 
  Award,
  ChevronRight,
  Filter,
  X
} from 'lucide-react';
import { EXPERIENCES } from '@/utils/constants';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { use3DTilt, useMagneticHover } from '@/hooks/useMagneticHover';

const Experience: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null);
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { elementRef: cardsRef, visibleItems } = useStaggeredAnimation(EXPERIENCES.length, 150);

  const filterRef = useMagneticHover({ strength: 0.1, scale: 1.02 });

  const categories = [
    { id: 'all', label: 'All Experience', count: EXPERIENCES.length },
    { id: 'Research & Academic', label: 'Research', count: EXPERIENCES.filter(exp => exp.category === 'Research & Academic').length },
    { id: 'Leadership & Management', label: 'Leadership', count: EXPERIENCES.filter(exp => exp.category === 'Leadership & Management').length },
  ];

  const filteredExperiences = selectedCategory === 'all' 
    ? EXPERIENCES 
    : EXPERIENCES.filter(exp => exp.category === selectedCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Academic': return GraduationCap;
      case 'Leadership': return Users;
      case 'Professional': return Briefcase;
      default: return Briefcase;
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'emerald': return {
        border: 'border-l-accent-emerald',
        bg: 'bg-accent-emerald/5',
        text: 'text-accent-emerald',
        icon: 'bg-accent-emerald/10 text-accent-emerald',
        badge: 'bg-accent-emerald/10 text-accent-emerald border-accent-emerald/20'
      };
      case 'purple': return {
        border: 'border-l-accent-purple',
        bg: 'bg-accent-purple/5',
        text: 'text-accent-purple',
        icon: 'bg-accent-purple/10 text-accent-purple',
        badge: 'bg-accent-purple/10 text-accent-purple border-accent-purple/20'
      };
      case 'coral': return {
        border: 'border-l-accent-coral',
        bg: 'bg-accent-coral/5',
        text: 'text-accent-coral',
        icon: 'bg-accent-coral/10 text-accent-coral',
        badge: 'bg-accent-coral/10 text-accent-coral border-accent-coral/20'
      };
      default: return {
        border: 'border-l-gray-300',
        bg: 'bg-gray-50',
        text: 'text-gray-600',
        icon: 'bg-gray-100 text-gray-600',
        badge: 'bg-gray-100 text-gray-600 border-gray-200'
      };
    }
  };

  const ExperienceCard: React.FC<{ experience: typeof EXPERIENCES[0], index: number }> = ({ 
    experience, 
    index 
  }) => {
    const cardRef = use3DTilt({ maxTilt: 5 });
    const colors = getColorClasses(experience.color);
    const TypeIcon = getTypeIcon(experience.type);
    const isVisible = visibleItems.has(index);

    return (
      <motion.div
        ref={cardRef}
        className={`card-premium p-8 ${colors.border} border-l-4 hover:shadow-premium-hover transition-all duration-500 cursor-pointer ${colors.bg}`}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -8, scale: 1.02 }}
        onClick={() => setSelectedExperience(experience.id)}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start space-x-4">
            <div className={`p-3 rounded-xl ${colors.icon} border border-current/20`}>
              <TypeIcon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-current transition-colors">
                {experience.title}
              </h3>
              <p className="font-semibold text-gray-700 mb-1">{experience.organization}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-medium border ${colors.badge}`}>
            {experience.type}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">
          {experience.description}
        </p>

        {/* Key Achievements Preview */}
        <div className="space-y-3 mb-6">
          {experience.achievements.slice(0, 2).map((achievement, idx) => (
            <div key={idx} className="flex items-start space-x-3">
              <div className={`w-2 h-2 rounded-full ${colors.text.replace('text-', 'bg-')} mt-2 flex-shrink-0`} />
              <p className="text-sm text-gray-700 leading-relaxed">{achievement}</p>
            </div>
          ))}
          {experience.achievements.length > 2 && (
            <motion.button
              className={`text-sm ${colors.text} font-medium hover:underline flex items-center space-x-1`}
              whileHover={{ x: 5 }}
            >
              <span>View {experience.achievements.length - 2} more achievements</span>
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          )}
        </div>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2">
          {experience.skills.slice(0, 3).map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
            >
              {skill}
            </span>
          ))}
          {experience.skills.length > 3 && (
            <span className="px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-xs font-medium">
              +{experience.skills.length - 3} more
            </span>
          )}
        </div>

        {/* Hover Indicator */}
        <motion.div
          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <ChevronRight className={`w-5 h-5 ${colors.text}`} />
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-premium">
        {/* Section Header */}
        <motion.div
          ref={elementRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-accent-purple/10 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Briefcase className="w-4 h-4 text-accent-purple" />
            <span className="text-accent-purple font-semibold">Professional Journey</span>
          </motion.div>

          <h2 className="text-display text-gray-900 mb-6">
            Building <span className="text-gradient-purple">Excellence</span> Through Experience
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From laboratory research to organizational leadership, each role has contributed 
            to my growth as a researcher, leader, and innovator in agricultural engineering.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex bg-gray-100 p-2 rounded-2xl space-x-2">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                ref={index === 0 ? filterRef : undefined}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-white text-accent-purple shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Filter className="w-4 h-4" />
                <span>{category.label}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  selectedCategory === category.id
                    ? 'bg-accent-purple/10 text-accent-purple'
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          ref={cardsRef}
          className="grid gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            {filteredExperiences.map((experience, index) => (
              <ExperienceCard
                key={`${selectedCategory}-${experience.id}`}
                experience={experience}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Experience Modal */}
        <AnimatePresence>
          {selectedExperience && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExperience(null)}
            >
              <motion.div
                className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const experience = EXPERIENCES.find(exp => exp.id === selectedExperience);
                  if (!experience) return null;
                  
                  const colors = getColorClasses(experience.color);
                  const TypeIcon = getTypeIcon(experience.type);

                  return (
                    <div className="p-8">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className={`p-4 rounded-xl ${colors.icon} border border-current/20`}>
                            <TypeIcon className="w-8 h-8" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-2xl text-gray-900 mb-2">
                              {experience.title}
                            </h3>
                            <p className="font-semibold text-gray-700 mb-2">{experience.organization}</p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{experience.period}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>{experience.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedExperience(null)}
                          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                          <X className="w-5 h-5 text-gray-500" />
                        </button>
                      </div>

                      {/* Description */}
                      <div className={`p-6 rounded-2xl ${colors.bg} border-l-4 ${colors.border} mb-8`}>
                        <p className="text-gray-700 leading-relaxed">{experience.description}</p>
                      </div>

                      {/* All Achievements */}
                      <div className="mb-8">
                        <h4 className="font-semibold text-lg text-gray-900 mb-4 flex items-center space-x-2">
                          <Award className="w-5 h-5 text-accent-gold" />
                          <span>Key Achievements</span>
                        </h4>
                        <div className="space-y-4">
                          {experience.achievements.map((achievement, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1, duration: 0.5 }}
                            >
                              <div className={`w-2 h-2 rounded-full ${colors.text.replace('text-', 'bg-')} mt-2 flex-shrink-0`} />
                              <p className="text-gray-700 leading-relaxed">{achievement}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-4 flex items-center space-x-2">
                          <TrendingUp className="w-5 h-5 text-accent-emerald" />
                          <span>Skills Developed</span>
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {experience.skills.map((skill, idx) => (
                            <motion.span
                              key={idx}
                              className={`px-4 py-2 rounded-full text-sm font-medium border ${colors.badge}`}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.05, duration: 0.3 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Experience;

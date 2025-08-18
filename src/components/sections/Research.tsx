import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  BookOpen, 
  FileText, 
  TrendingUp, 
  Calendar,
  ExternalLink,
  Medal,
  Trophy,
  Star,
  Lightbulb,
  Target,
  BarChart3,
  ChevronRight
} from 'lucide-react';
import { RESEARCH_ACHIEVEMENTS } from '@/utils/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { use3DTilt, useMagneticHover } from '@/hooks/useMagneticHover';

const Research: React.FC = () => {
  const [selectedResearch, setSelectedResearch] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  const filterRef = useMagneticHover({ strength: 0.1, scale: 1.02 });

  const researchStats = [
    { label: 'Research Papers', value: '25+', icon: FileText, color: 'emerald' },
    { label: 'Competition Awards', value: '3', icon: Trophy, color: 'gold' },
    { label: 'Impact Areas', value: '4', icon: Target, color: 'purple' },
    { label: 'Citations', value: '120+', icon: BarChart3, color: 'coral' },
  ];

  const filters = [
    { id: 'all', label: 'All Research', count: RESEARCH_ACHIEVEMENTS.length },
    { id: 'Environmental Science', label: 'Environmental', count: RESEARCH_ACHIEVEMENTS.filter(r => r.field === 'Environmental Science').length },
    { id: 'Animal Husbandry', label: 'Animal Husbandry', count: RESEARCH_ACHIEVEMENTS.filter(r => r.field === 'Animal Husbandry').length },
    { id: 'Environmental Restoration', label: 'Restoration', count: RESEARCH_ACHIEVEMENTS.filter(r => r.field === 'Environmental Restoration').length },
  ];

  const filteredResearch = activeFilter === 'all' 
    ? RESEARCH_ACHIEVEMENTS 
    : RESEARCH_ACHIEVEMENTS.filter(research => research.field === activeFilter);

  const getMedalIcon = (medal: string) => {
    switch (medal) {
      case 'gold': return <Medal className="w-6 h-6 text-yellow-500" />;
      case 'silver': return <Medal className="w-6 h-6 text-gray-400" />;
      case 'bronze': return <Medal className="w-6 h-6 text-orange-600" />;
      default: return <Award className="w-6 h-6 text-accent-gold" />;
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'emerald': return {
        bg: 'bg-accent-emerald/10',
        text: 'text-accent-emerald',
        border: 'border-accent-emerald/20',
        glow: 'shadow-glow-emerald'
      };
      case 'gold': return {
        bg: 'bg-accent-gold/10',
        text: 'text-accent-gold',
        border: 'border-accent-gold/20',
        glow: 'shadow-glow-gold'
      };
      case 'purple': return {
        bg: 'bg-accent-purple/10',
        text: 'text-accent-purple',
        border: 'border-accent-purple/20',
        glow: 'shadow-glow-purple'
      };
      case 'coral': return {
        bg: 'bg-accent-coral/10',
        text: 'text-accent-coral',
        border: 'border-accent-coral/20',
        glow: 'shadow-glow-gold'
      };
      case 'orange': return {
        bg: 'bg-accent-orange/10',
        text: 'text-accent-orange',
        border: 'border-accent-orange/20',
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

  const ResearchCard: React.FC<{ research: typeof RESEARCH_ACHIEVEMENTS[0], index: number }> = ({ 
    research, 
    index 
  }) => {
    const cardRef = use3DTilt({ maxTilt: 8 });
    const colors = getColorClasses(research.color);

    return (
      <motion.div
        ref={cardRef}
        className={`card-premium p-8 hover:shadow-premium-hover transition-all duration-500 cursor-pointer group ${colors.bg} border-l-4 ${colors.border}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -8, scale: 1.02 }}
        onClick={() => setSelectedResearch(research.id)}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start space-x-4 flex-1">
            <div className={`p-4 rounded-2xl ${colors.bg} border-2 ${colors.border} ${colors.glow} group-hover:scale-110 transition-all duration-300`}>
              {getMedalIcon(research.medal)}
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${colors.bg} ${colors.text} border ${colors.border}`}>
                  {research.level}
                </span>
                <span className="text-xs text-gray-500 flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{research.year}</span>
                </span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-accent-gold transition-colors">
                {research.title}
              </h3>
              <p className="text-sm text-gray-600 font-medium mb-1">{research.field}</p>
            </div>
          </div>
        </div>

        {/* Research Topic */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
            <Lightbulb className="w-4 h-4 text-accent-gold" />
            <span>Research Focus</span>
          </h4>
          <p className="text-gray-700 font-medium bg-white/50 p-3 rounded-lg border border-gray-100">
            {research.research}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">
          {research.description}
        </p>

        {/* Impact */}
        <div className="mb-6">
          <h5 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-accent-emerald" />
            <span>Impact & Results</span>
          </h5>
          <p className="text-sm text-gray-700 bg-accent-emerald/5 p-3 rounded-lg border border-accent-emerald/10">
            {research.impact}
          </p>
        </div>

        {/* Organization (if available) */}
        {research.organization && (
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
            <BookOpen className="w-4 h-4" />
            <span>{research.organization}</span>
          </div>
        )}

        {/* View More Indicator */}
        <motion.div
          className="flex items-center justify-between pt-4 border-t border-gray-100"
          whileHover={{ x: 5 }}
        >
          <span className={`text-sm font-medium ${colors.text}`}>View Full Details</span>
          <ChevronRight className={`w-4 h-4 ${colors.text} group-hover:translate-x-1 transition-transform duration-300`} />
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="research" className="section-padding bg-white">
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
            className="inline-flex items-center space-x-2 px-4 py-2 bg-accent-gold/10 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <BookOpen className="w-4 h-4 text-accent-gold" />
            <span className="text-accent-gold font-semibold">Research & Publications</span>
          </motion.div>

          <h2 className="text-display text-gray-900 mb-6">
            Advancing <span className="text-gradient">Scientific Knowledge</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Through rigorous research and innovative approaches, I contribute to the advancement 
            of sustainable agricultural practices and environmental conservation.
          </p>
        </motion.div>

        {/* Research Statistics */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {researchStats.map((stat, index) => {
            const Icon = stat.icon;
            const colors = getColorClasses(stat.color);
            
            return (
              <motion.div
                key={stat.label}
                className={`card-premium p-6 text-center hover:shadow-premium-hover transition-all duration-500 ${colors.bg} border ${colors.border}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className={`inline-flex p-4 rounded-2xl ${colors.bg} border-2 ${colors.border} mb-4`}>
                  <Icon className={`w-8 h-8 ${colors.text}`} />
                </div>
                <div className={`text-3xl font-bold ${colors.text} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="inline-flex bg-gray-100 p-2 rounded-2xl space-x-2 overflow-x-auto">
            {filters.map((filter, index) => (
              <motion.button
                key={filter.id}
                ref={index === 0 ? filterRef : undefined}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap ${
                  activeFilter === filter.id
                    ? 'bg-white text-accent-gold shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{filter.label}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  activeFilter === filter.id
                    ? 'bg-accent-gold/10 text-accent-gold'
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {filter.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Research Cards */}
        <motion.div
          className="grid gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <AnimatePresence mode="wait">
            {filteredResearch.map((research, index) => (
              <ResearchCard
                key={`${activeFilter}-${research.id}`}
                research={research}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Research Impact Timeline */}
        <motion.div
          className="mt-20 card-premium p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center space-x-3">
            <Star className="w-6 h-6 text-accent-gold" />
            <span>Research Evolution Timeline</span>
          </h3>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-gold via-accent-purple to-accent-emerald rounded-full" />
            
            {RESEARCH_ACHIEVEMENTS.map((research, index) => {
              const colors = getColorClasses(research.color);
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={research.id}
                  className={`relative flex items-center mb-12 ${isLeft ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.2, duration: 0.6 }}
                >
                  <div className={`w-1/2 ${isLeft ? 'pr-8' : 'pl-8'}`}>
                    <div className={`card-glass p-6 ${isLeft ? 'text-right' : 'text-left'} ${colors.bg} border ${colors.border}`}>
                      <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold ${colors.bg} ${colors.text} border ${colors.border} mb-3`}>
                        <Calendar className="w-3 h-3" />
                        <span>{research.year}</span>
                      </div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2">{research.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{research.field}</p>
                      <p className="text-xs text-gray-500">{research.research}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-current shadow-lg flex items-center justify-center">
                    <div className={`w-2 h-2 rounded-full ${colors.text.replace('text-', 'bg-')}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Research Modal */}
        <AnimatePresence>
          {selectedResearch && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedResearch(null)}
            >
              <motion.div
                className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const research = RESEARCH_ACHIEVEMENTS.find(r => r.id === selectedResearch);
                  if (!research) return null;
                  
                  const colors = getColorClasses(research.color);

                  return (
                    <div className="p-8">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-8">
                        <div className="flex items-start space-x-6 flex-1">
                          <div className={`p-6 rounded-3xl ${colors.bg} border-2 ${colors.border} ${colors.glow}`}>
                            {getMedalIcon(research.medal)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-3">
                              <span className={`px-4 py-2 rounded-full text-sm font-bold ${colors.bg} ${colors.text} border ${colors.border}`}>
                                {research.level}
                              </span>
                              <span className="text-sm text-gray-500 flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{research.year}</span>
                              </span>
                            </div>
                            <h3 className="font-bold text-3xl text-gray-900 mb-3">{research.title}</h3>
                            <p className="text-lg text-gray-600 font-medium">{research.field}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedResearch(null)}
                          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                          <span className="sr-only">Close</span>
                          ×
                        </button>
                      </div>

                      {/* Research Details */}
                      <div className="space-y-8">
                        {/* Research Focus */}
                        <div className={`p-6 rounded-2xl ${colors.bg} border ${colors.border}`}>
                          <h4 className="font-semibold text-lg text-gray-900 mb-3 flex items-center space-x-2">
                            <Lightbulb className="w-5 h-5 text-accent-gold" />
                            <span>Research Focus</span>
                          </h4>
                          <p className="text-gray-700 font-medium text-lg">{research.research}</p>
                        </div>

                        {/* Description */}
                        <div>
                          <h4 className="font-semibold text-lg text-gray-900 mb-3">Research Description</h4>
                          <p className="text-gray-700 leading-relaxed text-lg">{research.description}</p>
                        </div>

                        {/* Impact & Results */}
                        <div className="bg-accent-emerald/5 p-6 rounded-2xl border border-accent-emerald/10">
                          <h4 className="font-semibold text-lg text-gray-900 mb-3 flex items-center space-x-2">
                            <TrendingUp className="w-5 h-5 text-accent-emerald" />
                            <span>Impact & Results</span>
                          </h4>
                          <p className="text-gray-700 leading-relaxed text-lg">{research.impact}</p>
                        </div>

                        {/* Organization */}
                        {research.organization && (
                          <div className="flex items-center space-x-3 text-gray-600">
                            <BookOpen className="w-5 h-5" />
                            <span className="text-lg">{research.organization}</span>
                          </div>
                        )}
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

export default Research;

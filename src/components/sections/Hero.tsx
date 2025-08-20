import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Download, MessageCircle, Sparkles, Star } from 'lucide-react';
import { PERSONAL_INFO, KEY_STATS, PROFESSIONAL_SUMMARY } from '@/utils/constants';
import { useTypewriter, useCountUp } from '@/hooks/useTypewriter';
import { useMagneticHover, use3DTilt } from '@/hooks/useMagneticHover';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  
  const heroRef = use3DTilt({ maxTilt: 5 });
  const ctaRef = useMagneticHover({ strength: 0.2, scale: 1.05 });
  const secondaryCtaRef = useMagneticHover({ strength: 0.15, scale: 1.03 });

  const { text: typedTitle } = useTypewriter(
    [PERSONAL_INFO.title, "Research Enthusiast", "Innovation Leader"],
    { speed: 100, deleteSpeed: 50, delayBetween: 3000, startDelay: 1000 }
  );

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const StatCard: React.FC<{ stat: typeof KEY_STATS[0], index: number }> = ({ stat, index }) => {
    const { count, startAnimation } = useCountUp(stat.value, {
      duration: 2000,
      suffix: stat.suffix,
    });
    const cardRef = use3DTilt({ maxTilt: 10 });

    useEffect(() => {
      const timer = setTimeout(() => startAnimation(), 2000 + index * 200);
      return () => clearTimeout(timer);
    }, [startAnimation, index]);

    return (
      <motion.div
        ref={cardRef}
        className="card-glass p-6 text-center hover:shadow-glow-gold transition-all duration-500"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 + index * 0.1, duration: 0.6 }}
        whileHover={{ y: -5 }}
      >
        <div className="text-3xl font-bold text-gradient mb-2">
          {count}{stat.suffix}
        </div>
        <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
      </motion.div>
    );
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-hero-gradient">
      {/* Animated Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent-gold/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-emerald/20 rounded-full blur-3xl animate-float-delayed-2" />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {i % 3 === 0 ? (
              <Star className="w-2 h-2 text-accent-gold" />
            ) : (
              <Sparkles className="w-3 h-3 text-accent-purple" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="container-premium relative z-10">
        <div className="min-h-screen flex items-center justify-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            {/* Left Content */}
            <motion.div
              ref={heroRef}
              className="text-center lg:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Greeting */}
              <motion.div
                className="flex items-center justify-center lg:justify-start space-x-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <motion.div
                  className="w-2 h-2 bg-accent-emerald rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-gray-100 font-medium">Hello, I'm</span>
              </motion.div>

              {/* Name */}
              <motion.h1
                className="text-hero text-white mb-4 font-poppins"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <span className="text-blue-300">{PERSONAL_INFO.name}</span>
              </motion.h1>

              {/* Dynamic Title */}
              <motion.div
                className="h-16 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 min-h-[3rem] flex items-center justify-center lg:justify-start">
                  {typedTitle}
                  <motion.span
                    className="ml-1 w-0.5 h-8 bg-accent-gold"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </h2>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                className="text-xl text-gray-100 mb-8 max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {PERSONAL_INFO.subtitle}
              </motion.p>

              {/* Location & University */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 mb-8 text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent-coral rounded-full" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent-cyan rounded-full" />
                  <span>{PERSONAL_INFO.university}</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <motion.button
                  ref={ctaRef}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-accent group"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Let's Collaborate
                </motion.button>
                
                <motion.button
                  ref={secondaryCtaRef}
                  className="btn-secondary group bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary-950"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform duration-300" />
                  Download CV
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Content - Statistics */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              {KEY_STATS.map((stat, index) => (
                <StatCard key={stat.label} stat={stat} index={index} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.6 }}
        >
          <motion.button
            onClick={handleScrollToNext}
            className="flex flex-col items-center space-y-2 text-gray-200 hover:text-accent-gold transition-colors duration-300 group"
            whileHover={{ y: -2 }}
          >
            <span className="text-sm font-medium">Discover More</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6 group-hover:text-accent-gold" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* Professional Summary Overlay */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-950/90 to-transparent p-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ delay: 3, duration: 0.8 }}
      >
        <div className="container-premium">
          <motion.p
            className="text-gray-100 text-center max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 0.6 }}
          >
            "{PROFESSIONAL_SUMMARY}"
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Linkedin, Github, Instagram, Mail } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/utils/constants';
import { useMagneticHover } from '@/hooks/useMagneticHover';

const Footer: React.FC = () => {
  const scrollToTopRef = useMagneticHover<HTMLButtonElement>({ strength: 0.3, scale: 1.1 });

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (iconName: string) => {
    const iconProps = { size: 20 };
    switch (iconName) {
      case 'linkedin': return <Linkedin {...iconProps} />;
      case 'github': return <Github {...iconProps} />;
      case 'instagram': return <Instagram {...iconProps} />;
      case 'mail': return <Mail {...iconProps} />;
      default: return null;
    }
  };



  return (
    <footer className="bg-primary-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/20 to-accent-purple/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-premium section-padding-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-gold to-accent-orange rounded-full flex items-center justify-center font-bold text-primary-950 text-xl">
                    {PERSONAL_INFO.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{PERSONAL_INFO.name}</h3>
                    <p className="text-gray-300">{PERSONAL_INFO.title}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                  Passionate about sustainable agricultural solutions and innovative research. 
                  Always excited to collaborate on projects that make a positive impact.
                </p>
                <div className="flex items-center space-x-4">
                  {SOCIAL_LINKS.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 rounded-full text-white hover:bg-white hover:text-primary-950 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {getSocialIcon(social.icon)}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-lg mb-6 text-accent-gold">Quick Links</h4>
                <ul className="space-y-3">
                  {['About', 'Experience', 'Skills', 'Research', 'Contact'].map((item, index) => (
                    <motion.li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-gray-300 hover:text-accent-gold transition-colors duration-300 hover:translate-x-1 inline-block"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        {item}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-lg mb-6 text-accent-gold">Get In Touch</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a 
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-gray-300 hover:text-accent-gold transition-colors duration-300"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-gray-300">{PERSONAL_INFO.location}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">University</p>
                    <p className="text-gray-300">{PERSONAL_INFO.university}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container-premium py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.p
                className="text-gray-400 text-sm flex items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with{' '}
                <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" />
                for sustainable innovation.
              </motion.p>
              
              <motion.button
                ref={scrollToTopRef}
                onClick={handleScrollToTop}
                className="p-3 bg-accent-gold text-primary-950 rounded-full hover:bg-accent-orange transition-all duration-300 shadow-lg hover:shadow-glow-gold"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <ArrowUp size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-gold/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Linkedin,
  Github,
  Instagram,
  Calendar,
  Clock,
  Globe,
  MessageSquare,
  User,
  FileText,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/utils/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useMagneticHover } from '@/hooks/useMagneticHover';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  collaborationType: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    collaborationType: 'research'
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const submitRef = useMagneticHover({ strength: 0.2, scale: 1.05 });

  const collaborationTypes = [
    { id: 'research', label: 'Research Collaboration', icon: FileText, color: 'emerald' },
    { id: 'academic', label: 'Academic Project', icon: User, color: 'purple' },
    { id: 'speaking', label: 'Speaking Engagement', icon: MessageSquare, color: 'coral' },
    { id: 'mentoring', label: 'Mentoring Request', icon: Sparkles, color: 'cyan' },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      color: 'emerald'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: PERSONAL_INFO.phone,
      href: `tel:${PERSONAL_INFO.phone}`,
      color: 'purple'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: PERSONAL_INFO.location,
      href: `https://maps.google.com/?q=${encodeURIComponent(PERSONAL_INFO.location)}`,
      color: 'coral'
    },
    {
      icon: Globe,
      label: 'University',
      value: PERSONAL_INFO.university,
      href: 'https://www.itb.ac.id',
      color: 'cyan'
    }
  ];

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

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'emerald': return {
        bg: 'bg-accent-emerald/10',
        text: 'text-accent-emerald',
        border: 'border-accent-emerald/20',
        focus: 'focus:border-accent-emerald focus:ring-accent-emerald/20'
      };
      case 'purple': return {
        bg: 'bg-accent-purple/10',
        text: 'text-accent-purple',
        border: 'border-accent-purple/20',
        focus: 'focus:border-accent-purple focus:ring-accent-purple/20'
      };
      case 'coral': return {
        bg: 'bg-accent-coral/10',
        text: 'text-accent-coral',
        border: 'border-accent-coral/20',
        focus: 'focus:border-accent-coral focus:ring-accent-coral/20'
      };
      case 'cyan': return {
        bg: 'bg-accent-cyan/10',
        text: 'text-accent-cyan',
        border: 'border-accent-cyan/20',
        focus: 'focus:border-accent-cyan focus:ring-accent-cyan/20'
      };
      default: return {
        bg: 'bg-gray-100',
        text: 'text-gray-600',
        border: 'border-gray-200',
        focus: 'focus:border-accent-gold focus:ring-accent-gold/20'
      };
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real application, you would send the form data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        collaborationType: 'research'
      });
      setErrors({});
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-950 to-primary-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-gold/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-purple/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-emerald/20 rounded-full blur-3xl animate-float-delayed-2" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-gold/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container-premium relative z-10">
        {/* Section Header */}
        <motion.div
          ref={elementRef}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-accent-gold/20 backdrop-blur-sm rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <MessageSquare className="w-4 h-4 text-accent-gold" />
            <span className="text-accent-gold font-semibold">Get In Touch</span>
          </motion.div>

          <h2 className="text-display text-white mb-6">
            Let's <span className="text-gradient">Collaborate</span> Together
          </h2>

          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            I'm always excited to discuss research opportunities, academic collaborations, 
            and innovative projects in agricultural engineering. Let's create something meaningful together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const colors = getColorClasses(info.color);
                
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="card-glass p-6 hover:shadow-premium-hover transition-all duration-500 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-4 rounded-2xl ${colors.bg} border ${colors.border} group-hover:scale-110 transition-all duration-300`}>
                        <Icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1">{info.label}</h4>
                        <p className="text-gray-100 group-hover:text-white transition-colors">{info.value}</p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Availability Status */}
            <motion.div
              className="card-glass p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
                <h4 className="font-semibold text-white">Currently Available</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-100">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Response time: Within 24 hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Open for collaborations starting March 2025</span>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="card-glass p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <h4 className="font-semibold text-white mb-4">Connect on Social Media</h4>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-full text-white hover:bg-white hover:text-primary-950 transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.3 }}
                  >
                    {getSocialIcon(social.icon)}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="card-glass p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Collaboration Type */}
              <div>
                <label className="block text-sm font-semibold text-white mb-3">
                  Type of Collaboration
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {collaborationTypes.map((type) => {
                    const Icon = type.icon;
                    const colors = getColorClasses(type.color);
                    const isSelected = formData.collaborationType === type.id;
                    
                    return (
                      <motion.button
                        key={type.id}
                        type="button"
                        onClick={() => handleInputChange('collaborationType', type.id)}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                          isSelected
                            ? `${colors.bg} ${colors.border} ${colors.text}`
                            : 'bg-white/5 border-white/10 text-gray-100 hover:border-white/20'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center space-x-3">
                          <Icon className="w-5 h-5" />
                          <span className="text-sm font-medium">{type.label}</span>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-white/10 border-2 rounded-xl text-white placeholder-gray-400 transition-all duration-300 ${
                        errors.name
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                          : 'border-white/20 focus:border-accent-gold focus:ring-accent-gold/20'
                      } focus:outline-none focus:ring-4`}
                      placeholder="Enter your full name"
                    />
                    <AnimatePresence>
                      {focusedField === 'name' && (
                        <motion.div
                          className="absolute -top-1 left-3 px-2 bg-primary-950 text-xs text-accent-gold font-semibold"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                        >
                          Full Name
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  {errors.name && (
                    <motion.p
                      className="text-red-400 text-xs mt-1 flex items-center space-x-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </motion.p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-white/10 border-2 rounded-xl text-white placeholder-gray-400 transition-all duration-300 ${
                        errors.email
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                          : 'border-white/20 focus:border-accent-gold focus:ring-accent-gold/20'
                      } focus:outline-none focus:ring-4`}
                      placeholder="Enter your email address"
                    />
                    <AnimatePresence>
                      {focusedField === 'email' && (
                        <motion.div
                          className="absolute -top-1 left-3 px-2 bg-primary-950 text-xs text-accent-gold font-semibold"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                        >
                          Email Address
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  {errors.email && (
                    <motion.p
                      className="text-red-400 text-xs mt-1 flex items-center space-x-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Subject *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-white/10 border-2 rounded-xl text-white placeholder-gray-400 transition-all duration-300 ${
                      errors.subject
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                        : 'border-white/20 focus:border-accent-gold focus:ring-accent-gold/20'
                    } focus:outline-none focus:ring-4`}
                    placeholder="What would you like to discuss?"
                  />
                  <AnimatePresence>
                    {focusedField === 'subject' && (
                      <motion.div
                        className="absolute -top-1 left-3 px-2 bg-primary-950 text-xs text-accent-gold font-semibold"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                      >
                        Subject
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {errors.subject && (
                  <motion.p
                    className="text-red-400 text-xs mt-1 flex items-center space-x-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.subject}</span>
                  </motion.p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Message *
                </label>
                <div className="relative">
                  <textarea
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-white/10 border-2 rounded-xl text-white placeholder-gray-400 transition-all duration-300 resize-none ${
                      errors.message
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                        : 'border-white/20 focus:border-accent-gold focus:ring-accent-gold/20'
                    } focus:outline-none focus:ring-4`}
                    placeholder="Tell me more about your project or collaboration idea..."
                  />
                  <AnimatePresence>
                    {focusedField === 'message' && (
                      <motion.div
                        className="absolute -top-1 left-3 px-2 bg-primary-950 text-xs text-accent-gold font-semibold"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                      >
                        Message
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {errors.message && (
                  <motion.p
                    className="text-red-400 text-xs mt-1 flex items-center space-x-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </motion.p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                ref={submitRef}
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-accent py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={!isSubmitting ? { y: -2, scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                      key="submitting"
                      className="flex items-center justify-center space-x-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.div
                        className="w-5 h-5 border-2 border-primary-950/30 border-t-primary-950 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Sending Message...</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="idle"
                      className="flex items-center justify-center space-x-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Status Messages */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    className="flex items-center space-x-2 text-accent-emerald bg-accent-emerald/10 p-4 rounded-xl border border-accent-emerald/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-4 rounded-xl border border-red-400/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-medium">Failed to send message. Please try again or contact me directly.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

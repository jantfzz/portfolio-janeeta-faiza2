// Personal Information
export const PERSONAL_INFO = {
  name: "Janeeta Faiza",
  title: "Bio-Agricultural Engineering Student",
  subtitle: "Scientific Research & Project Leadership Specialist",
  location: "Bandung, Indonesia",
  university: "Institut Teknologi Bandung",
  period: "2022-present",
  email: "janeetafz@gmail.com",
  phone: "+62 853-535-320-03",
  linkedin: "https://linkedin.com/in/janeetafaiza",
  github: "https://github.com/janeetafaiza",
  instagram: "https://instagram.com/janeetafaiza",
} as const;

// Professional Summary
export const PROFESSIONAL_SUMMARY = 
  "Passionate Bio-Agricultural Engineering student with proven expertise in research, project management, and team leadership. Experienced in laboratory research, organizational management, and innovative agricultural solutions with a track record of award-winning research papers and successful team leadership roles.";

// Key Statistics
export const KEY_STATS = [
  { label: "Research Papers", value: 10, suffix: "+" },
  { label: "Competition Awards", value: 3, suffix: "" },
  { label: "Students Mentored", value: 200, suffix: "+" },
  { label: "Revenue Growth", value: 70, suffix: "%" },
  { label: "Sponsors Negotiated", value: 15, suffix: "+" },
] as const;

// Experience Data
export const EXPERIENCES = [
  {
    id: "agri-micro-lab",
    category: "Research & Academic",
    title: "Agricultural Microbiology Lab Assistant",
    organization: "Institut Teknologi Bandung",
    period: "Feb 2025 – Jun 2025",
    location: "Bandung, Indonesia",
    type: "Academic",
    description: "Conducting microbiological experiments and contributing to research papers in agricultural microbiology.",
    achievements: [
      "Conducted 12 microbiological experiments with 100% accuracy",
      "Contributed to 5+ research papers in agricultural microbiology",
      "Performed microbial data analysis and scientific reporting",
      "Maintained laboratory safety standards and protocols"
    ],
    skills: ["Microbiology", "Laboratory Research", "Data Analysis", "Scientific Writing"],
    color: "emerald"
  },
  {
    id: "plant-livestock-lab",
    category: "Research & Academic", 
    title: "Plant & Livestock Sciences Lab Assistant",
    organization: "Institut Teknologi Bandung",
    period: "Aug 2024 – Dec 2024",
    location: "Bandung, Indonesia",
    type: "Academic",
    description: "Supervised laboratory experiments and developed scientific protocols for plant and livestock research.",
    achievements: [
      "Supervised 10 laboratory experiments with zero safety incidents",
      "Maintained 100% safety record throughout tenure",
      "Developed scientific protocols for research procedures",
      "Mentored junior students in laboratory techniques"
    ],
    skills: ["Plant Science", "Livestock Management", "Laboratory Safety", "Protocol Development"],
    color: "emerald"
  },
  {
    id: "pancasila-lecturer",
    category: "Research & Academic",
    title: "Pancasila Assistant Lecturer",
    organization: "Institut Teknologi Bandung",
    period: "Jun 2024 – Dec 2024",
    location: "Bandung, Indonesia", 
    type: "Academic",
    description: "Led TAPAK LIMAN project and mentored students in Pancasila studies.",
    achievements: [
      "Mentored 100+ students in Pancasila studies",
      "Led TAPAK LIMAN community engagement project",
      "Impacted 20+ community members through initiatives",
      "Developed innovative teaching methodologies"
    ],
    skills: ["Teaching", "Community Engagement", "Project Leadership", "Mentoring"],
    color: "emerald"
  },
  {
    id: "kpa-treasurer",
    category: "Leadership & Management",
    title: "Treasurer & Head of Fundraising",
    organization: "KPA-ITB (Agricultural Student Association)",
    period: "Jul 2024 – Aug 2025",
    location: "Bandung, Indonesia",
    type: "Leadership",
    description: "Managing financial operations and leading fundraising initiatives for the agricultural student association.",
    achievements: [
      "Achieved 60% revenue increase through strategic fundraising",
      "Managed team of 10+ fundraising specialists",
      "Executed projects 15% under budget consistently",
      "Negotiated partnerships with 15+ sponsors"
    ],
    skills: ["Financial Management", "Fundraising", "Team Leadership", "Strategic Planning"],
    color: "purple"
  },
  {
    id: "kpa-hr",
    category: "Leadership & Management",
    title: "HR Department Officer",
    organization: "KPA-ITB (Agricultural Student Association)",
    period: "Mar 2023 – Jul 2024",
    location: "Bandung, Indonesia",
    type: "Leadership",
    description: "Enhanced team performance and productivity through innovative HR strategies.",
    achievements: [
      "Improved team performance by 35% through strategic initiatives",
      "Enhanced productivity of 50+ staff members",
      "Designed comprehensive performance evaluation system",
      "Implemented employee development programs"
    ],
    skills: ["Human Resources", "Performance Management", "Team Development", "System Design"],
    color: "purple"
  },
  {
    id: "parajuara-manager",
    category: "Leadership & Management",
    title: "Manager of Marketing",
    organization: "ParaJuara.id",
    period: "May 2025 – Present",
    location: "Remote",
    type: "Professional",
    description: "Leading marketing strategies and team performance optimization for educational technology platform.",
    achievements: [
      "Increased engagement by 60% through innovative campaigns",
      "Improved team performance by 40% via strategic leadership",
      "Developed comprehensive content strategy framework",
      "Led digital marketing transformation initiatives"
    ],
    skills: ["Digital Marketing", "Content Strategy", "Team Management", "Performance Optimization"],
    color: "coral"
  }
] as const;

// Research Achievements
export const RESEARCH_ACHIEVEMENTS = [
  {
    id: "young-scientist-2021",
    title: "3rd Runner-up Young Scientist Competition 2021",
    level: "Provincial Level",
    field: "Environmental Science",
    year: "2021",
    research: "Bioethanol production from banana peels",
    description: "Innovation in sustainable energy solutions through agricultural waste utilization",
    impact: "Developed cost-effective bioethanol production method with 85% efficiency",
    medal: "bronze",
    color: "orange"
  },
  {
    id: "research-essay-2023",
    title: "Silver Medalist Research Essay Competition 2023",
    level: "National Level",
    field: "Animal Husbandry",
    year: "2023", 
    research: "Biodiesel from chicken fat catalyst",
    description: "Climate change mitigation focus through alternative energy development",
    impact: "Created sustainable biodiesel production process reducing emissions by 40%",
    medal: "silver",
    color: "cyan"
  },
  {
    id: "agricultural-competition-2024",
    title: "3rd Winner Agricultural Competition 2024",
    level: "National Level",
    field: "Environmental Restoration",
    year: "2024",
    research: "Petroleum contaminated soil biodegradation",
    description: "Environmental restoration technology for contaminated agricultural land",
    impact: "Developed bioremediation technique with 90% contamination reduction rate",
    medal: "bronze",
    color: "emerald",
    organization: "Universitas Padjadjaran"
  }
] as const;

// Skills Data
export const SKILLS = {
  programming: [
    { name: "Python", level: 85, description: "Data analysis, automation" },
    { name: "C++", level: 70, description: "Algorithm development" },
    { name: "SQL", level: 80, description: "Database management" },
    { name: "Power BI", level: 70, description: "Data visualization" },
  ],
  agricultural: [
    { name: "Remote Sensing & GIS", level: 90, description: "Spatial analysis" },
    { name: "Laboratory Techniques", level: 95, description: "Research methods" },
    { name: "Research Methodology", level: 90, description: "Scientific approach" },
    { name: "Agricultural Automation", level: 80, description: "Smart farming" },
  ],
  management: [
    { name: "Project Management", level: 95, description: "Leadership & coordination" },
    { name: "Team Leadership", level: 90, description: "People management" },
    { name: "Public Speaking", level: 70, description: "Communication" },
    { name: "Content Creation", level: 90, description: "Digital marketing" },
  ],
  languages: [
    { name: "Indonesian", level: 100, description: "Native speaker" },
    { name: "English", level: 85, description: "IELTS 6.5" },
  ]
} as const;

// Technology Stack for Infinite Scroll
export const TECH_STACK = [
  // Row 1 - Programming & Analysis
  { name: "Python", icon: "🐍", category: "Programming" },
  { name: "C++", icon: "⚡", category: "Programming" },
  { name: "SQL", icon: "🗃️", category: "Database" },
  { name: "Power BI", icon: "📊", category: "Analytics" },
  { name: "R", icon: "📈", category: "Statistics" },
  { name: "MATLAB", icon: "🧮", category: "Analysis" },
  
  // Row 2 - Agricultural Technology
  { name: "GIS", icon: "🗺️", category: "Geospatial" },
  { name: "Remote Sensing", icon: "🛰️", category: "Monitoring" },
  { name: "IoT Sensors", icon: "📡", category: "Hardware" },
  { name: "Precision Agriculture", icon: "🎯", category: "Technology" },
  { name: "Drone Technology", icon: "🚁", category: "Monitoring" },
  { name: "Smart Farming", icon: "🤖", category: "Automation" },
  
  // Row 3 - Research & Lab
  { name: "Microscopy", icon: "🔬", category: "Laboratory" },
  { name: "Spectroscopy", icon: "🌈", category: "Analysis" },
  { name: "Chromatography", icon: "⚗️", category: "Separation" },
  { name: "PCR", icon: "🧬", category: "Molecular" },
  { name: "Fermentation", icon: "🫧", category: "Biotechnology" },
  { name: "Tissue Culture", icon: "🧪", category: "Biology" },
  
  // Row 4 - Management & Communication
  { name: "Project Management", icon: "📋", category: "Management" },
  { name: "Team Leadership", icon: "👥", category: "Leadership" },
  { name: "Public Speaking", icon: "🎤", category: "Communication" },
  { name: "Content Creation", icon: "✍️", category: "Marketing" },
  { name: "Digital Marketing", icon: "📱", category: "Marketing" },
  { name: "Copywriting", icon: "💰", category: "Funding" },
] as const;

// Navigation Links
export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
] as const;

// Social Links
export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/janeetafaiza",
    icon: "linkedin",
    color: "blue"
  },
  {
    name: "GitHub", 
    url: "https://github.com/janeetafaiza",
    icon: "github",
    color: "gray"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/janeetafaiza", 
    icon: "instagram",
    color: "pink"
  },
  {
    name: "Email",
    url: "mailto:janeetafz@gmail.com",
    icon: "mail",
    color: "emerald"
  }
] as const;

// Animation Variants
export const ANIMATION_VARIANTS = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  },
  stagger: {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
} as const;

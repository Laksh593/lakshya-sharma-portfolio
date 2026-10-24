import { 
  Code, 
  Layers, 
  Database, 
  Server, 
  Cloud, 
  CheckCircle2, 
  Cpu, 
  Terminal,
  Globe,
  GitBranch
} from 'lucide-react';

// ─── Personal Info ─────────────────────────────────────────────
export const fullstackPersonalInfo = {
  name: 'Lakshya Sharma',
  initials: 'LS',
  title: 'Full Stack Software Engineer',
  location: 'Jaipur, Rajasthan',
  email: 'lakshyasharma593@gmail.com',
  phone: '+919116775258',
  phoneDisplay: '+91-9116775258',
  linkedIn: 'https://linkedin.com/in/lakshya-01-sharma',
  github: 'https://github.com/Laksh593',
  resumeFile: '/Lakshya_Sharma_Full_Stack_Resume.pdf',
  availabilityBadge: 'Available for Full Stack Opportunities',
};

// ─── Hero ──────────────────────────────────────────────────────
export const fullstackHeroData = {
  typewriterWords: [
    'Full Stack Software Engineer',
    'Backend & REST API Developer',
    'React & Node.js Developer',
    'Scalable Systems Engineer',
  ],
  description:
    'Full-Stack Software Engineer and MCA graduate with hands-on experience designing and deploying scalable web applications, robust REST APIs, and microservices using Python, Node.js, and React. Strong foundation in DSA, OOP, databases, containerization, and cloud workflows.',
};

// ─── About ─────────────────────────────────────────────────────
export const fullstackAboutData = {
  paragraphs: [
    'I am a Full-Stack Software Engineer and MCA graduate passionate about designing, building, and deploying responsive, high-performance web applications and backend systems. My expertise spans modern frontend frameworks, scalable RESTful APIs, relational and NoSQL database modeling, and containerized deployments.',
    'I bring hands-on experience with modern tech stacks including React, Node.js, Express, FastAPI, PostgreSQL, MySQL, and MongoDB. I focus on writing clean, modular code, enforcing robust data validation, implementing role-based authentication (JWT, OAuth 2.0), and ensuring transactional consistency across services.',
    'With a solid grounding in Computer Science fundamentals—Data Structures & Algorithms, Object-Oriented Programming, DBMS, and Operating Systems—along with practical DevOps experience in Docker, CI/CD, AWS, and GCP, I am eager to deliver immediate impact in high-velocity engineering teams.',
  ],
  stats: [
    { label: 'Featured Projects', value: '3' },
    { label: 'MCA CGPA', value: '8.19' },
    { label: 'Tech Stack Skills', value: '25+' },
    { label: 'Production Microservices', value: 'Dockerized' },
  ],
};

// ─── Technical Skills ──────────────────────────────────────────
export const fullstackSkillsData = [
  {
    iconName: 'Code',
    title: 'Programming Languages',
    skills: [
      'Python',
      'Java',
      'JavaScript',
      'TypeScript',
      'SQL & NoSQL',
    ],
  },
  {
    iconName: 'Globe',
    title: 'Frontend Development',
    skills: [
      'HTML5 · CSS3',
      'React.js · Next.js',
      'Responsive UI Design',
      'Modern JavaScript (ES6+)',
      'State Management & Hooks',
    ],
  },
  {
    iconName: 'Server',
    title: 'Backend & APIs',
    skills: [
      'Node.js · Express.js',
      'FastAPI · Flask',
      'REST API Architecture',
      'JWT · OAuth 2.0 Auth',
      'Microservices Design',
    ],
  },
  {
    iconName: 'Database',
    title: 'Databases & Storage',
    skills: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Indexing & Constraints',
      'Schema Design & ORMs',
    ],
  },
  {
    iconName: 'CheckCircle2',
    title: 'Testing & Quality',
    skills: [
      'PyTest',
      'JUnit',
      'Unit Testing',
      'Integration Testing',
      'API Testing with Postman',
    ],
  },
  {
    iconName: 'Cpu',
    title: 'Core Computer Science',
    skills: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks',
    ],
  },
  {
    iconName: 'Cloud',
    title: 'Cloud & DevOps',
    skills: [
      'AWS · GCP',
      'Docker Containerization',
      'Git · GitHub',
      'CI/CD Workflows',
      'Vercel · Cloudflare',
    ],
  },
];

export const fullstackIconMap = {
  Code,
  Globe,
  Server,
  Database,
  CheckCircle2,
  Cpu,
  Cloud,
  Terminal,
  Layers,
  GitBranch,
};

// ─── Projects ──────────────────────────────────────────────────
export const fullstackProjectsData = [
  {
    type: 'Frontend & Architecture',
    title: 'Project Management Dashboard',
    desc: 'A responsive project management dashboard for organizing projects, managing tasks, setting priorities, and tracking deadlines with interactive Kanban workflows.',
    highlights: [
      'Interactive Kanban boards with drag-and-drop task management across To Do, In Progress, and Done workflows.',
      'Full CRUD operations for tasks and projects with real-time search, multi-criteria filtering, and sorting.',
      'Dynamic dashboard analytics tracking completion rates and overdue deadlines, with localStorage persistence and light/dark theme support.',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'localStorage', 'Responsive UI'],
    metrics: ['Kanban Drag & Drop', 'CRUD Operations', 'Local Storage Persistence'],
    github: null,
    demo: null,
  },
  {
    type: 'Full-Stack & Backend Systems',
    title: 'SmartDesk — Support Ticket & SLA Management System',
    desc: 'A full-stack enterprise support ticket management application designed to handle ticket lifecycle creation, automated assignment, status tracking, and SLA resolution workflows.',
    highlights: [
      'High-performance RESTful APIs built with FastAPI, incorporating role-based access control (RBAC) and ticket search/filtering.',
      'Real-time SLA deadline monitoring and countdown tracking to enforce resolution timelines and service level agreements.',
      'Relational PostgreSQL database architecture with strict data constraints and indexing, containerized with Docker for seamless reproducibility.',
    ],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'Docker', 'REST APIs'],
    metrics: ['Role-Based Access', 'SLA Tracking', 'Docker Containerized'],
    github: null,
    demo: null,
  },
  {
    type: 'Full-Stack MERN & AI Integration',
    title: 'QuizForge AI — AI-Powered Quiz Assessment Platform',
    desc: 'An end-to-end MERN-stack quiz assessment platform that dynamically generates structured quizzes based on subject, topic, difficulty level, and question types.',
    highlights: [
      'Integrated AI generation pipeline with schema validation to produce accurate multi-format questions on-demand.',
      'Real-time timed quiz sessions with answer persistence, automatic submission triggers, and server-side scoring logic.',
      'Comprehensive quiz history and performance analytics dashboards showing candidate mastery, accuracy breakdown, and progression over time.',
    ],
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'AI API', 'JWT'],
    metrics: ['AI Quiz Generation', 'Timed Assessments', 'Automated Scoring'],
    github: null,
    demo: null,
  },
];

// ─── Experience (Academic Project Internships) ───────────────────
export const fullstackExperienceData = [
  {
    role: 'MCA Academic Project Intern',
    period: 'January 2026 – May 2026',
    badge: 'Supervised Academic Internship',
    context: 'Academic Internship & MCA Dissertation under Faculty Supervision',
    institution: 'Vellore Institute of Technology (VIT), Chennai',
  },
  {
    role: 'MCA Academic Project Intern',
    period: 'July 2025 – December 2025',
    badge: 'Supervised Academic Internship',
    context: 'Academic Internship & MCA Dissertation under Faculty Supervision',
    institution: 'Vellore Institute of Technology (VIT), Chennai',
  },
];

// ─── Education ─────────────────────────────────────────────────
export const fullstackEducationData = [
  {
    dates: '2024-2026',
    degree: 'Master of Computer Applications (MCA)',
    school: 'Vellore Institute of Technology (VIT), Chennai, Tamil Nadu',
    score: 'CGPA: 8.19',
  },
  {
    dates: '2021-2024',
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'Aryan College, Ajmer, Rajasthan',
    score: 'Percentage: 67.57%',
  },
];

// ─── Achievements ──────────────────────────────────────────────
export const fullstackAchievementsData = [
  {
    title: '3rd Prize, AppForge Hackathon 2025',
    org: 'VIT Chennai',
    description: 'Built NeighborNet, a community-focused platform for local issue reporting and civic engagement.',
    highlight: '3rd Prize',
  },
  {
    title: 'Tesseract - The Data Matrix 2025',
    org: 'VIT Chennai',
    description: 'Participated in VIT Chennai\'s Data Science & Analytics fest.',
    highlight: 'Participant',
  },
];

// ─── Certifications ────────────────────────────────────────────
export const fullstackCertificationsData = [
  { 
    title: 'Python (Basic) Certification', 
    org: 'HackerRank',
    category: 'Programming'
  },
  { 
    title: 'Relational Databases Certification', 
    org: 'freeCodeCamp',
    category: 'Databases'
  },
  { 
    title: 'Meta Front-End & Back-End Developer', 
    org: 'Meta',
    category: 'Full Stack Engineering'
  },
  { 
    title: 'Cloud Architecture Certification', 
    org: 'CDAC',
    category: 'Cloud & Infrastructure'
  },
];

// ─── Navigation ────────────────────────────────────────────────
export const fullstackNavItems = [
  'About',
  'Skills',
  'Projects',
  'Experience',
  'Education',
  'Certifications',
];

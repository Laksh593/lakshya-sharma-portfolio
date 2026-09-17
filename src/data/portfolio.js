import { Brain, Code, Layers, Database, Eye, MessageSquare, Server, Cloud } from 'lucide-react';

// ─── Personal Info ─────────────────────────────────────────────
export const personalInfo = {
  name: 'Lakshya Sharma',
  initials: 'LS',
  location: 'Jaipur, Rajasthan',
  email: 'lakshyasharma593@gmail.com',
  phone: '+919116775258',
  phoneDisplay: '+91-9116775258',
  linkedIn: 'https://linkedin.com/in/lakshya-01-sharma',
  github: 'https://github.com/Laksh593',
  resumeFile: '/Lakshya_Sharma_Resume.pdf',
  availabilityBadge: 'Available for AI/ML Opportunities',
};

// ─── Hero ──────────────────────────────────────────────────────
export const heroData = {
  typewriterWords: [
    'AI/ML Engineer',
    'Generative AI Developer',
    'Machine Learning Engineer',
    'Python Backend Developer',
  ],
  description:
    'I build and evaluate machine learning and deep learning systems across NLP and computer vision, develop GenAI and RAG workflows, and build production-ready REST APIs using Python, FastAPI, and Docker.',
};

// ─── Projects ──────────────────────────────────────────────────
export const projectsData = [
  {
    type: 'Federated Learning + GenAI',
    title: 'Federated RAG Incident Report System',
    desc: 'Privacy-preserving incident reporting system combining Federated Learning and RAG. Generates structured 4-section reports in under 60 seconds across 13 federated clients — without centralising raw data.',
    highlights: [
      'Multimodal AI pipeline with YOLOv8 evidence extraction + Gemini 2.0 Flash LLM generation.',
      'Hybrid RAG retrieval stack: BM25, Cross-Encoder re-ranking, and ChromaDB — achieving 90% contextual relevance.',
      'Containerised FastAPI backend with Docker; REST endpoints for the full multimodal pipeline.',
    ],
    tech: ['Python', 'PyTorch', 'LangChain', 'FastAPI', 'ChromaDB', 'React', 'Docker'],
    metrics: ['13 Federated Clients', '<60s Generation', '90% Relevance'],
    github: 'https://github.com/Laksh593/Federated-RAG-Incident-Report-System',
    demo: null,
  },
  {
    type: 'MLOps & Predictive Analytics',
    title: 'Customer Churn Prediction & MLOps Platform',
    desc: 'End-to-end churn prediction pipeline with EDA, preprocessing, feature engineering, and model benchmarking across Logistic Regression, Random Forest, and Gradient Boosting.',
    highlights: [
      'Benchmarked models using Precision, Recall, F1-score, and ROC-AUC.',
      'MLflow experiment tracking and model versioning for reproducible ML.',
      'FastAPI REST service for real-time and batch churn prediction, containerised with Docker.',
    ],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'MLflow', 'FastAPI', 'Docker', 'PyTest'],
    metrics: [],
    github: 'https://github.com/Laksh593/customer-churn-mlops',
    demo: null,
  },
  {
    type: 'Multi-Agent AI System',
    title: 'ResearchMind — Multi-Agent AI Research Pipeline',
    desc: 'A 4-stage multi-agent research system with specialised Search, Reader, Writer, and Critic agents that collaboratively produce structured research reports.',
    highlights: [
      'Search Agent retrieves recent web information; Reader Agent selects and extracts relevant content.',
      'Writer chain synthesises structured research reports; Critic chain evaluates against quality criteria.',
      'Shared state management architecture for seamless multi-agent workflow coordination.',
    ],
    tech: ['Python', 'LangChain', 'LangGraph', 'Flask'],
    metrics: ['4-Stage Agent Architecture'],
    github: 'https://github.com/Laksh593/Research-Mind---multi-agent-research-assistant',
    demo: null,
  },
  {
    type: 'NLP & Recruitment AI',
    title: 'AI Resume Screening & Job Matching System',
    desc: 'AI-powered resume screening platform that parses candidate resumes, extracts skills via NLP, and ranks applicants against job descriptions using TF-IDF cosine similarity and skill-based matching.',
    highlights: [
      'TF-IDF + cosine similarity scoring with skill-based matching for resume-job relevance ranking.',
      'FastAPI endpoints for resume upload, job processing, candidate matching, and skill-gap analysis.',
      'Interactive Streamlit dashboard for recruiters to view ranked candidates and matched/missing skills.',
    ],
    tech: ['Python', 'Scikit-learn', 'NLP', 'FastAPI', 'MongoDB', 'Streamlit'],
    metrics: [],
    github: 'https://github.com/Laksh593/AI-Resume-Screening-Job-Matching-System',
    demo: null,
  },
  {
    type: 'Backend Engineering',
    title: 'Production E-Commerce / Inventory REST API',
    desc: 'Production-oriented FastAPI backend for product, user, cart, order, and inventory management with JWT authentication, role-based authorization, and transactional stock consistency.',
    highlights: [
      'Normalized MySQL schema with SQLAlchemy ORM — CRUD operations, database constraints, and relational entities.',
      'JWT auth and role-based access control for customer/admin workflows with protected endpoints.',
      'Transactional inventory and order processing; containerised with Docker; validated with PyTest and Postman.',
    ],
    tech: ['Python', 'FastAPI', 'MySQL', 'SQLAlchemy', 'Docker', 'PyTest'],
    metrics: [],
    github: 'https://github.com/Laksh593/Production-E-Commerce-Inventory-REST-API',
    demo: null,
  },
];

// ─── About ─────────────────────────────────────────────────────
export const aboutData = {
  paragraphs: [
    'I\'m an AI/ML Engineer with hands-on experience building and evaluating deep learning models in NLP and computer vision. My work spans from training neural networks (CNNs, LSTMs) to deploying GenAI systems via REST APIs using FastAPI and Flask.',
    'I specialize in Generative AI — building RAG workflows with LangChain, Hugging Face, and vector databases, designing multi-agent systems with LangGraph, and evaluating LLM outputs with structured frameworks including LLM-as-judge methodologies.',
    'On the engineering side, I bring strong backend and MLOps skills — containerizing services with Docker, tracking experiments with MLflow, managing data pipelines with SQL and NoSQL databases, and deploying to AWS and GCP.',
  ],
  stats: [
    { label: 'Featured Projects', value: `${projectsData.length}` },
    { label: 'Federated Clients', value: '13' },
    { label: 'Report Generation', value: '<60s' },
    { label: 'Contextual Relevance', value: '90%' },
  ],
};

// ─── Skills ────────────────────────────────────────────────────
export const skillsData = [
  {
    iconName: 'Code',
    title: 'Languages',
    skills: ['Python', 'Java', 'SQL'],
  },
  {
    iconName: 'Brain',
    title: 'ML & Deep Learning',
    skills: [
      'Classification / Regression / Clustering',
      'CNNs · RNNs · LSTM',
      'PyTorch · TensorFlow/Keras',
      'scikit-learn · XGBoost',
      'Model Evaluation & Benchmarking',
    ],
  },
  {
    iconName: 'Eye',
    title: 'Computer Vision',
    skills: ['OpenCV', 'YOLOv8', 'CNN-based Image Classification'],
  },
  {
    iconName: 'MessageSquare',
    title: 'NLP',
    skills: [
      'Text Preprocessing',
      'Embeddings & Sentence-Transformers',
      'Semantic Search',
    ],
  },
  {
    iconName: 'Layers',
    title: 'Generative & Agentic AI',
    skills: [
      'Prompt Engineering',
      'LLM Evaluation · RAG',
      'Agentic & Multi-Agent Systems',
      'LangChain · LangGraph',
      'Hugging Face Transformers',
      'Multimodal AI',
    ],
  },
  {
    iconName: 'Server',
    title: 'Backend & APIs',
    skills: [
      'FastAPI · Flask',
      'Spring Boot · Node.js/Express',
      'REST API Design',
      'ONNX · Inference Optimization',
      'Experiment Logging',
    ],
  },
  {
    iconName: 'Database',
    title: 'Data & Storage',
    skills: [
      'SQL / NoSQL · MongoDB',
      'ChromaDB · Vector Search',
      'Data Preprocessing',
      'Feature Engineering',
    ],
  },
  {
    iconName: 'Cloud',
    title: 'Cloud & Tools',
    skills: [
      'AWS · GCP',
      'Docker',
      'Git / GitHub',
      'Linux / Ubuntu',
      'Postman',
    ],
  },
];

// Icon map for dynamic rendering
export const iconMap = { Brain, Code, Layers, Database, Eye, MessageSquare, Server, Cloud };

// ─── Education ─────────────────────────────────────────────────
export const educationData = [
  {
    dates: '2024-2026',
    degree: 'MCA',
    school: 'Vellore Institute of Technology (VIT), Chennai, Tamil Nadu',
    score: 'CGPA: 8.19',
  },
  {
    dates: '2021-2024',
    degree: 'BCA',
    school: 'Aryan College, Ajmer, Rajasthan',
    score: 'Percentage: 67.57%',
  },
  {
    dates: '2020-2021',
    degree: '12th Senior Secondary Certificate',
    school: 'Maheshwari International School, Jaipur, Rajasthan',
    score: 'Percentage: 62.57%',
  },
  {
    dates: '2018-2019',
    degree: '10th Secondary School Certificate',
    school: 'Maheshwari International School, Jaipur, Rajasthan',
    score: 'Percentage: 65%',
  },
];

// ─── Achievements ──────────────────────────────────────────────
export const achievementsData = [
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
export const certificationsData = [
  { title: 'Generative AI with Large Language Models', org: 'Coursera' },
  { title: 'Python for Data Science, AI & Development', org: 'Coursera' },
  { title: 'Agentic AI Foundations Associate', org: 'Oracle' },
  { title: 'Cloud Architecture (AWS/GCP Fundamentals)', org: 'CDAC Chennai' },
];

// ─── Extracurriculars ──────────────────────────────────────────
export const extracurricularsData = [
  {
    title: 'Management Team Member, E-Cell Club',
    description: 'Coordinated large-scale events at VIT Chennai, demonstrating communication and team collaboration skills.',
  },
  {
    title: 'Volunteer, Red Ribbon Club',
    description: 'Contributed to awareness drives and campus social initiatives.',
  },
];

// ─── Navigation ────────────────────────────────────────────────
export const navItems = ['About', 'Skills', 'Projects', 'Education', 'Achievements'];

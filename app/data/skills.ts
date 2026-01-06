export interface SkillCategory {
  name: string;
  skills: string[];
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages & Frameworks',
    skills: ['Python', 'Java', 'TypeScript', 'React.js', 'Next.js'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'ML Libraries & Tools',
    skills: [
      'PyTorch',
      'TensorFlow',
      'Scikit-Learn',
      'Pandas',
      'NumPy',
      'OpenCV',
      'NLTK',
      'LlamaIndex',
      'LangChain',
      'Faiss',
      'DeepEval'
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'MLOps & DevOps',
    skills: [
      'Docker',
      'Kubernetes',
      'Helm',
      'ArgoCD',
      'Terraform',
      'CI/CD',
      'Git'
    ],
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'ML Domains',
    skills: [
      'Supervised Learning',
      'Unsupervised Learning',
      'NLP',
      'Computer Vision',
      'Time-Series Analysis',
      'Reinforcement Learning',
      'Robotics (ROS2, PX4, Gazebo)',
      'RAG'
    ],
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'Backend & API',
    skills: ['FastAPI', 'Django', 'Flask', 'REST API', 'GraphQL'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    name: 'Data & Cloud',
    skills: [
      'Databricks',
      'PySpark',
      'GCP',
      'Azure',
      'PostgreSQL',
      'RabbitMQ',
      'Redis'
    ],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    name: 'Async & Parallelism',
    skills: ['AsyncIO', 'Celery', 'Redis', 'Multiprocessing'],
    color: 'from-pink-500 to-rose-500'
  }
];

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  file?: string;
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    name: 'Machine Learning Specialization',
    issuer: 'Coursera (Stanford & DeepLearning.AI)',
    date: '2023',
    file: '/certificates/Machine Learning Specialization _ Coursera.pdf'
  },
  {
    name: 'Advanced Learning Algorithms',
    issuer: 'Coursera (DeepLearning.AI)',
    date: '2023',
    file: '/certificates/Advanced Learning Algorithms _ Coursera.pdf'
  },
  {
    name: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'Coursera (Stanford)',
    date: '2023',
    file: '/certificates/Supervised Machine Learning_ Regression and Classification _ Coursera.pdf'
  },
  {
    name: 'Unsupervised Learning, Recommenders',
    issuer: 'Coursera (Stanford)',
    date: '2023',
    file: '/certificates/Unsupervised Learning, Recommenders _ Coursera.pdf'
  },
  {
    name: 'Introduction to Data Science in Python',
    issuer: 'Coursera (University of Michigan)',
    date: '2023',
    file: '/certificates/Introduction to Data Science in Python _ Coursera.pdf'
  },
  {
    name: 'React 18 for Beginners',
    issuer: 'Code with Mosh',
    date: '2024',
    file: '/certificates/certificate-of-completion-for-react-18-for-beginners.pdf'
  },
  {
    name: 'Version Control',
    issuer: 'Coursera (Meta)',
    date: '2023',
    file: '/certificates/Version Control _ Coursera.pdf'
  }
];

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

export const contactInfo: ContactInfo = {
  email: 'glorysonhorace@gmail.com',
  phone: '+254796411809',
  location: 'Nairobi, Kenya',
  linkedin: 'https://linkedin.com/in/gloryson-ondanje-466893242',
  github: 'https://github.com/Gson-glitch'
};

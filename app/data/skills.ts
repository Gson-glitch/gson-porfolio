export interface SkillCategory {
  name: string;
  skills: Array<{ name: string; icon?: string }>;
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages & Frameworks',
    skills: [
      { name: 'Python', icon: 'python' },
      { name: 'Java', icon: 'java' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Rust', icon: 'rust' },
      { name: 'React.js', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' }
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'ML Libraries & Tools',
    skills: [
      { name: 'PyTorch', icon: 'pytorch' },
      { name: 'TensorFlow', icon: 'tensorflow' },
      { name: 'Scikit-Learn', icon: 'sklearn' },
      { name: 'Pandas', icon: 'pandas' },
      { name: 'NumPy', icon: 'numpy' },
      { name: 'OpenCV', icon: 'opencv' },
      { name: 'NLTK' },
      { name: 'LlamaIndex' },
      { name: 'LangChain' },
      { name: 'Faiss' },
      { name: 'DeepEval' }
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'MLOps & DevOps',
    skills: [
      { name: 'Docker', icon: 'docker' },
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'Helm' },
      { name: 'ArgoCD' },
      { name: 'Terraform', icon: 'terraform' },
      { name: 'CI/CD' },
      { name: 'Git', icon: 'git' }
    ],
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'ML Domains',
    skills: [
      { name: 'Supervised Learning' },
      { name: 'Unsupervised Learning' },
      { name: 'NLP' },
      { name: 'Computer Vision' },
      { name: 'Time-Series Analysis' },
      { name: 'Reinforcement Learning' },
      { name: 'Robotics (ROS2, PX4, Gazebo)', icon: 'robot' },
      { name: 'RAG' }
    ],
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'Backend & API',
    skills: [
      { name: 'FastAPI', icon: 'fastapi' },
      { name: 'Django', icon: 'django' },
      { name: 'Flask', icon: 'flask' },
      { name: 'REST API' },
      { name: 'GraphQL', icon: 'graphql' }
    ],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    name: 'Data & Cloud',
    skills: [
      { name: 'Databricks' },
      { name: 'PySpark' },
      { name: 'GCP', icon: 'gcp' },
      { name: 'Azure', icon: 'azure' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'RabbitMQ', icon: 'rabbitmq' },
      { name: 'Redis', icon: 'redis' }
    ],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    name: 'Async & Parallelism',
    skills: [
      { name: 'AsyncIO' },
      { name: 'Celery' },
      { name: 'Multiprocessing' }
    ],
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
  linkedin: 'https://linkedin.com/in/gloryson-ondanje',
  github: 'https://github.com/Gson-glitch'
};

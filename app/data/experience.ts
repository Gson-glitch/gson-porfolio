export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  period: string;
  type: 'remote' | 'onsite' | 'hybrid';
  description: string;
  achievements: string[];
  tech: string[];
  current: boolean;
}

export const experiences: Experience[] = [
  {
    id: 'aai-labs',
    company: 'AAI Labs',
    position: 'Software Developer',
    location: 'Vilnius, Lithuania',
    period: '09/2023 – Present',
    type: 'remote',
    description: 'Leading ML engineering initiatives across NLP, Computer Vision, and Reinforcement Learning domains.',
    achievements: [
      'Developed custom LLM-based API for health analytics using WHO guidelines, RAG, and Vector Search achieving 92% answer relevancy and 88% faithfulness',
      'Designed RL-based self-tuning PID controller for drone altitude with 0.22% overshoot error and 0.03% steady-state error',
      'Architected georeferencing service with YOLOv12, DINOv2, achieving 95% success rate below 25m GPS error',
      'Built and deployed Atlassian Forge app (Critto) for automated PR reviews against Jira acceptance criteria'
    ],
    tech: [
      'Python',
      'PyTorch',
      'TensorFlow',
      'LangChain',
      'LlamaIndex',
      'Faiss',
      'YOLOv12',
      'ROS2',
      'PX4',
      'FastAPI',
      'Docker'
    ],
    current: true
  },
  {
    id: 'gebeya',
    company: 'Gebeya Inc.',
    position: 'Junior Machine Learning Engineer (Freelance)',
    location: 'Addis Ababa, Ethiopia',
    period: '05/2023 – 10/2024',
    type: 'remote',
    description: 'Delivered end-to-end ML solutions for client projects across regression and classification tasks.',
    achievements: [
      'Developed regression and classification models with hyperparameter tuning and preprocessing',
      'Streamlined data pipelines using Pandas and PySpark, improving training efficiency',
      'Deployed containerized ML services with Docker and FastAPI for scalable production environments'
    ],
    tech: [
      'Python',
      'Scikit-Learn',
      'Pandas',
      'PySpark',
      'Docker',
      'FastAPI',
      'PostgreSQL'
    ],
    current: false
  },
  {
    id: 'millennium',
    company: 'Millenium Solutions EA Ltd.',
    position: 'ERP Developer Internship',
    location: 'Nairobi, Kenya',
    period: '05/2023 – 08/2023',
    type: 'onsite',
    description: 'Developed and customized ERP solutions for business process optimization.',
    achievements: [
      'Developed and customized solutions using Microsoft Dynamics NAV',
      'Enhanced operational efficiency and met specific business needs',
      'Collaborated with cross-functional teams to implement ERP workflows'
    ],
    tech: [
      'Microsoft Dynamics NAV',
      'C/AL',
      'SQL Server'
    ],
    current: false
  }
];

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
}

export const education: Education = {
  degree: 'BSc. Computer Science',
  institution: 'University of Embu',
  location: 'Embu, Kenya',
  period: '09/2019 – 09/2023',
  description: 'Focused on Machine Learning, Computer Vision, and Software Engineering'
};

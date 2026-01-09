export interface Accomplishment {
  id: string;
  title: string;
  description: string;
  tech: string[];
  date: string;
  category: 'nlp' | 'computer-vision' | 'rl' | 'web' | 'mlops';
}

export const accomplishments: Accomplishment[] = [
  {
    id: 'particus',
    title: 'Defect Evaluation & Cost Prediction System',
    description: 'Developed a system to optimize defect evaluation and renovation cost predictions, enhancing decision-making and operational efficiency.',
    tech: ['Python', 'ML', 'API Development'],
    date: 'Mar 2023 – Jan 2024',
    category: 'web'
  },
  {
    id: 'govtech-buildings',
    title: 'Building Damage Identification Platform',
    description: 'Built a platform to streamline building damage identification using SSD model and maintenance scheduling. Integrated notifications and calendar functionality to help maintenance teams track tasks efficiently.',
    tech: ['Python', 'Docker', 'API Development', 'Computer Vision', 'Azure'],
    date: 'Nov 2023 – Mar 2024',
    category: 'computer-vision'
  },
  {
    id: '5g-drones',
    title: 'UAV Localization & Object Detection System',
    description: 'Developed UAV localization and object detection system to improve real-time drone navigation and monitoring capabilities.',
    tech: ['Python', 'Reinforcement Learning', 'YOLOv12', 'DINOv2', 'ROS2', 'Gazebo', 'ORB-SLAM3', 'Computer Vision'],
    date: 'Feb 2024 – Present',
    category: 'rl'
  },
  {
    id: 'health-analytics-pss',
    title: 'Health Analytics API with WHO Guidelines',
    description: 'Developed a custom LLM-based API for health analytics using WHO guidelines, RAG, and Vector Search.',
    tech: ['Python', 'LLM', 'RAG', 'Vector Search', 'Docker', 'MongoDB', 'FastAPI', 'LlamaIndex'],
    date: 'Aug 2024 – Sep 2025',
    category: 'nlp'
  },
  {
    id: 'finmin',
    title: 'Government Financial Management Platform',
    description: 'Built a financial management platform to improve government budgeting, reporting transparency, and data integrity. The system aims to identify and flag instances of similar projects requesting for funding thereby reducing the risk of double financing.',
    tech: ['Python', 'React.js', 'Azure', 'Docker', 'Microsoft Entra'],
    date: 'Oct 2024 – Jun 2025',
    category: 'web'
  },
  {
    id: 'critto-llm-bot',
    title: 'Automated PR Review Bot (Critto)',
    description: 'Built and deployed an Atlassian forge app (Critto) that automates PR reviews, validating them against acceptance criteria.',
    tech: ['Atlassian Forge', 'React.js', 'OAuth 2.0', 'LlamaIndex', 'K8s', 'Hetzner'],
    date: 'Mar 2025 – Oct 2025',
    category: 'mlops'
  },
  {
    id: 'orbitronai',
    title: 'Social Media Automation Platform (OrbitronAI)',
    description: 'Developed n8n workflows that automate engagement activities across platforms like Facebook and Google.',
    tech: ['n8n', 'GKE', 'DevOps (Helm, K8s, Prometheus, Grafana, ArgoCD, Terraform)'],
    date: 'Oct 2025 – Dec 2025',
    category: 'mlops'
  }
];
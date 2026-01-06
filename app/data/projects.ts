export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  date: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  highlights: string[];
  category: 'nlp' | 'computer-vision' | 'rl' | 'web' | 'mlops';
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'boeing-rag',
    title: 'Boeing 737 Operations Manual RAG System',
    description: 'Advanced RAG system for technical documentation with semantic search and reranking',
    longDescription: 'Developed an Advanced Retrieval-Augmented Generation (RAG) system for querying the Boeing 737 Operations Manual, integrating semantic search (BGE-M3), BM25, and cross-encoder reranking for high-accuracy technical lookup.',
    tech: ['Python', 'LlamaIndex', 'BGE-M3', 'BM25', 'FastAPI', 'Gemini', 'OCR'],
    date: '11/2025',
    metrics: [
      { label: 'Hit@1 Accuracy', value: '80%' },
      { label: 'Response Time', value: '<2s' }
    ],
    highlights: [
      'Implemented contextual PDF-ingestion pipeline using OCR',
      'Gemini-based chunk enrichment for semantic understanding',
      'Page-level citation tracking through FastAPI service',
      'Combined semantic and lexical search with reranking'
    ],
    category: 'nlp',
    featured: true
  },
  {
    id: 'health-analytics-api',
    title: 'LLM-Based Health Analytics API',
    description: 'Custom LLM API using WHO guidelines with RAG and Vector Search',
    longDescription: 'Developed a custom LLM-based API for health analytics using WHO guidelines, RAG, and Vector Search achieving high accuracy in medical query responses.',
    tech: ['Python', 'LangChain', 'Faiss', 'Vector Search', 'RAG', 'FastAPI'],
    date: '09/2023 - Present',
    metrics: [
      { label: 'Answer Relevancy', value: '92%' },
      { label: 'Faithfulness Score', value: '88%' }
    ],
    highlights: [
      'Integrated WHO medical guidelines as knowledge base',
      'Implemented RAG architecture for accurate retrieval',
      'Vector search for semantic similarity matching',
      'Production-ready API with comprehensive error handling'
    ],
    category: 'nlp',
    featured: true
  },
  {
    id: 'drone-rl-controller',
    title: 'RL-Based Self-Tuning PID Controller',
    description: 'Reinforcement Learning controller for drone altitude control',
    longDescription: 'Designed and deployed a Reinforcement Learning (Actor-Critic Networks) based self-tuning PID controller for drone altitude achieving exceptional precision.',
    tech: ['Python', 'PyTorch', 'Actor-Critic', 'ROS2', 'PX4', 'Gazebo'],
    date: '09/2023 - Present',
    metrics: [
      { label: 'Overshoot Error', value: '0.22%' },
      { label: 'Steady-State Error', value: '0.03%' }
    ],
    highlights: [
      'Implemented Actor-Critic neural networks for policy learning',
      'Self-tuning PID parameters for optimal control',
      'Real-time altitude adjustment in simulation',
      'Integrated with ROS2 and PX4 autopilot'
    ],
    category: 'rl',
    featured: true
  },
  {
    id: 'drone-georeferencing',
    title: 'Drone Georeferencing Service',
    description: 'Computer vision system for precise drone localization',
    longDescription: 'Architected a georeferencing service integrating YOLOv12 object detection, DINOv2 embeddings, trigonometric raycasting, and camera intrinsics for drone localization.',
    tech: ['Python', 'YOLOv12', 'DINOv2', 'OpenCV', 'Computer Vision', 'PyTorch'],
    date: '09/2023 - Present',
    metrics: [
      { label: 'Success Rate', value: '95%' },
      { label: 'GPS Error Threshold', value: '<25m' }
    ],
    highlights: [
      'YOLOv12 for real-time object detection',
      'DINOv2 embeddings for feature extraction',
      'Trigonometric raycasting for position calculation',
      'Camera intrinsics calibration for accuracy'
    ],
    category: 'computer-vision',
    featured: true
  },
  {
    id: 'critto-forge-app',
    title: 'Critto - Automated PR Review Tool',
    description: 'Atlassian Forge app for automated pull request validation',
    longDescription: 'Built and deployed an Atlassian Forge app that automates PR reviews by validating them against defined acceptance criteria attached to Jira issues.',
    tech: ['JavaScript', 'Atlassian Forge', 'Jira API', 'React', 'Node.js'],
    date: '09/2023 - Present',
    metrics: [
      { label: 'Review Time Saved', value: '60%' },
      { label: 'Accuracy', value: '95%' }
    ],
    highlights: [
      'Automated acceptance criteria validation',
      'Seamless Jira integration',
      'Real-time PR feedback',
      'Deployed on Atlassian Forge platform'
    ],
    category: 'mlops',
    featured: false
  },
  {
    id: 'stock-trading-platform',
    title: 'Real-Time Stock Trading Simulation Platform',
    description: 'Distributed trading system with microservices architecture',
    longDescription: 'Engineered a distributed trading system with microservices architecture, implementing an order matching engine that processes buy/sell orders with a price-time priority algorithm.',
    tech: ['Python', 'FastAPI', 'RabbitMQ', 'Docker', 'WebSocket', 'React'],
    date: '08/2025',
    metrics: [
      { label: 'Order Processing', value: 'Sub-second' },
      { label: 'Concurrent Users', value: '1000+' }
    ],
    highlights: [
      'Microservices architecture with message-driven design',
      'Real-time order book updates via WebSocket',
      'Price-time priority matching algorithm',
      'Scalable deployment with Docker'
    ],
    category: 'web',
    featured: false
  },
  {
    id: 'fuel-route-optimizer',
    title: 'Fuel Route Optimizer API',
    description: 'Django REST API for optimizing fuel stops on long routes',
    longDescription: 'Built a Django REST API to optimize fuel stops by combining geospatial data, fuel price datasets, and OpenRouteService APIs.',
    tech: ['Python', 'Django', 'PostgreSQL', 'OpenRouteService API', 'PostGIS'],
    date: '06/2025',
    highlights: [
      'Geospatial data processing and analysis',
      'Cost estimation and route optimization',
      'Route geometry generation',
      'Caching mechanisms for improved performance'
    ],
    category: 'web',
    featured: false
  },
  {
    id: 'mars-rock-detection',
    title: 'Mars Rock Detection with ROS2 + YOLOv11',
    description: 'Real-time object detection for Mars exploration simulation',
    longDescription: 'Implemented a real-time object detection system using YOLOv11, ROS2, and OpenCV, achieving high accuracy in a Mars simulation environment.',
    tech: ['Python', 'YOLOv11', 'ROS2 Humble', 'OpenCV', 'Gazebo'],
    date: '01/2025',
    metrics: [
      { label: 'mAP@50', value: '0.71' }
    ],
    highlights: [
      'YOLOv11 custom training for Mars terrain',
      'ROS2 Humble integration for robotic control',
      'Real-time processing with OpenCV',
      'Simulated Mars environment in Gazebo'
    ],
    category: 'computer-vision',
    featured: false
  }
];

export const getProjectsByCategory = (category: Project['category']) => {
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

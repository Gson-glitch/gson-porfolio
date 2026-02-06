import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Gloryson Horace Ondanje | ML Engineer | AI Researcher',
    short_name: 'Gloryson',
    description: 'Machine Learning Engineer specializing in Computer Vision, NLP, and Reinforcement Learning',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f1729', 
    theme_color: '#3b82f6', 
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}

import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Gloryson Ondanje Portfolio',
    short_name: 'Gloryson',
    description: 'Machine Learning Engineer Portfolio',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f1729', 
    theme_color: '#3b82f6', 
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
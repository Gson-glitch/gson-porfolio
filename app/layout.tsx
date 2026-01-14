import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Layout from './components/Layout';
import JsonLd from './components/JsonLd';
import { SITE_URL, GOOGLE_VERIFICATION } from '@/config';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Gloryson Ondanje | ML Engineer',
    template: '%s | Gloryson Ondanje',
  },
  description:
    'Machine Learning Engineer with 3+ years of experience in Computer Vision, NLP, and Reinforcement Learning. Building intelligent systems that solve real-world problems.',
  keywords: [
    'Gloryson Ondanje',
    'Machine Learning Engineer',
    'Computer Vision',
    'NLP',
    'Reinforcement Learning',
    'PyTorch',
    'TensorFlow',
    'AI Developer Kenya',
    'Software Engineer',
  ],
  authors: [{ name: 'Gloryson Ondanje', url: SITE_URL }],
  creator: 'Gloryson Ondanje',
  icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icon.svg', type: 'image/svg+xml' },
      ],
      apple: [
        { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
  openGraph: {
    type: 'profile',
    firstName: 'Gloryson',
    lastName: 'Ondanje',
    username: 'gson',
    gender: 'male',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Gloryson Ondanje Portfolio',
    title: 'Gloryson Ondanje | ML Engineer',
    description:
      'Machine Learning Engineer specializing in Computer Vision, NLP, and Reinforcement Learning',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Gloryson Ondanje Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gloryson Ondanje | ML Engineer',
    description:
      'Machine Learning Engineer specializing in Computer Vision, NLP, and Reinforcement Learning',
    images: ['/opengraph-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: GOOGLE_VERIFICATION, 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body>
        <JsonLd />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Layout from './components/Layout';

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
  metadataBase: new URL('https://gson.io'),
  
  title: 'Gloryson Ondanje | ML Engineer',
  description:
    'Machine Learning Engineer with 3+ years of experience in Computer Vision, NLP, and Reinforcement Learning. Building intelligent systems that solve real-world problems.',
  keywords: [
    'Machine Learning',
    'ML Engineer',
    'Computer Vision',
    'NLP',
    'Reinforcement Learning',
    'PyTorch',
    'TensorFlow',
    'AI',
    'Deep Learning',
  ],
  authors: [{ name: 'Gloryson Ondanje' }],
  creator: 'Gloryson Ondanje',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio.gson.io',
    title: 'Gloryson Ondanje | ML Engineer',
    description:
      'Machine Learning Engineer specializing in Computer Vision, NLP, and Reinforcement Learning',
    siteName: 'Gloryson Ondanje Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gloryson Ondanje | ML Engineer',
    description:
      'Machine Learning Engineer specializing in Computer Vision, NLP, and Reinforcement Learning',
  },
  robots: {
    index: true,
    follow: true,
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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

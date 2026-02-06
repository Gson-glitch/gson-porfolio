import { contactInfo } from '@/data/skills';
import { SITE_URL } from '@/config';

export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Gloryson Ondanje',
    givenName: 'Gloryson',
    familyName: 'Ondanje',
    url: SITE_URL,
    image: `${SITE_URL}/images/opengraph-image.png`,
    jobTitle: 'Machine Learning Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'AAI Labs'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nairobi',
      addressCountry: 'KE'
    },
    sameAs: [
      contactInfo.linkedin,
      contactInfo.github,
    ],
    knowsAbout: [
      'Machine Learning',
      'Computer Vision',
      'Natural Language Processing',
      'Reinforcement Learning',
      'Software Engineering'
    ],
    description: 'Machine Learning Engineer with 3+ years of experience in Computer Vision, NLP, and Reinforcement Learning.'
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
import { siteDescription, siteUrl } from '@/config';
import { socialMedias } from '@/data';

export function JsonLd() {
  const sameAs = socialMedias.map(({ href }) => href);

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        name: 'Augusto Barros',
        url: siteUrl,
        jobTitle: 'Desenvolvedor Full Stack, Mobile & Copywriter Criativo',
        description: siteDescription,
        sameAs,
      },
      {
        '@type': 'WebSite',
        name: 'Augusto Barros',
        url: siteUrl,
        inLanguage: 'pt-BR',
        description: siteDescription,
      },
    ],
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

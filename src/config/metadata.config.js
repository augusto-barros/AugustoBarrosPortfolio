export const siteUrl = 'https://augustobarros.work';

export const siteDescription =
  'Desenvolvedor full stack e mobile com background em copywriting criativo. Crio produtos digitais claros, confiáveis e centrados no usuário, unindo precisão técnica e visão criativa — com experiência em publicidade e formação na SAIT (Calgary, Canadá).';

/**
 * @param {{
 *   title: string;
 *   description?: string;
 *   path?: string;
 *   image?: string;
 *   noIndex?: boolean;
 * }} options
 * @returns {import('next').Metadata}
 */
export function createPageMetadata({
  title,
  description,
  path,
  image,
  noIndex = false,
}) {
  const url = path ? `${siteUrl}${path}` : siteUrl;
  const ogImage = image ?? '/og-image.jpg';
  const resolvedDescription = description ?? siteDescription;

  return {
    title,
    description: resolvedDescription,
    alternates: { canonical: path ?? '/' },
    openGraph: {
      title,
      description: resolvedDescription,
      url,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
  };
}

/** @type {import('next').Metadata} */
export const rootMetadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s | Augusto Barros',
    default:
      'Augusto Barros • Desenvolvedor Full Stack, Mobile & Copywriter Criativo',
  },
  description: siteDescription,
  generator: 'Augusto Barros',
  applicationName: 'Augusto Barros',
  referrer: 'origin-when-cross-origin',
  keywords: ['Design', 'Desenvolvimento', 'Freelance'],
  authors: [{ name: 'Augusto Barros', url: siteUrl }],
  creator: 'Augusto Barros',
  publisher: 'Augusto Barros',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Augusto Barros',
    title: 'Augusto Barros',
    description: siteDescription,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Augusto Barros — Desenvolvedor Criativo & Copywriter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Augusto Barros',
    description: siteDescription,
    images: {
      url: '/og-image.jpg',
      alt: 'Augusto Barros — Desenvolvedor Criativo & Copywriter',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

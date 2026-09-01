const siteUrl = 'https://augustobarros.work';

const siteDescription =
  'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Augusto Barros';

/** @type {import('next').Metadata} */
export const rootMetadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s | Augusto Barros',
    default:
      'Augusto Barros • Full Stack Developer, Mobile Developer & Creative Copywriter',
  },
  description: siteDescription,
  generator: 'Augusto Barros',
  applicationName: 'Augusto Barros',
  referrer: 'origin-when-cross-origin',
  keywords: ['Design', 'Development', 'Freelance'],
  authors: [{ name: 'Augusto Barros', url: siteUrl }],
  creator: 'Augusto Barros',
  publisher: 'Augusto Barros',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Augusto Barros',
    title: 'Augusto Barros',
    description: siteDescription,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Augusto Barros — Creative Developer & Copywriter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Augusto Barros',
    description: siteDescription,
    images: {
      url: '/og-image.jpg',
      alt: 'Augusto Barros — Creative Developer & Copywriter',
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

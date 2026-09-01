import { createPageMetadata } from '@/config';

import { ContactRedirect } from './contact-redirect';

export const metadata = createPageMetadata({
  title: 'Contato',
  path: '/contact',
  noIndex: true,
});

export default function ContactPage() {
  return <ContactRedirect />;
}

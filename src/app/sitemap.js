import { siteUrl } from '@/config';
import { workDetails } from '@/data';

export default function sitemap() {
  const projectUrls = Object.keys(workDetails).map(slug => ({
    url: `${siteUrl}/work/${slug}`,
    priority: 0.7,
  }));

  return [
    { url: siteUrl, priority: 1.0 },
    { url: `${siteUrl}/about`, priority: 0.8 },
    { url: `${siteUrl}/work`, priority: 0.9 },
    ...projectUrls,
  ];
}

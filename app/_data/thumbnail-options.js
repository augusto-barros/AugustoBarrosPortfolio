import { workOptions } from './work-options';

export const thumbnailOptions = workOptions.map((work) => ({
  href: work.href,
  title: work.title,
  image: work.image,
  services: work.services,
}));

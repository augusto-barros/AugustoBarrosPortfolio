'use client';

import Image from 'next/image';
import { CldImage } from 'next-cloudinary';

export function ClientImage({ src, ...props }) {
  const isLocal = typeof src === 'string' && src.startsWith('/');
  if (isLocal) {
    return <Image src={src} {...props} />;
  }
  return <CldImage src={src} {...props} />;
}

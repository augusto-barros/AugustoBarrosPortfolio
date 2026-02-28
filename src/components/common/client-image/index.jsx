'use client';

import { CldImage } from 'next-cloudinary';

export function ClientImage(props) {
  return <CldImage {...props} />;
}

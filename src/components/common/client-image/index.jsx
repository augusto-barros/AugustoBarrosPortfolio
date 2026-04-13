'use client';

import Image from 'next/image';
import { CldImage } from 'next-cloudinary';

import { cn } from '@/utils';

/** @param {string} src */
function isLocalVideoPath(src) {
  return /\.(mp4|webm|mov)(\?.*)?$/i.test(src);
}

/**
 * @param {Object} props
 * @param {import('next/image').ImageProps['src']} props.src
 * @param {import('next/image').ImageProps['alt']} props.alt
 * @param {Omit<import('next/image').ImageProps, 'src' | 'alt'>} props
 */
export function ClientImage({ src, alt, ...props }) {
  const isLocal = typeof src === 'string' && src.startsWith('/');

  if (isLocal && isLocalVideoPath(src)) {
    const { className, width, height, style, fill } = props;
    const coverClass = cn(
      fill ? 'absolute inset-0 size-full object-cover' : 'size-full object-cover',
      className,
    );
    return (
      <video
        src={src}
        muted
        loop
        playsInline
        autoPlay
        aria-label={typeof alt === 'string' ? alt : undefined}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={coverClass}
        style={style}
      />
    );
  }

  if (isLocal) {
    return <Image src={src} alt={alt} {...props} />;
  }
  return <CldImage src={src} alt={alt} {...props} />;
}

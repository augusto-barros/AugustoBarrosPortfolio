'use client';

import Image from 'next/image';
import { CldImage } from 'next-cloudinary';

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
    const { className, width, height, style } = props;
    return (
      <video
        src={src}
        muted
        loop
        playsInline
        autoPlay
        aria-label={typeof alt === 'string' ? alt : undefined}
        width={width}
        height={height}
        className={className ?? 'size-full object-cover'}
        style={style}
      />
    );
  }

  if (isLocal) {
    return <Image src={src} alt={alt} {...props} />;
  }
  return <CldImage src={src} alt={alt} {...props} />;
}

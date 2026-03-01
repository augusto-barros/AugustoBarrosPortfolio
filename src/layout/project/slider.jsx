'use client';

import { CldVideoPlayer } from 'next-cloudinary';

import { Center, ClientImage } from '@/components';

/**
 * @param {Object} props
 * @param {'image' | 'video'} props.type
 * @param {string} props.source
 */
export function ProjectSlider({ type, source }) {
  const image =
    type === 'image' ? (
      <ClientImage
        src={source}
        className='object-cover'
        fill={true}
        alt='project items'
      />
    ) : null;
  const video =
    type === 'video' ? (
      <CldVideoPlayer
        src={source}
        loop={true}
        controls={false}
        muted={true}
        autoPlay='always'
        width='100%'
        height='100%'
        className='!static !bg-transparent'
      />
    ) : null;

  return (
    <Center
      className='relative w-1/4 rounded'
      style={{
        minWidth: '150px',
        height: '20vw',
      }}
    >
      {image}
      {video}
    </Center>
  );
}

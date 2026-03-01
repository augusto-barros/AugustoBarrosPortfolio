'use client';

import { motion } from 'framer-motion';

import { FixedOverlay } from '@/components';

import { OffcanvasBackdrop } from './back-drop';
import { OffcanvasFooter } from './footer';
import { OffcanvasLinks } from './links';
import { slideLeft } from './variants';

const MotionComponent = motion(FixedOverlay);

export function OffcanvasBody() {
  return (
    <MotionComponent
      className='z-40'
      variants={slideLeft}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <div className='absolute right-0 top-0 h-screen w-full max-w-[400px] bg-foreground text-background md:max-w-[600px]'>
        <OffcanvasBackdrop />

        <div className='flex h-full flex-col justify-between p-24'>
          <OffcanvasLinks />
          <OffcanvasFooter />
        </div>
      </div>
    </MotionComponent>
  );
}

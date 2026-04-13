'use client';

import { forwardRef } from 'react';

import { motion } from 'framer-motion';

import { Center, ClientImage } from '@/components';
import { thumbnailOptions } from '@/data';
import { randomId } from '@/utils';

const MotionComponent = motion(Center);

export const ThumbnailModal = forwardRef(
  /**
   * @param {import('react').HTMLAttributes<HTMLElement> & { variants: import('framer-motion').Variants; active: boolean; index: number;}} props
   * @param {import('react').ForwardedRef<HTMLElement>} ref
   */
  function ThumbnailModal({ variants, active, index, ...props }, ref) {
    const items = thumbnailOptions.map(({ title, image }) => {
      const id = randomId();
      return (
        <div key={id} className='relative size-full shrink-0 overflow-hidden'>
          <ClientImage
            src={image}
            fill
            sizes='320px'
            alt={`${title} thumbnail image`}
            className='object-cover'
          />
        </div>
      );
    });

    return (
      <MotionComponent
        ref={ref}
        className='pointer-events-none fixed left-1/2 top-1/2 size-80 overflow-hidden rounded bg-background'
        variants={variants}
        initial='initial'
        animate={active ? 'enter' : 'closed'}
        {...props}
      >
        <div
          className='relative size-full'
          style={{
            top: `${index * -100}%`,
            transition: 'top 0.5s cubic-bezier(0.76, 0, 0.24, 1)',
          }}
        >
          {items}
        </div>
      </MotionComponent>
    );
  },
);

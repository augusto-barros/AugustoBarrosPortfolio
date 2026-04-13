'use client';

import { motion } from 'framer-motion';

import { useParallaxSlider } from '@/hooks';

/** @param {import('react').PropsWithChildren<unknown> & { repeat: number; baseVelocity: number; pauseRef?: import('react').MutableRefObject<boolean> }} */
export function ParallaxSlider({ children, repeat = 2, baseVelocity, pauseRef }) {
  const x = useParallaxSlider(baseVelocity, repeat, pauseRef);

  return (
    <div className='flex flex-nowrap overflow-hidden whitespace-nowrap'>
      <motion.div style={{ x }} className='flex min-w-0 flex-nowrap'>
        {Array.from({ length: repeat }, (_, ri) => (
          <div key={ri} className='flex shrink-0 flex-nowrap'>
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

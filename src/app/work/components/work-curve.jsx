'use client';

import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

/** @param {import('react').PropsWithChildren<{bgClass?: string}>} */
export function WorkCurve({ children, bgClass = 'bg-background' }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const transformY = useTransform(scrollYProgress, [0, 0.9], [250, 0]);

  return (
    <div ref={containerRef} className='w-full'>
      <div className='w-full bg-background'>{children}</div>
      {/* 
              Wrap only the wave in a relative wrapper with overflow-hidden
              so that the horizontal scrollbar is hidden without affecting
              the rest of the layout or stacking context (Navbar).
            */}
      <div className='relative z-10 w-full overflow-hidden -mt-[2px]'>
        <motion.div
          className={`ml-[-10vw] w-[120vw] ${bgClass}`}
          style={{
            height: transformY,
            borderRadius: '0 0 50% 50%',
          }}
        />
      </div>
    </div>
  );
}

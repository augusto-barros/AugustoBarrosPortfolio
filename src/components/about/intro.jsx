'use client';

import { useRef } from 'react';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export function Intro() {
  const container = useRef(null);
  const isInView = useInView(container, { once: true, margin: '-10%' });

  const slideUp = {
    initial: { y: 50, opacity: 0 },
    enter: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 },
    },
  };

  return (
    <section
      ref={container}
      className='text-text relative flex w-full flex-col items-center gap-16 px-10 py-24 md:flex-row md:gap-32 md:px-20'
    >
      <motion.div
        className='flex-1'
        variants={slideUp}
        initial='initial'
        animate={isInView ? 'enter' : 'initial'}
      >
        <p className='text-[clamp(1.5rem,3vw,2.5rem)] font-normal leading-snug'>
          I help companies from all over the world with tailor-made solutions.
          With each project, I push my work to new horizons, always putting
          quality first.
        </p>
      </motion.div>

      <motion.div
        className='flex w-full flex-1 justify-center md:justify-end'
        variants={slideUp}
        initial='initial'
        animate={isInView ? 'enter' : 'initial'}
      >
        <div className='relative aspect-[4/5] w-full max-w-[450px] overflow-hidden rounded-md'>
          <Image
            src='/photo/Guto_portrait.webp'
            alt='Augusto Barros Portrait'
            fill
            className='object-cover grayscale transition-all duration-700 hover:grayscale-0'
            sizes='(max-width: 768px) 100vw, 50vw'
          />
        </div>
      </motion.div>
    </section>
  );
}

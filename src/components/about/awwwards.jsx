'use client';

import { useRef } from 'react';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export function Awwwards() {
  const container = useRef(null);
  const isInView = useInView(container, { once: true, margin: '-10%' });

  const slideUp = {
    initial: { y: 50, opacity: 0 },
    enter: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
    },
  };

  return (
    <section
      ref={container}
      className='text-text relative flex w-full flex-col items-center gap-16 border-t border-[#D2D2D2]/20 px-10 py-24 md:flex-row md:gap-32 md:px-20'
    >
      <motion.div
        className='flex w-full flex-1 justify-center md:justify-start'
        variants={slideUp}
        initial='initial'
        animate={isInView ? 'enter' : 'initial'}
      >
        <div className='relative aspect-[4/5] w-full max-w-[400px] overflow-hidden rounded-md bg-[#D2D2D2]/10'>
          <Image
            src='/photo/Guto_transparent.webp'
            alt='Augusto Barros - Award Jury'
            fill
            className='object-cover grayscale transition-all duration-700 hover:grayscale-0'
            sizes='(max-width: 768px) 100vw, 50vw'
          />
        </div>
      </motion.div>

      <motion.div
        className='flex-1'
        variants={slideUp}
        initial='initial'
        animate={isInView ? 'enter' : 'initial'}
      >
        <h2 className='text-text/50 mb-10 text-xl font-medium uppercase tracking-widest'>
          Awwwards
        </h2>
        <p className='text-[clamp(1.5rem,2.5vw,2rem)] font-normal leading-snug'>
          I am a proud member of the Awwwards International Jury, where I judge
          the best websites in the world using my expertise as a designer and
          developer. Micro animations and transitions have my full attention and
          get me thrilled with every move.
        </p>
      </motion.div>
    </section>
  );
}

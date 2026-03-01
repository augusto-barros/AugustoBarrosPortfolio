'use client';

import { motion } from 'framer-motion';

export function Hero() {
  const slideUp = {
    initial: { y: 300 },
    enter: {
      y: 0,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 },
    },
  };
  return (
    <motion.section
      className='text-text relative min-h-[20vh] w-full px-10 pt-48 pb-10 md:px-24 lg:px-36 md:pb-24'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      <div className='flex flex-col items-center justify-center text-center'>
        <div className='w-full max-w-[90%] md:max-w-[80%] lg:max-w-[1200px]'>
          <h1 className='text-[clamp(3.5rem,8vw,7rem)] font-medium leading-[1.1] tracking-tight'>
            Helping you thrive in the AI-powered world
          </h1>
        </div>
      </div>
    </motion.section>
  );
}

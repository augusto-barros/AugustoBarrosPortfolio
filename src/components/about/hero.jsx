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
      className='text-text relative min-h-[80vh] w-full px-10 pt-48 md:px-20'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      <div className='flex flex-col gap-10 md:flex-row md:items-start md:justify-between'>
        <div className='max-w-4xl'>
          <h1 className='text-[clamp(3.5rem,8vw,7rem)] font-medium leading-[1.1] tracking-tight'>
            Helping brands thrive in the digital world
          </h1>
        </div>
      </div>
    </motion.section>
  );
}

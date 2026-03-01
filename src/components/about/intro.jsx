'use client';

import { useRef } from 'react';

import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion';
import Image from 'next/image';

export function Intro() {
  const container = useRef(null);
  const isInView = useInView(container, { once: true, margin: '-10%' });

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const imgYRaw = useTransform(scrollYProgress, [0, 1], ['-15vh', '15vh']);
  const imgY = useSpring(imgYRaw, { stiffness: 100, damping: 30, restDelta: 0.001 });

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
      className='text-text relative flex w-full flex-col items-start gap-16 px-10 py-12 md:flex-row md:gap-32 md:px-0 lg:py-16 mx-auto max-w-[1400px]'
    >
      <motion.div
        className='w-full md:w-[35%] flex justify-end px-10 md:px-0 mt-8'
        variants={slideUp}
        initial='initial'
        animate={isInView ? 'enter' : 'initial'}
      >
        <div className='flex flex-col gap-8 text-[clamp(0.9rem,1vw,1.1rem)] font-normal leading-relaxed max-w-[400px]'>
          <p>
            I am a full stack and mobile developer with a creative copywriting
            background. I help companies build clear, thoughtful and reliable
            digital products, shaped by years in advertising and refined through
            my studies at the Southern Alberta Institute of Technology (SAIT) in
            Calgary, Canada.
          </p>
          <p>
            I blend technical precision with a creative mindset to craft
            solutions that feel purposeful and user-centered. With every project,
            I push for better ideas, cleaner execution and higher quality.
          </p>
        </div>
      </motion.div>

      <motion.div
        className='w-full md:w-[60%] px-10 md:px-0 md:pr-10 lg:pr-24'
        variants={slideUp}
        initial='initial'
        animate={isInView ? 'enter' : 'initial'}
      >
        <div className='relative w-full h-[55vh] md:h-[90vh] min-h-[500px] overflow-hidden rounded-md'>
          <motion.div style={{ y: imgY }} className='relative w-full h-[calc(100%+30vh)] -top-[15vh]'>
            <Image
              src='/photo/about/nyc.webp'
              alt='Augusto Barros in NYC'
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 50vw'
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

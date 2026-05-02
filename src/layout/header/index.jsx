'use client';

import { useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

import { ParallaxSlider } from '@/components';
import { useTransition } from '@/providers/transition-context';

const ROLES = ['Developer', 'Copywriter'];

export function Header() {
  const { phase } = useTransition();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);
  // On client-side navigation the sweep overlay handles the reveal — no delay needed.
  // On initial load (phase === 'idle') we wait for the Preloader to finish.
  const animDelay = phase !== 'idle' ? 0.1 : 2.5;

  const slideUp = {
    initial: { y: 300 },
    enter: {
      y: 0,
      transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: animDelay },
    },
  };

  return (
    <motion.header
      className='relative h-screen overflow-hidden bg-[#111111] text-background'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      {/* Foreground layer to show the entire character */}
      <div className='pointer-events-none absolute inset-x-0 bottom-0 h-full md:bottom-auto md:top-[-15%] md:h-[145%]'>
        <Image
          src='/photo/Guto_transparent.webp'
          alt='Augusto Barros Personal Picture'
          fill
          sizes='110vw'
          className='origin-bottom scale-150 object-contain object-bottom md:scale-105 md:object-center'
          priority
        />
      </div>

      <div className='relative flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal'>
        <div className='select-none'>
          <h1 className='text-[max(5em,15vw)] md:text-[max(9em,15vw)]'>
            <ParallaxSlider repeat={4} baseVelocity={-2}>
              <span className='pe-12'>
                Augusto Barros
                <span className='spacer'>—</span>
              </span>
            </ParallaxSlider>
          </h1>
        </div>

        <div className='md:ml-auto'>
          <div className='mx-10 max-md:my-12 md:mx-36'>
            <h4 className='flex items-baseline gap-[0.25em] text-[clamp(1.9em,3vw,3.25em)]'>
              <span>Creative</span>
              <span className='inline-block overflow-hidden' style={{ width: '10ch' }}>
                <AnimatePresence mode='wait'>
                  <motion.span
                    key={ROLES[roleIndex]}
                    className='block'
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
                  >
                    {ROLES[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h4>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

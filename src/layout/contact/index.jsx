'use client';

import { useRef } from 'react';

import { motion } from 'framer-motion';

import { useContactSlider } from '@/hooks';

import { SocialInfo, UserDetails } from './components';

export function Contact() {
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const containerRef = useRef(null);
  const { transformX } = useContactSlider(containerRef);

  return (
    <section id='contact' className='relative'>
      <motion.footer
        ref={containerRef}
        className='relative min-h-screen bg-foreground text-background'
      >
        <div
          className='flex min-h-screen flex-col'
          style={{
            paddingBlockStart: 'clamp(2.5em, 10vh, 5em)',
            paddingBlockEnd: 'clamp(1.5em, 5vh, 2.5em)',
          }}
        >
          <UserDetails transformX={transformX} />
          <div className='mt-auto'>
            <SocialInfo />
          </div>
        </div>
      </motion.footer>
    </section>
  );
}

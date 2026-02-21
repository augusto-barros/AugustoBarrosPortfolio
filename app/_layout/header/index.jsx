'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { ParallaxSlider } from '@/components';

import { slideUp } from './variants';

export function Header() {
  return (
    <motion.header
      className='relative h-screen overflow-hidden bg-[#111111] text-background'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      {/* Foreground layer to show the entire character */}
      <div className='absolute left-0 right-0 -top-[15%] h-[130%] md:h-[145%] pointer-events-none'>
        <Image
          src='/photo/Guto.png'
          alt='Augusto Barros Personal Picture'
          fill
          sizes='110vw'
          className='object-contain origin-bottom scale-110 md:scale-105'
          priority
        />
      </div>

      <div className='relative flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal'>
        <div className='select-none'>
          <h1 className='text-[max(9em,15vw)]'>
            <ParallaxSlider repeat={4} baseVelocity={2}>
              <span className='pe-12'>
                Augusto Barros
                <span className='spacer'>—</span>
              </span>
            </ParallaxSlider>
          </h1>
        </div>

        <div className='md:ml-auto'>
          <div className='mx-10 max-md:my-12 md:mx-36'>
            <h4 className='text-[clamp(1.55em,2.5vw,2.75em)]'>
              <span className='block'>Full Stack Developer</span>
              <span className='block'>Mobile Developer</span>
              <span className='block'>Creative Copywriter</span>
            </h4>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

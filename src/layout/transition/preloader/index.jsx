'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import { Dot } from 'lucide-react';

import { Center } from '@/components';
import { preloaderWords } from '@/data';
import { useDimensions, useTimeOut } from '@/hooks';

import { slideUp } from './variants';

const MotionComponent = motion(Center);

export function Preloader() {
  const [index, setIndex] = useState(0);
  const { width, height } = useDimensions();

  useTimeOut({
    callback: () => {
      if (index < preloaderWords.length - 1) {
        setIndex(prevIndex => prevIndex + 1);
      }
    },
    duration: index === 0 ? 500 : 250,
    deps: [index, preloaderWords.length],
  });

  const initialPath = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height} 0 ${height}  L0 0`;
  const targetPath = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height} 0 ${height}  L0 0`;

  /** @type {import('framer-motion').Variants} */
  const curve = {
    initial: { d: initialPath },
    enter: { d: initialPath },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <MotionComponent
      className='fixed z-50 h-screen w-screen bg-foreground'
      variants={slideUp}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      {width > 0 ? (
        <>
          <div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center text-6xl text-white'>
            <Dot size={48} className='me-3' />
            <p>{preloaderWords[index]}</p>
          </div>
          <motion.svg className='absolute top-0 -z-10 h-[calc(100%+300px)] w-full'>
            <motion.path
              className='fill-foreground'
              variants={curve}
              initial='initial'
              animate='enter'
              exit='exit'
            />
          </motion.svg>
        </>
      ) : null}
    </MotionComponent>
  );
}

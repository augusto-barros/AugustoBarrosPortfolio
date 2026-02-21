'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import { Dot } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { Center } from '@/components';
import { preloaderWords, workPreloaderWords } from '@/data';
import { useDimensions, useTimeOut } from '@/hooks';

import { fade, slideUp } from './variants';

const MotionComponent = motion(Center);

export function Preloader() {
  const [index, setIndex] = useState(0);
  const { width, height } = useDimensions();
  const pathname = usePathname();
  const isWorkScreen = pathname?.startsWith('/work');
  const words = isWorkScreen ? workPreloaderWords : preloaderWords;

  useTimeOut({
    callback: () => {
      if (index < words.length - 1) {
        setIndex(prevIndex => prevIndex + 1);
      }
    },
    duration: index === 0 ? 500 : 250,
    deps: [index, words.length],
  });

  const initialPath = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height + 300
    } 0 ${height}  L0 0`;
  const targetPath = `M0 0 L${width} 0 L${width} ${height} Q${width / 2
    } ${height} 0 ${height}  L0 0`;

  /** @type {import('framer-motion').Variants} */
  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.9, 0, 0.1, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.9, 0, 0.1, 1], delay: 0.3 },
    },
  };

  return (
    <MotionComponent
      className='fixed z-50 h-screen w-screen cursor-wait bg-foreground'
      variants={slideUp}
      initial='initial'
      exit='exit'
    >
      {width > 0 ? (
        <>
          <MotionComponent
            className='text-3xl text-background md:text-4xl'
            variants={fade}
            initial='initial'
            animate='enter'
          >
            <Dot size={48} className='me-3' />
            <p>{words[index]}</p>
          </MotionComponent>
          <motion.svg className='absolute top-0 -z-10 h-[calc(100%+300px)] w-full'>
            <motion.path
              className='fill-foreground'
              variants={curve}
              initial='initial'
              exit='exit'
            />
          </motion.svg>
        </>
      ) : null}
    </MotionComponent>
  );
}

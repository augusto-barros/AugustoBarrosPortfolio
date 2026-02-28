'use client';

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Dot } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { preloaderWords, workPreloaderWords } from '@/data';
import { useDimensions } from '@/hooks';

const TransitionContext = createContext();

function TransitionWords({ words }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= words.length - 1) return;
    const timeout = setTimeout(
      () => setIndex(prev => prev + 1),
      index === 0 ? 300 : 200,
    );
    return () => clearTimeout(timeout);
  }, [index, words.length]);

  return (
    <motion.div
      className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center text-5xl text-white'
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.75, transition: { delay: 0.1, duration: 0.4 } }}
    >
      <Dot size={48} className='me-3' />
      <p>{words[index]}</p>
    </motion.div>
  );
}

export function TransitionProvider({ children }) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const clientNavRef = useRef(false);
  const [targetHref, setTargetHref] = useState('');
  const { width, height } = useDimensions();

  const slideUpCover = {
    initial: { top: '100vh' },
    enter: {
      top: 0,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const isWorkTarget = targetHref?.startsWith('/work');
  const words = isWorkTarget ? workPreloaderWords : preloaderWords;

  const animateTransition = useCallback((href) => {
    setTargetHref(href);
    clientNavRef.current = true;
    setIsTransitioning(true);

    setTimeout(() => {
      router.push(href);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 700);
  }, [router]);

  return (
    <TransitionContext.Provider value={{ animateTransition, clientNavRef }}>
      {children}

      <AnimatePresence>
        {isTransitioning && width > 0 && (
          <motion.div
            className='fixed inset-0 z-[100] h-screen w-screen bg-foreground'
            variants={slideUpCover}
            initial='initial'
            animate='enter'
          >
            <TransitionWords words={words} />

            <svg className='absolute left-0 top-0 h-[300px] w-full -translate-y-[99%]'>
              <motion.path
                className='fill-foreground'
                variants={{
                  initial: {
                    d: `M0 300 L${width} 300 L${width} 300 Q${width / 2} 300 0 300`,
                  },
                  enter: {
                    d: `M0 300 L${width} 300 L${width} 300 Q${width / 2} 0 0 300`,
                    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
                  },
                }}
                initial='initial'
                animate='enter'
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error('useTransition must be used within a TransitionProvider');
  }
  return context;
}

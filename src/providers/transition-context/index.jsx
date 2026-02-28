'use client';

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Dot } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { preloaderWords } from '@/data';
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
  const [phase, setPhase] = useState('idle'); // 'idle' | 'sweepUp' | 'sweepDown'
  const clientNavRef = useRef(false);
  const [label, setLabel] = useState('');
  const { width } = useDimensions();

  const animateTransition = useCallback((href, transitionLabel = '') => {
    setLabel(transitionLabel);
    setPhase('sweepUp');
    clientNavRef.current = true;

    // After sweep-up covers the screen, navigate
    setTimeout(() => {
      router.push(href);
      // Wait longer so the new page renders fully under the overlay before revealing
      setTimeout(() => {
        setPhase('sweepDown');
        // After sweep-down finishes, go back to idle
        setTimeout(() => setPhase('idle'), 700);
      }, 400);
    }, 500);
  }, [router]);

  const isVisible = phase !== 'idle';
  const showMultilingualHello = label === 'Home' && phase === 'sweepUp';

  return (
    <TransitionContext.Provider value={{ animateTransition, clientNavRef, phase }}>
      {children}

      <AnimatePresence>
        {isVisible && width > 0 && (
          <motion.div
            key='transition-overlay'
            className='fixed inset-0 z-[100] h-screen w-screen bg-foreground'
            initial={{ top: '100vh' }}
            animate={{ top: phase === 'sweepDown' ? '-100vh' : 0 }}
            transition={{ duration: phase === 'sweepDown' ? 0.6 : 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Text label — fades in during sweep-up, fades out on sweep-down */}
            {showMultilingualHello ? (
              <TransitionWords words={preloaderWords} />
            ) : (
              label && (
                <motion.div
                  className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center text-5xl text-white'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: phase === 'sweepUp' ? 0.75 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Dot size={48} className='me-3' />
                  <p>{label}</p>
                </motion.div>
              )
            )}

            {/* SVG on the TOP edge — visible during sweep-up, hidden during sweep-down */}
            <svg
              className='absolute left-0 top-0 h-[300px] w-full -translate-y-[99%]'
              style={{ opacity: phase === 'sweepUp' ? 1 : 0, transition: 'opacity 0.15s' }}
            >
              <motion.path
                className='fill-foreground'
                initial={{ d: `M0 300 L${width} 300 L${width} 300 Q${width / 2} 300 0 300` }}
                animate={{
                  d: phase === 'sweepUp'
                    ? `M0 300 L${width} 300 L${width} 300 Q${width / 2} 0 0 300`
                    : `M0 300 L${width} 300 L${width} 300 Q${width / 2} 300 0 300`,
                }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              />
            </svg>

            {/* SVG on the BOTTOM edge — hidden during sweep-up, visible during sweep-down */}
            <svg
              className='absolute bottom-0 left-0 h-[300px] w-full translate-y-[99%]'
              style={{ opacity: phase === 'sweepDown' ? 1 : 0, transition: 'opacity 0.15s' }}
            >
              <path
                className='fill-foreground'
                d={`M0 0 L${width} 0 L${width} 0 Q${width / 2} 300 0 0`}
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

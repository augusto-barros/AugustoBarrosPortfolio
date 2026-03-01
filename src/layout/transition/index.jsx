'use client';

import { useEffect, useRef, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { useLenis } from '@/hooks';
import { useTransition } from '@/providers/transition-context';

import { Preloader } from './preloader';

/** @param {import('react').PropsWithChildren<unknown>} */
export function Transition({ children }) {
  const pathname = usePathname();
  const { phase, clientNavRef } = useTransition();

  const [isLoading, setLoading] = useState(!clientNavRef.current);

  useEffect(() => {
    // If we've already done a client-side navigation OR the overlay is sweeping,
    // we never want to show the preloader again.
    if (clientNavRef.current) {
      setLoading(false);
      window.scrollTo(0, 0);
      return;
    }

    // Hard navigation / initial load from browser: show the Preloader for 2s
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 2000);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Gate: never show Preloader while TransitionProvider overlay is active (sweepUp/down)
  // Also never show if it's no longer loading.
  const showPreloader = isLoading && phase === 'idle';

  return (
    <div key={pathname} className='overflow-hidden'>
      <AnimatePresence mode='wait'>
        {showPreloader ? <Preloader /> : null}
      </AnimatePresence>
      {children}
    </div>
  );
}

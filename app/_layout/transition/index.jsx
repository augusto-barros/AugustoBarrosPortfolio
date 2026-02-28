'use client';

import { useEffect, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { useTransition } from '@/app/_providers/transition-context';
import { useLenis } from '@/hooks';

import { Preloader } from './preloader';

/** @param {import('react').PropsWithChildren<unknown>} */
export function Transition({ children }) {
  const pathname = usePathname();
  const { clientNavRef } = useTransition();
  const [isLoading, setLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // On each pathname change, check if this was a client-side navigation
    if (clientNavRef.current) {
      // Client-side nav: TransitionContext already handled the animation
      clientNavRef.current = false;
      setShowPreloader(false);
      setLoading(false);
      window.scrollTo(0, 0);
    } else {
      // Hard navigation / initial load: show the Preloader
      setShowPreloader(true);
      setLoading(true);
      const timeout = setTimeout(() => {
        setLoading(false);
        window.scrollTo(0, 0);
      }, 2000);
      return () => clearTimeout(timeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div key={pathname} className='overflow-hidden'>
      <AnimatePresence mode='wait'>
        {isLoading && showPreloader ? <Preloader /> : null}
      </AnimatePresence>
      {children}
    </div>
  );
}

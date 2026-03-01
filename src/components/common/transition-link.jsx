'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useTransition } from '@/providers/transition-context';

/** Derive a label from the href for the transition overlay */
function getLabelFromHref(href) {
  if (href === '/') return 'Home';
  if (href.startsWith('/work')) return 'Work';
  if (href.startsWith('/about')) return 'About';
  // transitionLabel logic inside TransitionLink already provides 'appcaloria'.
}

export function TransitionLink({ href, transitionLabel, children, ...props }) {
  const pathname = usePathname();
  const { animateTransition } = useTransition();

  const handleClick = e => {
    // External links: let browser handle normally
    if (href.startsWith('http')) return;

    // Anchor links (e.g. #contact): scroll to element, no transition
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // Same page: do nothing
    if (pathname === href) return;

    // Internal navigation: play the sweep-up transition
    e.preventDefault();
    const label = transitionLabel || getLabelFromHref(href);
    animateTransition(href, label);
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}

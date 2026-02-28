'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useTransition } from '@/app/_providers/transition-context';

export function TransitionLink({ href, children, ...props }) {
  const pathname = usePathname();
  const { animateTransition } = useTransition();

  const handleClick = (e) => {
    // If the link is the current path or external, do nothing special
    if (pathname === href || href.startsWith('http')) {
      return;
    }

    e.preventDefault();
    animateTransition(href);
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}

'use client';

import { Dot } from 'lucide-react';

import { Center, MagneticButton, TransitionLink } from '@/components';
import { navItems } from '@/data';
import { randomId } from '@/utils';

export function NavbarList() {
  const items = navItems.slice(1).map(({ href, title }) => {
    const id = randomId();
    return (
      <li key={id} className='group p-4'>
        <TransitionLink href={href} passHref>
          <MagneticButton>
            <span className='text-base capitalize'>{title}</span>
            <Center>
              <Dot className='scale-0 transition-transform duration-200 ease-in-expo group-hover:scale-100' />
            </Center>
          </MagneticButton>
        </TransitionLink>
      </li>
    );
  });

  return <ul className='flex items-center max-lg:hidden'>{items}</ul>;
}

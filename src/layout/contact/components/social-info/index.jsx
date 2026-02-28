'use client';

import { useEffect, useMemo, useState } from 'react';

import { TransitionLink } from '@/components';
import { socialMedias } from '@/data';

import { ListTitle } from './index.styled';

export function SocialInfo() {
  const [brasiliaTime, setBrasiliaTime] = useState('');

  const formatter = useMemo(
    () =>
      new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'America/Sao_Paulo',
      }),
    [],
  );

  useEffect(() => {
    const updateTime = () => setBrasiliaTime(formatter.format(new Date()));

    updateTime();
    const interval = setInterval(updateTime, 60_000);

    return () => clearInterval(interval);
  }, [formatter]);

  const medias = socialMedias.map(({ href, title }) => {
    return (
      <li
        key={title}
        className='border-b border-solid border-b-transparent transition-all duration-300 ease-in-expo hover:border-b-border'
      >
        <TransitionLink href={href} target='_blank' rel='noopener noreferrer'>
          {title}
        </TransitionLink>
      </li>
    );
  });

  return (
    <div className='mx-auto w-full max-w-[100rem] px-[clamp(2em,5vw,4em)] pb-2 pt-[clamp(2em,5vw,4em)]'>
      <div className='grid gap-10 text-sm md:grid-cols-12 md:items-start'>
        <div className='md:col-span-3'>
          <ListTitle>Version</ListTitle>
          <p className='mt-7'>v2026.1</p>
        </div>

        <div className='md:col-span-4'>
          <ListTitle>Local time</ListTitle>
          <p className='mt-7'>
            <time>{brasiliaTime || 'Loading...'}</time>
          </p>
          <p className='mt-2 text-xs text-muted-foreground'>Brasilia (GMT-3)</p>
        </div>

        <div className='md:col-span-5 md:justify-self-end'>
          <ListTitle>Socials</ListTitle>
          <ul className='mt-7 flex flex-wrap gap-x-8 gap-y-3 md:justify-end'>
            {medias}
          </ul>
        </div>
      </div>
    </div>
  );
}

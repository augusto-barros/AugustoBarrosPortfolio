'use client';

import { TransitionLink } from '@/components';

export function WorkItem({
    id,
    work: { href, title, location, services, year },
    handlePointerEnter,
    handlePointerLeave,
    moveItems,
}) {
    return (
        <li
            className='border-t border-solid transition-all last-of-type:border-b hover:-translate-x-2 hover:!opacity-100 group-hover:opacity-60'
            onPointerEnter={({ clientX, clientY }) => {
                handlePointerEnter(id);
                moveItems(clientX, clientY);
            }}
            onPointerLeave={({ clientX, clientY }) => {
                handlePointerLeave(id);
                moveItems(clientX, clientY);
            }}
        >
            <TransitionLink
                href={href}
                className='flex w-full flex-wrap items-center justify-between p-4 transition-colors hover:bg-black/5 hover:dark:bg-white/5'
                style={{
                    paddingBlock: 'clamp(2em,3vw,3em)',
                }}
                passHref
            >
                <div className='w-2/5 text-4xl font-normal leading-none max-lg:text-2xl'>
                    {title}
                </div>
                <div className='w-1/5 text-lg font-light max-lg:text-sm'>
                    {location}
                </div>
                <div className='w-[30%] text-lg font-light max-lg:text-sm'>
                    {services}
                </div>
                <div className='w-[10%] text-right text-lg font-light max-lg:hidden'>
                    {year}
                </div>
            </TransitionLink>
        </li>
    );
}

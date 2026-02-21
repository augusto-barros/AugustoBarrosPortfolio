'use client';

import Link from 'next/link';

export function WorkItem({
    id,
    work: { href, title, location, services, year },
    handlePointerEnter,
    handlePointerLeave,
    moveItems,
}) {
    return (
        <li
            className='border-t border-solid transition-all last-of-type:border-b group-hover:opacity-60 hover:!opacity-100 hover:-translate-x-2'
            onPointerEnter={({ clientX, clientY }) => {
                handlePointerEnter(id);
                moveItems(clientX, clientY);
            }}
            onPointerLeave={({ clientX, clientY }) => {
                handlePointerLeave(id);
                moveItems(clientX, clientY);
            }}
        >
            <Link
                href={href}
                className='flex items-center justify-between w-full p-4 flex-wrap hover:bg-black/5 hover:dark:bg-white/5 transition-colors'
                style={{
                    paddingBlock: 'clamp(2em,3vw,3em)',
                }}
                passHref
            >
                <div className='w-[40%] text-4xl max-lg:text-2xl font-normal leading-none'>
                    {title}
                </div>
                <div className='w-[20%] text-lg max-lg:text-sm font-light'>
                    {location}
                </div>
                <div className='w-[30%] text-lg max-lg:text-sm font-light'>
                    {services}
                </div>
                <div className='w-[10%] text-lg max-lg:hidden text-right font-light'>
                    {year}
                </div>
            </Link>
        </li>
    );
}

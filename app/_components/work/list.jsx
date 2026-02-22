'use client';

import { useRef, useState } from 'react';

import { workOptions } from '@/data';
import { useFollowPointer } from '@/hooks';
import { MagneticButton } from '@/components';


import { WorkItem } from './item';
import { WorkModal } from './modal';
import { ThumbnailCursorCircle, ThumbnailCursorLabel } from '../../_layout/thumbnail/components';
import { scaleUp } from '../../_layout/thumbnail/variants';

export function WorkList() {
    const [activeCategory, setActiveCategory] = useState('All');

    /** @type {import('react').MutableRefObject<HTMLElement>} */
    const modal = useRef(null);
    /** @type {import('react').MutableRefObject<HTMLElement>} */
    const cursor = useRef(null);
    /** @type {import('react').MutableRefObject<HTMLElement>} */
    const label = useRef(null);

    const {
        item: { active, index },
        handlePointerEnter,
        handlePointerLeave,
        moveItems,
    } = useFollowPointer({
        modal,
        cursor,
        label,
    });

    const filteredOptions = activeCategory === 'All'
        ? workOptions
        : workOptions.filter(work => work.services?.toLowerCase().includes(activeCategory.toLowerCase()));

    return (
        <section
            className='container relative'
            onPointerMove={({ clientX, clientY }) => moveItems(clientX, clientY)}
        >
            <div className="mb-20 flex flex-wrap gap-4 px-4">
                {['All', 'Development', 'Advertising'].map((cat) => (
                    <MagneticButton
                        key={cat}
                        variant="default"
                        onClick={() => setActiveCategory(cat)}
                        className={`rounded-full border !px-8 !py-3 text-lg font-light transition-colors ${activeCategory === cat
                                ? 'border-black bg-black text-white hover:bg-black hover:text-white dark:border-white dark:bg-white dark:text-black dark:hover:bg-white dark:hover:text-black'
                                : 'border-border hover:border-black dark:hover:border-white'
                            }`}
                    >
                        {cat}
                    </MagneticButton>
                ))}
            </div>

            <div className='my-8 flex flex-col gap-10'>
                <div className='mb-4 flex w-full px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground'>
                    <div className='w-2/5'>Client</div>
                    <div className='w-1/5'>Location</div>
                    <div className='w-[30%]'>Services</div>
                    <div className='w-[10%] text-right'>Year</div>
                </div>

                <ul className='group flex w-full flex-col'>
                    {filteredOptions.map((work, idx) => (
                        <WorkItem
                            key={`work-item-${idx}`}
                            id={idx}
                            work={work}
                            handlePointerEnter={handlePointerEnter}
                            handlePointerLeave={handlePointerLeave}
                            moveItems={moveItems}
                        />
                    ))}
                </ul>

                {/* Reuse the Thumbnail components for the cursor tracking image reveal */}
                <WorkModal
                    ref={modal}
                    variants={scaleUp}
                    active={active}
                    index={index}
                />
                <ThumbnailCursorCircle
                    ref={cursor}
                    variants={scaleUp}
                    active={active}
                />
                <ThumbnailCursorLabel ref={label} variants={scaleUp} active={active}>
                    View
                </ThumbnailCursorLabel>
            </div>
        </section>
    );
}

'use client';

import { useRef } from 'react';

import { workOptions } from '@/data';
import { useFollowPointer } from '@/hooks';


import { WorkItem } from './item';
import { WorkModal } from './modal';
import { ThumbnailCursorCircle, ThumbnailCursorLabel } from '../../_layout/thumbnail/components';
import { scaleUp } from '../../_layout/thumbnail/variants';

export function WorkList() {
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

    return (
        <section
            className='container relative'
            onPointerMove={({ clientX, clientY }) => moveItems(clientX, clientY)}
        >
            <div className='my-8 flex flex-col gap-10'>
                <div className='mb-4 flex w-full px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground'>
                    <div className='w-2/5'>Client</div>
                    <div className='w-1/5'>Location</div>
                    <div className='w-[30%]'>Services</div>
                    <div className='w-[10%] text-right'>Year</div>
                </div>

                <ul className='group flex w-full flex-col'>
                    {workOptions.map((work, idx) => (
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

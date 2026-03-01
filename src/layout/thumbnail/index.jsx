'use client';

import { useRef } from 'react';

import { useFollowPointer } from '@/hooks';

import {
  ThumbnailAction,
  ThumbnailLabel,
  ThumbnailList,
  ThumbnailModal,
} from './components';
import { scaleUp } from './variants';

export function Thumbnail() {
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const modal = useRef(null);

  const {
    item: { active, index },
    handlePointerEnter,
    handlePointerLeave,
    moveItems,
  } = useFollowPointer({
    modal,
  });

  return (
    <section
      className='container relative'
      onPointerMove={({ clientX, clientY }) => moveItems(clientX, clientY)}
    >
      <div className='my-8 flex flex-col gap-10'>
        <ThumbnailLabel>Recent work</ThumbnailLabel>
        <ThumbnailList
          handlePointerEnter={handlePointerEnter}
          handlePointerLeave={handlePointerLeave}
          moveItems={moveItems}
        />
        <ThumbnailModal
          ref={modal}
          variants={scaleUp}
          active={active}
          index={index}
        />
        <ThumbnailAction>
          More work
        </ThumbnailAction>
      </div>
    </section>
  );
}

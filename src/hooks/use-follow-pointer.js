'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { gsap } from 'gsap';

/**
 * @param {Object} params
 * @param {import('react').MutableRefObject<HTMLElement>} params.modal
 */
export function useFollowPointer({ modal }) {
  const [item, setItem] = useState({ active: false, index: 0 });

  /** @type {import('react').MutableRefObject<number | null>} */
  let xMoveModal = useRef(null);
  /** @type {import('react').MutableRefObject<number | null>} */
  let yMoveModal = useRef(null);

  /** @type {(index: number) => void} */
  const handlePointerEnter = useCallback(
    index => setItem({ active: true, index }),
    [],
  );

  /** @type {(index: number) => void} */
  const handlePointerLeave = useCallback(
    index => setItem({ active: false, index }),
    [],
  );

  /** @type {(x: number, y: number) => void} */
  const moveItems = useCallback((x, y) => {
    xMoveModal.current(x);
    yMoveModal.current(y);

  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Move modal
      xMoveModal.current = gsap.quickTo(modal.current, 'left', {
        duration: 0.8,
        ease: 'power3',
      });
      yMoveModal.current = gsap.quickTo(modal.current, 'top', {
        duration: 0.8,
        ease: 'power3',
      });

    });

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { item, handlePointerEnter, handlePointerLeave, moveItems };
}

'use client';

import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

/** @param {import('react').PropsWithChildren<unknown>} */
export function WorkCurve({ children }) {
    /** @type {import('react').MutableRefObject<HTMLElement>} */
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const transformY = useTransform(scrollYProgress, [0, 0.9], [250, 0]);

    return (
        <div ref={containerRef} className="w-full">
            <div className="w-full bg-background">
                {children}
            </div>
            {/* 
              Wrap only the wave in a relative wrapper with overflow-hidden
              so that the horizontal scrollbar is hidden without affecting
              the rest of the layout or stacking context (Navbar).
            */}
            <div className="relative z-10 w-full overflow-hidden">
                <motion.div
                    className="-ml-[10vw] w-[120vw] bg-background"
                    style={{
                        height: transformY,
                        borderRadius: '0 0 50% 50%',
                    }}
                />
            </div>
        </div>
    );
}

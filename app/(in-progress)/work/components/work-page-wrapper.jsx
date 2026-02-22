'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function WorkPageWrapper({ children }) {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const transformY = useTransform(scrollYProgress, [0, 0.9], [250, 0]);

    return (
        <section ref={containerRef} className="relative z-10 bg-background overflow-hidden">
            {children}
            <motion.div
                className="absolute bottom-0 left-[50%] w-[120vw] bg-background -translate-x-1/2"
                style={{
                    height: transformY,
                    borderRadius: '0 0 50% 50%',
                }}
            />
        </section>
    );
}

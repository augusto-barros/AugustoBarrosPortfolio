'use client';

import { useRef } from 'react';

import { motion, useInView } from 'framer-motion';

export function TechStack() {
    const container = useRef(null);
    const isInView = useInView(container, { once: true, margin: '-10%' });

    const slideUp = {
        initial: { y: 20, opacity: 0 },
        enter: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.1 },
        },
    };

    const techItems = [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
        { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { name: 'Expo', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg' },
        { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
        { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
        { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
        { name: 'Svelte', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg' },
    ];

    return (
        <section ref={container} className='text-text relative w-full px-10 pt-12 pb-4 md:pt-24 md:pb-12 md:px-[6%] lg:px-[8%] xl:px-[90px] mx-auto max-w-[1400px]'>
            <div className='flex flex-col gap-16 md:flex-row md:gap-24 lg:gap-32 items-center'>
                <motion.div
                    className='w-full md:w-[35%] flex flex-col gap-6'
                    variants={slideUp}
                    initial='initial'
                    animate={isInView ? 'enter' : 'initial'}
                >
                    <div className='w-12 border-t-2 border-[#D2D2D2]/30'></div>
                    <h2 className='text-[clamp(2.5rem,4vw,3.5rem)] font-normal tracking-tight leading-none'>
                        My Tech Stack
                    </h2>
                    <p className='text-sm lg:text-[0.95rem] font-light leading-relaxed max-w-[90%] text-text/80'>
                        I have experience working with a variety of modern technologies and tools to bring digital products to life. I am always exploring new frameworks and expanding my knowledge.
                    </p>
                </motion.div>

                <motion.div
                    className='w-full md:w-[65%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 items-center'
                    variants={slideUp}
                    initial='initial'
                    animate={isInView ? 'enter' : 'initial'}
                >
                    {techItems.map((tech, index) => (
                        <div key={index} className='flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity'>
                            <img src={tech.icon} alt={tech.name} className='w-8 h-8 object-contain' />
                            <span className='font-medium text-sm'>{tech.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

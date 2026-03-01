'use client';

import { useRef } from 'react';

import { motion, useInView } from 'framer-motion';

import { MagneticButton } from '@/components/common/button';

export function Experience() {
    const container = useRef(null);
    const isInView = useInView(container, { once: true, margin: '-10%' });

    const slideUp = {
        initial: { y: 20, opacity: 0 },
        enter: i => ({
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.1 * i },
        }),
    };

    const experiences = [
        {
            id: '2025 - Present',
            role: 'Full Stack Developer',
            company: 'Tool Interactive',
            description: 'Leading the development of AI-powered mobile applications focused on simplifying health and productivity workflows, including the design and launch of appcaloria, a subscription-based nutrition tracking app.',
        },
        {
            id: '2025',
            role: 'Junior Software Developer',
            company: 'Ferator AS',
            description: 'Designed, developed, and maintained full-stack web applications using Next.js, React, TypeScript, and SQL Server, ensuring secure authentication, robust API design, and responsive, user-centered interfaces.',
        },
        {
            id: '2015 - 2023',
            role: 'Creative Copywriter',
            company: 'Isobar, Artplan, Moringa, Mutato, DM9DDB, Rappi Brasil.',
            description: 'Led digital content strategy and UX writing initiatives for large-scale brands, aligning messaging with business and product objectives.',
        },
    ];

    return (
        <section ref={container} className='text-text relative w-full px-10 pt-12 pb-24 md:pt-12 md:pb-24 md:px-[6%] lg:px-[8%] xl:px-[90px] mx-auto max-w-[1400px]'>
            <div className='w-full pb-16 md:pb-24'>
                <motion.h2
                    className='text-[clamp(2.5rem,4vw,3.5rem)] font-normal tracking-tight'
                    variants={slideUp}
                    custom={0}
                    initial='initial'
                    animate={isInView ? 'enter' : 'initial'}
                >
                    Experience
                </motion.h2>
            </div>

            <div className='flex w-full flex-col gap-16 md:flex-row md:gap-12 lg:gap-16 xl:gap-20'>
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        className='flex-1 flex flex-col'
                        variants={slideUp}
                        custom={index + 1}
                        initial='initial'
                        animate={isInView ? 'enter' : 'initial'}
                    >
                        <h3 className='text-text/50 mb-4 text-xs font-light tracking-widest'>{exp.id}</h3>
                        <div className='w-full border-t border-[#D2D2D2]/30 mb-8'></div>
                        <h4 className='mb-2 text-2xl font-normal tracking-tight'>{exp.role}</h4>
                        <h5 className='mb-6 text-sm font-light text-text/60 italic'>{exp.company}</h5>
                        <p className='text-sm lg:text-[0.95rem] font-light leading-relaxed max-w-[90%]'>
                            {exp.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className='w-full pt-32 pb-10 flex flex-col items-center justify-center gap-8'
                variants={slideUp}
                custom={experiences.length + 1}
                initial='initial'
                animate={isInView ? 'enter' : 'initial'}
            >
                <h3 className='text-[clamp(1.5rem,2.5vw,2rem)] font-light tracking-tight'>
                    Want to know more?
                </h3>
                <a href="/photo/about/resume/Augusto Resume_2026.pdf" download="Augusto_Barros_Resume_2026.pdf">
                    <MagneticButton variant='primary' size='md' className='px-10 py-5 text-lg rounded-full bg-[#1C1D20] text-white hover:bg-[#1C1D20]/80'>
                        Download Resume
                    </MagneticButton>
                </a>
            </motion.div>
        </section>
    );
}

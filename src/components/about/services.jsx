'use client';

import { useRef } from 'react';

import { motion, useInView } from 'framer-motion';

export function Services() {
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

  const services = [
    {
      id: '01',
      title: 'Design',
      description:
        'With a solid track record in designing websites, I deliver strong and user-friendly digital designs. (Since 2024 only in combination with development)',
    },
    {
      id: '02',
      title: 'Development',
      description:
        'I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction. Building with React and Next.js.',
    },
    {
      id: '03',
      title: 'The full package',
      description:
        "A complete website from concept to implementation, that's what makes me stand out. My great sense for design and my development skills enable me to create kick-ass projects.",
    },
  ];

  return (
    <section ref={container} className='text-text w-full px-10 py-24 md:px-20'>
      <div className='flex flex-col gap-10 md:flex-row md:gap-32'>
        <div className='w-full md:w-1/4'>
          <motion.h2
            className='whitespace-nowrap text-2xl font-medium tracking-tight'
            variants={slideUp}
            custom={0}
            initial='initial'
            animate={isInView ? 'enter' : 'initial'}
          >
            I can help you with ...
          </motion.h2>
        </div>

        <div className='flex w-full flex-col gap-x-12 gap-y-16 md:w-3/4 md:flex-row'>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className='flex-1 border-t border-[#D2D2D2]/20 pt-8'
              variants={slideUp}
              custom={index + 1}
              initial='initial'
              animate={isInView ? 'enter' : 'initial'}
            >
              <h3 className='text-text/50 mb-6 text-sm'>{service.id}</h3>
              <h4 className='mb-8 text-2xl font-medium'>{service.title}</h4>
              <p className='text-base font-light leading-relaxed'>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

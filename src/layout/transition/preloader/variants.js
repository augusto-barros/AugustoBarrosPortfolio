/** @type {import('framer-motion').Variants} */
export const slideUp = {
  initial: {
    top: 0,
  },
  enter: {
    top: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
  exit: {
    top: '-100vh',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};


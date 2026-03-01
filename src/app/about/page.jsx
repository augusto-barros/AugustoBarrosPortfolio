import { Awwwards, Hero, Intro, Experience, TechStack } from '@/components';
import { Contact, Navbar, Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About | Augusto Barros',
  description:
    'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Augusto Barros',
};

export default function About() {
  return (
    <Transition>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <TechStack />
        <Experience />
      </main>
      <Contact />
    </Transition>
  );
}

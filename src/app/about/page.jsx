import { Awwwards, Experience, Hero, Intro, TechStack } from '@/components';
import { createPageMetadata } from '@/config';
import { Contact, Navbar, Transition } from '@/layout';

export const metadata = createPageMetadata({ title: 'Sobre', path: '/about' });

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

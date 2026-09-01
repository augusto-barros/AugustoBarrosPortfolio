import { createPageMetadata } from '@/config';
import {
  Contact,
  Description,
  Header,
  Navbar,
  Thumbnail,
  Transition,
} from '@/layout';

export const metadata = createPageMetadata({ title: 'Home', path: '/' });

export default function Home() {
  return (
    <Transition>
      <Navbar />
      <Header />
      <main>
        <Description />
        <Thumbnail />
      </main>
      <Contact />
    </Transition>
  );
}

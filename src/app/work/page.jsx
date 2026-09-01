import { WorkList } from '@/components';
import { createPageMetadata } from '@/config';
import { Contact, Navbar, Transition } from '@/layout';

import { WorkCurve } from './components/work-curve';

export const metadata = createPageMetadata({ title: 'Projetos', path: '/work' });

export default function Work() {
  return (
    <Transition>
      <Navbar />
      <WorkCurve>
        <main className='mx-auto min-h-screen max-w-[1400px] px-4 pb-20 pt-40 md:px-10'>
          <h1 className='mb-20 pt-10 text-5xl font-medium leading-tight tracking-tight md:w-4/5 md:text-7xl lg:text-[105px]'>
            Creating next level digital products
          </h1>

          <WorkList />
        </main>
      </WorkCurve>
      <Contact />
    </Transition>
  );
}

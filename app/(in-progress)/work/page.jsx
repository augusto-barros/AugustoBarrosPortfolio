import { MagneticButton, WorkList } from '@/components';
import { Navbar , Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Work',
  description:
    'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Augusto Barros',
};

export default function Work() {
  return (
    <Transition>
      <Navbar />
      <main className="mx-auto min-h-screen max-w-[1400px] px-4 pb-20 pt-40 md:px-10">
        <h1 className="mb-20 pt-10 text-5xl font-medium leading-tight tracking-tight md:w-4/5 md:text-7xl lg:text-[105px]">
          Creating next level digital products
        </h1>

        <div className="mb-20 flex flex-wrap gap-4 px-4">
          <MagneticButton
            variant="default"
            className="rounded-full border border-black bg-black !px-8 !py-3 text-lg font-light text-white transition-colors hover:bg-black hover:text-white dark:border-white dark:bg-white dark:text-black dark:hover:bg-white dark:hover:text-black"
          >
            All
          </MagneticButton>
          <MagneticButton
            variant="default"
            className="rounded-full border border-border !px-8 !py-3 text-lg font-light transition-colors hover:border-black dark:hover:border-white"
          >
            Design
          </MagneticButton>
          <MagneticButton
            variant="default"
            className="rounded-full border border-border !px-8 !py-3 text-lg font-light transition-colors hover:border-black dark:hover:border-white"
          >
            Development
          </MagneticButton>
        </div>

        <WorkList />
      </main>
    </Transition>
  );
}

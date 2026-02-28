import { Center, MagneticButton, TransitionLink } from '@/components';

/** @param {import('react').PropsWithChildren<unknown>} */
export function ThumbnailAction({ children }) {
  return (
    <Center>
      <TransitionLink href='/work' passHref>
        <MagneticButton
          variant='outline'
          className='px-10 py-8 text-base before:-top-1/2 hover:text-background'
        >
          {children}
        </MagneticButton>
      </TransitionLink>
    </Center>
  );
}

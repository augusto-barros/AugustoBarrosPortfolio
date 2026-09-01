import { TransitionLink } from '@/components';
import { createPageMetadata } from '@/config';
import { Navbar, Transition } from '@/layout';

export const metadata = createPageMetadata({
  title: 'Página não encontrada',
  description: 'A página que você procura não existe ou foi movida.',
  noIndex: true,
});

export default function NotFound() {
  return (
    <Transition>
      <Navbar />
      <main className='flex min-h-screen flex-col items-center justify-center px-4 text-center'>
        <h1 className='text-[clamp(3rem,12vw,8rem)] font-medium leading-none tracking-tight'>
          Página não encontrada
        </h1>
        <p className='mt-6 max-w-md text-muted-foreground'>
          A página que você procura não existe ou foi movida.
        </p>
        <div className='mt-10 flex flex-wrap justify-center gap-8'>
          <TransitionLink
            href='/'
            className='border-b border-transparent text-lg transition-colors hover:border-foreground'
          >
            Voltar ao início
          </TransitionLink>
          <TransitionLink
            href='/work'
            className='border-b border-transparent text-lg transition-colors hover:border-foreground'
          >
            Ver projetos
          </TransitionLink>
        </div>
      </main>
    </Transition>
  );
}

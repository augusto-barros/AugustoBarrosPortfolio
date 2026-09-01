'use client';

import { TransitionLink } from '@/components';

/** @param {{ error: Error & { digest?: string }; reset: () => void }} props */
export default function Error({ reset }) {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center px-4 text-center'>
      <h1 className='text-[clamp(3rem,12vw,8rem)] font-medium leading-none tracking-tight'>
        Algo deu errado
      </h1>
      <p className='mt-6 max-w-md text-muted-foreground'>
        Ocorreu um erro inesperado. Tente novamente ou volte ao início.
      </p>
      <div className='mt-10 flex flex-wrap justify-center gap-8'>
        <button
          type='button'
          onClick={reset}
          className='border-b border-transparent text-lg transition-colors hover:border-foreground'
        >
          Tentar novamente
        </button>
        <TransitionLink
          href='/'
          className='border-b border-transparent text-lg transition-colors hover:border-foreground'
        >
          Voltar ao início
        </TransitionLink>
      </div>
    </main>
  );
}

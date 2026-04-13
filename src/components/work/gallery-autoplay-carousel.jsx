'use client';

import { useMemo, useState } from 'react';

import { ClientImage } from '@/components/common/client-image';
import { cn } from '@/utils';

const DEFAULT_DURATION_SEC = 42;

/**
 * Loop horizontal infinito: a sequência é duplicada; a animação desloca exatamente metade
 * da largura total (-50%), por isso quando “recomeça” o conteúdo é idêntico — sem salto
 * (última → primeira de forma contínua).
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {string[]} props.images
 * @param {number} [props.durationSec] — duração em segundos para percorrer uma cópia completa da lista (menor = mais rápido)
 * @param {string} [props.altSegment] — fragmento do alt após o título (ex.: "creative", "results")
 * @param {string} [props.gapClassName] — classes Tailwind para espaço entre slides (ex.: `gap-0`)
 */
export function WorkGalleryMarquee({
  title,
  images,
  durationSec = DEFAULT_DURATION_SEC,
  altSegment = 'creative',
  gapClassName = 'gap-4 md:gap-8',
}) {
  const [paused, setPaused] = useState(false);

  const track = useMemo(() => [...images, ...images], [images]);

  if (!images?.length) return null;

  return (
    <div
      className='w-full bg-white py-12 md:py-20'
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className='relative w-full overflow-hidden'>
        <div
          className={cn(
            'work-gallery-marquee-track flex w-max flex-nowrap items-center will-change-transform',
            gapClassName,
          )}
          style={{
            animation: `gallery-marquee-infinite-x ${durationSec}s linear infinite`,
            animationPlayState: paused ? 'paused' : 'running',
          }}
        >
          {track.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className='relative h-[min(52vh,720px)] w-[min(78vw,300px)] shrink-0 md:h-[min(56vh,760px)] md:w-[min(36vw,400px)]'
            >
              <ClientImage
                src={src}
                alt={`${title} — ${altSegment} ${(i % images.length) + 1}`}
                fill
                className='object-contain object-center'
                sizes='(min-width: 768px) 36vw, 78vw'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

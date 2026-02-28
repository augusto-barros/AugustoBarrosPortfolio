'use client';

import { motion } from 'framer-motion';
import { ArrowDownLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { MagneticButton } from '@/components';

import { Container, ImageWrapper, MainTitle, Row } from './index.styled';

/**
 * @param {Object} props
 * @param {import('framer-motion').MotionValue<number>} props.transformX
 */
export function UserDetails({ transformX }) {
  return (
    <Container className='mx-auto w-full max-w-[90rem] px-[clamp(2em,5vw,4em)] pb-2 pt-[clamp(2em,5vw,4em)]'>
      <Row>
        <div className='flex items-center gap-8'>
          <ImageWrapper>
            <Image
              src='/photo/Guto_portrait.png'
              className='rounded-full object-cover'
              fill
              alt='Augusto Barros Profile Picture'
              sizes='128px'
            />
          </ImageWrapper>
          <MainTitle>Let’s work</MainTitle>
        </div>
        <div className='flex items-center justify-between'>
          <MainTitle>together</MainTitle>
          <div>
            <ArrowDownLeft size={28} strokeWidth={1.25} />
          </div>
        </div>
      </Row>

      <Row>
        <div className='relative w-full'>
          <div className='h-px bg-muted-foreground' />
          <div className='absolute right-0 top-0 z-20 -translate-x-1/2 -translate-y-1/2'>
            <motion.div style={{ x: transformX }}>
              <Link href='https://wa.me/5561994111868' passHref>
                <MagneticButton variant='primary' size='lg'>
                  Get in touch
                </MagneticButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </Row>

      <Row>
        <div className='flex w-full flex-col gap-4 lg:flex-row'>
          <div>
            <a href='mailto:augustobarroscw@gmail.com'>
              <MagneticButton
                variant='outline'
                size='md'
                className='w-full border-muted-foreground !text-sm'
              >
                Send an email
              </MagneticButton>
            </a>
          </div>
          <div>
            <a
              href='https://wa.me/5561994111868'
              target='_blank'
              rel='noopener noreferrer'
            >
              <MagneticButton
                variant='outline'
                size='md'
                className='w-full border-muted-foreground !text-sm [&>span]:inline-flex [&>span]:items-center [&>span]:gap-2 [&>span]:!max-w-none [&>span]:!break-normal [&>span]:!whitespace-nowrap'
              >
                <svg
                  aria-hidden='true'
                  viewBox='0 0 24 24'
                  className='h-4 w-4 fill-current'
                >
                  <path d='M20.52 3.48A11.88 11.88 0 0 0 12.03 0C5.4 0 .02 5.37.02 12c0 2.11.55 4.18 1.6 6L0 24l6.16-1.61A11.96 11.96 0 0 0 12.03 24C18.65 24 24 18.63 24 12a11.9 11.9 0 0 0-3.48-8.52zM12.03 21.9a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.66.96.98-3.57-.23-.37a9.88 9.88 0 1 1 8.3 4.57zm5.43-7.41c-.3-.15-1.76-.87-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.41-1.5-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46s1.06 2.84 1.2 3.04c.15.2 2.08 3.18 5.03 4.46.7.3 1.25.48 1.68.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z' />
                </svg>
                Message me
              </MagneticButton>
            </a>
          </div>
        </div>
      </Row>
    </Container>
  );
}

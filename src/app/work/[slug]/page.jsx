import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ClientImage, MagneticButton, TransitionLink } from '@/components';
import { workDetails } from '@/data';
import { Contact, Navbar, Transition } from '@/layout';

import { WorkCurve } from '../components/work-curve';

export async function generateMetadata({ params }) {
  const { slug } = params;
  const project = workDetails[slug];

  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} - Work`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = params;
  const project = workDetails[slug];

  if (!project) notFound();

  const renderGallery = (images) => {
    if (!images || images.length === 0) return null;
    return (
      <section className='w-full'>
        {images.map((mediaItem, i) => {
          // Helper to check if file is a video
          const isVideo = (item) => {
            const url = typeof item === 'string' ? item : item.src;
            return (
              url.toLowerCase().endsWith('.mp4') ||
              url.toLowerCase().endsWith('.mov')
            );
          };

          // Helper for rendering a single media element
          const renderMedia = (item) => {
            const url = typeof item === 'string' ? item : item.src;
            const label = typeof item === 'object' ? item.label : null;
            const video = isVideo(item);

            return (
              <div className='flex h-full w-full flex-col items-center gap-8'>
                {video ? (
                  <div className='relative mx-auto h-full max-h-[80vh] aspect-[9/19.5]'>
                    {/* iPhone Border/Bezel (Thinner) */}
                    <div className='relative h-full w-full rounded-[3.2rem] border-[4px] border-[#1a1a1a] bg-[#1a1a1a] p-1 shadow-2xl ring-1 ring-white/10'>
                      {/* Inner Screen Container */}
                      <div className='relative h-full w-full overflow-hidden rounded-[2.8rem] bg-black'>
                        <video
                          src={url}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className='size-full object-cover'
                        />
                      </div>
                    </div>

                    {/* Side Buttons (Subtle) */}
                    <div className='absolute -left-[10px] top-24 h-12 w-[3px] rounded-l-sm bg-[#1a1a1a]' />
                    <div className='absolute -left-[10px] top-44 h-15 w-[3px] rounded-l-sm bg-[#1a1a1a]' />
                    <div className='absolute -left-[10px] top-64 h-15 w-[3px] rounded-l-sm bg-[#1a1a1a]' />
                    <div className='absolute -right-[10px] top-44 h-24 w-[3px] rounded-r-sm bg-[#1a1a1a]' />
                  </div>
                ) : (
                  <ClientImage
                    src={url}
                    alt={`${project.title} gallery`}
                    width={1920}
                    height={1080}
                    className='size-full object-cover'
                    sizes='100vw'
                  />
                )}
                {label && (
                  <span className='mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40'>
                    {label}
                  </span>
                )}
              </div>
            );
          };

          // If it's an array, render side-by-side
          if (Array.isArray(mediaItem)) {
            return (
              <div
                key={i}
                className='relative flex w-full flex-col items-center justify-center gap-4 overflow-hidden bg-black/5 py-10 md:h-[100vh] md:flex-row md:py-16'
              >
                {mediaItem.map((item, j) => (
                  <div
                    key={j}
                    className='flex h-[85vh] w-full items-center justify-center md:h-full md:flex-1'
                  >
                    {renderMedia(item)}
                  </div>
                ))}
              </div>
            );
          }

          // Normal single item
          const isSingleVideo = isVideo(mediaItem);
          return (
            <div
              key={i}
              className={`relative w-full overflow-hidden ${isSingleVideo
                ? 'flex h-[85vh] items-center justify-center bg-black/5 py-10 md:h-[100vh] md:py-16'
                : 'h-[60vh] md:h-screen'
                }`}
            >
              {isSingleVideo ? (
                renderMedia(mediaItem)
              ) : (
                <ClientImage
                  src={mediaItem}
                  alt={`${project.title} gallery ${i}`}
                  width={1920}
                  height={1080}
                  className='size-full object-cover'
                  sizes='100vw'
                />
              )}
            </div>
          );
        })}
      </section>
    );
  };

  return (
    <Transition>
      <Navbar />
      <WorkCurve bgClass={project.techStack ? 'bg-[#1c1d20]' : 'bg-background'}>
        <main className='min-h-screen pt-40 md:pt-60'>
          {/* Header section with title and Live Site button */}
          <div className='relative mx-auto mb-12 flex max-w-[1400px] items-end justify-between px-4 md:px-10'>
            <h1 className='w-4/5 text-6xl font-medium leading-[0.9] tracking-tight md:text-8xl lg:text-[120px]'>
              {project.title}
            </h1>

            {/* Live Site Button (Right side, slightly overlapping the hero image below) */}
            <div className='absolute -bottom-20 right-10 z-10 hidden md:block'>
              {project.liveSiteUrl && (
                <Link
                  href={project.liveSiteUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <MagneticButton
                    variant='default'
                    className='flex size-32 items-center justify-center rounded-full bg-[#455ce9] text-white transition-transform hover:scale-110 hover:bg-[#455ce9]'
                  >
                    {slug === 'appcaloria' ? 'iOS version ↗' : 'Live site ↗'}
                  </MagneticButton>
                </Link>
              )}
            </div>
          </div>

          {/* Metadata Grid */}
          <div className='mx-auto mb-20 max-w-[1400px] px-4 md:px-10'>
            <div className='grid grid-cols-1 gap-10 border-t border-black/10 pt-6 md:grid-cols-3'>
              <div>
                <span className='mb-4 block text-xs uppercase tracking-wider text-black/50'>
                  Role / Services
                </span>
                <div className='border-t border-black/10 pt-4'>
                  <p>{project.roleServices}</p>
                </div>
              </div>
              <div>
                <span className='mb-4 block text-xs uppercase tracking-wider text-black/50'>
                  Credits
                </span>
                <div className='border-t border-black/10 pt-4'>
                  {project.credits?.map((credit, i) => (
                    <p key={i}>
                      <span className='text-black/50'>{credit.label}:</span> {credit.name}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <span className='mb-4 block text-xs uppercase tracking-wider text-black/50'>
                  Location & Year
                </span>
                <div className='border-t border-black/10 pt-4'>
                  <p>
                    {project.location} © {project.year}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Main Image - Full bleed */}
          <div className='relative mb-0 h-[60vh] w-full overflow-hidden md:h-[80vh]'>
            <ClientImage
              src={project.heroImage}
              alt={project.title}
              width={1920}
              height={1080}
              className='size-full object-cover'
              sizes='100vw'
            />
          </div>

          {/* Dark Details Section */}
          <section className='w-full bg-[#1c1d20] px-4 py-[10vh] text-white md:px-10 md:py-[15vh]'>
            <div className='mx-auto flex max-w-[1400px] flex-col gap-10 md:flex-row md:gap-20'>
              <div className='md:w-3/5'>
                <h2 className='text-3xl font-medium leading-tight tracking-tight md:text-5xl lg:text-6xl'>
                  {project.quote}
                </h2>
              </div>
              <div className='flex flex-col justify-end md:w-2/5'>
                <p className='whitespace-pre-wrap max-w-lg text-lg leading-relaxed text-white/80 md:text-xl'>
                  {project.description}
                </p>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          {renderGallery(project.galleryImages)}
          {/* How to Use Section */}
          {project.howToUse && (
            <section className='w-full bg-white px-4 py-[10vh] text-black md:px-10 md:py-[15vh]'>
              <div className='mx-auto max-w-[1400px]'>
                <div className='mb-16 md:mb-24'>
                  <h2 className='text-4xl font-medium tracking-tight md:text-6xl lg:text-7xl'>
                    {project.howToUse.title}
                  </h2>
                </div>

                <div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4'>
                  {project.howToUse.steps.map((step, i) => (
                    <div key={i} className='flex flex-col gap-6'>
                      <div className='flex items-center gap-4'>
                        <span className='flex size-8 items-center justify-center rounded-full border border-black/10 text-xs font-medium'>
                          {i + 1}
                        </span>
                        <h3 className='text-xl font-medium'>{step.title}</h3>
                      </div>
                      <p className='text-black/60 leading-relaxed'>
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Extra Gallery Section */}
          {renderGallery(project.extraGalleryImages)}

          {/* Architecture Section */}
          {project.architectureDescription && (
            <section className='w-full bg-white px-4 py-[10vh] text-black md:px-10 md:py-[15vh]'>
              <div className='mx-auto max-w-[1400px]'>
                <div className='flex flex-col gap-10 lg:flex-row lg:gap-32'>
                  <div className='lg:w-1/3'>
                    <h2 className='text-4xl font-medium tracking-tight md:text-5xl lg:text-5xl'>
                      Technical Overview
                    </h2>
                  </div>
                  <div className='flex flex-col gap-8 lg:w-2/3'>
                    {/* Visual Separator */}
                    <div className='h-px w-full bg-black/10 lg:hidden'></div>

                    <div className='flex flex-col gap-6 lg:border-l lg:border-black/10 lg:pl-10'>
                      {project.architectureDescription.split('\n\n').map((paragraph, index) => (
                        <p key={index} className='text-lg leading-relaxed text-black/70 md:text-xl'>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Tech Stack Section */}
          {project.techStack && (
            <section className='w-full bg-[#1c1d20] px-4 pt-[10vh] pb-[30vh] text-white md:px-10 md:pt-[25vh] md:pb-[35vh]'>
              <div className='mx-auto flex max-w-[1400px] flex-col gap-10 md:flex-row md:gap-20 items-center md:items-start'>
                <div className='flex flex-col gap-6 md:w-3/5'>
                  <h2 className='text-3xl font-medium leading-tight tracking-tight md:text-5xl lg:text-6xl'>
                    Tech Stack
                  </h2>
                  <p className='whitespace-pre-wrap max-w-lg text-lg leading-relaxed text-white/50 md:text-xl'>
                    The core technologies powering {project.title}, chosen for their performance, scalability, and seamless user experience.
                  </p>
                </div>

                <div className='grid grid-cols-2 gap-x-8 gap-y-12 md:w-2/5'>
                  {project.techStack.map((tech, index) => (
                    <div key={index} className='flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity'>
                      <img src={tech.icon} alt={tech.name} className='size-10 object-contain filter invert' />
                      <span className='font-medium text-lg'>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>
      </WorkCurve>
      <Contact />
    </Transition >
  );
}

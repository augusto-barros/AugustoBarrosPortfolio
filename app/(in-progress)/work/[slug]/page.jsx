import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ClientImage, MagneticButton } from '@/components';
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

    return (
        <Transition>
            <Navbar />
            <WorkCurve>
                <main className="min-h-screen pt-40 md:pt-60">

                    {/* Header section with title and Live Site button */}
                    <div className="mx-auto max-w-[1400px] px-4 md:px-10 relative mb-12 flex justify-between items-end">
                        <h1 className="text-6xl font-medium leading-[0.9] tracking-tight md:text-8xl lg:text-[120px] w-4/5">
                            {project.title}
                        </h1>

                        {/* Live Site Button (Right side, slightly overlapping the hero image below) */}
                        <div className="absolute right-10 -bottom-20 z-10 hidden md:block">
                            {project.liveSiteUrl && (
                                <Link href={project.liveSiteUrl} target="_blank" rel="noopener noreferrer">
                                    <MagneticButton
                                        variant="default"
                                        className="flex h-32 w-32 items-center justify-center rounded-full bg-[#455ce9] text-white hover:bg-[#455ce9] transition-transform hover:scale-110"
                                    >
                                        Live site ↗
                                    </MagneticButton>
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Metadata Grid */}
                    <div className="mx-auto max-w-[1400px] px-4 md:px-10 mb-20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-black/10 pt-6">
                            <div>
                                <span className="text-xs uppercase tracking-wider text-black/50 block mb-4">Role / Services</span>
                                <div className="border-t border-black/10 pt-4">
                                    <p>{project.roleServices}</p>
                                </div>
                            </div>
                            <div>
                                <span className="text-xs uppercase tracking-wider text-black/50 block mb-4">Credits</span>
                                <div className="border-t border-black/10 pt-4">
                                    {project.credits?.map((credit, i) => (
                                        <p key={i}>{credit.label}: {credit.name}</p>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <span className="text-xs uppercase tracking-wider text-black/50 block mb-4">Location & Year</span>
                                <div className="border-t border-black/10 pt-4">
                                    <p>{project.location} © {project.year}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hero Main Image - Full bleed */}
                    <div className="w-full relative h-[60vh] md:h-[80vh] mb-0 overflow-hidden">
                        <ClientImage
                            src={project.heroImage}
                            alt={project.title}
                            width={1920}
                            height={1080}
                            className="object-cover w-full h-full"
                            sizes="100vw"
                        />
                    </div>

                    {/* Beige Details Section */}
                    <section className="bg-[#e0d9d1] w-full py-[10vh] md:py-[15vh] px-4 md:px-10">
                        <div className="mx-auto max-w-[1400px] flex flex-col md:flex-row gap-10 md:gap-20">
                            <div className="md:w-3/5">
                                <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight">
                                    {project.quote}
                                </h2>
                            </div>
                            <div className="md:w-2/5 flex flex-col justify-end">
                                <p className="text-lg md:text-xl leading-relaxed text-black/80 max-w-lg">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Gallery Section */}
                    <section className="w-full">
                        {project.galleryImages?.map((img, i) => (
                            <div key={i} className="relative w-full h-[60vh] md:h-screen overflow-hidden">
                                <ClientImage
                                    src={img}
                                    alt={`${project.title} gallery ${i}`}
                                    width={1920}
                                    height={1080}
                                    className="object-cover w-full h-full"
                                    sizes="100vw"
                                />
                            </div>
                        ))}
                    </section>

                    {/* Next Case Footer Section */}
                    {project.nextProject && (
                        <section className="bg-[#1c1d20] text-white w-full py-32 md:py-48 flex flex-col items-center justify-center relative overflow-hidden text-center cursor-pointer">
                            <Link href={`/work/${project.nextProject.slug}`} className="w-full flex-col items-center justify-center flex z-10">
                                <p className="text-white/50 mb-6 uppercase tracking-wider text-sm">Next case</p>
                                <h2 className="text-8xl md:text-[150px] font-medium tracking-tighter hover:opacity-80 transition-opacity">
                                    {project.nextProject.title}
                                </h2>
                            </Link>

                            {/* Central Thumbnail (Absolute center inside Next Case) */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 md:w-64 md:h-80 z-0 opacity-40 hover:opacity-100 transition-opacity pointer-events-none overflow-hidden">
                                <ClientImage
                                    src={project.nextProject.image}
                                    alt="Next Project"
                                    width={300}
                                    height={400}
                                    className="object-cover w-full h-full"
                                    sizes="(max-width: 768px) 192px, 256px"
                                />
                            </div>

                            {/* All Work magnetic button bottom */}
                            <div className="absolute bottom-10">
                                <Link href="/work">
                                    <MagneticButton
                                        variant="default"
                                        className="flex h-32 w-32 items-center justify-center rounded-full border border-white/20 hover:bg-[#455ce9] hover:border-transparent transition-colors text-white"
                                    >
                                        All work
                                    </MagneticButton>
                                </Link>
                            </div>
                        </section>
                    )}

                </main>
            </WorkCurve>
            <Contact />
        </Transition>
    );
}

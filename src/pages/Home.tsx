import '@/App.css'
import type { ReactNode } from 'react'
import buildingPhoto from '@/assets/placeholder-building.jpg'
import { MapPin, Flag, Compass, BookOpen, Footprints, TreePine, Smartphone, Download, Mail } from 'lucide-react'

const cardP = "text-base! leading-relaxed! text-primary-foreground! max-w-none! text-left!"

/* Small waypoint dot sitting directly on the path — no card, just marks
   the start/end of the journey. */
function TimelineWaypoint({ icon }: { icon: ReactNode }) {
    return (
        <div className="relative h-12">
            <div className="absolute left-6 md:left-1/2 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-secondary text-secondary-foreground! shadow-md ring-4 ring-background">
                {icon}
            </div>
        </div>
    )
}

/* A single stop along the path. Either a heading + body copy card, or a
   photo tile — alternating sides on desktop, stacked on mobile, both
   strung along the same dashed line. */
function TimelineStop({
    side,
    variant,
    icon,
    heading,
    caption,
    image,
    alt,
    children,
}: {
    side: 'left' | 'right'
    variant: 'text' | 'image'
    icon: ReactNode
    heading?: string
    caption?: string
    image?: string
    alt?: string
    children?: ReactNode
}) {
    const colStart = side === 'right' ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'
    // Image-stop markers use the accent-dark green (not the raw secondary
    // green) so the icon stroke clears WCAG's 3:1 non-text contrast
    // minimum against the off-white page background.
    const nodeColor = variant === 'text'
        ? 'border-primary text-primary'
        : 'border-[#2a8e39] text-[#2a8e39]'

    return (
        <div className="relative">
            <div
                className={`absolute left-6 md:left-1/2 top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 bg-background shadow-sm ${nodeColor}`}
            >
                {icon}
            </div>

            <div className="pl-20! md:pl-0! md:grid md:grid-cols-2 md:items-center md:gap-x-16">
                <div className={colStart}>
                    {variant === 'text' ? (
                        <div className="rounded-xl bg-primary px-8! py-8! shadow-sm transition-shadow duration-200 hover:shadow-md sm:px-10! sm:py-10!">
                            {heading && (
                                <h2 className="text-2xl! leading-snug text-primary-foreground! mb-3!">
                                    {heading}
                                </h2>
                            )}
                            <div className="flex flex-col gap-4">{children}</div>
                        </div>
                    ) : (
                        <div className="overflow-hidden rounded-2xl border border-border shadow-sm transition-shadow duration-200 hover:shadow-md">
                            {image && (
                                <img
                                    src={image}
                                    alt={alt ?? ''}
                                    className="h-56 w-full object-cover sm:h-64"
                                />
                            )}
                            {caption && (
                                <div className="bg-secondary px-6! py-4! text-center">
                                    <p className="text-xs! font-bold! uppercase tracking-widest text-secondary-foreground! max-w-none!">
                                        {caption}
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default function LandingPage() {
    return (
        <div className="min-h-screen px-4! py-16! sm:px-8! md:px-16! lg:px-32!">
            <main>

            {/* Hero */}
            <div className="relative overflow-hidden rounded-3xl bg-primary px-6! py-16! text-center shadow-lg sm:px-12! sm:py-20! max-w-3xl mx-auto! mb-16!">
                <svg
                    className="pointer-events-none absolute inset-0 h-full w-full opacity-10"
                    viewBox="0 0 800 300"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <path d="M-20,40 C150,120 300,-20 470,80 S800,40 820,120" stroke="white" strokeWidth="2" strokeDasharray="8 10" fill="none" />
                    <path d="M-20,220 C180,140 320,300 500,200 S760,260 820,180" stroke="white" strokeWidth="2" strokeDasharray="8 10" fill="none" />
                </svg>

                <div className="relative z-10 max-w-2xl mx-auto!">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4! py-1.5! text-xs! font-bold! uppercase tracking-widest text-primary-foreground! max-w-none!">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        Swissvale, PA
                    </span>

                    <h1 className="mt-6! text-5xl sm:text-6xl font-bold text-primary-foreground! leading-tight">
                        Swissvale Scrapbook
                    </h1>

                    <p className="mt-5! text-lg! text-primary-foreground! leading-relaxed! max-w-none! opacity-90">
                        A mobile app that guides you through Swissvale—either in person or virtually. As you explore, you'll discover oral histories from residents about local sites and vacant lots throughout the community.
                    </p>
                </div>
            </div>

            {/* path */}
            <div className="relative max-w-4xl mx-auto!">
                <div
                    className="absolute left-6 md:left-1/2 top-0 bottom-0 -translate-x-1/2 border-l-2 border-dashed border-primary/25"
                    aria-hidden="true"
                />

                <div className="flex flex-col gap-12 md:gap-16">
                    <TimelineWaypoint icon={<MapPin className="h-6 w-6" aria-hidden="true" />} />

                    <TimelineStop
                        side="right"
                        variant="text"
                        icon={<Compass className="h-5 w-5" aria-hidden="true" />}
                        heading="About"
                    >
                        <p className={cardP}>
                            Swissvale Scrapbook is a mobile app that guides you through Swissvale—either in person or virtually. As you explore, you'll discover oral histories from residents about local sites and vacant lots throughout the community. It's a digital scrapbook of Swissvale's stories, told by the people who know it best.
                        </p>
                    </TimelineStop>

                    <TimelineStop
                        side="left"
                        variant="image"
                        icon={<Footprints className="h-7 w-7" aria-hidden="true" />}
                        image={buildingPhoto}
                        alt="A historic brick building in Swissvale (placeholder photo)"
                        caption="Walk the Neighborhood"
                    />

                    <TimelineStop
                        side="right"
                        variant="text"
                        icon={<Smartphone className="h-5 w-5" aria-hidden="true" />}
                        heading="Walk Around or Virtually Explore"
                    >
                        <p className={cardP}>
                            <strong>Walk Mode</strong> allows you to explore the community on foot. As you approach areas of interest, click on the icons to read the stories while getting to look at the very spot where they took place.
                        </p>
                        <p className={cardP}>
                            <strong>Virtual Mode</strong> lets you explore the community virtually from the comfort of your home or the Carnegie Free Library of Swissvale!
                        </p>
                    </TimelineStop>

                    <TimelineStop
                        side="right"
                        variant="text"
                        icon={<BookOpen className="h-5 w-5" aria-hidden="true" />}
                        heading="The Story"
                    >
                        <p className={cardP}>
                            In the summer of 2023, University of Pittsburgh students walked Swissvale street by street, surveying vacant lots and overlooked corners of the borough. <strong>Dr. Susan Lucas</strong> of Pitt's Urban Studies Program and <strong>Dr. Dawna Cerney</strong> of Youngstown State University led the work, in a project known as the <em>SEED for Swissvale</em>.
                        </p>
                        <p className={cardP}>
                            In spring 2025, students organized data walks through the neighborhood, inviting residents to share what they knew about the places around them. The stories are in the residents who remember what used to stand on a vacant lot, or what happened on a particular corner decades ago. This history now lives in the Swissvale Scrapbook app, created by students from the <strong>Digital Narrative and Interactive Design</strong> program.
                        </p>
                        <p className={cardP}>
                            We built Swissvale Scrapbook to bring spoken stories to life. Open the app, walk around, and learn about the rich history of the neighborhood.
                        </p>
                    </TimelineStop>

                    <TimelineStop
                        side="left"
                        variant="image"
                        icon={<TreePine className="h-7 w-7" aria-hidden="true" />}
                        image={buildingPhoto}
                        alt="A historic brick building in Swissvale (placeholder photo)"
                        caption="Stories Rooted in Place"
                    />

                    <TimelineStop
                        side="right"
                        variant="text"
                        icon={<Download className="h-5 w-5" aria-hidden="true" />}
                        heading="Where to Download"
                    >
                        <p className={cardP}>
                            Swissvale Scrapbook is still under development. As such, the app isn't available to download just yet. Stay tuned for updates!
                        </p>
                    </TimelineStop>

                    <TimelineStop
                        side="right"
                        variant="text"
                        icon={<Mail className="h-5 w-5" aria-hidden="true" />}
                        heading="Questions?"
                    >
                        <p className={cardP}>
                            Reach out any time at{' '}
                            <a
                                href="mailto:swissvalescrapbook@gmail.com"
                                className="text-primary-foreground! underline underline-offset-4 hover:opacity-80 transition-opacity duration-200 break-all!"
                            >
                                swissvalescrapbook@gmail.com
                            </a>
                        </p>
                    </TimelineStop>

                    <TimelineWaypoint icon={<Flag className="h-5 w-5" aria-hidden="true" />} />
                </div>
            </div>

            </main>

            {/* Footer */}
            <footer className="max-w-4xl mx-auto! mt-20! border-t border-border pt-8!">
                <p className="text-sm! text-muted-foreground! text-center max-w-none!">
                    &copy; {new Date().getFullYear()} Swissvale Scrapbook. All rights reserved.
                </p>
            </footer>

        </div>
    )
}

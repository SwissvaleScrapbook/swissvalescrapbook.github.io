import '@/App.css'

const cardP = "text-base! leading-relaxed! text-primary-foreground! max-w-none! text-left!"

export default function LandingPage() {
    return (
        <div className="min-h-screen px-4 py-16 sm:px-8 md:px-16 lg:px-32">

            {/* Hero */}
            <div className="text-center max-w-2xl mx-auto mb-16!">
                <h1 className="text-5xl font-bold text-primary mb-5! leading-tight">
                    Swissvale Scrapbook
                </h1>

                {/* GIF placeholder */}
                <div className="w-full max-w-md mx-auto h-52 rounded-xl bg-muted border border-border flex items-center justify-center mb-8! shadow-sm">
                    <span className="text-muted-foreground text-sm">App Preview GIF</span>
                </div>

                <p className="text-lg! text-foreground! leading-relaxed! max-w-none!">
                    A mobile app that guides you through Swissvale—either in person or virtually. As you explore, you'll discover oral histories from residents about local sites and vacant lots throughout the community.
                </p>
            </div>

            {/* About section */}
            <div className="flex items-center gap-4 max-w-3xl mx-auto my-12!">
                <div className="flex-1 h-px bg-border" />
                <h2 className="text-4xl font-bold text-primary text-center">About</h2>
                <div className="flex-1 h-px bg-border" />
            </div>

            <div className="max-w-3xl mx-auto flex flex-col gap-6 mb-16">
                <div className="bg-primary rounded-xl px-16! py-10! shadow-sm">
                    <p className={cardP}>
                        Swissvale Scrapbook is a mobile app that guides you through Swissvale—either in person or virtually. As you explore, you'll discover oral histories from residents about local sites and vacant lots throughout the community. It's a digital scrapbook of Swissvale's stories, told by the people who know it best.
                    </p>
                </div>
            </div>

            {/* Story section */}
            <div className="flex items-center gap-4 max-w-3xl mx-auto my-12!">
                <div className="flex-1 h-px bg-border" />
                <h2 className="text-4xl font-bold text-primary text-center whitespace-nowrap">The Story</h2>
                <div className="flex-1 h-px bg-border" />
            </div>

            <div className="max-w-3xl mx-auto flex flex-col gap-3 mb-16">
                <div className="bg-primary rounded-xl px-16! py-10! shadow-sm">
                    <p className={cardP}>
                        In the summer of 2023, University of Pittsburgh students walked Swissvale street by street, surveying vacant lots and overlooked corners of the borough. <strong>Dr. Susan Lucas</strong> of Pitt's Urban Studies Program and <strong>Dr. Dawna Cerney</strong> of Youngstown State University led the work, in a project known as the <em>SEED for Swissvale</em>.
                    </p>
                    <p className={cardP}>
                        In spring 2025, students organized data walks through the neighborhood, inviting residents to share what they knew about the places around them. The stories are in the residents who remember what used to stand on a vacant lot, or what happened on a particular corner decades ago. This history now lives in the Swissvale Scrapbook app, created by students from the <strong>Digital Narrative and Interactive Design</strong> program.
                    </p>
                    <p className={cardP}>
                        We built Swissvale Scrapbook to bring spoken stories to life. Open the app, walk around, and learn about the rich history of the neighborhood.
                    </p>
                </div>
            </div>

            {/* Credits */}
            <div className="max-w-3xl mx-auto rounded-2xl shadow-lg overflow-hidden my-12!">
                <div className="bg-secondary px-8! py-6! text-center">
                    <h3 className="text-4xl font-bold text-white!">Credits</h3>
                </div>
                <div className="bg-primary px-8! py-10! flex flex-col items-center gap-6">
                    <div className="w-full max-w-xl bg-white/10 rounded-xl px-6! py-5! text-left flex flex-col gap-2">
                        <p className="text-secondary! text-xs! font-bold! uppercase tracking-widest mb-1 max-w-none!">Team</p>
                        <p className="text-primary-foreground! text-base! max-w-none!">Greyson Barsotti, Amy Zhang, Nickhil Niranjan</p>
                    </div>
                    <div className="w-full max-w-xl bg-white/10 rounded-xl px-6! py-4! text-left">
                        <p className="text-secondary! text-xs! font-bold! uppercase tracking-widest mb-2! max-w-none!">Questions?</p>
                        <a
                            href="mailto:swissvalescrapbook@gmail.com"
                            className="text-primary-foreground! text-base underline underline-offset-4 hover:text-secondary transition-colors duration-200"
                        >
                            swissvalescrapbook@gmail.com
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}
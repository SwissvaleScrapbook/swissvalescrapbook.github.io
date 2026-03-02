import './App.css'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {ChevronDown} from 'lucide-react';
import {Button} from '@/components/ui/button.tsx'

const faqs = [
    {
        question: "What is Swissvale Scrapbook?",
        answer: "Swissvale Scrapbook is a mobile app that guides you through Swissvale—either in person or virtually. As you explore, you'll discover oral histories from residents about local sites and vacant lots throughout the community. It's a digital scrapbook of Swissvale's stories, told by the people who know it best."
    },
    {
        question: "What is User Testing?",
        answer: "During a user testing session, we'll ask you to try out a few tasks on the app while we observe and take notes. There are no wrong answers—we want to see what's easy, what's confusing, and what could be better. You can ask questions at any time, and your honest feedback helps us improve the app."
    },
    {
        question: "How Long Will This Take?",
        answer: "Most sessions take 10-15 minutes. We have a few preset tasks that take about 5-10 minutes to complete. If you have extra time and want to answer additional questions, that's incredibly helpful but totally optional!"
    },
    {
        question: "What Information Do You Need About Me?",
        answer: "We'll ask for basic demographic information (like age range) to help us understand our users, but your responses are confidential and won't be shared publicly."
    },
    {
        question: "What's In It For Me?",
        answer: "You'll be one of the first to try the app and help create something meaningful for the Swissvale community. Your voice directly shapes how this project develops!"
    },
    {
        question: "Why Do You Need My Help?",
        answer: "You know Swissvale! As a community member, your perspective is valuable. We need people who live, work, or spend time in Swissvale to test whether the app makes sense, feels intuitive, and actually serves the community. Your local knowledge and honest feedback will help us build something that truly works for Swissvale residents."
    },
    {
        question: "What Will My Impact Be?",
        answer: "Your feedback directly shapes the app's development. The insights you share will help us adjust features and make sure the app is something the Swissvale community actually wants to use. You're co-creating this project with us."
    },
]

function Home() {
    return (
        <div className="min-h-screen px-4! py-16! sm:px-8! md:px-16! lg:px-32!">

            {/* Hero */}
            <div className="text-center max-w-2xl mx-auto! mb-16!">
                <h1 className="text-5xl! font-bold text-primary mb-5! leading-tight">
                    We Need Your Feedback!
                </h1>
                <p className="text-lg! text-muted-foreground leading-relaxed max-w-none! md:mx-16!">
                    Help us improve a mobile app that brings Swissvale's history to life.
                    Testing takes just <strong className="text-foreground font-semibold">10–15 minutes</strong>, and
                    your input will shape this community project.
                </p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 max-w-3xl mx-auto! mb-12!">
                <div className="flex-1 h-px bg-border"/>
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-primary">FAQ</h2>
                    <p className="text-sm text-muted-foreground mt-1">Click any question to learn more</p>
                </div>
                <div className="flex-1 h-px bg-border"/>
            </div>

            {/* FAQ Accordion */}
            <div className="max-w-3xl mx-auto flex flex-col gap-3">
                {faqs.map((faq, i) => (
                    <Collapsible key={i}>
                        <CollapsibleTrigger asChild>
                            <Button
                                variant="secondary"
                                className="group w-full py-24! md:py-16! px-8! justify-between text-left rounded-xl! shadow-sm hover:shadow-md transition-shadow duration-200"
                            >
                                <h3 className="text-3xl! text-secondary-foreground! font-bold leading-snug px-4!">
                                    {faq.question}
                                </h3>
                                <ChevronDown
                                    className="ml-4 shrink-0 size-5 text-secondary-foreground opacity-70 transition-transform duration-300 group-data-[state=open]:rotate-180"
                                />
                            </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent
                            className="bg-primary text-primary-foreground rounded-b-xl! rounded-t-none! px-16! py-10! mt-0.5!">
                            <p className="text-base leading-relaxed text-primary-foreground! px-4!">
                                {faq.answer}
                            </p>
                        </CollapsibleContent>
                    </Collapsible>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="max-w-3xl mx-auto mt-16 rounded-2xl shadow-lg overflow-hidden">
                {/* Header bar */}
                <div className="bg-secondary px-8! py-6! text-center">
                    <h3 className="text-4xl font-bold text-secondary-foreground!">Ready to Help?</h3>
                </div>
                {/* Body */}
                <div className="bg-primary px-8! py-10! text-center! flex flex-col items-center gap-6">
                    <p className="text-primary-foreground! text-lg leading-relaxed max-w-xl">
                        Join us at the <strong>Swissvale Library</strong> for a testing session! Check the dates and
                        times below, or ask a librarian for more details.
                    </p>
                    <div className="w-full max-w-xl bg-white/10 rounded-xl px-6! py-5! text-left! flex flex-col gap-2">
                        <p className="text-primary-foreground! text-xs font-bold uppercase tracking-widest mb-1">Testing
                            Sessions</p>
                        <p className="text-primary-foreground! text-base leading-relaxed">March 19, 2026 at 5:00pm-7:00pm</p>
                        <p className="text-primary-foreground! text-base">March 21, 2026 from 11am–2pm</p>
                    </div>
                    <div className="w-full max-w-xl bg-white/10 rounded-xl px-6! py-4! text-left">
                        <p className="text-primary-foreground! text-xs font-bold uppercase tracking-widest mb-1">Questions?</p>
                        <a href="mailto:swissvalescrapbook@gmail.com"
                           className="text-primary-foreground! md:text-lg! text-sm! underline underline-offset-4 hover:text-secondary transition-colors duration-200">
                            swissvalescrapbook@gmail.com
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
import './App.css'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDown } from 'lucide-react';

function Home() {
  return (
      <div>
          <div className="text-2xl text-primary w-full h-full flex justify-center content-center">
              <h1>This is a test</h1>
          </div>
          <Collapsible>
              <CollapsibleTrigger className="bg-primary text-primary-foreground rounded-xl  p-4">
                  <div className="flex items-center justify-center">
                      Can I use this in my project? <ChevronDown className="" />
                  </div>

              </CollapsibleTrigger>
              <CollapsibleContent>
                  Yes. Free to use for personal and commercial projects. No attribution
                  required.
              </CollapsibleContent>
          </Collapsible>
      </div>
  )
}

export default Home

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
              <h1>UNDER CONSTRUCTION</h1>
          </div>
          <Collapsible>
              <CollapsibleTrigger className="bg-primary text-primary-foreground rounded-xl  p-4">
                  <div className="flex items-center justify-center">
                      Test collapse <ChevronDown className="" />
                  </div>

              </CollapsibleTrigger>
              <CollapsibleContent>
                  A bunch of text
              </CollapsibleContent>
          </Collapsible>
      </div>
  )
}

export default Home

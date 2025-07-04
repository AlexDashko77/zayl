"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function FinalCTA() {
  return (
    <AnimatedSection variant="fadeInUp" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl bg-[#212529] p-8 md:p-12 shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)]">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Ready to boost productivity?
              </h2>
              <p className="mt-4 text-gray-300 md:text-lg">
                Start monitoring activity and improving team performance today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Button
                className="rounded-full bg-[#F5CB5C] text-[#212529] hover:bg-[#F5CB5C]/90 shadow-[4px_4px_10px_rgba(0,0,0,0.2),-4px_-4px_10px_rgba(255,255,255,0.1)] transition-all hover:shadow-[2px_2px_5px_rgba(0,0,0,0.2),-2px_-2px_5px_rgba(255,255,255,0.1)]"
                size="lg"
              >
                Start for Free
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-white text-[#404040] hover:bg-[#E0E0E0] shadow-[4px_4px_10px_rgba(0,0,0,0.2),-4px_-4px_10px_rgba(255,255,255,0.1)] transition-all hover:shadow-[2px_2px_5px_rgba(0,0,0,0.2),-2px_-2px_5px_rgba(255,255,255,0.1)]"
                size="lg"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

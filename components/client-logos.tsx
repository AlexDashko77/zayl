"use client"

import { AnimatedSection } from "./animated-section"


export function ClientLogos() {
  // Placeholder company names for the logos
  const companies = [{
    img: "/Logo1.svg"
  },{
    img: "/Logo2.svg"
  }]

  return (
    <AnimatedSection variant="fadeIn" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#212529] mb-8">Trusted by teams worldwide</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {companies.map((company, index) => (
            <div
              key={index}
              className="h-12 md:h-16"
            >
              <img src={company.img} className="h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

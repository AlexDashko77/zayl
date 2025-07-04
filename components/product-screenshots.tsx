"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function ProductScreenshots() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Placeholder screenshots
  const screenshots = [
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Activity Dashboard Overview",
      caption: "Complete dashboard overview with all metrics",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Employee Activity Timeline",
      caption: "Detailed timeline of employee activities",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Productivity Analytics",
      caption: "Advanced analytics and reporting features",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <AnimatedSection variant="fadeIn" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-[#212529] mb-12">
          See Activity Monitoring in Action
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel container */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-white shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 p-4"
              >
                <Image
                  src={screenshots[currentIndex].src || "/placeholder.svg"}
                  alt={screenshots[currentIndex].alt}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Caption */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-6 py-2 text-sm font-medium text-[#212529] shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.8)]">
              {screenshots[currentIndex].caption}
            </div>

            {/* Navigation buttons */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.8)]"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="h-5 w-5 text-[#212529]" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.8)]"
              aria-label="Next screenshot"
            >
              <ChevronRight className="h-5 w-5 text-[#212529]" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  currentIndex === index
                    ? "bg-[#F5CB5C] w-6"
                    : "bg-[#ECEFF1] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1),inset_-1px_-1px_2px_rgba(255,255,255,0.8)]"
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

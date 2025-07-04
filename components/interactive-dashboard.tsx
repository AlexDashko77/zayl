"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ZoomIn } from "lucide-react"
import { DashboardPreviewModal } from "@/components/dashboard-preview-modal"

interface InteractiveDashboardProps {
  src: string
  alt: string
  className?: string
}

export function InteractiveDashboard({ src, alt, className }: InteractiveDashboardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Define the hotspots for the dashboard features
  const hotspots = [
    {
      id: 1,
      title: "Summary",
      description: "Track completion rates and pending tasks",
      x: "25%",
      y: "15%",
    },
    {
      id: 2,
      title: "Employee Productivity",
      description: "Monitor working hours and efficiency",
      x: "25%",
      y: "60%",
    },
    {
      id: 3,
      title: "Project Progress",
      description: "Visualize project status and timelines",
      x: "75%",
      y: "30%",
    },
    {
      id: 4,
      title: "Application Usage",
      description: "Analyze productive vs. unproductive time",
      x: "75%",
      y: "75%",
    },
  ]

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div
        className={`relative w-full h-full overflow-hidden rounded-2xl bg-white ${className} cursor-pointer`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        onClick={handleOpenModal}
        role="button"
        tabIndex={0}
        aria-label={`View ${alt} in full screen`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleOpenModal()
          }
        }}
      >
        <motion.div
          className="relative w-full h-full"
          animate={{
            scale: isHovered ? 1.03 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            fill
            className="object-contain p-2 transition-all duration-300"
            priority
          />
        </motion.div>

        {/* Overlay with zoom icon */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-[#212529]/0 transition-all duration-300"
          animate={{
            backgroundColor: isHovered ? "rgba(33, 37, 41, 0.3)" : "rgba(33, 37, 41, 0)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="flex items-center justify-center rounded-full bg-white p-3 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            <ZoomIn className="h-6 w-6 text-[#212529]" />
          </motion.div>
        </motion.div>

        {/* Feature hotspots */}
        {hotspots.map((hotspot) => (
          <motion.div
            key={hotspot.id}
            className="absolute z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center"
            style={{ left: hotspot.x, top: hotspot.y }}
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10,
            }}
            transition={{ duration: 0.3, delay: 0.1 + hotspot.id * 0.05 }}
          >
            <div className="mb-2 h-3 w-3 rounded-full bg-[#F5CB5C] shadow-[0_0_10px_rgba(245,203,92,0.7)]" />
            <div className="rounded-lg bg-white p-2 text-center shadow-[4px_4px_10px_rgba(0,0,0,0.15),-4px_-4px_10px_rgba(255,255,255,0.9)]">
              <p className="text-xs font-bold text-[#212529]">{hotspot.title}</p>
              <p className="text-[10px] text-[#333533]">{hotspot.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dashboard Preview Modal */}
      <DashboardPreviewModal isOpen={isModalOpen} onClose={handleCloseModal} imageSrc={src} />
    </>
  )
}

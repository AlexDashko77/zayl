"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react"
import { Modal } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"

interface DashboardPreviewModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
}

export function DashboardPreviewModal({ isOpen, onClose, imageSrc }: DashboardPreviewModalProps) {
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)

  // Reset zoom and position
  const handleReset = () => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }

  // Zoom in
  const handleZoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.25, 3))
  }

  // Zoom out
  const handleZoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.25, 0.5))
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Dashboard Preview">
      <div className="relative flex h-[80vh] w-full items-center justify-center bg-white p-4">
        {/* Image container with pan and zoom */}
        <motion.div
          className="relative h-full w-full cursor-grab overflow-hidden"
          drag={scale > 1}
          dragConstraints={{ left: -1000, right: 1000, top: -1000, bottom: 1000 }}
          dragElastic={0.1}
          dragMomentum={false}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          onClick={(e) => {
            if (isDragging) {
              e.stopPropagation()
            }
          }}
          style={{
            touchAction: "none", // Prevents scrolling on touch devices when dragging
          }}
        >
          <motion.div
            className="relative h-full w-full"
            animate={{ scale }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ x: position.x, y: position.y }}
          >
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt="Dashboard Preview"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 1200px) 90vw, 1200px"
            />
          </motion.div>
        </motion.div>

        {/* Controls */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-white p-2 shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.8)]">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleZoomIn}
            className="h-10 w-10 rounded-full"
            aria-label="Zoom in"
          >
            <ZoomIn className="h-5 w-5 text-[#212529]" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleZoomOut}
            className="h-10 w-10 rounded-full"
            aria-label="Zoom out"
          >
            <ZoomOut className="h-5 w-5 text-[#212529]" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleReset}
            className="h-10 w-10 rounded-full"
            aria-label="Reset view"
          >
            <RotateCcw className="h-5 w-5 text-[#212529]" />
          </Button>
        </div>

        {/* Help text */}
        {scale > 1 && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-2 text-sm text-[#333533] shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.8)]">
            Drag to pan
          </div>
        )}
      </div>
    </Modal>
  )
}

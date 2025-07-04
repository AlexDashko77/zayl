"use client"

import type React from "react"

import { useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  // Handle ESC key press to close modal
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey)
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
            className="fixed left-0 right-0 top-0 bottom-0 m-auto z-50 max-h-[90vh] w-[95vw] sm:w-[90vw] md:w-[85vw] max-w-[1200px] h-fit max-h-[90vh] overflow-hidden rounded-2xl bg-[#ECEFF1] p-1 shadow-[8px_8px_16px_rgba(0,0,0,0.2),-8px_-8px_16px_rgba(255,255,255,0.8)]"
            style={{
              margin: "auto",
              position: "fixed",
              inset: 0,
              display: "flex",
              flexDirection: "column",
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? "modal-title" : undefined}
          >
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 h-10 w-10 rounded-full bg-white shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.8)]"
              aria-label="Close modal"
            >
              <X className="h-5 w-5 text-[#212529]" />
            </Button>

            {/* Title (if provided) */}
            {title && (
              <div className="mb-4 px-6 pt-6">
                <h2 id="modal-title" className="text-2xl font-bold text-[#212529]">
                  {title}
                </h2>
              </div>
            )}

            {/* Content */}
            <div className="h-full w-full overflow-auto">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

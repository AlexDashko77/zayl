"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  // Add spring physics for smoother animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      {/* Main progress bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#F5CB5C] z-50 origin-left" style={{ scaleX }} />

      {/* Subtle glow effect */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#F5CB5C]/30 blur-sm z-40 origin-left"
        style={{ scaleX }}
      />
    </>
  )
}

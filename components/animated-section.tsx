"use client"

import React from "react"

import { motion, useInView, type Variant } from "framer-motion"
import { useRef } from "react"

type AnimationVariant = "fadeIn" | "fadeInUp" | "fadeInLeft" | "fadeInRight" | "zoomIn" | "staggered"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  variant?: AnimationVariant
  delay?: number
  duration?: number
  once?: boolean
  staggerChildren?: number
}

export function AnimatedSection({
  children,
  className,
  variant = "fadeIn",
  delay = 0,
  duration = 0.5,
  once = true,
  staggerChildren = 0.1,
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-10% 0px -10% 0px" })

  const variants = {
    hidden: {
      opacity: 0,
      y: variant === "fadeInUp" ? 20 : 0,
      x: variant === "fadeInLeft" ? -20 : variant === "fadeInRight" ? 20 : 0,
      scale: variant === "zoomIn" ? 0.95 : 1,
    } as Variant,
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: "easeOut",
        staggerChildren: variant === "staggered" ? staggerChildren : 0,
      },
    } as Variant,
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 } as Variant,
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    } as Variant,
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {variant === "staggered"
        ? // If staggered, wrap each child in a motion.div
          React.Children.map(children, (child) => <motion.div variants={childVariants}>{child}</motion.div>)
        : children}
    </motion.div>
  )
}

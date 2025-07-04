"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

interface MobileNavProps {
  links: {
    href: string
    label: string
  }[]
}

export function MobileNav({ links }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="relative z-50 h-10 w-10 rounded-full bg-white shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.8)]"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-5 w-5 text-[#212529]" /> : <Menu className="h-5 w-5 text-[#212529]" />}
      </Button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 z-40 h-full w-4/5 max-w-sm bg-[#ECEFF1] p-6 shadow-[-10px_0px_20px_rgba(0,0,0,0.1)]"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-end">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeMenu}
                  className="h-10 w-10 rounded-full bg-white shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.8)]"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 text-[#212529]" />
                </Button>
              </div>

              <nav className="mt-8 flex flex-col space-y-6">
                {links.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="block rounded-xl bg-white p-4 text-lg font-medium text-[#212529] shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.8)] transition-all hover:shadow-[2px_2px_5px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(255,255,255,0.8)] hover:text-[#F5CB5C]"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto space-y-4">
                <Link
                  href="/login"
                  className="block rounded-xl bg-white p-4 text-center text-lg font-medium text-[#212529] shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.8)] transition-all hover:shadow-[2px_2px_5px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(255,255,255,0.8)] hover:text-[#F5CB5C]"
                  onClick={closeMenu}
                >
                  Log in
                </Link>
                <Button
                  className="w-full rounded-xl bg-[#F5CB5C] text-[#212529] hover:bg-[#F5CB5C]/90 shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.8)] transition-all hover:shadow-[2px_2px_5px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(255,255,255,0.8)]"
                  size="lg"
                  onClick={closeMenu}
                >
                  Sign up
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { motion, AnimatePresence } from "framer-motion"

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex w-full items-center justify-between py-4 text-left font-medium text-[#212529] focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-lg">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ECEFF1] shadow-[2px_2px_5px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(255,255,255,0.8)]"
        >
          <ChevronDown className="h-4 w-4 text-[#212529]" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-[#333533]">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "Is employee data secure?",
      answer:
        "We use enterprise-grade encryption to ensure all monitoring data is securely stored and transmitted. Our platform complies with industry standards for data protection and privacy regulations.",
    },
    {
      question: "Can employees see their own reports?",
      answer:
        "Yes, if enabled by administrators. We believe in transparency, and our platform allows managers to share productivity insights with team members, fostering a culture of accountability and self-improvement.",
    },
    {
      question: "Is setup complicated?",
      answer:
        "No, installation is quick and simple. Our software can be deployed across your organization in minutes, with minimal IT support required. We provide comprehensive documentation and support to ensure a smooth onboarding process.",
    },
    {
      question: "Is it suitable for remote teams?",
      answer:
        "Absolutely, our platform is optimized for distributed workforces. It provides valuable insights into remote work patterns, helps maintain team cohesion, and ensures productivity regardless of physical location.",
    },
  ]

  return (
    <AnimatedSection variant="fadeIn" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-[#212529] mb-12">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto rounded-2xl bg-white p-6 shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)]">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

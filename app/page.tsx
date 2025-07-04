"use client"

import {Nunito} from "next/font/google"
import { Button } from "@/components/ui/button"
import { ChevronRight, Clock, Database, LineChart, Lock, Zap } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ScrollProgress } from "@/components/scroll-progress"
import { MobileNav } from "@/components/mobile-nav"
import { InteractiveDashboard } from "@/components/interactive-dashboard"
import { ClientLogos } from "@/components/client-logos"
import { ProductScreenshots } from "@/components/product-screenshots"
import { WhoItsFor } from "@/components/who-its-for"
import { FAQSection } from "@/components/faq-section"
import { FinalCTA } from "@/components/final-cta"

const nunito = Nunito({ subsets: ["latin"] })

export default function LandingPage() {
  // Reference for the hero section for parallax effect
  const heroRef = useRef(null)

  // Track scroll progress for the hero section parallax
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  // Transform values for parallax effect
  const heroImageY = useTransform(heroScrollProgress, [0, 1], [0, 100])
  const heroTextY = useTransform(heroScrollProgress, [0, 1], [0, -50])

  // Navigation links
  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#screenshots", label: "Screenshots" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
  ]

  return (
    <div className={`${nunito.className} flex min-h-screen flex-col bg-[#ECEFF1]`}>
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      <header className="w-full flex h-16 items-center justify-between px-4 md:px-6 sticky top-0 z-40 backdrop-blur-sm bg-[#ECEFF1]/80">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center rounded-lg bg-[#F5CB5C] p-1">
            <Clock className="h-6 w-6 text-[#212529]" />
          </div>
          <span className="text-xl font-bold text-[#212529]">Activity Monitoring</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#333533] hover:text-[#F5CB5C] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-[#333533] hover:text-[#F5CB5C] transition-colors">
            Log in
          </Link>
          <Button className="rounded-full bg-[#F5CB5C] text-[#212529] hover:bg-[#F5CB5C]/90 shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.8)]">
            Sign up
          </Button>
        </div>

        {/* Mobile Navigation */}
        <MobileNav links={navLinks} />
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="w-full px-4 py-16 md:py-24 md:px-6 overflow-hidden bg-white rounded-none"
        >
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div style={{ y: heroTextY }} className="space-y-4">
              <AnimatedSection variant="fadeInUp" delay={0.2}>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-[#212529]">
                  Monitor and Elevate Productivity
                </h1>
              </AnimatedSection>
              <AnimatedSection variant="fadeInUp" delay={0.4}>
                <p className="max-w-[600px] text-[#FFFFFF] md:text-xl">
                  Capture real-time employee activity with intelligent insights, screen tracking, and productivity
                  analytics.
                </p>
              </AnimatedSection>
              <AnimatedSection variant="fadeInUp" delay={0.6}>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    className="rounded-full bg-[#F5CB5C] text-[#212529] font-bold hover:bg-[#F5CB5C]/90 shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.8)] transition-all hover:shadow-[2px_2px_5px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(255,255,255,0.8)]"
                    size="lg"
                  >
                    Start for Free
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full border-[#333533] text-[#404040] hover:bg-[#333533]/10 shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.8)] transition-all hover:shadow-[2px_2px_5px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(255,255,255,0.8)]"
                    size="lg"
                  >
                    Watch Demo
                  </Button>
                </div>
              </AnimatedSection>
            </motion.div>
            <motion.div
              style={{ y: heroImageY }}
              className="relative w-full aspect-[16/10] sm:aspect-[16/9] transition-all duration-300"
            >
              <InteractiveDashboard src="/images/dashboard.png" alt="Activity Monitoring Dashboard" />
            </motion.div>
          </div>
        </section>

        {/* Client Logos Section */}
        <ClientLogos />

        {/* Key Features Section */}
        <section id="features" className="container mx-auto px-4 py-16 md:py-24 md:px-6">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#212529]">
                Key Features
              </h2>
              <p className="mt-4 text-[#333533] md:text-lg max-w-3xl mx-auto">
                Comprehensive tools designed to optimize productivity and provide valuable insights
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection variant="staggered" staggerChildren={0.1}>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-[#F5CB5C]" />}
                title="Automatic Screen Captures"
                description="Periodic screenshots provide visual context to employee activities throughout the workday."
              />
              <FeatureCard
                icon={<Clock className="h-10 w-10 text-[#F5CB5C]" />}
                title="Real-Time Monitoring"
                description="Track application usage and web activity in real-time across all employee devices."
              />
              <FeatureCard
                icon={<LineChart className="h-10 w-10 text-[#F5CB5C]" />}
                title="Deep Productivity Analytics"
                description="Gain insights into productivity patterns with detailed reports and analytics."
              />
              <FeatureCard
                icon={<Lock className="h-10 w-10 text-[#F5CB5C]" />}
                title="Secure Data Storage & Encryption"
                description="Enterprise-grade security ensures all monitoring data is safely stored and encrypted."
              />
              <FeatureCard
                icon={<Database className="h-10 w-10 text-[#F5CB5C]" />}
                title="Integrations"
                description="Seamlessly integrate with Jira, Slack, Trello, and other productivity tools."
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-[#F5CB5C]" />}
                title="Customizable Alerts"
                description="Set up custom alerts for specific activities or productivity thresholds."
              />
            </div>
          </AnimatedSection>
        </section>

        {/* How It Works Section */}
        <AnimatedSection variant="fadeIn">
          <section
            id="how-it-works"
            className="container mx-auto px-4 py-16 md:py-24 md:px-6 bg-white rounded-3xl shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] mx-4 sm:mx-8 lg:mx-auto"
          >
            <AnimatedSection variant="fadeInUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#212529]">
                  How It Works
                </h2>
                <p className="mt-4 text-[#333533] md:text-lg max-w-3xl mx-auto">
                  Get started with Activity Monitoring in three simple steps
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="staggered" staggerChildren={0.2}>
              <div className="grid gap-8 md:grid-cols-3">
                <StepCard
                  number="01"
                  title="Setup"
                  description="Quick installation and configuration on all employee devices with minimal IT support required."
                />
                <StepCard
                  number="02"
                  title="Monitor"
                  description="Track activity automatically across all devices with customizable monitoring parameters."
                />
                <StepCard
                  number="03"
                  title="Analyze"
                  description="Understand and improve productivity trends with comprehensive analytics and reporting."
                />
              </div>
            </AnimatedSection>
          </section>
        </AnimatedSection>

        {/* Product Screenshots Section */}
        <section id="screenshots">
          <ProductScreenshots />
        </section>

        {/* Who It's For Section */}
        <WhoItsFor />

        {/* Testimonials Section */}
        <section id="testimonials" className="container mx-auto px-4 py-16 md:py-24 md:px-6">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#212529]">
                What Our Clients Say
              </h2>
              <p className="mt-4 text-[#333533] md:text-lg max-w-3xl mx-auto">
                Trusted by companies worldwide to enhance productivity
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection variant="staggered" staggerChildren={0.2}>
            <div className="grid gap-8 md:grid-cols-2">
              <TestimonialCard
                quote="Activity Monitoring transformed our remote team management!"
                author="Sarah, HR Manager"
                company="Tech Solutions Inc."
              />
              <TestimonialCard
                quote="An indispensable tool for modern workforce optimization."
                author="James, CTO"
                company="Global Innovations"
              />
            </div>
          </AnimatedSection>
        </section>

        {/* FAQ Section */}
        <section id="faq">
          <FAQSection />
        </section>

        {/* Final CTA Section */}
        <FinalCTA />
      </main>
      <footer className="border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-8 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="flex items-center justify-center rounded-lg bg-[#F5CB5C] p-1">
                <Clock className="h-5 w-5 text-[#212529]" />
              </div>
              <span className="text-lg font-bold text-[#212529]">Activity Monitoring</span>
            </div>
            <div className="text-center md:text-right text-sm text-[#333533]">
              © 2025 Activity Monitoring. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] transition-all hover:shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)]">
      <div className="mb-4 rounded-full bg-[#ECEFF1] p-3 w-fit">{icon}</div>
      <h3 className="text-xl font-bold text-[#212529] mb-2">{title}</h3>
      <p className="text-[#333533]">{description}</p>
    </div>
  )
}

function StepCard({ number, title, description }) {
  return (
    <div className="rounded-2xl bg-[#ECEFF1] p-6 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]">
      <div className="text-4xl font-bold text-[#F5CB5C] mb-2">{number}</div>
      <h3 className="text-xl font-bold text-[#212529] mb-2">{title}</h3>
      <p className="text-[#333533]">{description}</p>
    </div>
  )
}

function TestimonialCard({ quote, author, company }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] transition-all hover:shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)]">
      <div className="text-[#F5CB5C] text-4xl font-serif mb-4">"</div>
      <p className="text-[#333533] text-lg mb-4">{quote}</p>
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-[#ECEFF1] shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.8)]"></div>
        <div>
          <p className="font-bold text-[#212529]">{author}</p>
          <p className="text-sm text-[#333533]">{company}</p>
        </div>
      </div>
    </div>
  )
}

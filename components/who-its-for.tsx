"use client"

import { Users, LineChart, Briefcase, Monitor } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function WhoItsFor() {
  const userTypes = [
    {
      icon: <Users className="h-10 w-10 text-[#F5CB5C]" />,
      title: "HR Managers",
      description: "Oversee remote teams with ease, track productivity, and identify areas for improvement.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-[#F5CB5C]" />,
      title: "Project Managers",
      description: "Optimize workflows, allocate resources effectively, and ensure project timelines are met.",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-[#F5CB5C]" />,
      title: "Executives",
      description: "Gain insights into workforce efficiency, make data-driven decisions, and improve ROI.",
    },
    {
      icon: <Monitor className="h-10 w-10 text-[#F5CB5C]" />,
      title: "IT Teams",
      description: "Monitor device usage, ensure compliance, and identify potential security concerns.",
    },
  ]

  return (
    <AnimatedSection variant="fadeIn" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-[#212529] mb-12">
          Who Benefits from Activity Monitoring
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {userTypes.map((user, index) => (
            <AnimatedSection key={index} variant="fadeInUp" delay={index * 0.1}>
              <div className="rounded-2xl bg-[#ECEFF1] p-6 shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] transition-all hover:shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] h-full">
                <div className="mb-4 rounded-full bg-white p-3 w-fit">{user.icon}</div>
                <h3 className="text-xl font-bold text-[#212529] mb-2">{user.title}</h3>
                <p className="text-[#333533]">{user.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

"use client"

import { useState } from "react"
import { ArrowRight, Home, Building2, Factory, TreePine, Lightbulb, Zap, Shield, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const ledSolutions = [
  {
    id: 1,
    title: "Residential",
    subtitle: "Home Lighting Solutions",
    description: "Transform your living spaces with our premium residential LED lighting collection. From cozy ambient lighting to functional task lighting.",
    // icon: <Home className="w-8 h-8" />,
    icon: <img src="/home.png" alt="Home" className="w-16 h-16" />,
    features: ["Energy Efficient", "Smart Controls", "Warm & Cool Tones", "Dimmable Options"],
    image: "/images/residential-led.jpg",
    color: "from-blue-500 to-cyan-500",
    link: "/products?category=residential"
  },
  {
    id: 2,
    title: "Commercial",
    subtitle: "Business Lighting Systems",
    description: "Professional LED solutions for offices, retail spaces, and commercial buildings. Enhance productivity and create impressive environments.",
    icon: <img src="/skyline.png" alt="Home" className="w-16 h-16" />,
    features: ["High Performance", "Long Lifespan", "Professional Design", "Cost Effective"],
    image: "/images/commercial-led.jpg",
    color: "from-emerald-500 to-teal-500",
    link: "/products?category=commercial"
  },
  {
    id: 3,
    title: "Industrial",
    subtitle: "Heavy-Duty LED Systems",
    description: "Robust and reliable LED lighting solutions designed for industrial environments, warehouses, and manufacturing facilities.",
    icon: <img src="/factory.png" alt="Home" className="w-16 h-16" />,
    features: ["Durable Construction", "High Brightness", "Weather Resistant", "Low Maintenance"],
    image: "/images/industrial-led.jpg",
    color: "from-orange-500 to-red-500",
    link: "/products?category=industrial"
  },
  {
    id: 4,
    title: "Landscape",
    subtitle: "Outdoor & Garden Lighting",
    description: "Beautiful outdoor LED lighting solutions for gardens, pathways, architectural features, and landscape enhancement.",
    icon: <img src="/tree.png" alt="Home" className="w-16 h-16" />,
    features: ["Weather Proof", "Solar Options", "Accent Lighting", "Security Features"],
    image: "/images/landscape-led.jpg",
    color: "from-green-500 to-emerald-500",
    link: "/products?category=landscape"
  }
]

export default function LEDSolutionsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6">
            <Lightbulb className="w-8 h-8 text-white" />
          </div> */}
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Complete LED Solutions
          </h2>
          <p className="text-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of LED lighting solutions designed for every space and application.
            From residential comfort to industrial performance.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ledSolutions.map((solution) => (
            <div
              key={solution.id}
              className="group relative"
              onMouseEnter={() => setHoveredCard(solution.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2 hover:scale-[1.02]">

                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative p-6 h-full flex-col flex justify-center items-center">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-24 h-20 bg-gradient-to-r ${solution.color} rounded-xl mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {solution.icon}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-xs font-medium text-gray-500 mb-3">
                    {solution.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow text-center">
                    {solution.description}
                  </p>

                  {/* Features */}
                  {/* <div className="space-y-2 mb-6">
                    {solution.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-md text-gray-600">
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${solution.color} rounded-full mr-2`} />
                        {feature}
                      </div>
                    ))}
                  </div> */}

                  {/* CTA Button */}
                  {/* <Link href={solution.link}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-gray-900 text-white group-hover:border-gray-900 transition-all duration-300"
                    >
                      Explore Solutions
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link> */}
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${solution.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
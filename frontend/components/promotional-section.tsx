"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

export default function PromotionalSection() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      setScrollY(scrolled)
      
      if (parallaxRef.current && sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop
        const sectionHeight = sectionRef.current.offsetHeight
        const windowHeight = window.innerHeight
        
        // Calculate how much of the section is visible
        const sectionScroll = scrolled - sectionTop + windowHeight
        const sectionProgress = Math.max(0, Math.min(1, sectionScroll / (sectionHeight + windowHeight)))
        
        // Apply parallax effect only when section is in view
        if (sectionScroll > 0 && sectionScroll < sectionHeight + windowHeight) {
          const parallaxOffset = sectionProgress * 100 // Move up to 100px
          parallaxRef.current.style.transform = `translateY(${parallaxOffset}px)`
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Call once to set initial position
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background image with parallax effect */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-100 ease-out"
        style={{
          backgroundImage: "url('/modern-living-room-with-gray-sofa-mint-pillow-whit.png')",
          willChange: 'transform',
        }}
      />

  
    </section>
  )
}

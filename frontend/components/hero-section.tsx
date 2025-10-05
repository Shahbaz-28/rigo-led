"use client"

import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const heroSlides = [
    {
      id: 1,
      image: "/herobg3.jpg",
      title: "ILLUMINATE",
      subtitle: "YOUR SPACE",
      highlight: "WITH STYLE",
      description: "Transform any space into a masterpiece with our exclusive collection of luxury lighting designs.",
    },
  {
    id: 2,
    image:
    "https://images.unsplash.com/photo-1572786258684-9b3d5671e7d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "ILLUMINATE",
    subtitle: "YOUR DREAMS",
    highlight: "WITH STYLE",
    description: "Experience the perfect blend of modern design and cutting-edge technology in every lighting fixture.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1662059361834-d361807d63e7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "QUALITY",
    subtitle: "ISN'T EXPENSIVE",
    highlight: "IT'S PRICELESS",
    description:
      "Discover premium lighting solutions that transform your space with unmatched elegance.",
      
  },
 
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Auto slide change (always loop)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Manual navigation (dots/buttons)
  const handleSlideChange = (newSlide: number) => {
    if (newSlide === currentSlide || isTransitioning) return

    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide(newSlide)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 100)
    }, 300)
  }

  const currentSlideData = heroSlides[currentSlide]

  return (
    <section className="relative h-[50vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-screen flex items-center overflow-hidden">
      {/* Background Images with Parallax Effect */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          style={{
            backgroundImage: `url("${slide.image}")`,
          }}
        />
      ))}

      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Animated Vignette Effect */}
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />

      {/* Main Content - Centered on small, Left Aligned on larger screens */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="max-w-4xl text-center sm:text-left">
          {/* Content with Staggered Fade Animation */}
          <div
            className={`transition-all duration-700 ease-out ${
              isTransitioning ? "opacity-0 translate-x-8 blur-sm" : "opacity-100 translate-x-0 blur-0"
            }`}
          >
  

            {/* Main Heading with Text Shadow */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              <span
                className={`block mb-2 transition-all duration-700 delay-150 ${
                  isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                }`}
                style={{ textShadow: "2px 2px 20px rgba(0,0,0,0.8)" }}
              >
                {currentSlideData.title}
              </span>

              <span
                className={`block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300 transition-all duration-700 delay-200 ${
                  isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                }`}
              >
                {currentSlideData.subtitle}
              </span>

              <span
                className={`block bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-transparent bg-clip-text transition-all duration-700 delay-250 ${
                  isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                }`}
                style={{
                  filter: "drop-shadow(0 0 30px rgba(251, 191, 36, 0.5))",
                }}
              >
                {currentSlideData.highlight}
              </span>
            </h1>

            {/* Description with Fade In */}
            <p
              className={`text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 sm:mb-6 md:mb-10 max-w-2xl leading-tight sm:leading-relaxed font-light transition-all duration-700 delay-300 ${
                isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
              style={{ textShadow: "1px 1px 10px rgba(0,0,0,0.8)" }}
            >
              {currentSlideData.description}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation - Centered Layout */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center space-y-6">
        {/* Scroll Indicator - Hidden on small screens */}
        <div className="hidden sm:flex flex-col items-center text-white/60 animate-bounce">
          <span className="text-xs sm:text-sm mb-2 font-light tracking-wider">SCROLL</span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-0.5 sm:w-1 h-2 sm:h-3 bg-white/50 rounded-full mt-1.5 sm:mt-2"></div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center space-x-2 sm:space-x-3 bg-black/30 backdrop-blur-md px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-white/10 mt-4 sm:mt-0">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`transition-all duration-500 rounded-full ${
                index === currentSlide
                  ? "w-8 h-2 sm:w-12 sm:h-3 bg-gradient-to-r from-amber-400 to-amber-600 shadow-lg shadow-amber-500/50"
                  : "w-2 h-2 sm:w-3 sm:h-3 bg-white/40 hover:bg-white/60 hover:scale-110"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1662059361834-d361807d63e7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "QUALITY",
    subtitle: "ISN'T EXPENSIVE",
    highlight: "IT'S PRICELESS",
    description: "Discover premium lighting solutions that transform your space with unmatched elegance and sophistication."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=858&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "ILLUMINATE",
    subtitle: "YOUR DREAMS",
    highlight: "WITH STYLE",
    description: "Experience the perfect blend of modern design and cutting-edge technology in every lighting fixture."
  },
  {
    id: 3,
    image: "/herobg3.jpg",
    title: "PREMIUM",
    subtitle: "LIGHTING",
    highlight: "SOLUTIONS",
    description: "Transform any space into a masterpiece with our exclusive collection of luxury lighting designs."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "CRAFTED",
    subtitle: "FOR PERFECTION",
    highlight: "BUILT TO LAST",
    description: "Every piece is meticulously designed and crafted to deliver exceptional quality and lasting beauty."
  }
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Auto slide change (always loop)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 3000) 

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
    <section className="relative h-screen flex items-center overflow-hidden" style={{ height: 'calc(100dvh - 5rem)' }}>
      {/* Background Images with Fade Transition */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-70' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url("${slide.image}")`,
            transform: 'scale(1.05)'
          }}
        />
      ))}

      {/* Gradient Overlays for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl">
          {/* Content with Fade Animation */}
          <div className={`transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
            }`}>


            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block">{currentSlideData.title}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                {currentSlideData.subtitle}
              </span>
              <span className="block ">
                {currentSlideData.highlight}
              </span>
            </h1>

            {/* Description */}
            {/* <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl leading-relaxed font-light">
              {currentSlideData.description}
            </p> */}

            {/* CTA Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-gray-900 font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
              >
                Explore Collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`transition-all duration-300 rounded-full ${index === currentSlide
                  ? 'w-12 h-3 bg-gradient-to-r from-gray-300 to-gray-100 shadow-lg'
                  : 'w-3 h-3 bg-white/40 hover:bg-white/60'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        {/* <div className="flex flex-col items-center text-white/70 mt-6">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div> */}
      </div>

      {/* Progress Bar */}
      {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-20">
        <div 
          className="h-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-300 ease-out"
          style={{ 
            width: `${((currentSlide + 1) / heroSlides.length) * 100}%` 
          }}
        />
      </div> */}
    </section>
  )
}

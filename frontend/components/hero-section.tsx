"use client"
import { ChevronLeft, ChevronRight, ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-zoom-in"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1662059361834-d361807d63e7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      />
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      
      {/* Additional overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

      {/* Navigation Arrows */}
      <button className="absolute left-4 sm:left-8 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 border border-white/20">
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button className="absolute right-4 sm:right-8 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 border border-white/20">
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
   
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="block">QUALITY</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">ISN'T EXPENSIVE</span>
            <span className="block">IT'S PRICELESS</span>
          </h1>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center text-white/70">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes zoomIn {
          from {
            transform: scale(1.3);
            opacity: 0.6;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .animate-zoom-in {
          animation: zoomIn 2.5s ease-out forwards;
        }
      `}</style>
    </section>
  )
}

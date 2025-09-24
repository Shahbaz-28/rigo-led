"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

export default function PromotionalSection() {


  return (
    <section className="relative h-[400px] lg:h-[500px] overflow-hidden">
      {/* Fixed background image */}
      <div
        className="absolute inset-0 w-full min-h-[100vh] "
        style={{
          // backgroundImage: "url('/modern-living-room-with-gray-sofa-mint-pillow-whit.png')",
          backgroundImage: "url('/view-house-lamp-with-futuristic-design_23-2151037467.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark overlay for better text readability */}
      {/* <div className="absolute inset-0" /> */}

      {/* Content overlay */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 ">
        <div className="text-center max-w-4xl">
          <h1 className="text-white text-2xl sm:text-4xl lg:text-6xl font-bold drop-shadow-2xl mb-6 leading-tight" style={{
            textShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          }}
          >
            Transform Your Space with Premium Lighting
          </h1>
          <p className="text-white/90 text-sm sm:text-xl lg:text-2xl mb-8 drop-shadow-lg font-light max-w-2xl mx-auto" style={{
            textShadow: "0 0 10px rgba(0, 0, 0, .5)",
          }}
          >
            Discover our exclusive collection of modern lighting solutions designed to elevate your home
          </p>
          <Link href="/products" className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Explore Collection
          </Link>
        </div>
      </div>
    </section>
  )
}

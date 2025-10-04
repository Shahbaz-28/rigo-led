"use client"

import { Shield, Star, Zap, Palette, Award, Users } from "lucide-react"

const features = [
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Premium Quality",
    description: "Crafted with finest materials and rigorous quality standards for lasting excellence.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Star className="w-7 h-7" />,
    title: "Expert Consultation",
    description: "Professional guidance to choose the perfect lighting solution for your space.",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Energy Efficient",
    description: "Advanced LED technology that saves electricity and protects the environment.",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: <Palette className="w-7 h-7" />,
    title: "Design Variety",
    description: "From modern minimalist to vintage elegance, styles to match every taste.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: "Trusted Brand",
    description: "Years of experience in lighting design and manufacturing excellence.",
    gradient: "from-red-500 to-rose-500"
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Customer Focused",
    description: "Dedicated to providing personalized lighting solutions and exceptional service.",
    gradient: "from-indigo-500 to-blue-500"
  }
]

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #000 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #000 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Header */}
        <div className="text-center mb-20">
          {/* <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white text-sm font-semibold rounded-full shadow-lg">
              Why Choose Us
            </span>
          </div> */}

          <h2 className="text-3xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
            Why Choose <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">RIGO</span>
          </h2>

          <p className="text-md text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Premium lighting solutions that combine innovative design, superior quality,
            and exceptional service to illuminate your world with unmatched brilliance.
          </p>

          {/* Decorative Line */}
          {/* <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full"></div>
          </div> */}
        </div>

        {/* Premium Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Container */}
              <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden border border-gray-200/50 hover:border-gray-300/50 transform hover:-translate-y-3 hover:scale-[1.02]">

                {/* Gradient Background Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />

                {/* Content */}
                <div className="relative p-8 lg:p-10 text-center h-full flex flex-col">

                  {/* Icon Container */}
                  <div className="relative mb-8">
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3`}>
                      <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                    </div>

                    {/* Icon Glow Effect */}
                    <div className={`absolute inset-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 mx-auto`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300 leading-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-base flex-grow group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="mt-8 pt-6 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
                    <div className={`w-12 h-1 bg-gradient-to-r ${feature.gradient} rounded-full mx-auto transform scale-0 group-hover:scale-100 transition-transform duration-500`} />
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                  style={{ padding: '2px' }}>
                  <div className="w-full h-full bg-white rounded-3xl" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl py-12 px-5 lg:p-16 shadow-2xl border border-gray-700/20 relative overflow-hidden">

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)`,
                backgroundSize: '20px 20px'
              }} />
            </div>

            <div className="relative">
              <h3 className="text-2xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Transform Your Space?
              </h3>
              <p className="text-md text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Experience the perfect blend of style, quality, and innovation with RIGO's premium lighting solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* <a
                  href="https://wa.me/your-number"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-8 py-4 text-white bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl font-bold hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
                >
                  <span>Get Expert Consultation</span>
                  <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a> */}
                <a
                  href="https://wa.me/918369051700?text=Hi!%20I'd%20like%20to%20get%20expert%20consultation%20about%20RIGO%20Lighting%20products%20and%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-5 py-4 text-gray-900 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl font-bold hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm"
                >
                  <span>Get Expert Consultation</span>
                  <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>

                {/* <button className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white rounded-2xl font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-lg backdrop-blur-sm">
                  View Our Portfolio
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Shield, Star, Zap, Palette, Award, Users } from "lucide-react"

const features = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Premium Quality",
    description: "Crafted with finest materials and rigorous quality standards."
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Expert Consultation",
    description: "Professional guidance to choose the perfect lighting solution."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Energy Efficient",
    description: "LED technology saves electricity and is eco-friendly."
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Design Variety",
    description: "Modern to vintage styles to match your taste and space."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Trusted Brand",
    description: "Years of experience in lighting design and manufacturing."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Customer Focused",
    description: "Dedicated to providing personalized lighting solutions."
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-black">RIGO</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Premium lighting solutions that combine style, quality, and innovation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-8 rounded-xl hover:bg-white transition-all duration-300 bg-white shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full text-amber-600 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-black mb-2">500+</div>
            <div className="text-gray-600 font-medium">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-black mb-2">100+</div>
            <div className="text-gray-600 font-medium">Designs Available</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-black mb-2">10+</div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-black mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Support Available</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-black rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Get in touch with us to discuss your lighting needs and get expert advice.
            </p>
            <a 
              href="https://wa.me/your-number" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-amber-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition-colors text-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Award, Users, Lightbulb, Shield, Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"

import type { ReactElement, JSX } from "react";
import Link from "next/link"

interface Value {
  icon: ReactElement;
  title: string;
  description: string;
  gradient: string;
}

interface Stat {
  number: string;
  label: string;
}

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

interface ContactInfo {
  icon: ReactElement;
  title: string;
  detail: string;
}

export default function AboutPage(): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const values: Value[] = [
    {
      icon: <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Innovation",
      description: "Constantly pushing the boundaries of lighting technology to deliver cutting-edge solutions.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Quality Excellence",
      description: "Uncompromising commitment to premium materials and superior craftsmanship in every product.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Customer Focus",
      description: "Building lasting relationships through exceptional service and tailored lighting solutions.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Reliability",
      description: "Trusted by professionals worldwide for consistent performance and long-lasting durability.",
      gradient: "from-orange-500 to-red-500"
    }
  ]

  const stats: Stat[] = [
    { number: "15+", label: "Years of Excellence" },
    { number: "10,000+", label: "Projects Completed" },
    { number: "500+", label: "Product Variants" },
    { number: "50+", label: "Countries Served" }
  ]

  const team: TeamMember[] = [
    {
      name: "Engineering Team",
      role: "Product Development",
      description: "Our skilled engineers design innovative lighting solutions that meet the highest industry standards.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Quality Assurance",
      role: "Testing & Validation",
      description: "Rigorous testing ensures every product meets our exceptional quality and performance standards.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Customer Support",
      role: "Service Excellence",
      description: "Dedicated support team providing expert guidance and technical assistance worldwide.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  const contactInfo: ContactInfo[] = [
    {
      icon: <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />,
      title: "Call Us",
      detail: "+91 12345-67890"
    },
    {
      icon: <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />,
      title: "Email Us",
      detail: "info@rigolighting.com"
    },
    {
      icon: <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />,
      title: "Visit Us",
      detail: "123 Lighting District, City"
    }
  ]

  return (
    <div className="relative overflow-hidden" >
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden min-h-screen flex justify-center items-center" style={{ height: 'calc(100dvh - 5rem)' }}>
        <div className="absolute inset-0 z-0">
          <img
            src="/beautiful-light-lamp_1339-3596.jpg"
            alt="LED lighting showcase"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 py-32 lg:py-40 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{
              textShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            }}
            >
              Where Vision Meets Illumination
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Crafting Light,
                  <span className="block text-gray-600">Creating Experiences</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                  RIGO Lighting has been at the forefront of the lighting industry for over a decade,
                  specializing in premium LED solutions that combine cutting-edge technology with
                  sophisticated design.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Our commitment to excellence drives us to continuously innovate, ensuring that
                  every product we create not only meets but exceeds the expectations of architects,
                  designers, and lighting professionals worldwide.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="RIGO Lighting Facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat: Stat, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              These principles guide everything we do, from product development to customer service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {values.map((value: Value, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden border border-gray-200/50 hover:border-gray-300/50 transform hover:-translate-y-2 p-6 sm:p-8">
                  {/* Gradient Background Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${value.gradient} text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      {value.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-gray-700 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="RIGO Lighting History"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8 order-1 lg:order-2"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Our Journey
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  <div className="border-l-4 border-gray-300 pl-4 sm:pl-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">2009 - Foundation</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      RIGO Lighting was founded with a vision to revolutionize the lighting industry
                      through innovative LED technology and superior design.
                    </p>
                  </div>
                  <div className="border-l-4 border-gray-300 pl-4 sm:pl-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">2015 - Global Expansion</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Expanded operations internationally, establishing partnerships with distributors
                      across multiple continents.
                    </p>
                  </div>
                  <div className="border-l-4 border-gray-300 pl-4 sm:pl-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">2020 - Innovation Hub</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Launched our state-of-the-art R&D facility, focusing on smart lighting solutions
                      and sustainable technologies.
                    </p>
                  </div>
                  <div className="border-l-4 border-amber-400 pl-4 sm:pl-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">2024 - Future Forward</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Continuing to lead the industry with next-generation lighting solutions and
                      expanding our premium product portfolio.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Expert Teams
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Dedicated professionals working together to deliver exceptional lighting solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {team.map((member: TeamMember, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2 min-h-[500px]">
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-amber-600 font-semibold mb-3 text-sm sm:text-base">
                      {member.role}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white mx-4 sm:mx-6 lg:mx-8 rounded-3xl">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Illuminate Your Project?
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
              Let's discuss how RIGO Lighting can transform your space with our premium lighting solutions
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {contactInfo.map((contact: ContactInfo, index: number) => (
                <div key={index} className="flex flex-col items-center space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-400 rounded-xl sm:rounded-2xl flex items-center justify-center">
                    {contact.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{contact.title}</h3>
                    <p className="text-sm sm:text-base text-gray-300">{contact.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link href="/contact" className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-amber-400 text-gray-900 font-semibold rounded-xl hover:bg-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span>Get In Touch</span>
                <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-0.5 transition-transform duration-300" />
              </Link>

              <Link href="/products" className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/20 transition-all duration-300 transform hover:scale-105">
                <span>View Products</span>
                <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-0.5 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
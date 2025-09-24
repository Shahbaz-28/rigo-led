"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle, AlertCircle, Users } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
      description: "Call us for immediate assistance",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@rigolighting.com", "sales@rigolighting.com"],
      description: "Send us your inquiries anytime",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["123 Lighting District", "Innovation City, IC 12345"],
      description: "Visit our showroom and office",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      description: "We're here to help during these hours",
      gradient: "from-orange-500 to-red-500"
    }
  ]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData)

      setSubmitStatus('success')
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsAppContact = () => {
    const message = "Hi! I'd like to inquire about RIGO Lighting products and services."
    const whatsappUrl = `https://wa.me/15551234567?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden  flex justify-center items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/business-meeting-room-high-rise-office-building-with-colorful-decor-furnture_105762-1678.jpg"
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
              Get In Touch
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Multiple ways to reach us. Choose the method that works best for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden border border-gray-200/50 hover:border-gray-300/50 transform hover:-translate-y-2 p-8">
                  {/* Gradient Background Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />

                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${info.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      {info.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                      {info.title}
                    </h3>

                    <div className="space-y-1 mb-4">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-900 font-medium">
                          {detail}
                        </p>
                      ))}
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {info.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Quick Contact */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 h-full">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 ${errors.name ? 'border-red-500' : 'border-gray-300 focus:border-amber-500'
                        }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 ${errors.email ? 'border-red-500' : 'border-gray-300 focus:border-amber-500'
                        }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 ${errors.subject ? 'border-red-500' : 'border-gray-300 focus:border-amber-500'
                        }`}
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 resize-none ${errors.message ? 'border-red-500' : 'border-gray-300 focus:border-amber-500'
                        }`}
                      placeholder="Tell us about your lighting needs..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gray-900 text-white font-semibold py-4 px-6 rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </div>
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="flex items-center p-4 bg-green-50 border border-green-200 rounded-xl text-green-800">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Message sent successfully! We'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-xl text-red-800">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      Failed to send message. Please try again or contact us directly.
                    </div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Quick Contact & Additional Options */}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8 h-full"

            >{/* WhatsApp Quick Contact */}
              <div className="bg-white rounded-3xl shadow-xl p-8 h-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Need Immediate Help?
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Get instant support through WhatsApp. Our team is ready to assist you with
                  product inquiries, technical support, and project consultations.
                </p>

                <button
                  onClick={handleWhatsAppContact}
                  className="group w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center justify-center">
                    <FaWhatsapp className="w-6 h-6 mr-3" />
                    <span>Chat on WhatsApp</span>
                    <MessageCircle className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </div>

              {/* Additional Contact Options */}
              <div className="bg-white rounded-3xl shadow-xl p-8 h-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Other Ways to Reach Us
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-gray-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">Emergency Support</p>
                      <p className="text-sm text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-gray-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">Technical Support</p>
                      <p className="text-sm text-gray-600">support@rigolighting.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Map Section */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-full">
              <div className="p-8">
                <h3 className="text-2xl text-center font-bold text-gray-900 mb-4">
                  Visit Our Showroom
                </h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Experience our lighting solutions in person. Our showroom features
                  the latest products and interactive displays.
                </p>
              </div>

              {/* Map Container */}
              <div className="h-[500px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.621465758763!2d-74.00594938459418!3d40.71274997932851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1233c4bbbd%3A0x4c1e1b6f4e1e7b0!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1621234567890!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-b-3xl"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ or Additional Info Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We're Here to Help
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Whether you're planning a new project, need technical support, or want to learn
              more about our products, our team of lighting experts is ready to assist you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-gray-100" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Response</h3>
                <p className="text-gray-600">We respond to all inquiries within 24 hours</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-gray-100" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600">Certified lighting professionals at your service</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-gray-100" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Guaranteed Support</h3>
                <p className="text-gray-600">Ongoing support for all our products and services</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

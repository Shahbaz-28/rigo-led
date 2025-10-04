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
      details: ["jailaxmilightingsolutions@gmail.com", "customercarerigo1@gmail.com"],
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
    const whatsappUrl = `https://wa.me/918369051700?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Contact Information Cards */}
      <section className="py-6 sm:py-8 md:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Contact Information
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Multiple ways to reach us. Choose the method that works best for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Quick Contact */}
      <section className="py-4 sm:py-6 md:py-8 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6 items-stretch">
            {/* Quick Contact & Additional Options - Show first on mobile */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6 h-full order-1 lg:order-2"
            >
              {/* WhatsApp Quick Contact */}
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 h-auto">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Need Immediate Help?
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  Get instant support through WhatsApp. Our team is ready to assist you with
                  product inquiries, technical support, and project consultations.
                </p>

                <button
                  onClick={handleWhatsAppContact}
                  className="group w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  <div className="flex items-center justify-center cursor-pointer">
                    <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                    <span>Chat on WhatsApp</span>
                  </div>
                </button>
              </div>

              {/* Additional Contact Options */}
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 h-auto">
                 <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                   Other Ways to Reach Us
                 </h3>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors duration-300">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mr-2 sm:mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">Contact</p>
                      <p className="text-xs sm:text-sm text-gray-600">+918369051700</p>
                    </div>
                  </div>

                   <div className="flex items-center p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors duration-300">
                     <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mr-2 sm:mr-3" />
                     <div>
                       <p className="font-semibold text-gray-900 text-sm sm:text-base">Email</p>
                       <p className="text-xs sm:text-sm text-gray-600">
                         <a href="mailto:jailaxmilightingsolutions@gmail.com" className="hover:text-gray-900 underline">
                           jailaxmilightingsolutions@gmail.com
                         </a>
                       </p>
                     </div>
                   </div>

                   <div className="flex items-center p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors duration-300">
                     <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mr-2 sm:mr-3" />
                     <div>
                       <p className="font-semibold text-gray-900 text-sm sm:text-base">Customer Care Mail</p>
                       <p className="text-xs sm:text-sm text-gray-600">
                         <a href="mailto:customercarerigo1@gmail.com" className="hover:text-gray-900 underline">
                           customercarerigo1@gmail.com
                         </a>
                       </p>
                     </div>
                   </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form - Show second on mobile */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-full order-2 lg:order-1"
            >
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 h-full">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Send Us a Message
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 text-sm sm:text-base ${errors.name ? 'border-red-500' : 'border-gray-300 focus:border-amber-500'
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
                    <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 text-sm sm:text-base ${errors.email ? 'border-red-500' : 'border-gray-300 focus:border-amber-500'
                        }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs sm:text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 text-sm sm:text-base ${errors.subject ? 'border-red-500' : 'border-gray-300 focus:border-amber-500'
                        }`}
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs sm:text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 resize-none text-sm sm:text-base ${errors.message ? 'border-red-500' : 'border-gray-300 focus:border-amber-500'
                        }`}
                      placeholder="Tell us about your lighting needs..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs sm:text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gray-900 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base"
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


          </div>
        </div>
      </section>
      {/* FAQ or Additional Info Section */}
      <section className="py-8 sm:py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              We're Here to Help
            </h2>
             <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8">
              Whether you're planning a new project, need technical support, or want to learn
              more about our products, our team of lighting experts is ready to assist you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-900 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-gray-100" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Quick Response</h3>
                <p className="text-sm sm:text-base text-gray-600">We respond to all inquiries within 24 hours</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-900 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-gray-100" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-sm sm:text-base text-gray-600">Certified lighting professionals at your service</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-900 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-gray-100" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Guaranteed Support</h3>
                <p className="text-sm sm:text-base text-gray-600">Ongoing support for all our products and services</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

"use client"

import { Menu, X } from "lucide-react"
import { FaWhatsapp, FaInstagram } from "react-icons/fa"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header className={`${isScrolled ? 'fixed top-0 left-0 right-0 z-50 shadow-md' : ''} bg-white border-b border-gray-100 transition-all duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img 
                src="/images/logo.png" 
                alt="LAMPITA Logo" 
                className="h-8 sm:h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
              HOME
            </Link>
            <Link href="/products" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
              All Products
            </Link>
            <a href="#about" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
              About Us
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop Icons - WhatsApp and Instagram only */}
          <div className="hidden sm:flex items-center space-x-4">
            <a 
              href="https://wa.me/your-number" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 transition-colors"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com/your-handle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700 transition-colors"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Slides from right */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header with close button */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 px-6 py-4 space-y-4">
            <Link 
              href="/" 
              className="block py-3 text-base font-medium text-gray-900 hover:text-gray-600 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link 
              href="/products" 
              className="block py-3 text-base font-medium text-gray-900 hover:text-gray-600 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              All Products
            </Link>
            <a 
              href="#about" 
              className="block py-3 text-base font-medium text-gray-900 hover:text-gray-600 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#contact" 
              className="block py-3 text-base font-medium text-gray-900 hover:text-gray-600 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="p-6 border-t border-gray-200">
            <div className="flex items-center space-x-4">
              <a 
                href="https://wa.me/your-number" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 transition-colors"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a 
                href="https://instagram.com/your-handle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700 transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  )
}

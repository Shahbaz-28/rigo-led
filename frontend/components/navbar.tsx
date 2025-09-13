"use client"

import { Menu, X, ChevronDown } from "lucide-react"
import { FaWhatsapp, FaInstagram } from "react-icons/fa"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isProductsDropdownOpen) {
        const target = event.target as Element
        if (!target.closest('[data-dropdown]')) {
          setIsProductsDropdownOpen(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isProductsDropdownOpen])

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
              <Image 
                src="/images/logo.png" 
                alt="RIGO Logo" 
                width={120}
                height={50}
                className="h-10 sm:h-12 lg:h-14 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
              HOME
            </Link>
            
            {/* Products Dropdown */}
            <div className="relative" data-dropdown>
              <button
                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                className="flex items-center text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
              >
                All Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {/* Dropdown Menu */}
              {isProductsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <div className="py-2">
                    <Link
                      href="/products?tab=indoor"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setIsProductsDropdownOpen(false)}
                    >
                      Indoor Products
                    </Link>
                    <Link
                      href="/products?tab=outdoor"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setIsProductsDropdownOpen(false)}
                    >
                      Outdoor Products
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
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
            
            {/* Products Section */}
            <div className="border-b border-gray-100">
              <div className="py-3 text-base font-medium text-gray-900">
                All Products
              </div>
              <div className="pl-4 space-y-2">
                <Link 
                  href="/products?tab=indoor" 
                  className="block py-2 text-sm text-gray-700 hover:text-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Indoor Products
                </Link>
                <Link 
                  href="/products?tab=outdoor" 
                  className="block py-2 text-sm text-gray-700 hover:text-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Outdoor Products
                </Link>
              </div>
            </div>
            
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

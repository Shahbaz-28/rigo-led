"use client"

import { Menu, X, ChevronDown } from "lucide-react"
import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false)

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY
    setIsScrolled(scrollY > 10)
  }, [])

  useEffect(() => {
    let ticking = false

    const optimizedScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", optimizedScrollHandler, { passive: true })
    return () => window.removeEventListener("scroll", optimizedScrollHandler)
  }, [handleScroll])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isProductsDropdownOpen) {
        const target = event.target as Element
        if (!target.closest("[data-dropdown]")) {
          setIsProductsDropdownOpen(false)
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside, { passive: true })
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isProductsDropdownOpen])

  // Prevent body scroll when menu is open and add overflow-x-hidden
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.overflowX = "hidden"
    } else {
      document.body.style.overflow = "unset"
      document.body.style.overflowX = "hidden" // Keep x-overflow hidden always
    }

    return () => {
      document.body.style.overflow = "unset"
      document.body.style.overflowX = "hidden" // Keep x-overflow hidden always
    }
  }, [isMenuOpen])

  // Close mobile menu when clicking on links
  const handleLinkClick = () => {
    setIsMenuOpen(false)
    setIsProductsDropdownOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] bg-background border-b border-border ${isScrolled ? "shadow-sm" : "shadow-none"} min-h-[80px] flex justify-center items-center`}
    >
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 transform transition-transform duration-200 hover:scale-105">
            <Link href="/" onClick={handleLinkClick}>
              <Image
                src="/images/logo.png"
                alt="RIGO Logo"
                width={140}
                height={56}
                className="h-10 sm:h-12 lg:h-16 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              href="/"
              className="relative text-base font-bold text-foreground hover:text-muted-foreground transition-colors duration-200 group"
              onClick={handleLinkClick}
            >
              HOME
              {/* <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span> */}
            </Link>

            {/* Products Dropdown */}
            <div className="relative" data-dropdown>
              <button
                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                className="flex items-center text-base font-bold text-foreground hover:text-muted-foreground transition-colors duration-200 group"
              >
                All Products
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${isProductsDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-48 bg-card/95 backdrop-blur-md rounded-xl shadow-xl border border-border z-[10000] transition-all duration-300 origin-top ${isProductsDropdownOpen
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  }`}
              >
                <div className="py-2">
                  <Link
                    href="/products?tab=indoor"
                    className="block px-4 py-3 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors duration-150 rounded-lg mx-2"
                    onClick={handleLinkClick}
                  >
                    Indoor Products
                  </Link>
                  <Link
                    href="/products?tab=outdoor"
                    className="block px-4 py-3 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors duration-150 rounded-lg mx-2"
                    onClick={handleLinkClick}
                  >
                    Outdoor Products
                  </Link>
                </div>
              </div>
            </div>

            <a
              href="/about"
              className="relative text-base font-bold text-foreground hover:text-muted-foreground transition-colors duration-200"
              onClick={handleLinkClick}
            >
              About Us
            </a>
            <a
              href="/contact"
              className="relative text-base font-bold text-foreground hover:text-muted-foreground transition-colors duration-200"
              onClick={handleLinkClick}
            >
              Contact
            </a>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center">
            <a
              href="https://u.wechat.com/kP_PkMqInEFhHvN6A0ipJ-A?s=4"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-foreground hover:text-foreground hover:bg-muted rounded-full transition-all duration-200 transform"
            >
              <Image 
                src="/images/wechat.png" 
                alt="WeChat" s
                width={32} 
                height={32} 
                className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
              />
            </a>
            <a
              href="https://instagram.com/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-foreground hover:text-foreground hover:bg-muted rounded-full transition-all duration-200 transform"
            >
              <Image 
                src="/images/instagram.png" 
                alt="Instagram" 
                width={32} 
                height={32} 
                className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200 z-[10001]"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 w-full h-full bg-background shadow-2xl transform transition-transform duration-300 ease-out z-[999999] ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full min-h-screen bg-background">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border flex-shrink-0">
            <h2 className="text-lg font-semibold text-foreground">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
            <Link
              href="/"
              className="block py-3 px-4 text-base font-medium text-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>

            {/* Products Section */}
            <div className="border border-border rounded-lg overflow-hidden">
              <div className="py-3 px-4 text-lg font-bold text-foreground bg-muted">All Products</div>
              <div className="bg-background">
                <Link
                  href="/products?tab=indoor"
                  className="block py-3 px-6 text-base font-bold text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Indoor Products
                </Link>
                <Link
                  href="/products?tab=outdoor"
                  className="block py-3 px-6 text-base font-bold text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Outdoor Products
                </Link>
              </div>
            </div>

            <a
              href="/about"
              className="block py-3 px-4 text-lg font-bold text-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="/contact"
              className="block py-3 px-4 text-lg font-bold text-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="p-4 border-t border-border flex-shrink-0 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center justify-center mb-4">
              <Link href="/" onClick={handleLinkClick}>
                <Image
                  src="/images/logo.png"
                  alt="RIGO Logo"
                  width={140}
                  height={56}
                  className="h-10 sm:h-12 lg:h-16 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Icons */}
            <div className="flex items-center justify-center space">
              <a
                href="https://u.wechat.com/kP_PkMqInEFhHvN6A0ipJ-A?s=4"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-foreground hover:text-foreground hover:bg-muted rounded-full transition-all duration-200 transform hover:scale-110"
                aria-label="WeChat"
              >
                <Image 
                  src="/images/wechat.png" 
                  alt="WeChat" 
                  width={32} 
                  height={32} 
                  className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
                />
              </a>
              <a
                href="https://instagram.com/your-handle"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-foreground hover:text-foreground hover:bg-muted rounded-full transition-all duration-200 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Image 
                  src="/images/instagram.png" 
                  alt="Instagram" 
                  width={32} 
                  height={32} 
                  className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Overlay */}
      {/* {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 min-h-screen bg-black/50 backdrop-blur-sm z-[999] transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        /> */}{" "}
      {/* )} */}
    </header>
  )
}

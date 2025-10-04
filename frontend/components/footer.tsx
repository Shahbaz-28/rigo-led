
import { Dribbble, Instagram } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
          {/* Left side - Brand info */}
          <div className="flex-shrink-0">
            <img 
              src="/images/logo.png" 
              alt="LAMPITA Logo" 
              className="h-10 sm:h-12 lg:h-16 w-auto"
            />
          </div>

          {/* Center - Navigation links */}
          <div className="flex flex-wrap items-center gap-8 text-base sm:text-lg font-semibold">
         <h1 className="text-gray-600 ">All Rights Reserved Rigo 2025</h1>
          </div>

          {/* Right side - Social media icons */}
          <div className="flex items-center space-x-5">
            <a href="https://wa.me/918369051700" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-500 transition-colors duration-200 p-1">
              <FaWhatsapp size={20} />
            </a>
         
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200 p-1">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

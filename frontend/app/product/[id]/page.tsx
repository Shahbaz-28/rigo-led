"use client"

import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, Heart, MessageCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import mainProductsData from "@/data/mainproduct.json"
// @ts-ignore
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

export default function ProductDetails() {
  const params = useParams()
  const router = useRouter()
  const productId = Number.parseInt(params.id as string)
  const product = mainProductsData.lighting_products[productId - 1] // Array is 0-indexed, but IDs start from 1

  const handleWhatsAppQuery = () => {
    const message = `Hi! I'm interested in the ${product?.series_name}. Can you provide more information about this product?`
    const whatsappUrl = `https://wa.me/your-number?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Button onClick={() => router.push("/")} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="w-full px-4 py-4">
          <Button onClick={() => router.push("/")} variant="ghost" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>
        </div>
      </header>

      {/* Product Details */}
      <div className="w-full px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image Gallery */}
          <div className="aspect-[4/3] bg-gray-50 rounded-lg overflow-hidden">
            <ImageGallery
              items={product.images && product.images.length > 0 
                ? product.images.map((image, index) => ({
                    original: `/${image}`,
                    thumbnail: `/${image}`,
                    originalAlt: `${product.series_name} - Image ${index + 1}`,
                    thumbnailAlt: `${product.series_name} - Thumbnail ${index + 1}`
                  }))
                : [{
                    original: product.image_path ? `/${product.image_path}` : "/placeholder.svg",
                    thumbnail: product.image_path ? `/${product.image_path}` : "/placeholder.svg",
                    originalAlt: product.series_name,
                    thumbnailAlt: product.series_name
                  }]
              }
              showPlayButton={false}
              showFullscreenButton={true}
              showNav={false}
              showThumbnails={true}
              thumbnailPosition="left"
              useBrowserFullscreen={false}
              showBullets={false}
              autoPlay={false}
              slideInterval={3000}
              slideDuration={450}
              swipingTransitionDuration={450}
              additionalClass="custom-image-gallery"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.series_name}</h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(4.5) Professional LED Series</span>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Professional LED lighting series with high-quality construction and versatile power options. 
              Perfect for commercial and residential applications with excellent energy efficiency and long-lasting performance.
            </p>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  Multiple power options available
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  High-quality LED chip technology
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  Various body colors and finishes
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  Precise beam angle control
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  Easy installation and maintenance
                </li>
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Specifications</h3>
              <div className="bg-gray-50 rounded-lg p-4 md:p-6">
                <div className="space-y-3">
                  {product.specifications.item_code && (
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-medium text-sm sm:text-base pr-2 flex-shrink-0">ITEM CODE:</span>
                      <span className="text-gray-900 font-semibold text-sm sm:text-base break-words text-right">{product.specifications.item_code}</span>
                    </div>
                  )}
                  {product.specifications.watt && (
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-medium text-sm sm:text-base pr-2 flex-shrink-0">WATT:</span>
                      <span className="text-gray-900 font-semibold text-sm sm:text-base break-words text-right">{product.specifications.watt}</span>
                    </div>
                  )}
                  {product.specifications.reflector_color && (
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-medium text-sm sm:text-base pr-2 flex-shrink-0">REFLECTOR COLOR:</span>
                      <span className="text-gray-900 font-semibold text-sm sm:text-base break-words text-right">{product.specifications.reflector_color}</span>
                    </div>
                  )}
                  {product.specifications.body_color && (
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-medium text-sm sm:text-base pr-2 flex-shrink-0">BODY COLOR:</span>
                      <span className="text-gray-900 font-semibold text-sm sm:text-base break-words text-right">{product.specifications.body_color}</span>
                    </div>
                  )}
                  {product.specifications.beam_angle && (
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-medium text-sm sm:text-base pr-2 flex-shrink-0">BEAM ANGLE:</span>
                      <span className="text-gray-900 font-semibold text-sm sm:text-base break-words text-right">{product.specifications.beam_angle}</span>
                    </div>
                  )}
                  {product.specifications.dimension && (
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-medium text-sm sm:text-base pr-2 flex-shrink-0">DIMENSION:</span>
                      <span className="text-gray-900 font-semibold text-sm sm:text-base break-words text-right">{product.specifications.dimension}</span>
                    </div>
                  )}
                  {product.specifications.cutout && (
                    <div className="flex justify-between items-start py-2">
                      <span className="text-gray-600 font-medium text-sm sm:text-base pr-2 flex-shrink-0">CUTOUT:</span>
                      <span className="text-gray-900 font-semibold text-sm sm:text-base break-words text-right">{product.specifications.cutout}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-6">
              <Button 
                onClick={handleWhatsAppQuery}
                className="flex-1 bg-black hover:bg-black-700 text-white cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Query on WhatsApp
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

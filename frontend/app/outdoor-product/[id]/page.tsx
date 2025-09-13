"use client"

import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, Heart, MessageCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import outdoorData from "@/data/outdoor.json"
// @ts-ignore
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

export default function OutdoorProductDetails() {
  const params = useParams()
  const router = useRouter()
  const productId = Number.parseInt(params.id as string)
  const product = (outdoorData as any).outdoor_lighting_housings[productId - 100] // Outdoor products start from ID 100

  const handleWhatsAppQuery = () => {
    const message = `Hi! I'm interested in the ${product?.product_name}. Can you provide more information about this product?`
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

  // Create images array for gallery
  const productImages = product.images && product.images.length > 0 
    ? product.images.map((image: string, index: number) => ({
        original: `/images/products/outdoor/${image}`,
        thumbnail: `/images/products/outdoor/${image}`,
        originalAlt: `${product.product_name} - Image ${index + 1}`,
        thumbnailAlt: `${product.product_name} - Thumbnail ${index + 1}`
      }))
    : [{
        original: product.image_path ? `/images/products/outdoor/${product.image_path}` : "/placeholder.svg",
        thumbnail: product.image_path ? `/images/products/outdoor/${product.image_path}` : "/placeholder.svg",
        originalAlt: product.product_name,
        thumbnailAlt: product.product_name
      }]

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
              items={productImages}
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
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.product_name}</h1>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-sm text-gray-600">Product Code: {product.product_code}</span>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              High-quality outdoor lighting housing designed for flood light applications. 
              This product offers excellent durability and performance for outdoor lighting solutions.
            </p>

            {/* Specifications */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h3>
              <div className="space-y-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600 capitalize">{key.replace(/_/g, ' ')}:</span>
                    <span className="text-gray-900 font-medium">{value as string}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  Weather-resistant construction
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  High-quality materials
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  Easy installation
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  Durable design
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  Professional grade
                </li>
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Specifications</h3>
              <div className="bg-gray-50 rounded-lg p-4 md:p-6">
                <div className="space-y-3">
                  {product.product_code && (
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-medium text-sm sm:text-base pr-2 flex-shrink-0">PRODUCT CODE:</span>
                      <span className="text-gray-900 font-semibold text-sm sm:text-base break-words text-right">{product.product_code}</span>
                    </div>
                  )}
                  {product.specifications.body_weight && (
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-medium text-sm sm:text-base pr-2 flex-shrink-0">BODY WEIGHT:</span>
                      <span className="text-gray-900 font-semibold text-sm sm:text-base break-words text-right">{product.specifications.body_weight}</span>
                    </div>
                  )}
                  {product.specifications.frame_weight && (
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-medium text-sm sm:text-base pr-2 flex-shrink-0">FRAME WEIGHT:</span>
                      <span className="text-gray-900 font-semibold text-sm sm:text-base break-words text-right">{product.specifications.frame_weight}</span>
                    </div>
                  )}
                  {product.specifications.driver_box_weight && (
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-medium text-sm sm:text-base pr-2 flex-shrink-0">DRIVER BOX WEIGHT:</span>
                      <span className="text-gray-900 font-semibold text-sm sm:text-base break-words text-right">{product.specifications.driver_box_weight}</span>
                    </div>
                  )}
                  {product.specifications.total_casting_weight && (
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-medium text-sm sm:text-base pr-2 flex-shrink-0">TOTAL CASTING WEIGHT:</span>
                      <span className="text-gray-900 font-semibold text-sm sm:text-base break-words text-right">{product.specifications.total_casting_weight}</span>
                    </div>
                  )}
                  {product.specifications.pcb_size && (
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-medium text-sm sm:text-base pr-2 flex-shrink-0">PCB SIZE:</span>
                      <span className="text-gray-900 font-semibold text-sm sm:text-base break-words text-right">{product.specifications.pcb_size}</span>
                    </div>
                  )}
                  {product.specifications.driver_area && (
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-medium text-sm sm:text-base pr-2 flex-shrink-0">DRIVER AREA:</span>
                      <span className="text-gray-900 font-semibold text-sm sm:text-base break-words text-right">{product.specifications.driver_area}</span>
                    </div>
                  )}
                  {product.specifications.outer_dimensions && (
                    <div className="flex justify-between items-start py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-medium text-sm sm:text-base pr-2 flex-shrink-0">OUTER DIMENSIONS:</span>
                      <span className="text-gray-900 font-semibold text-sm sm:text-base break-words text-right">{product.specifications.outer_dimensions}</span>
                    </div>
                  )}
                  {product.specifications.gross_weight && (
                    <div className="flex justify-between items-start py-2">
                      <span className="text-gray-600 font-medium text-sm sm:text-base pr-2 flex-shrink-0">GROSS WEIGHT:</span>
                      <span className="text-gray-900 font-semibold text-sm sm:text-base break-words text-right">{product.specifications.gross_weight}</span>
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

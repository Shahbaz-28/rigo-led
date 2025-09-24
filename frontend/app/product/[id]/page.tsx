"use client"

import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, Heart, MessageCircle, Star, Share2, ShoppingCart, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import unifiedProductsData from "@/data/unified-products.json"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function ProductDetails() {
  const params = useParams()
  const router = useRouter()
  const productId = Number.parseInt(params.id as string)
  const product = unifiedProductsData.products.find(p => p.id === productId)

  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppQuery = () => {
    const message = `Hi! I'm interested in the ${product?.title}. Can you provide more information about this product?`
    const whatsappUrl = `https://wa.me/your-number?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product?.title,
        text: `Check out this ${product?.title} from RIGO Lighting`,
        url: window.location.href,
      })
    }
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Button onClick={() => router.push("/")} variant="outline" className="rounded-xl">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    )
  }

  const productImages = product.images && product.images.length > 0
    ? product.images.map((image, index) => ({
      src: image,
      alt: `${product.title} - Image ${index + 1}`
    }))
    : [{
      src: product.image || "/placeholder.svg",
      alt: product.title
    }]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Enhanced Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-5.5">
          <div className="flex items-center justify-between">
            <Button
              onClick={() => router.push("/products")}
              variant="ghost"
              className="rounded-xl hover:bg-gray-100 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" onClick={handleShare} className="rounded-xl">
                <Share2 className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-xl">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 py-8 md:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10">

          {/* Fixed Image Gallery Section - Desktop Only */}
          <div className="space-y-6 lg:sticky lg:top-24 lg:h-fit">
            {/* Main Image */}
            <div className="relative aspect-square bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200">
              {isLoading && (
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-3xl" />
              )}

              <div className="relative w-full h-full p-8">
                <Image
                  src={productImages[selectedImageIndex]?.src || "/placeholder.svg"}
                  alt={productImages[selectedImageIndex]?.alt || product.title}
                  fill
                  className={`object-cover transition-all duration-500 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                  onLoadingComplete={() => setImageLoaded(true)}
                  priority
                />
              </div>

              {/* Image Counter */}
              {productImages.length > 1 && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 text-white text-sm rounded-full backdrop-blur-sm">
                  {selectedImageIndex + 1} / {productImages.length}
                </div>
              )}
            </div>

            {/* Horizontal Thumbnail Strip */}
            {productImages.length > 1 && (
              <div className="flex space-x-3 overflow-x-auto p-[1rem] scrollbar-hide" style={{ scrollbarWidth: "none" }} >
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${selectedImageIndex === index
                      ? 'border-gray-900 shadow-lg scale-105'
                      : 'border-gray-200 hover:border-gray-400'
                      }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Product Quick Info - Only visible on desktop when sticky */}
            {/* <div className="hidden lg:block bg-gray-50 rounded-2xl p-6 mt-6">
              <h3 className="font-semibold text-gray-900 mb-3">Quick Info</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Series</span>
                  <span className="font-medium text-gray-900">{product.series_name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className="flex items-center font-medium text-green-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    In Stock
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery</span>
                  <span className="font-medium text-gray-900">Fast Shipping</span>
                </div>
              </div>
            </div> */}
          </div>

          {/* Product Information - Scrollable */}
          <div className="space-y-8">
            {/* Product Header */}
            <div className="space-y-4">
              {/* <div className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                {product.category}
              </div> */}

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                {product.title}
              </h1>

              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>

              {/* <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating || 4) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">({product.rating || 4.5}) • {product.reviews || 0} Reviews</span>
              </div> */}
            </div>

            {/* Price Section */}
            {/* {product.price && (
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                        {product.discount}% OFF
                      </span>
                    </>
                  )}
                </div>
                <div className="flex items-center mt-4">
                  <Check className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-green-700 font-medium">
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>
            )} */}

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Specifications */}
            {product.specifications && (
              <div className="bg-white rounded-2xl py-6 px-2 md:px-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 ml-2">
                  Technical Specifications
                </h3>
                <div className="space-y-4">
                  {/* Handle items array separately */}
                  {product.specifications.items ? (
                    <div className="space-y-6">
                      {product.specifications.items.map((item, index) => (
                        <div key={item.item_no || index} className="border border-gray-100 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-3">{item.item_no}</h4>
                          <div className="grid grid-cols-1 gap-3">
                            {Object.entries(item).map(([key, value]) => {
                              if (!value || key === 'item_no') return null
                              const label = key.replace(/_/g, ' ').toUpperCase()
                              return (
                                <div key={key} className="flex justify-between">
                                  <span className="text-gray-600 font-medium">{label}:</span>
                                  <span className="text-gray-900">{value}</span>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-3">
                      {Object.entries(product.specifications).map(([key, value]) => {
                        if (!value) return null
                        const label = key.replace(/_/g, ' ').toUpperCase()
                        return (
                          <div key={key} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                            <span className="text-gray-600 font-medium">{label}:</span>
                            <span className="text-gray-900">{value}</span>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button
                onClick={handleWhatsAppQuery}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Inquire on WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {(() => {
          const allProducts = unifiedProductsData.products
          const sameTabProducts = allProducts.filter(p => p.tab === product.tab && p.id !== product.id)

          // Prioritize same category, then other products from same tab
          const sameCategoryProducts = sameTabProducts.filter(p => p.category === product.category)
          const otherTabProducts = sameTabProducts.filter(p => p.category !== product.category)

          const relatedProducts = [...sameCategoryProducts, ...otherTabProducts].slice(0, 6)

          if (relatedProducts.length === 0) return null

          return (
            <div className=" rounded-2xl p-2  mt-12">
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-6">
                You Might Also Like
              </h3>

              {/* Horizontal Scroll for All Devices */}
              <div className="overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <div className="flex space-x-4 pb-4">
                  {relatedProducts.map((relatedProduct) => (
                    <div
                      key={relatedProduct.id}
                      className="flex-shrink-0 w-48 md:w-56 lg:w-64 cursor-pointer transform transition-all duration-300 hover:scale-[1.02]"
                      onClick={() => router.push(`/product/${relatedProduct.id}`)}
                    >
                      <div className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 !min-h-[290px]">
                        <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                          <div className="relative w-full h-full p-3">
                            <Image
                              src={relatedProduct.image || "/placeholder.svg"}
                              alt={relatedProduct.title}
                              fill
                              className="object-cover rounded-lg"
                            />
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 text-xs md:text-sm lg:text-md line-clamp-2 mb-2">
                            {relatedProduct.title}
                          </h4>
                          <p className="text-xs text-gray-500 mb-2">
                            {relatedProduct.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })()}
      </div>

      {/* Related Products Section - Mobile Responsive */}
      {/* <div className="container mx-auto px-2 py-8 mt-12 md:px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Related Products</h2>
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4">
          {(() => {
            const allProducts = unifiedProductsData.products
            const sameTabProducts = allProducts.filter(p => p.tab === product.tab && p.id !== product.id)
            
            // Prioritize same category, then other products from same tab
            const sameCategoryProducts = sameTabProducts.filter(p => p.category === product.category)
            const otherTabProducts = sameTabProducts.filter(p => p.category !== product.category)
            
            const relatedProducts = [...sameCategoryProducts, ...otherTabProducts].slice(0, 6)
            
            return relatedProducts.length > 0 ? (
              relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="w-full sm:w-1/2 md:w-1/3 p-2"
                  onClick={() => router.push(`/product/${relatedProduct.id}`)}
                >
                  <div className="border p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden rounded-lg">
                      <div className="relative w-full h-full p-3">
                        <Image
                          src={relatedProduct.image || "/placeholder.svg"}
                          alt={relatedProduct.title}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="mt-3">
                      <h4 className="font-semibold text-gray-900 text-sm line-clamp-2 mb-1">
                        {relatedProduct.title}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {relatedProduct.category}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : null
          })()}
        </div>
      </div> */}
    </div>
  )
}

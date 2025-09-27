"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { useState } from "react"
import unifiedProductsData from "@/data/unified-products.json"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TrendingSection() {
  const router = useRouter()
  const [loadingImages, setLoadingImages] = useState<Set<string>>(new Set())

  // Get all products from unified data
  const allProducts = unifiedProductsData.products

  // Indoor products from unified data (filter by tab field)
  const indoorProducts = allProducts
    .filter(product => product.tab === 'indoor')
    .slice(0, 8)
    .map((product) => ({
      ...product,
      title: product.title,
      category: product.category,
      image: product.image || "/placeholder.svg"
    }))

  // Outdoor products from unified data (filter by tab field)
  const outdoorProducts = allProducts
    .filter(product => product.tab === 'outdoor')
    .slice(0, 8)
    .map((product) => ({
      ...product,
      title: product.title,
      category: product.category,
      image: product.image || "/placeholder.svg"
    }))

  const handleProductClick = (productId: number, isOutdoor: boolean = false) => {
    if (isOutdoor) {
      router.push(`/outdoor-product/${productId}`)
    } else {
      router.push(`/product/${productId}`)
    }
  }

  const handleImageLoad = (imageId: string) => {
    setLoadingImages(prev => {
      const newSet = new Set(prev)
      newSet.delete(imageId)
      return newSet
    })
  }

  const handleImageLoadStart = (imageId: string) => {
    setLoadingImages(prev => new Set(prev).add(imageId))
  }

  // Premium Product Card Component
  const ProductCard = ({ product, isOutdoor = false }: { product: any; isOutdoor?: boolean }) => {
    const imageId = `${product.id}-${isOutdoor ? 'outdoor' : 'indoor'}`
    const isLoading = loadingImages.has(imageId)

    return (
      <div
        className="group cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
        onClick={() => handleProductClick(product.id, isOutdoor)}
      >
        {/* Card Container with Premium Styling */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 min-h-[480px]">

          {/* Image Container */}
          <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
            {/* Loading Skeleton */}
            {isLoading && (
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
            )}

            {/* Product Image */}
            <div className="relative w-full h-full p-6 group-hover:p-4 transition-all duration-500">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                fill
                className={`object-cover group-hover:scale-110 transition-all duration-700 
                ${isLoading ? 'opacity-0' : 'opacity-100'
                  }
                  `}
                // onLoadingComplete={() => handleImageLoad(imageId)}
                // onLoadStart={() => handleImageLoadStart(imageId)}
                // onError={(e) => {
                //   console.error('Image failed to load:', product.image)
                //   e.currentTarget.src = "/placeholder.svg"
                //   handleImageLoad(imageId)
                // }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
           </div>

          {/* Content Section */}
          <div className="p-6 space-y-3">
            {/* Product Title */}
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-300 line-clamp-2 leading-tight">
              {product.title}
            </h3>

            {/* Category Text */}
            <p className="text-sm text-gray-500 mb-3 line-clamp-2">
              {product.description}
            </p>

            

            {/* Action Indicator */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                View Details
              </span>
              <div className="w-6 h-6 rounded-full bg-gray-100 group-hover:bg-gray-900 transition-all duration-300 flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-gray-400 group-hover:text-white transition-colors duration-300 transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Our Premium Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our carefully curated selection of premium lighting solutions designed to transform your space
          </p>
        </div>

        <Tabs defaultValue="indoor" className="w-full">
          {/* Enhanced Tab Navigation */}
          <TabsList className="grid w-full max-w-sm mx-auto grid-cols-2 mb-16 h-12 p-1 bg-gray-100 rounded-xl">
            <TabsTrigger
              value="indoor"
              className="rounded-lg font-semibold text-sm transition-all duration-300 data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Indoor Collection
            </TabsTrigger>
            <TabsTrigger
              value="outdoor"
              className="rounded-lg font-semibold text-sm transition-all duration-300 data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Outdoor Collection
            </TabsTrigger>
          </TabsList>

          {/* Indoor Products Grid */}
          <TabsContent value="indoor" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {[...indoorProducts].slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} isOutdoor={false} />
              ))}
            </div>
          </TabsContent>

          {/* Outdoor Products Grid */}
          <TabsContent value="outdoor" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {outdoorProducts.map((product: any) => (
                <ProductCard key={product.id} product={product} isOutdoor={true} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Enhanced CTA Button */}
        <div className="text-center mt-16">
          <button
            onClick={() => router.push("/products")}
            className="group inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
          >
            <span>Explore All Products</span>
            <svg
              className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

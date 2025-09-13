"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import mainProductsData from "@/data/mainproduct.json"
import outdoorData from "@/data/outdoor.json"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TrendingSection() {
  const router = useRouter()

  // Indoor products from mainproduct.json
  const indoorProducts = mainProductsData.lighting_products.slice(0, 8).map((product, index) => ({
    ...product,
    id: index + 1,
    title: product.series_name,
    category: "Indoor Lighting",
    image: product.image_path ? `/${product.image_path}` : "/placeholder.svg"
  }))

  // Outdoor products from outdoor.json
  const outdoorProducts = (outdoorData as any).outdoor_lighting_housings?.slice(0, 8).map((product: any, index: number) => ({
    ...product,
    id: index + 100, // Use different ID range to avoid conflicts
    title: product.product_name,
    category: "Outdoor Lighting",
    image: product.images && product.images.length > 0 
      ? `/images/products/outdoor/${product.images[0]}` 
      : `/images/products/outdoor/${product.image_path}`
  })) || []

  const handleProductClick = (productId: number, isOutdoor: boolean = false) => {
    if (isOutdoor) {
      router.push(`/outdoor-product/${productId}`)
    } else {
      router.push(`/product/${productId}`)
    }
  }

  // Indoor Product Card Component
  const IndoorProductCard = ({ product }: { product: any }) => {
    return (
      <div key={product.id} className="group cursor-pointer" onClick={() => handleProductClick(product.id, false)}>
        <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden mb-4 group-hover:bg-gray-100 transition-colors duration-300 relative">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              console.error('Image failed to load:', product.image)
              e.currentTarget.src = "/placeholder.svg"
            }}
          />
        </div>

        <div className="text-center">
          <h3 className="text-sm font-medium text-gray-900 group-hover:text-gray-700 transition-colors duration-300 mb-1">
            {product.title}
          </h3>
          
          {/* Category */}
          <p className="text-xs text-gray-500 mt-1">{product.category}</p>
        </div>
      </div>
    )
  }

  // Outdoor Product Card Component
  const OutdoorProductCard = ({ product }: { product: any }) => {
    return (
      <div key={product.id} className="group cursor-pointer" onClick={() => handleProductClick(product.id, true)}>
        <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden mb-4 group-hover:bg-gray-100 transition-colors duration-300 relative">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              console.error('Image failed to load:', product.image)
              e.currentTarget.src = "/placeholder.svg"
            }}
          />
        </div>

        <div className="text-center">
          <h3 className="text-sm font-medium text-gray-900 group-hover:text-gray-700 transition-colors duration-300 mb-1">
            {product.title}
          </h3>
          
          {/* Category */}
          <p className="text-xs text-gray-500 mt-1">{product.category}</p>
        </div>
      </div>
    )
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-lg font-medium tracking-wider text-gray-900 mb-12">OUR PRODUCTS</h2>

        <Tabs defaultValue="indoor" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="indoor">Indoor</TabsTrigger>
            <TabsTrigger value="outdoor">Outdoor</TabsTrigger>
          </TabsList>

          <TabsContent value="indoor">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {indoorProducts.map((product) => (
                <IndoorProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="outdoor">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {outdoorProducts.map((product: any) => (
                <OutdoorProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => router.push("/products")}
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-300"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}

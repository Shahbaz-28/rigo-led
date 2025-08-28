"use client"

import { useRouter } from "next/navigation"
import productsData from "@/data/products.json"

export default function TrendingSection() {
  const router = useRouter()

  // Get first 8 products for display
  const products = productsData.slice(0, 8)

  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`)
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-lg font-medium tracking-wider text-gray-900 mb-12">OUR PRODUCTS</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer" onClick={() => handleProductClick(product.id)}>
              <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden mb-4 group-hover:bg-gray-100 transition-colors duration-300 relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
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
          ))}
        </div>

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

"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Search, Filter } from "lucide-react"
import unifiedProductsData from "@/data/unified-products.json"
import Image from "next/image"

export default function ProductsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [activeTab, setActiveTab] = useState("indoor")
  const [loadingImages, setLoadingImages] = useState(new Set<string>())

  // Get tab from URL parameter
  useEffect(() => {
    const tabParam = searchParams.get('tab')
    if (tabParam === 'outdoor' || tabParam === 'indoor') {
      setActiveTab(tabParam)
    }
  }, [searchParams])

  // Reset category when tab changes
  useEffect(() => {
    setSelectedCategory("All")
  }, [activeTab])

  // Get all products from unified data
  const allProducts = unifiedProductsData.products

  // Separate products by tab field
  const indoorProducts = allProducts.filter(product => product.tab === 'indoor')
  const outdoorProducts = allProducts.filter(product => product.tab === 'outdoor')

  const handleProductClick = (productId: number) => {
    // Check if it's an outdoor product (ID >= 100)
    if (productId >= 100) {
      router.push(`/outdoor-product/${productId}`)
    } else {
      router.push(`/product/${productId}`)
    }
  }

  // Filter function for products
  const filterProducts = (products: any[]) => {
    return products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }

  const filteredIndoorProducts = filterProducts(indoorProducts)
  const filteredOutdoorProducts = filterProducts(outdoorProducts)

  // Get categories for current tab
  const getCategories = (products: any[]) => {
    return ["All", ...Array.from(new Set(products.map(product => product.category)))]
  }

  // Get current products based on active tab
  const currentProducts = activeTab === 'indoor' ? indoorProducts : outdoorProducts
  const filteredCurrentProducts = activeTab === 'indoor' ? filteredIndoorProducts : filteredOutdoorProducts

  // Premium Product Card Component
  const ProductCard = ({ product }: { product: any }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
      <div
        className="group cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
        onClick={() => handleProductClick(product.id)}
      >
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 min-h-[480px] flex flex-col">

          {/* Image Container */}
          <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex items-center justify-center">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
            )}

            <div className="relative w-full h-full transition-all duration-500 p-4">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                fill
                className="object-cover rounded-xl transition-all duration-700"
                onLoadingComplete={() => setImageLoaded(true)}
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="p-5 flex flex-col flex-grow justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300 line-clamp-2 leading-tight mb-2">
                {product.title}
              </h3>

              <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                {product.description}
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <span className="text-xs text-gray-800 uppercase tracking-wider font-medium">
                  View Details
                </span>
                <div className="w-6 h-6 rounded-full bg-gray-200 group-hover:bg-gray-900 transition-all duration-300 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-gray-800 group-hover:text-white transition-colors duration-300"
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
      </div>
    );
  };

  // Product Grid Component
  const ProductGrid = ({ products, emptyMessage }: { products: any[], emptyMessage: string }) => (
    <>
      {products.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-gray-400 text-6xl mb-6">🔍</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">No products found</h3>
          <p className="text-gray-600 mb-8">{emptyMessage}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 py-3 text-white leading-20">
              Premium Lighting
              <span className="block text-amber-400">Collection</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Discover our complete collection of premium lighting solutions
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search Section */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-16 pr-6 py-4 text-lg bg-white border-2 border-gray-200 rounded-2xl focus:border-gray-400 focus:outline-none transition-all duration-300"
            />
          </div>
        </div>

        {/* Tab Navigation */}
        {/* <div className="mb-8">
          <div className="flex justify-center">
            <div className="inline-flex bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => {
                  setActiveTab('indoor')
                  router.push('/products?tab=indoor')
                }}
                className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  activeTab === 'indoor'
                    ? 'bg-white shadow-sm text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Indoor Collection
              </button>
              <button
                onClick={() => {
                  setActiveTab('outdoor')
                  router.push('/products?tab=outdoor')
                }}
                className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  activeTab === 'outdoor'
                    ? 'bg-white shadow-sm text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Outdoor Collection
              </button>
            </div>
          </div>
        </div> */}

        {/* Products Section */}
        <div className="mb-6">
          {/* Category Filter */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {activeTab === 'indoor' ? 'Indoor Lighting Solutions' : 'Outdoor Lighting Solutions'}
              </h2>
              <p className="text-gray-600">
                Showing {filteredCurrentProducts.length} of {currentProducts.length} {activeTab} products
              </p>
            </div>

            {/* <div className="relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-12 pr-8 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-gray-400 focus:outline-none appearance-none cursor-pointer min-w-[200px]"
              >
                {getCategories(currentProducts).map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div> */}
          </div>
        </div>

        <ProductGrid
          products={filteredCurrentProducts}
          emptyMessage={`Try adjusting your search terms or browse all ${activeTab} products`}
        />
      </div>
    </div>
  )
}

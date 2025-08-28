import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import TrendingSection from "@/components/trending-section"
import PromotionalSection from "@/components/promotional-section"
import Footer from "@/components/footer"
import WhyChooseUs from "@/components/why-choose-us"
import CardParallaxSection from "@/components/card-parallax-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <TrendingSection />
      <CardParallaxSection />
      <PromotionalSection />
      <WhyChooseUs />
    </div>
  )
}

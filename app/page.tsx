import FooterSection from "@/components/homepage/footer"
import HeroSection from "@/components/homepage/hero-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Hero Section with Animated Background */}
      <HeroSection />
      
      {/* Additional content sections can go here */}
      <main className="flex-1">
        {/* Future content sections */}
      </main>
      
      <FooterSection />
    </div>
  )
}
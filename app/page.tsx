import FooterSection from "@/components/homepage/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-obsidian-950 text-primary flex flex-col">
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <header className="text-center space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-velvet-bloom bg-clip-text text-transparent">
              Welcome to Akira
            </h1>
            <p className="text-muted text-lg">Modern web application</p>
          </header>
        </div>
      </main>
      <FooterSection />
    </div>
  )
}
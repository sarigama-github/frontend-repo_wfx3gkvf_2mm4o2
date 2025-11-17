import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AuroraBackground from './components/AuroraBackground'
import { PlanetsSection, ShipSection, CaptainSection } from './components/Sections'

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <AuroraBackground />
      <Navbar />
      <Hero />
      <main>
        <PlanetsSection />
        <ShipSection />
        <CaptainSection />
        <footer className="py-12 text-center text-white/60">
          © {new Date().getFullYear()} Galactic Kid Explorers — Safe, fun, and curiosity-first.
        </footer>
      </main>
    </div>
  )
}

export default App

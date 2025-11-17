import Spline from '@splinetool/react-spline'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hqXbe5uy0NxM7CDI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center min-h-[90vh] text-white">
        <p className="uppercase tracking-[0.3em] text-white/80 text-xs sm:text-sm">Interactive Space Adventure for Kids</p>
        <h1 className="mt-4 text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
          Explore Planets, Cultures, and the Unknown
        </h1>
        <p className="mt-4 max-w-2xl text-white/85">
          Step aboard our Star Trek-style explorer ship using stargate tech to zip across the galaxy. Discover friendly aliens, games, and stories—guided by our one-eyed red-blob captain!
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#planets" className="px-5 py-3 rounded-lg bg-red-500/90 hover:bg-red-500 text-white font-semibold shadow-lg shadow-red-500/30 transition-colors">Start Exploring</a>
          <a href="#ship" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 text-white font-semibold transition-colors">Meet the Ship</a>
        </div>

        <a href="#planets" className="mt-14 inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
          <ChevronDown className="animate-bounce" />
          Scroll to begin
        </a>
      </div>
    </section>
  )
}

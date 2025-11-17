import { useState } from 'react'
import { Menu, Rocket, Star, Map, Compass } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (label, href) => (
    <a href={href} className="text-white/90 hover:text-white transition-colors text-sm md:text-base">
      {label}
    </a>
  )

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-white">
            <div className="p-2 rounded-lg bg-white/10 backdrop-blur"><Rocket size={20} /></div>
            <span className="font-semibold tracking-wide">Galactic Kid Explorers</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItem('Planets', '#planets')}
            {navItem('Cultures', '#cultures')}
            {navItem('Our Ship', '#ship')}
            {navItem('Captain', '#captain')}
          </nav>

          <button
            className="md:hidden text-white/90 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
        </div>
        {open && (
          <div className="mt-3 md:hidden grid gap-2 bg-white/10 backdrop-blur rounded-lg p-3 text-white">
            {navItem('Planets', '#planets')}
            {navItem('Cultures', '#cultures')}
            {navItem('Our Ship', '#ship')}
            {navItem('Captain', '#captain')}
          </div>
        )}
      </div>
    </header>
  )
}

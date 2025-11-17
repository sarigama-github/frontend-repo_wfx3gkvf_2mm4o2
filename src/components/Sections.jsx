import { Orbit, Sparkles, Ship, Telescope, DoorOpen, TelescopeIcon, Rocket } from 'lucide-react'

export function PlanetsSection() {
  const items = [
    { title: 'Zyra-3', desc: 'Floating islands and rainbow geysers.', color: 'from-pink-500 to-fuchsia-500' },
    { title: 'Mossune', desc: 'Moss cities with friendly beetle taxis.', color: 'from-emerald-500 to-teal-500' },
    { title: 'Glaciara', desc: 'Crystal ice caves that sing.', color: 'from-sky-500 to-indigo-500' },
  ]
  return (
    <section id="planets" className="relative py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold">Featured Planets</h2>
        <p className="mt-2 text-white/80 max-w-2xl">Hop through our onboard stargate to visit hand-picked worlds perfect for curious kids.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <div key={p.title} className="rounded-2xl p-6 bg-white/10 backdrop-blur border border-white/15">
              <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${p.color} shadow-lg shadow-black/20 mb-4`} />
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-white/80 mt-1">{p.desc}</p>
              <a href="#" className="inline-block mt-4 text-sm text-white/90 hover:text-white">Open Gate →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ShipSection() {
  return (
    <section id="ship" className="relative py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">Star Trek-style Ship, Stargate Tech</h2>
          <p className="mt-4 text-white/80">Our explorer ship glides through space and uses a safe, kid-friendly stargate ring on board. Step through to explore, then zip back for snacks.</p>
          <ul className="mt-6 space-y-3 text-white/85">
            <li>• Holodeck classrooms for learning alien languages</li>
            <li>• Bubble-shield for bumpy meteor showers</li>
            <li>• Stargate ring to jump to new planets instantly</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-6">
          <div className="h-56 rounded-xl bg-gradient-to-br from-purple-500/40 to-sky-500/40" />
          <p className="mt-3 text-sm text-white/70">Artist impression of our bridge and stargate ring.</p>
        </div>
      </div>
    </section>
  )
}

export function CaptainSection() {
  return (
    <section id="captain" className="relative py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold">Meet the Captain</h2>
          <p className="mt-4 text-white/80">Our captain is a friendly red blob with yarn-like hair, one big curious eye, and no mouth—communicating with expressive wiggles and color pulses. They love guiding explorers to safe, wondrous places.</p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur border border-white/15 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />
            <span className="text-white/90">Captain online and waving hello</span>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500 via-fuchsia-500 to-purple-600" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-red-400 to-red-700 animate-pulse shadow-[0_0_80px_rgba(255,0,80,0.5)]" />
              <div className="absolute top-1/2 -translate-y-1/2 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-black/70" />
              <div className="absolute top-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white" />
              <div className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 w-36 h-12 sm:w-48 sm:h-16 bg-red-600/70 blur-2xl rounded-full" />
              <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 w-40 sm:w-56 h-[2px] bg-red-200/70" />
            </div>
          </div>
          <p className="mt-3 text-sm text-white/70">Stylized captain portrait with yarn-like hair and a single eye.</p>
        </div>
      </div>
    </section>
  )
}

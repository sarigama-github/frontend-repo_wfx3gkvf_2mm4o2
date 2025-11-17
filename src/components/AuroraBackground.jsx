export default function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] rounded-full bg-gradient-to-br from-fuchsia-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl" />
      <div className="absolute top-1/3 -left-32 w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-rose-500/20 via-orange-400/20 to-yellow-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[70vw] h-[70vw] rounded-full bg-gradient-to-tl from-indigo-500/20 via-sky-400/20 to-emerald-300/20 blur-3xl" />
    </div>
  )
}

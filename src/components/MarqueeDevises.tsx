export default function MarqueeDevises() {
  const items = ['Cr\u00e9er.', 'Connecter.', 'Marquer les esprits.']
  const track = [...items, ...items, ...items, ...items, ...items, ...items]
  return (
    <section className="relative z-[2] py-10 overflow-hidden">
      <div className="py-6 bg-white/[0.03] backdrop-blur-[20px] border-y border-white/[0.08]">
        <div className="flex gap-12 w-max animate-marquee">
          {track.map((item, i) => (
            <span key={i} className="font-heading text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white whitespace-nowrap tracking-tight flex items-center gap-12">
              {item} <span className="text-accent-gold text-sm opacity-80">\u25c6</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

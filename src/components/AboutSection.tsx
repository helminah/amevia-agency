import devises from '../assets/devises.png'

export default function AboutSection() {
  return (
    <section className="relative z-[2] py-24 px-6 max-w-[1200px] mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-accent-primary/15 border border-accent-primary/30 text-accent-secondary text-xs font-semibold uppercase tracking-wider mb-5">Pourquoi AMEVIA ?</span>
          <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-[-2px] mb-6">Une agence n\u00e9e de<br />l'<span className="gradient-text">alliance</span> entre<br />la rigueur et la cr\u00e9ation</h2>
          <p className="text-white/65 text-base leading-relaxed mb-5">Derri\u00e8re AMEVIA, le Dr Helminah \u2014 m\u00e9decin de formation, strat\u00e8ge digital de passion. Cette double casquette est notre super-pouvoir : on applique la rigueur analytique de la m\u00e9decine au marketing digital.</p>
          <p className="text-white/65 text-base leading-relaxed mb-8">Pas de jargon creux. Pas de promesses vaines. Juste des strat\u00e9gies data-driven, des designs qui marquent les esprits, et des r\u00e9sultats mesurables.</p>
          <div className="flex flex-col gap-4">
            {['Approche scientifique & data-driven', 'Design premium & tendance 2026', 'Expertise internationale (FR, BE, SN, QC, EE, TH)'].map((f, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <span className="w-6 h-6 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white text-xs font-bold flex-shrink-0">\u2713</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card p-8 flex items-center justify-center min-h-[400px] relative">
          <img src={devises} alt="Vision AMEVIA" className="max-w-full rounded-2xl relative z-[2]" />
          <div className="absolute w-[80%] h-[80%] bg-[radial-gradient(circle,rgba(124,58,237,0.2),transparent_70%)] blur-[60px] z-[1]" />
        </div>
      </div>
    </section>
  )
}

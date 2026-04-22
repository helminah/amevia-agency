import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line', {
        y: 60, opacity: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out', delay: 0.3
      })
      gsap.from('.hero-desc', {
        y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.9
      })
      gsap.from('.hero-btn', {
        y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 1.1
      })
    }, contentRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={contentRef} className="relative min-h-screen flex items-center justify-center z-[2] overflow-hidden">
      <div className="relative z-[3] text-center max-w-[900px] px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] backdrop-blur-[10px] border border-white/[0.08] text-sm text-white/65 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-dot" />
          Agence Digitale Full-Service
        </div>
        <h1 className="font-heading font-bold leading-[1.05] tracking-[-2px] text-[clamp(2.8rem,7vw,5.5rem)] mb-7">
          <span className="hero-line block">On ne construit pas</span>
          <span className="hero-line block">des sites.</span>
          <span className="hero-line block bg-clip-text text-transparent bg-gradient-to-br from-accent-secondary via-accent-tertiary to-accent-gold">On construit des</span>
          <span className="hero-line block bg-clip-text text-transparent bg-gradient-to-br from-accent-secondary via-accent-tertiary to-accent-gold">marques.</span>
        </h1>
        <p className="hero-desc text-[clamp(1rem,2vw,1.25rem)] text-white/65 max-w-[600px] mx-auto mb-10 leading-relaxed">
          Sites web premium, identit\u00e9 visuelle, r\u00e9seaux sociaux et publicit\u00e9 IA.
          L'alliance du design et de la performance.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#portfolio" className="hero-btn inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary text-white font-semibold text-[0.95rem] shadow-[0_4px_24px_rgba(124,58,237,0.35)] hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(124,58,237,0.5)] transition-all relative overflow-hidden">
            Voir nos r\u00e9alisations
          </a>
          <a href="#contact" className="hero-btn inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/[0.03] backdrop-blur-[10px] border border-white/[0.08] text-white font-semibold text-[0.95rem] hover:bg-white/[0.08] hover:border-white/[0.15] hover:-translate-y-[3px] transition-all">
            Prendre rendez-vous
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[3]">
        <div className="w-px h-[60px] bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  )
}

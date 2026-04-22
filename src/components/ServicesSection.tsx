import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Monitor, Brain, Users, Play, Palette, Filter } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  { icon: Monitor, title: 'Sites Web Premium', desc: 'Design sur-mesure, animations fluides, responsive impeccable. Votre vitrine digitale devient un avantage comp\u00e9titif.' },
  { icon: Brain, title: 'Publicit\u00e9 IA', desc: 'Campagnes Meta Ads optimis\u00e9es par l\'intelligence artificielle. Ciblage chirurgical et ROI mesurable.' },
  { icon: Users, title: 'R\u00e9seaux Sociaux', desc: 'Strat\u00e9gie de contenu, calendrier \u00e9ditorial, community management. Transformez vos followers en clients.' },
  { icon: Play, title: 'Motion Design', desc: 'Vid\u00e9os, animations et effets visuels qui captivent l\'attention. Le contenu vid\u00e9o g\u00e9n\u00e8re 1200% plus d\'engagement.' },
  { icon: Palette, title: 'Identit\u00e9 Visuelle', desc: 'Logo, charte graphique, typographie. Une identit\u00e9 coh\u00e9rente qui vous distingue et reste grav\u00e9e dans les m\u00e9moires.' },
  { icon: Filter, title: 'Tunnels de Vente', desc: 'Parcours utilisateur optimis\u00e9s, landing pages convertissantes, email marketing. Du clic \u00e0 la vente.' },
]

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-card', {
        y: 60, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' }
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="services" ref={ref} className="relative z-[2] py-24 px-6 max-w-[1200px] mx-auto">
      <div className="text-center max-w-[700px] mx-auto mb-20">
        <span className="inline-block px-3.5 py-1.5 rounded-full bg-accent-primary/15 border border-accent-primary/30 text-accent-secondary text-xs font-semibold uppercase tracking-wider mb-5">Nos Expertises</span>
        <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-[-2px]">Tout ce qu'il faut<br />pour <span className="gradient-text">briller en ligne</span></h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className="service-card glass-card p-10 group">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/10 flex items-center justify-center text-accent-secondary mb-6">
              <s.icon size={28} strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-white/65 text-sm leading-relaxed">{s.desc}</p>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  )
}

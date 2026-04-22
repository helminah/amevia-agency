import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import lengor from '../assets/portfolio-lengor.jpg'
import drh from '../assets/portfolio-drhelminah.jpg'
import suave from '../assets/portfolio-suavecomfort.jpg'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  { img: lengor, tag: 'Site Web + Branding', title: 'Le Ngor', desc: 'Restaurant pieds dans l\'eau \u00e0 Dakar. Refonte compl\u00e8te avec r\u00e9servation en ligne.', link: 'https://restaurantlengor.sn', video: 'https://videos.pexels.com/video-files/28561340/12421290_2560_1440_30fps.mp4' },
  { img: drh, tag: 'Personal Branding + Site', title: 'Dr Helminah', desc: 'Strat\u00e9gie digitale et personal branding pour m\u00e9decin strat\u00e8ge.', link: 'https://drhelminah.com', video: 'https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4' },
  { img: suave, tag: 'E-commerce + Meta Ads', title: 'Suave Comfort', desc: 'Boutique e-commerce premium avec campagnes publicitaires IA.', link: 'https://suavecomfort.com', video: 'https://videos.pexels.com/video-files/3252118/3252118-hd_1920_1080_30fps.mp4' },
]

export default function PortfolioSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.portfolio-item', {
        y: 80, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' }
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="portfolio" ref={ref} className="relative z-[2] py-24 px-6 max-w-[1200px] mx-auto">
      <div className="text-center max-w-[700px] mx-auto mb-20">
        <span className="inline-block px-3.5 py-1.5 rounded-full bg-accent-primary/15 border border-accent-primary/30 text-accent-secondary text-xs font-semibold uppercase tracking-wider mb-5">Portfolio</span>
        <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-[-2px]">Nos derni\u00e8res<br /><span className="gradient-text">r\u00e9alisations</span></h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="portfolio-item glass-card group overflow-hidden">
            <div className="relative h-[280px] overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.08]" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-400">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                  <source src={p.video} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="p-7">
              <span className="inline-block px-2.5 py-1 rounded-md bg-accent-primary/15 text-accent-secondary text-xs font-semibold mb-3">{p.tag}</span>
              <h3 className="font-heading text-2xl font-semibold mb-2">{p.title}</h3>
              <p className="text-white/65 text-sm leading-relaxed mb-4">{p.desc}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-accent-secondary text-sm font-semibold hover:text-accent-tertiary transition-colors">Voir le site \u2192</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

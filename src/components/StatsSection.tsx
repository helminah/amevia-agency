import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { target: 50, suffix: '+', label: 'Projets livr\u00e9s' },
  { target: 6, suffix: '', label: 'Pays couverts' },
  { target: 180, suffix: '%', label: 'Visibilit\u00e9 moyenne' },
  { target: 25, suffix: 'K', label: 'Abonn\u00e9s g\u00e9n\u00e9r\u00e9s' },
]

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      document.querySelectorAll('.stat-num').forEach((el) => {
        const target = parseInt(el.getAttribute('data-target') || '0')
        gsap.from(el, {
          textContent: 0,
          duration: 2.5,
          ease: 'power2.out',
          snap: { textContent: 1 },
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
          onUpdate: function() {
            el.textContent = Math.round(parseFloat(el.textContent || '0')).toString()
          }
        })
        // Animate suffix separately to keep it from counting
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={ref} className="relative z-[2] py-16 px-6">
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center justify-around gap-8 md:gap-0 p-12 bg-white/[0.03] backdrop-blur-[24px] saturate-[180%] border border-white/[0.08] rounded-[28px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_20px_60px_rgba(0,0,0,0.2)]">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none">
              <span className="stat-num bg-clip-text text-transparent bg-gradient-to-br from-white to-accent-secondary" data-target={s.target}>0</span>
              <span className="text-accent-secondary text-[clamp(1.5rem,3vw,2rem)] font-bold">{s.suffix}</span>
            </div>
            <span className="block mt-2 text-white/65 text-sm">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

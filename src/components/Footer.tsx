import logo from '../assets/logo.png'
import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative z-[2] pt-20 pb-8 px-6 border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-5">
              <img src={logo} alt="AMEVIA" className="h-10 w-auto brightness-0 invert" />
              <span className="font-heading font-bold text-2xl text-white">AMEVIA</span>
            </a>
            <p className="text-white/50 text-sm leading-relaxed max-w-[340px]">Agence digitale full-service sp\u00e9cialis\u00e9e dans la cr\u00e9ation de sites web premium, le marketing sur les r\u00e9seaux sociaux et la publicit\u00e9 IA.</p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm mb-5">Navigation</h4>
            <ul className="space-y-3">
              {['Services','Portfolio','\u00c0 propos','Contact'].map(l => (
                <li key={l}><a href={`#${l.toLowerCase().replace(/\s/g,'')}`} className="text-white/50 text-sm hover:text-white transition-colors no-underline">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm mb-5">R\u00e9seaux</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-accent-secondary hover:border-accent-primary/30 transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-accent-secondary hover:border-accent-primary/30 transition-all"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-accent-secondary hover:border-accent-primary/30 transition-all"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-accent-secondary hover:border-accent-primary/30 transition-all"><Youtube size={18} /></a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/35 text-xs">\u00a9 2026 AMEVIA Agency. Tous droits r\u00e9serv\u00e9s.</p>
          <p className="text-white/35 text-xs">Con\u00e7u avec React 19, Three.js & WebGL.</p>
        </div>
      </div>
    </footer>
  )
}

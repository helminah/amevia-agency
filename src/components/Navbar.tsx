import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#about', label: '\u00c0 propos' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-5 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-[1200px] z-[100] px-7 py-3.5 rounded-[28px] transition-all duration-500 ${scrolled ? 'top-3 py-2.5 px-6 bg-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.3)]' : 'bg-white/[0.03] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_20px_40px_rgba(0,0,0,0.2)]'} backdrop-blur-[24px] saturate-[180%] border border-white/[0.08]`}>
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 text-white no-underline">
            <img src={logo} alt="AMEVIA" className="h-9 w-auto brightness-0 invert" />
            <span className="font-heading font-bold text-xl tracking-tight">AMEVIA</span>
          </a>
          <ul className="hidden md:flex list-none gap-8">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className="text-white/65 text-sm font-medium hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-accent-primary after:to-accent-secondary after:rounded-sm after:transition-all hover:after:w-full">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="hidden md:inline-flex px-5 py-2.5 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary text-white text-sm font-semibold shadow-[0_4px_20px_rgba(124,58,237,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(124,58,237,0.4)] transition-all">
            D\u00e9marrer un projet
          </a>
          <button className="md:hidden flex flex-col gap-1 p-1 bg-transparent border-none" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>
      </nav>
      <div className={`fixed inset-0 z-[99] bg-bg-secondary/95 backdrop-blur-[30px] flex flex-col items-center justify-center gap-8 transition-[right] duration-500 ${menuOpen ? 'right-0' : '-right-full'}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="font-heading text-3xl font-bold text-white hover:text-accent-secondary transition-colors no-underline">
            {l.label}
          </a>
        ))}
      </div>
    </>
  )
}

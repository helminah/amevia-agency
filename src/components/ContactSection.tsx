import { useState } from 'react'
import { Send, Mail, Phone, MapPin } from 'lucide-react'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', project: '', budget: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Mock backend call
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    }).catch(() => {})
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', project: '', budget: '', message: '' })
  }

  return (
    <section id="contact" className="relative z-[2] py-24 px-6 max-w-[1200px] mx-auto">
      <div className="text-center max-w-[700px] mx-auto mb-16">
        <span className="inline-block px-3.5 py-1.5 rounded-full bg-accent-primary/15 border border-accent-primary/30 text-accent-secondary text-xs font-semibold uppercase tracking-wider mb-5">Contact</span>
        <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-[-2px]">Pr\u00eat \u00e0<br /><span className="gradient-text">d\u00e9marrer ?</span></h2>
      </div>
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-10">
        <div className="glass-card p-10">
          <h3 className="font-heading text-2xl font-semibold mb-8">Discutons de votre projet</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/[0.05] flex items-center justify-center text-accent-secondary flex-shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <div className="text-sm text-white/50 mb-0.5">Email</div>
                <div className="text-sm font-medium">contact@amevia.agency</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/[0.05] flex items-center justify-center text-accent-secondary flex-shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <div className="text-sm text-white/50 mb-0.5">T\u00e9l\u00e9phone</div>
                <div className="text-sm font-medium">+221 77 XXX XX XX</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/[0.05] flex items-center justify-center text-accent-secondary flex-shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <div className="text-sm text-white/50 mb-0.5">Si\u00e8ge</div>
                <div className="text-sm font-medium">Dakar, S\u00e9n\u00e9gal</div>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="glass-card p-10">
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-xs font-medium text-white/70 mb-2">Nom complet</label>
              <input required value={form.name} onChange={e => setForm({...form,name:e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-xs font-medium text-white/70 mb-2">Email</label>
              <input required type="email" value={form.email} onChange={e => setForm({...form,email:e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all" placeholder="john@example.com" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-xs font-medium text-white/70 mb-2">Type de projet</label>
              <select value={form.project} onChange={e => setForm({...form,project:e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all appearance-none">
                <option value="" className="bg-bg-primary">Choisir...</option>
                <option value="site" className="bg-bg-primary">Site Web</option>
                <option value="social" className="bg-bg-primary">R\u00e9seaux Sociaux</option>
                <option value="ads" className="bg-bg-primary">Publicit\u00e9 IA</option>
                <option value="branding" className="bg-bg-primary">Branding Complet</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-white/70 mb-2">Budget estim\u00e9</label>
              <select value={form.budget} onChange={e => setForm({...form,budget:e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all appearance-none">
                <option value="" className="bg-bg-primary">Choisir...</option>
                <option value="500" className="bg-bg-primary">Moins de 500\u20ac</option>
                <option value="1000" className="bg-bg-primary">500\u20ac - 1 000\u20ac</option>
                <option value="2500" className="bg-bg-primary">1 000\u20ac - 2 500\u20ac</option>
                <option value="5000" className="bg-bg-primary">Plus de 2 500\u20ac</option>
              </select>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-xs font-medium text-white/70 mb-2">Parlez-nous de votre projet</label>
            <textarea required rows={4} value={form.message} onChange={e => setForm({...form,message:e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all resize-none" placeholder="Je souhaite cr\u00e9er un site pour..." />
          </div>
          <button type="submit" className="w-full py-3.5 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary text-white font-semibold text-sm shadow-[0_4px_24px_rgba(124,58,237,0.35)] hover:-translate-y-[2px] hover:shadow-[0_12px_40px_rgba(124,58,237,0.5)] transition-all flex items-center justify-center gap-2">
            {sent ? 'Message envoy\u00e9 !' : <>Envoyer <Send size={16} /></>}
          </button>
        </form>
      </div>
    </section>
  )
}

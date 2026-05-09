import { useState } from 'react'

const links = ['About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/90 backdrop-blur border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#hero" className="font-bold text-lg tracking-tight" style={{ fontFamily: 'Space Grotesk' }}>
          Srujana.dev
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="hover:text-white transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col items-center gap-4 py-4 text-gray-300 border-t border-gray-800">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="hover:text-white">
                {l}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
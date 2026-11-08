import { useState } from 'react'
import { nav, profile } from '../data'
import { Logo } from './ui'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const left = nav.slice(0, 3)
  const right = nav.slice(3)

  const link = (item) => (
    <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm text-white/80 transition-colors hover:text-brand">
      {item.label}
    </a>
  )

  return (
    <header className="sticky top-3 z-50 px-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-ink px-5 py-3 shadow-lg md:px-8">
        <div className="hidden flex-1 gap-8 md:flex">{left.map(link)}</div>
        <Logo name={profile.firstName} dark />
        <div className="hidden flex-1 justify-end gap-8 md:flex">{right.map(link)}</div>

        <button
          className="grid size-9 place-items-center rounded-full bg-white/10 text-white md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 flex max-w-6xl flex-col gap-4 rounded-3xl bg-ink p-6 md:hidden">{nav.map(link)}</div>
      )}
    </header>
  )
}

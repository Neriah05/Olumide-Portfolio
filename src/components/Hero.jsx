import { useState } from 'react'
import { heroStats, profile } from '../data'
import { Arrow } from './ui'

export function Portrait({ className = '', initialsClass = 'mb-28 text-6xl sm:text-8xl' }) {
  const [failed, setFailed] = useState(false)
  if (failed || !profile.photo) {
    return (
      <div className={`flex items-end justify-center ${className}`}>
        <span className={`font-display font-bold leading-none text-white/90 ${initialsClass}`}>
          {profile.fullName.split(' ').map((n) => n[0]).join('')}
        </span>
      </div>
    )
  }
  return <img src={profile.photo} alt={profile.fullName} onError={() => setFailed(true)} className={`object-contain object-bottom ${className}`} />
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pt-14">
      <div className="mx-auto max-w-6xl text-center">
        <span className="inline-block rounded-full border border-ink px-4 py-1 text-sm">Hello!</span>
        <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
          I'm <span className="text-brand">{profile.firstName},</span>
          <br />
          {profile.role}
        </h1>
      </div>

      <div className="relative mx-auto mt-6 grid max-w-6xl items-end gap-8 md:grid-cols-[1fr_auto_1fr]">
        {/* left column */}
        <div className="order-2 md:pb-16 text-center md:order-1 md:text-left">
          <svg viewBox="0 0 24 24" className="mx-auto size-7 text-ink md:mx-0" fill="currentColor" aria-hidden="true">
            <path d="M4 18v-5.2C4 8.6 6.3 6 10 5l.6 1.4C8.4 7.3 7.3 9 7.3 11H10v7H4Zm10 0v-5.2C14 8.6 16.3 6 20 5l.6 1.4C18.4 7.3 17.3 9 17.3 11H20v7h-6Z" />
          </svg>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink/70 max-md:mx-auto">{profile.intro}</p>
          <p className="mt-8 font-display text-3xl font-semibold">{heroStats.left.value}</p>
          <p className="text-sm text-ink/60">{heroStats.left.label}</p>
        </div>

        {/* portrait */}
        <div className="relative order-1 mx-auto w-[min(88vw,30rem)] md:order-2">
          <div className="absolute inset-x-0 bottom-0 aspect-[2/1] rounded-t-full bg-brand" />
          <Portrait className="relative z-10 mx-auto h-[20rem] w-full sm:h-[30rem]" />
          <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2 rounded-full border border-white/40 bg-white/15 p-1.5 backdrop-blur-md">
            <a href="#projects" className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-dark">
              Portfolio <Arrow />
            </a>
            <a href="#contact" className="whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium text-white hover:bg-white/20">
              Hire Me
            </a>
          </div>
        </div>

        {/* right column */}
        <div className="order-3 pb-4 md:pb-16 text-center md:text-right">
          <div className="text-brand" aria-hidden="true">★★★★★</div>
          <p className="font-display text-3xl font-semibold">{heroStats.right.value}</p>
          <p className="text-sm text-ink/60">{heroStats.right.label}</p>
          <div className="mt-4 h-px w-32 bg-ink/30 max-md:mx-auto md:ml-auto" />
        </div>
      </div>
    </section>
  )
}

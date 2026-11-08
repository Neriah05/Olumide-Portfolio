import { nav, profile } from '../data'
import { Arrow, Button, Logo, SocialIcon } from './ui'

export default function Footer() {
  return (
    <footer className="rounded-t-[2.5rem] bg-ink px-4 pb-8 pt-14 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Let's Connect there</h2>
          <Button href={`mailto:${profile.email}`}>Hire me <Arrow /></Button>
        </div>

        <div className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr]">
          <div>
            <Logo name={profile.firstName} dark />
            <p className="mt-4 max-w-xs text-sm text-white/60">{profile.intro}</p>
            <div className="mt-5 flex gap-3">
              <SocialIcon name="github" href={profile.socials.github} />
              <SocialIcon name="linkedin" href={profile.socials.linkedin} />
            </div>
          </div>
          <div>
            <h3 className="font-medium text-brand">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {nav.map((n) => (
                <li key={n.href}><a href={n.href} className="hover:text-white">{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-brand">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><a href={profile.phoneHref} className="hover:text-white">{profile.phone}</a></li>
              <li><a href={`mailto:${profile.email}`} className="break-all hover:text-white">{profile.email}</a></li>
              <li>{profile.location}</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-brand">Grab my CV</h3>
            <p className="mt-4 text-sm text-white/70">The one-page version of everything above.</p>
            <a href={profile.resume} download className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink hover:bg-brand hover:text-white">
              Download CV <Arrow />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-2 border-t border-white/15 pt-6 text-xs text-white/50">
          <p>© {new Date().getFullYear()} <span className="text-brand">{profile.fullName}</span>. All rights reserved.</p>
          <p>Built with React, Vite & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}

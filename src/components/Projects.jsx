import { useState } from 'react'
import { profile, projects } from '../data'
import { Arrow, Button, Reveal, SectionTitle } from './ui'

function Preview({ project }) {
  const host = project.url ? new URL(project.url).hostname.replace('www.', '') : 'personal project'
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="flex items-center gap-2 border-b border-ink/10 px-3 py-2">
        <span className="size-2 rounded-full bg-red-400" />
        <span className="size-2 rounded-full bg-amber-400" />
        <span className="size-2 rounded-full bg-green-400" />
        <span className="ml-2 truncate rounded-full bg-mist px-3 py-0.5 text-[11px] text-ink/60">{host}</span>
      </div>
      {project.image ? (
        <div className="relative flex-1 overflow-hidden">
          <img src={project.image} alt={`${project.title} homepage`} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top" />
        </div>
      ) : (
        <div className="relative flex flex-1 flex-col justify-end overflow-hidden p-6" style={{ background: `linear-gradient(135deg, ${project.accent}22, ${project.accent}66)` }}>
          <div className="absolute -right-10 -top-10 size-40 rounded-full opacity-40" style={{ background: project.accent }} />
          <div className="absolute right-6 top-8 w-2/5 space-y-2">
            <div className="h-3 rounded bg-white/80" />
            <div className="h-3 w-3/4 rounded bg-white/60" />
            <div className="h-16 rounded-lg bg-white/70" />
          </div>
          <p className="relative font-display text-2xl font-semibold text-ink">{project.title}</p>
          <p className="relative text-sm text-ink/60">{project.tags.join(' · ')}</p>
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  const [index, setIndex] = useState(0)
  const count = projects.length
  const go = (d) => setIndex((i) => (i + d + count) % count)
  const visible = [projects[index], projects[(index + 1) % count]]
  const current = projects[index]

  return (
    <section id="projects" className="scroll-mt-24 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex items-end justify-between gap-4">
          <SectionTitle lead="Let's Have a Look at my" accent="Portfolio" className="max-w-sm" />
          <Button href={profile.socials.github} target="_blank" rel="noreferrer">
            See More <Arrow />
          </Button>
        </Reveal>

        <div className="relative mt-10">
          <div className="grid gap-6 md:grid-cols-2">
            {visible.map((p, i) => (
              <a
                key={p.title}
                href={p.url || profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className={`block h-72 overflow-hidden rounded-3xl border border-ink/10 shadow-sm transition-transform hover:-translate-y-1 ${i === 1 ? 'max-md:hidden' : ''}`}
              >
                <Preview project={p} />
              </a>
            ))}
          </div>
          <button onClick={() => go(-1)} aria-label="Previous project" className="absolute -left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-ink text-white shadow-lg hover:bg-brand md:-left-5">
            <Arrow className="size-5 -rotate-[135deg]" />
          </button>
          <button onClick={() => go(1)} aria-label="Next project" className="absolute -right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-brand text-white shadow-lg hover:bg-brand-dark md:-right-5">
            <Arrow className="size-5 rotate-45" />
          </button>
        </div>

        <div className="mt-8 text-center" aria-live="polite">
          <div className="flex flex-wrap justify-center gap-2">
            {current.tags.map((t) => (
              <span key={t} className="rounded-full border border-ink/15 px-4 py-1 text-xs text-ink/70">{t}</span>
            ))}
          </div>
          <h3 className="mt-4 flex items-center justify-center gap-2 font-display text-2xl font-semibold">
            {current.title}
            {current.url && (
              <a href={current.url} target="_blank" rel="noreferrer" aria-label={`Visit ${current.title}`} className="grid size-8 place-items-center rounded-full bg-brand text-white">
                <Arrow />
              </a>
            )}
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-ink/70">{current.text}</p>
          <div className="mt-6 flex justify-center gap-2">
            {projects.map((p, i) => (
              <button key={p.title} onClick={() => setIndex(i)} aria-label={`Show ${p.title}`} className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-brand' : 'w-2 bg-ink/20'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
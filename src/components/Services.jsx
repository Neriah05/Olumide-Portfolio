import { services } from '../data'
import { Arrow, Reveal, SectionTitle } from './ui'

function MockScreen({ index, active }) {
  // Simple illustrated "screens" so the cards look alive without screenshots.
  const bar = active ? 'bg-white/70' : 'bg-ink/15'
  return (
    <div className="relative mx-4 mt-5 h-44 overflow-hidden rounded-t-2xl bg-white/90 p-3 shadow-inner">
      <div className="mb-2 flex gap-1">
        <span className="size-2 rounded-full bg-red-400" />
        <span className="size-2 rounded-full bg-amber-400" />
        <span className="size-2 rounded-full bg-green-400" />
      </div>
      {index === 0 && (
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2 h-16 rounded-lg bg-brand/80" />
          <div className="h-16 rounded-lg bg-ink/10" />
          <div className="h-10 rounded-lg bg-ink/10" />
          <div className="h-10 rounded-lg bg-ink/10" />
          <div className="h-10 rounded-lg bg-ink/10" />
        </div>
      )}
      {index === 1 && (
        <div className="space-y-2">
          <div className="h-3 w-2/3 rounded bg-ink/20" />
          <div className="grid grid-cols-4 gap-2">
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`h-9 rounded-md ${i % 3 === 0 ? 'bg-brand/70' : 'bg-ink/10'}`} />
            ))}
          </div>
          <div className="h-6 w-1/3 rounded-full bg-ink/80" />
        </div>
      )}
      {index === 2 && (
        <div className="flex gap-2">
          <div className="w-1/3 space-y-1.5 rounded-lg bg-ink/90 p-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`h-2 rounded ${i === 1 ? 'bg-brand' : 'bg-white/30'}`} />
            ))}
          </div>
          <div className="flex-1 space-y-2">
            <div className="h-3 w-1/2 rounded bg-ink/20" />
            <div className="h-14 rounded-lg bg-ink/10" />
            <div className="font-mono text-[10px] leading-tight text-ink/50">{'add_action( \'init\', … );'}</div>
          </div>
        </div>
      )}
      <div className={`absolute bottom-0 left-0 h-1 w-full ${bar}`} />
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 rounded-t-[2.5rem] bg-panel px-4 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col justify-between gap-4 border-b border-white/15 pb-6 md:flex-row md:items-end">
          <SectionTitle lead="My" accent="Services" dark />
          <p className="max-w-sm text-sm text-white/60">What I can build for you, from the first layout to the last plugin hook.</p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              className={`group relative overflow-hidden rounded-3xl transition-colors ${i === 1 ? 'bg-brand' : 'bg-panel-2 hover:bg-brand'}`}
            >
              <div className="p-6 pb-0">
                <h3 className="font-display text-xl font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-white/75">{s.text}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/15 px-3 py-1 text-xs">{t}</span>
                  ))}
                </div>
              </div>
              <MockScreen index={i} active={i === 1} />
              <a href="#contact" aria-label={`Hire me for ${s.title}`} className="absolute bottom-4 right-4 grid size-12 place-items-center rounded-full bg-ink text-white transition-transform group-hover:rotate-45">
                <Arrow className="size-5" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

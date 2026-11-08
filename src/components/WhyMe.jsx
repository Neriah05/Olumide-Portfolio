import { profile, whyMe } from '../data'
import { Portrait } from './Hero'
import { Button, Reveal } from './ui'

export default function WhyMe() {
  return (
    <section className="px-4">
      <div className="mx-auto grid max-w-6xl items-center gap-12 rounded-[2.5rem] bg-mist px-6 py-14 md:grid-cols-2 md:px-14">
        <Reveal className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-full bg-brand">
          <Portrait className="absolute inset-0 h-full w-full !items-center" initialsClass="text-8xl" />
        </Reveal>
        <Reveal>
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Why You <span className="text-brand">Hire Me</span> for Your Next Project?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/70">{whyMe.text}</p>
          <div className="mt-8 flex gap-12">
            {whyMe.stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-semibold">{s.value}</p>
                <p className="text-sm text-ink/60">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#contact">Hire Me</Button>
            <Button href={profile.resume} variant="outline" download>Download CV</Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

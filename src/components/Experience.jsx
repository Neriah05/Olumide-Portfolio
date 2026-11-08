import { certification, experience } from '../data'
import { Reveal } from './ui'

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal as="h2" className="text-center font-display text-3xl font-semibold sm:text-4xl">
          My Work <span className="text-brand">Experience</span>
        </Reveal>

        <div className="relative mt-14 space-y-12">
          <div className="absolute bottom-2 left-[9px] top-2 border-l-2 border-dashed border-ink/20 md:left-1/2 md:-translate-x-1/2" />
          {experience.map((job, i) => (
            <Reveal key={job.company} className="relative grid gap-2 pl-10 md:grid-cols-2 md:gap-16 md:pl-0">
              <span
                className={`absolute left-0 top-1 grid size-5 place-items-center rounded-full border-2 bg-white md:left-1/2 md:-translate-x-1/2 ${i % 2 ? 'border-ink' : 'border-brand'}`}
              >
                <span className={`size-2.5 rounded-full ${i % 2 ? 'bg-ink' : 'bg-brand'}`} />
              </span>
              <div className="md:text-right">
                <h3 className="font-display text-xl font-semibold">{job.company}</h3>
                <p className="text-sm text-ink/60">{job.period} · {job.meta}</p>
              </div>
              <div>
                <h4 className="font-display text-xl font-semibold">{job.role}</h4>
                <p className="mt-1 text-sm leading-relaxed text-ink/70">{job.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-14 flex max-w-md items-center gap-4 rounded-2xl border border-ink/10 p-5">
          <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand/10 text-xl text-brand" aria-hidden="true">🎓</span>
          <div>
            <p className="font-display font-semibold">{certification.title}</p>
            <p className="text-sm text-ink/60">{certification.issuer} · {certification.period}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

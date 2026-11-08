import { skills } from '../data'
import { Reveal } from './ui'

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 rounded-[2.5rem] bg-panel px-4 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
            The Tools Behind <span className="text-brand">My Results</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-white/60">The stack I use day to day to design, build, debug and ship.</p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((g) => (
            <Reveal key={g.group} className="rounded-3xl bg-panel-2 p-6">
              <h3 className="font-display text-lg font-medium text-brand">{g.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="rounded-full bg-white/10 px-3 py-1.5 text-sm">{s}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

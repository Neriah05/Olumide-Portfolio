import { useState } from 'react'
import { marquee, profile } from '../data'
import { Reveal } from './ui'

export function Marquee() {
  const items = [...marquee, ...marquee]
  return (
    <div className="relative -mx-4 my-16 overflow-hidden py-6" aria-hidden="true">
      <div className="absolute inset-x-0 top-1/2 h-14 -translate-y-1/2 rotate-2 bg-brand/90" />
      <div className="relative -rotate-2 bg-white py-3 shadow-md">
        <div className="animate-marquee flex w-max gap-6 whitespace-nowrap font-display text-2xl font-medium sm:text-3xl">
          {items.map((t, i) => (
            <span key={i} className="flex items-center gap-6">
              {t} <span className="text-brand">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Contact() {
  const [message, setMessage] = useState('')


const submit = (e) => {
  e.preventDefault()

  const body = encodeURIComponent(
    message || 'Hi, I have a project I would like to discuss.'
  )

  window.location.href =
    `mailto:ayeromara12@gmail.com?subject=${encodeURIComponent('Project enquiry')}&body=${body}`
}


  return (
    <section id="contact" className="scroll-mt-24 px-4 pt-20">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
          Have An Awesome Project Idea? <span className="text-brand">Let's Discuss</span>
        </h2>
        <form onSubmit={submit} className="mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-full border border-ink/15 p-1.5 pl-5 shadow-sm focus-within:border-brand">
          <span className="text-brand" aria-hidden="true">✉</span>
          <label htmlFor="msg" className="sr-only">Tell me about your project</label>
          <input
            id="msg"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me about your project…"
            className="min-w-0 flex-1 bg-transparent py-2 text-sm outline-none"
          />
          <button className="shrink-0 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-dark">Send</button>
        </form>
        <ul className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-ink/70">
          {['Open to full-time roles', 'Remote-ready', 'ALX certified'].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <span className="text-brand">✔</span> {t}
            </li>
          ))}
        </ul>
      </Reveal>
      <Marquee />
    </section>
  )
}

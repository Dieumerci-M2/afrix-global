"use client"

import type React from "react"
import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-sm border border-border bg-card p-10">
        <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-primary">
          <CheckCircle2 className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-xl font-bold tracking-tight text-foreground">Message received</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Thank you for reaching out to Afrix Global. Our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-2 rounded-sm border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-sm border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="name">
          <input id="name" name="name" required className={inputClass} placeholder="Your name" />
        </Field>
        <Field label="Email" htmlFor="email">
          <input id="email" name="email" type="email" required className={inputClass} placeholder="you@email.com" />
        </Field>
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field label="Organization" htmlFor="org">
          <input id="org" name="org" className={inputClass} placeholder="Company / NGO (optional)" />
        </Field>
        <Field label="Subject" htmlFor="subject">
          <input id="subject" name="subject" required className={inputClass} placeholder="How can we help?" />
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Message" htmlFor="message">
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={`${inputClass} resize-none`}
            placeholder="Tell us about your project, goals, or questions..."
          />
        </Field>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-sm bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
      >
        Send Message
      </button>
    </form>
  )
}

const inputClass =
  "w-full rounded-sm border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary"

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </label>
      {children}
    </div>
  )
}

'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { CheckCircle2, AlertCircle } from 'lucide-react'
import { submitContact, type ContactState } from '@/app/contact/actions'

const initialState: ContactState = { status: 'idle', message: '' }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-md bg-navy px-8 py-3 font-heading text-lg font-bold uppercase tracking-wide text-navy-foreground transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  )
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState)

  return (
    <form action={formAction} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block font-heading text-sm font-bold uppercase tracking-wide text-navy">
          Your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-md border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-sky focus:ring-2 focus:ring-sky/40"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block font-heading text-sm font-bold uppercase tracking-wide text-navy">
          Your Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-md border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-sky focus:ring-2 focus:ring-sky/40"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block font-heading text-sm font-bold uppercase tracking-wide text-navy">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-md border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-sky focus:ring-2 focus:ring-sky/40"
        />
      </div>

      {state.status === 'success' && (
        <p className="flex items-center gap-2 rounded-md bg-sky/20 px-4 py-3 text-sm font-medium text-navy">
          <CheckCircle2 className="h-5 w-5 shrink-0" /> {state.message}
        </p>
      )}
      {state.status === 'error' && (
        <p className="flex items-center gap-2 rounded-md bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive">
          <AlertCircle className="h-5 w-5 shrink-0" /> {state.message}
        </p>
      )}

      <SubmitButton />
    </form>
  )
}

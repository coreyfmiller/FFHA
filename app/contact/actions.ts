'use server'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (!name) {
    return { status: 'error', message: 'Please enter your name.' }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: 'error', message: 'Please enter a valid email.' }
  }
  if (!message) {
    return { status: 'error', message: 'Please enter a message.' }
  }

  // In production, wire this up to an email service or database.
  console.log('[v0] Contact form submission:', { name, email, message })

  return {
    status: 'success',
    message: 'Thanks for your message! We\u2019ll be in touch soon.',
  }
}

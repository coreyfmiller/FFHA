import type { Metadata } from 'next'
import { PageBanner } from '@/components/page-banner'
import { ContactForm } from '@/components/contact-form'
import { Mail, MapPin, ClipboardCheck } from 'lucide-react'
import { FacebookIcon } from '@/components/icons/facebook'
import { FACEBOOK_URL, REGISTER_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact | Fundy Female Hockey Association',
  description:
    'Get in touch with the Fundy Female Hockey Association for questions about registration, transfers, tryouts, and the Fundy Kraken.',
}

const contactMethods = [
  {
    icon: Mail,
    label: 'Registrar',
    value: 'kraken.ffharegistrar@gmail.com',
    href: 'mailto:kraken.ffharegistrar@gmail.com',
  },
  {
    icon: Mail,
    label: 'Elite (AAA) Treasurer',
    value: 'ffhatreasureelite@gmail.com',
    href: 'mailto:ffhatreasureelite@gmail.com',
  },
  {
    icon: Mail,
    label: 'Treasurer (AA)',
    value: 'ffhatreasurer2025@gmail.com',
    href: 'mailto:ffhatreasurer2025@gmail.com',
  },
]

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle={"We\u2019d love to hear from you. Reach out with any questions."}
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-extrabold uppercase tracking-wide text-navy">
              Send us a message
            </h2>
            <p className="mt-2 text-muted-foreground">
              Fill out the form below and a member of our team will get back to you soon.
            </p>
            <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <ContactForm />
            </div>
          </div>

          <div>
            <h2 className="font-heading text-3xl font-extrabold uppercase tracking-wide text-navy">
              Get in touch
            </h2>
            <p className="mt-2 text-muted-foreground">
              Prefer to email directly? Use the right contact for your question.
            </p>

            <div className="mt-8 space-y-4">
              {contactMethods.map((method) => {
                const Icon = method.icon
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-sky"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-navy-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-heading text-sm font-bold uppercase tracking-wide text-navy">
                        {method.label}
                      </span>
                      <span className="block truncate text-sm text-muted-foreground">
                        {method.value}
                      </span>
                    </span>
                  </a>
                )
              })}

              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-navy-foreground">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-heading text-sm font-bold uppercase tracking-wide text-navy">
                    Region
                  </span>
                  <span className="block text-sm text-muted-foreground">
                    Fundy Zone 4 &middot; St. Stephen to Sussex, New Brunswick
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-sky px-6 py-3 font-heading text-lg font-bold uppercase tracking-wide text-sky-foreground transition-transform hover:scale-105"
              >
                <ClipboardCheck className="h-5 w-5" /> Register
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-navy px-6 py-3 font-heading text-lg font-bold uppercase tracking-wide text-navy transition-colors hover:bg-navy hover:text-navy-foreground"
              >
                <FacebookIcon className="h-5 w-5" /> Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

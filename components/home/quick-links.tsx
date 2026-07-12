import Link from 'next/link'
import { Info, ClipboardCheck, Mail, ArrowUpRight } from 'lucide-react'

const links = [
  {
    title: 'About Us',
    description: 'Our mission, the Kraken, and who we serve across Zone 4.',
    href: '/about',
    icon: Info,
  },
  {
    title: 'Register to Play',
    description: 'Season fees, divisions, and how to sign up for 2025-2026.',
    href: '/register',
    icon: ClipboardCheck,
  },
  {
    title: 'Contact Us',
    description: 'Questions about registration, transfers, or tryouts? Reach out.',
    href: '/contact',
    icon: Mail,
  },
]

export function QuickLinks() {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <div className="mx-auto h-1 w-16 bg-sky" />
          <h2 className="mt-4 font-heading text-3xl font-extrabold uppercase tracking-wide text-navy sm:text-4xl">
            Quick Links
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-sky hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-navy-foreground">
                    <Icon className="h-6 w-6" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-sky" />
                </div>
                <h3 className="mt-5 font-heading text-2xl font-bold uppercase tracking-wide text-navy">
                  {link.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {link.description}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

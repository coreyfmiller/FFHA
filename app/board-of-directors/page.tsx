import type { Metadata } from 'next'
import { PageBanner } from '@/components/page-banner'
import { Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Board of Directors | Fundy Female Hockey Association',
  description:
    'Meet the 2025-2026 FFHA Board of Directors leading the Fundy Female Hockey Association.',
}

const boardMembers = [
  { name: 'Matt Manderson', role: 'President', email: 'president.ffha@gmail.com' },
  { name: 'Tina Sewell', role: 'Vice President', email: 'ffha.vicepresident@gmail.com' },
  { name: 'April Gleeton', role: 'Treasurer', email: 'ffhatreasurer2025@gmail.com' },
  { name: 'Mike Cormier', role: 'Director of Operations', email: 'ffha.hockeyops@gmail.com' },
  { name: 'Ocean Peters', role: 'Registrar', email: 'kraken.ffharegistrar@gmail.com' },
  { name: 'Jill Mantle', role: 'Director of Divisions', email: 'ffha.directorofdiv@gmail.com' },
  { name: 'Jennifer Cogswell-Donovan', role: 'Secretary', email: 'secretary.ffha@gmail.com' },
  { name: 'Angela Langille', role: 'Director of Ice', email: 'ffha.ice@gmail.com' },
]

export default function BoardOfDirectorsPage() {
  return (
    <>
      <PageBanner
        title="Board of Directors"
        subtitle="2025-2026 FFHA Board Members"
      />

      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {boardMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-navy">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-sky">{member.role}</p>
              <a
                href={`mailto:${member.email}`}
                className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-navy"
              >
                <Mail className="h-4 w-4" />
                {member.email}
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

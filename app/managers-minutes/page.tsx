import type { Metadata } from 'next'
import { PageBanner } from '@/components/page-banner'
import { FileText, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: "Manager's Minutes | Fundy Female Hockey Association",
  description:
    'Resources for FFHA team managers — meeting slides, forms, travel permits, and more.',
}

const documents = [
  {
    title: 'HNB Operations Manual',
    description: 'Refer to Section 19 — AFFILIATION.',
    href: 'https://www.hnb.ca/',
    external: true,
  },
  {
    title: 'FFHA Jersey Tracking Form',
    description: 'Track jersey assignments for your team.',
    href: '/documents/FFHA-JERSEY-TRACKING-FORM-2.pdf',
    external: false,
  },
  {
    title: 'FFHA Roster Form',
    description: 'Official team roster submission form (2025-2026).',
    href: '/documents/FFHA 2025_2026.xlsx',
    external: false,
  },
  {
    title: 'Travel Permit',
    description: 'Required for out-of-province travel.',
    href: '/documents/travel_permit.doc',
    external: false,
  },
  {
    title: 'Budget Form',
    description: 'Team budget tracking template.',
    href: '/documents/Blank_budget.xlsx',
    external: false,
  },
  {
    title: 'Sponsorship Letter',
    description: 'Template letter for approaching sponsors.',
    href: '/documents/FFHA_Sponsorship_letter_-_2024-2025.docx',
    external: false,
  },
]

export default function ManagersMinutesPage() {
  return (
    <>
      <PageBanner
        title="Manager's Minutes"
        subtitle="Documents and forms for FFHA team managers."
      />

      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {documents.map((doc) => (
            <div
              key={doc.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <FileText className="mt-0.5 h-5 w-5 shrink-0 text-sky" />
                <div>
                  <h3 className="font-heading text-base font-bold uppercase tracking-wide text-navy">
                    {doc.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{doc.description}</p>
                  <a
                    href={doc.href}
                    target={doc.external ? '_blank' : undefined}
                    rel={doc.external ? 'noopener noreferrer' : undefined}
                    download={!doc.external ? '' : undefined}
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-sky"
                  >
                    <Download className="h-4 w-4" />
                    {doc.external ? 'View Document' : 'Download'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import { PageBanner } from '@/components/page-banner'
import { FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: "Manager's Minutes | Fundy Female Hockey Association",
  description:
    'Resources for FFHA team managers — meeting slides, forms, travel permits, and more.',
}

const documents = [
  {
    title: "Manager's Meeting Slides - 2024/2025",
    description: 'Slides from the annual managers meeting.',
  },
  {
    title: 'HNB Operations Manual',
    description: 'Refer to Section 19 — AFFILIATION.',
    href: 'https://www.hnb.ca/',
  },
  {
    title: 'FFHA Jersey Tracking Form',
    description: 'Track jersey assignments for your team.',
  },
  {
    title: 'FFHA Roster Form',
    description: 'Official team roster submission form.',
  },
  {
    title: 'Travel Permit',
    description: 'Required for out-of-province travel.',
  },
  {
    title: 'Budget Form',
    description: 'Team budget tracking template.',
  },
  {
    title: 'Sponsorship Letter',
    description: 'Template letter for approaching sponsors.',
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
                  {doc.href && (
                    <a
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm font-semibold text-navy transition-colors hover:text-sky"
                    >
                      View Document →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

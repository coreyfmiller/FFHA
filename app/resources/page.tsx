import type { Metadata } from 'next'
import { PageBanner } from '@/components/page-banner'
import { FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resources | Fundy Female Hockey Association',
  description:
    'Resources and documents for FFHA members, including AGM minutes and governance documents.',
}

export default function ResourcesPage() {
  return (
    <>
      <PageBanner
        title="Resources"
        subtitle="Documents and resources for FFHA members."
      />

      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-sky" />
            <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-navy">
              Annual General Meeting — 2023-24
            </h3>
          </div>
          <p className="mt-3 text-muted-foreground">
            Minutes and materials from the FFHA Annual General Meeting for the 2023-24
            season.
          </p>
        </div>
      </section>
    </>
  )
}

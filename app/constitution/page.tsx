import type { Metadata } from 'next'
import { PageBanner } from '@/components/page-banner'
import { FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FFHA Constitution | Fundy Female Hockey Association',
  description:
    'The official constitution of the Fundy Female Hockey Association, updated May 2026.',
}

export default function ConstitutionPage() {
  return (
    <>
      <PageBanner
        title="FFHA Constitution"
        subtitle="Our governing document."
      />

      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-sky" />
            <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-navy">
              Our Updated Constitution — May 2026
            </h3>
          </div>
          <p className="mt-3 text-muted-foreground">
            The FFHA Constitution outlines the governance structure, membership
            requirements, and operational policies of the Fundy Female Hockey Association.
          </p>
          <a
            href="/documents/FFHA-Constitution-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 font-heading text-lg font-bold uppercase tracking-wide text-navy-foreground transition-transform hover:scale-105"
          >
            <FileText className="h-5 w-5" />
            View Constitution (PDF)
          </a>
        </div>
      </section>
    </>
  )
}

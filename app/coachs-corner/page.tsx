import type { Metadata } from 'next'
import { PageBanner } from '@/components/page-banner'
import { FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: "Coach's Corner | Fundy Female Hockey Association",
  description:
    'Coaching resources for FFHA coaches — U7/U9 reference guides and playing rules.',
}

const resources = [
  {
    title: 'U7/U9 HNB Reference Guide',
    description: 'Questions about the FFHA U7/U9 programs? We have your answers here.',
    href: 'https://www.hnb.ca/en/minor-hockey/initiation-program',
  },
  {
    title: 'U9 Playing Rules',
    description: 'Official U9 playing rules for the current season.',
    href: 'https://www.hnb.ca/en/minor-hockey/initiation-program',
  },
]

export default function CoachsCornerPage() {
  return (
    <>
      <PageBanner
        title="Coach's Corner"
        subtitle="Resources and guides for FFHA coaches."
      />

      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="space-y-6">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-navy">
                {resource.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{resource.description}</p>
              <a
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 font-semibold text-navy transition-colors hover:text-sky"
              >
                <FileText className="h-4 w-4" />
                Click Here
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import { PageBanner } from '@/components/page-banner'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Volunteer | Fundy Female Hockey Association',
  description:
    'Volunteer with the Fundy Female Hockey Association — coaching and volunteer opportunities for the 2025-2026 season.',
}

export default function VolunteerPage() {
  return (
    <>
      <PageBanner
        title="Volunteer"
        subtitle="Help us grow the female game in the Fundy region."
      />

      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="space-y-8">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-navy">
              Coaching Applications
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We are now taking FFHA Coaching applications for the 2025-2026 hockey
              season. We hope to hear from you!
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe6_T0m6MF2qrgxQ8q_Kb_OTveLWdj087cbVkukiT2hDeXbqw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 font-heading text-lg font-bold uppercase tracking-wide text-navy-foreground transition-transform hover:scale-105"
            >
              Apply Now to be a Coach <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-navy">
              Volunteer Opportunities
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Volunteers are critical to our accomplishments and our vision for the
              future. FFHA is fortunate to have an energetic and engaged membership, whose
              volunteer efforts will support our organization in the right direction. As
              our association grows, we will continue to expand and improve our volunteer
              opportunities and create an environment where volunteers feel they belong.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfZn7SvnS-kCb6VWh9rpPFF28OfnezQhwmctFnbrJOQnYKfiQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-sky px-6 py-3 font-heading text-lg font-bold uppercase tracking-wide text-sky-foreground transition-transform hover:scale-105"
            >
              Apply Now to be a Volunteer <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

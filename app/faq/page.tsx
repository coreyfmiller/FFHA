import type { Metadata } from 'next'
import { PageBanner } from '@/components/page-banner'

export const metadata: Metadata = {
  title: 'FAQ | Fundy Female Hockey Association',
  description:
    'Frequently asked questions about the Fundy Female Hockey Association, team structures, and leagues.',
}

const faqs = [
  {
    question: 'WHERE are our teams playing and WHO are they playing?',
    answer: null,
    subsections: [
      {
        title: 'Recreation Teams (formerly known as "house")',
        text: 'FFHA Recreation Teams will participate in the NB Provincial League. Teams will play female teams in their same division (U11A plays vs U11A, U13A plays vs U13A etc).',
      },
      {
        title: 'Competitive Teams — U11 AA, U13 AA, U15 AA (formerly known as "rep")',
        text: 'FFHA Competitive teams will be playing in the Southern NB Minor Hockey League (SNBMHL), in the COED division.',
      },
    ],
  },
  {
    question: 'How will the Provincial League be set up?',
    answer:
      'Details on the Provincial League structure are determined by Hockey New Brunswick each season. Contact the board for current season specifics.',
  },
  {
    question: 'How much travel will teams face?',
    answer:
      'Travel varies by division and the teams placed in your group. As a Zone 4 association covering St. Stephen to Sussex, games may be played throughout the province for competitive teams, while recreation teams generally travel within the western zone.',
  },
  {
    question: 'Will the Western zone ever play vs Eastern Zone?',
    answer:
      'Provincial championship play and select tournament events may include cross-zone matchups. Regular season scheduling is managed by HNB.',
  },
  {
    question: "What is the refund policy?",
    answer:
      'Refund requests should be directed to the FFHA Treasurer. Policies may vary by timing and circumstance — please contact the board for details.',
  },
]

export default function FAQPage() {
  return (
    <>
      <PageBanner
        title="FAQ"
        subtitle="Answers to commonly asked questions about FFHA."
      />

      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="space-y-8">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-navy">
                {faq.question}
              </h3>
              {faq.answer && (
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              )}
              {faq.subsections && (
                <div className="mt-4 space-y-4">
                  {faq.subsections.map((sub) => (
                    <div key={sub.title}>
                      <h4 className="font-heading text-base font-bold text-navy">
                        {sub.title}
                      </h4>
                      <p className="mt-1 leading-relaxed text-muted-foreground">
                        {sub.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

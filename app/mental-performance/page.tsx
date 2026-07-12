import type { Metadata } from 'next'
import { PageBanner } from '@/components/page-banner'

export const metadata: Metadata = {
  title: 'Mental Performance | Fundy Female Hockey Association',
  description:
    'FFHA partners with Ashley Duguay, Mental Performance Consultant, to support athlete mental wellness and performance.',
}

export default function MentalPerformancePage() {
  return (
    <>
      <PageBanner
        title="Mental Performance"
        subtitle="Supporting athlete mental wellness and peak performance."
      />

      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.fundyfemalehockey.ca/wp-content/uploads/sites/2776/2022/01/Ashley-Duguay-2-300x200.jpg"
                alt="Ashley Duguay, Mental Performance Consultant"
                className="h-auto w-full rounded-xl object-cover md:w-64"
              />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-navy">
                Ashley Duguay
              </h2>
              <p className="mt-1 font-medium text-sky">
                Mental Performance Consultant — Team First Consulting
              </p>
              <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  The Fundy Female Hockey Association is very happy to be working with
                  Ashley Duguay, Mental Performance Consultant at Team First Consulting.
                </p>
                <p>
                  Ashley Duguay holds a PhD from the University of Windsor (Kinesiology —
                  Sport and Exercise Psychology). She has also earned an MHK (Sport and
                  Exercise Psychology) from the University of Windsor and an MEd (Sport
                  Leadership) from the Center for Sport Leadership at Virginia Commonwealth
                  University. Ashley works as a Mental Performance Consultant (MPC) and is
                  a Professional Member of the Canadian Sport Psychology Association.
                </p>
                <p>
                  As an MPC, she facilitates the development of mental performance skills,
                  attitudes, qualities, processes, and perspectives to enhance her
                  clients&apos; mental performance while helping them achieve positive
                  personal development and performance improvement.
                </p>
                <p>
                  Ashley is a trained Mindful Sport Performance Enhancement (MSPE)
                  instructor. In addition to her role as an MPC, Ashley also works as an
                  adjunct instructor with the Center for Sport Leadership at Virginia
                  Commonwealth University and the University of Western States (Sport and
                  Performance Psychology Programs). She currently teaches graduate classes
                  in sport psychology, team dynamics in sport, and positive leadership (in
                  sport and business).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

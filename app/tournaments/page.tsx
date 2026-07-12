import type { Metadata } from 'next'
import Image from 'next/image'
import { PageBanner } from '@/components/page-banner'
import { FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tournaments | Fundy Female Hockey Association',
  description:
    'Information about the Kraken Kup tournament hosted by the Fundy Female Hockey Association.',
}

export default function TournamentsPage() {
  return (
    <>
      <PageBanner
        title="Tournaments"
        subtitle="Home of the Kraken Kup."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <Image
              src="https://www.fundyfemalehockey.ca/wp-content/uploads/sites/2776/2025/12/KrakenCup_EN-1024x720.png"
              alt="The Kraken Kup"
              width={1024}
              height={720}
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
          <div>
            <Image
              src="https://www.fundyfemalehockey.ca/wp-content/uploads/sites/2776/2025/10/IMG_9137-683x1024.jpg"
              alt="The Kraken Kup is back!"
              width={683}
              height={1024}
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
        </div>

        <div className="mt-12 space-y-6">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-sky" />
              <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-navy">
                Tournament Documents
              </h3>
            </div>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://www.fundyfemalehockey.ca/wp-content/uploads/sites/2776/2022/12/Maddy-Murphys-Story.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-navy transition-colors hover:text-sky"
                >
                  <FileText className="h-4 w-4" />
                  Maddy Murphy&apos;s Story (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import { PageBanner } from '@/components/page-banner'

export const metadata: Metadata = {
  title: 'Competitive Teams | Fundy Female Hockey Association',
  description:
    'Meet the 2025-2026 Fundy Kraken competitive teams — U11 AA, U13 AA, U13 AAA, U15 AA, and U15 AAA.',
}

const teams = [
  {
    name: 'U13 AAA Fundy Kraken',
    image: 'https://www.fundyfemalehockey.ca/wp-content/uploads/sites/2776/2025/10/2-1024x1024.png',
  },
  {
    name: 'U15 AAA Fundy Kraken',
    image: 'https://www.fundyfemalehockey.ca/wp-content/uploads/sites/2776/2025/10/Black-and-Red-Grunge-Sports-Football-Team-Instagram-Post-1024x1024.png',
  },
  {
    name: 'U11 AA Fundy Kraken',
    image: 'https://www.fundyfemalehockey.ca/wp-content/uploads/sites/2776/2025/10/4-1024x1024.png',
  },
  {
    name: 'U13 AA Fundy Kraken',
    image: 'https://www.fundyfemalehockey.ca/wp-content/uploads/sites/2776/2025/10/5-1024x1024.png',
  },
  {
    name: 'U15 AA Fundy Kraken',
    image: 'https://www.fundyfemalehockey.ca/wp-content/uploads/sites/2776/2025/10/3-1024x1024.png',
  },
]

export default function TeamsPage() {
  return (
    <>
      <PageBanner
        title="Competitive Teams"
        subtitle="Introducing your 2025-2026 Fundy Kraken competitive teams."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teams.map((team) => (
            <div
              key={team.name}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <Image
                src={team.image}
                alt={team.name}
                width={1024}
                height={1024}
                className="h-auto w-full object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-navy">
                  {team.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

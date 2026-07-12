import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageBanner } from '@/components/page-banner'
import { Users, MapPin, ShieldCheck, Anchor } from 'lucide-react'
import { REGISTER_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About | Fundy Female Hockey Association',
  description:
    'Learn about the Fundy Female Hockey Association, the Fundy region\u2019s first all-female minor hockey association and home to the Fundy Kraken.',
}

const facts = [
  {
    icon: Users,
    title: 'All-Female Teams',
    text: 'The Fundy region\u2019s first all-female association, giving athletes a place to grow the game together.',
  },
  {
    icon: MapPin,
    title: 'Zone 4 Wide',
    text: 'Open to any female athlete living within Zone 4, from St. Stephen all the way to Sussex.',
  },
  {
    icon: Anchor,
    title: 'Home of the Kraken',
    text: 'Proud home of the Fundy Kraken, competing with pride across New Brunswick.',
  },
  {
    icon: ShieldCheck,
    title: 'Officially Governed',
    text: 'Governed by Hockey New Brunswick and Hockey Canada for a safe, structured program.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About FFHA"
        subtitle="Growing the female game in the Fundy region of New Brunswick."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-sky">
              Our Mission
            </p>
            <h2 className="mt-2 font-heading text-3xl font-extrabold uppercase tracking-wide text-navy sm:text-4xl text-balance">
              A place for every female athlete
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Fundy Female Hockey Association (FFHA) is a minor hockey association that
                provides female hockey athletes residing in Fundy Zone 4 (St. Stephen to
                Sussex) an opportunity to play on all-female teams.
              </p>
              <p>
                We are the Fundy region&apos;s first all-female association and home to the
                Fundy Kraken. As a regional-wide association, FFHA is able to accept the
                registration of any female athlete living within the boundaries of Zone 4.
              </p>
              <p>
                FFHA is governed by Hockey New Brunswick and Hockey Canada, ensuring our
                players compete in a safe, supportive, and well-structured environment.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/team.jpeg"
              alt="Fundy Kraken players celebrating on the ice"
              width={720}
              height={640}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact) => {
              const Icon = fact.icon
              return (
                <div
                  key={fact.title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-navy-foreground">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-bold uppercase tracking-wide text-navy">
                    {fact.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {fact.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-navy">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-4 py-16 text-center text-navy-foreground">
          <h2 className="font-heading text-3xl font-extrabold uppercase tracking-wide sm:text-4xl text-balance">
            Ready to join the Kraken?
          </h2>
          <p className="mt-3 max-w-xl leading-relaxed text-white/75">
            Registration for the 2025-2026 season is open to every eligible female athlete
            in Zone 4. Find your division and sign up today.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-sky px-8 py-3 font-heading text-xl font-bold uppercase tracking-wide text-sky-foreground transition-transform hover:scale-105"
            >
              Register to Play
            </a>
            <Link
              href="/register"
              className="rounded-md border-2 border-white/30 px-8 py-3 font-heading text-xl font-bold uppercase tracking-wide transition-colors hover:border-sky hover:text-sky"
            >
              View Season Fees
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

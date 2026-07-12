import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function AboutPreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src="/images/team-action.png"
            alt="Fundy Kraken players on the ice during a game"
            width={720}
            height={520}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <div className="h-1 w-16 bg-sky" />
          <p className="mt-4 font-heading text-sm font-semibold uppercase tracking-[0.3em] text-sky">
            Our Mission
          </p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold uppercase tracking-wide text-navy sm:text-4xl text-balance">
            Growing the female game in the Fundy region
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Fundy Female Hockey Association (FFHA) is a minor hockey association providing
            female athletes in Fundy Zone 4 &mdash; from St. Stephen to Sussex &mdash; the
            opportunity to play on all-female teams.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We are the Fundy region&apos;s first all-female association and home to the
            Fundy Kraken. As a regional association, we welcome the registration of any
            female athlete living within the boundaries of Zone 4.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 font-heading text-lg font-bold uppercase tracking-wide text-navy transition-colors hover:text-sky"
          >
            Learn more about FFHA <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'
import { REGISTER_URL } from '@/lib/site'

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-navy-foreground">
      <Image
        src="/images/rink-hero.png"
        alt=""
        aria-hidden="true"
        fill
        priority
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/85 to-navy" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-16 text-center sm:py-24">
        <Image
          src="/images/krakenlogo.png"
          alt="Fundy Female Hockey Association crest"
          width={280}
          height={280}
          priority
          className="h-44 w-44 drop-shadow-2xl sm:h-64 sm:w-64"
        />
        <p className="mt-8 font-heading text-sm font-semibold uppercase tracking-[0.35em] text-sky">
          St. Stephen to Sussex &middot; Zone 4
        </p>
        <h1 className="mt-3 max-w-3xl font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-wide text-balance sm:text-6xl">
          Fundy Female Hockey Association
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
          The Fundy region&apos;s first all-female minor hockey association, and proud
          home of the Fundy Kraken. Growing the female game one player at a time.
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
          <a
            href="/about"
            className="rounded-md border-2 border-white/30 px-8 py-3 font-heading text-xl font-bold uppercase tracking-wide text-navy-foreground transition-colors hover:border-sky hover:text-sky"
          >
            About the Kraken
          </a>
        </div>
      </div>
    </section>
  )
}

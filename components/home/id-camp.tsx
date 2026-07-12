import { CalendarDays, MapPin, ArrowRight } from 'lucide-react'
import { REGISTER_URL } from '@/lib/site'

export function IdCamp() {
  return (
    <section className="bg-sky/15">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="overflow-hidden rounded-2xl border border-sky/40 bg-card shadow-sm">
          <div className="grid md:grid-cols-[1.4fr_1fr]">
            <div className="p-8 sm:p-10">
              <span className="inline-block rounded-full bg-sky px-3 py-1 font-heading text-sm font-bold uppercase tracking-widest text-sky-foreground">
                Now Open
              </span>
              <h2 className="mt-4 font-heading text-3xl font-extrabold uppercase tracking-wide text-navy sm:text-4xl">
                2026 ID Camps
              </h2>
              <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
                Identification camps are your first step to joining a Fundy Kraken
                competitive team. Skate with our coaches, get evaluated, and show what
                you bring to the ice. Spots are limited, so secure your place today.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <CalendarDays className="h-5 w-5 shrink-0 text-sky" />
                  <span className="text-foreground">Camp schedule released for the 2026 season</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-sky" />
                  <span className="text-foreground">Held across the Fundy region, Zone 4</span>
                </li>
              </ul>
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 font-heading text-lg font-bold uppercase tracking-wide text-navy-foreground transition-transform hover:scale-105"
              >
                Register for ID Camps <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <div className="flex items-center justify-center bg-navy p-8">
              <div className="text-center">
                <p className="font-heading text-7xl font-extrabold leading-none text-sky sm:text-8xl">
                  2026
                </p>
                <p className="mt-2 font-heading text-2xl font-bold uppercase tracking-[0.2em] text-navy-foreground">
                  ID Camp
                </p>
                <p className="mt-1 text-sm uppercase tracking-widest text-white/60">
                  Fundy Kraken
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

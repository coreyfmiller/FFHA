import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin } from 'lucide-react'
import { FacebookIcon } from '@/components/icons/facebook'
import { navLinks, FACEBOOK_URL, HOCKEY_NB_URL } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-navy text-navy-foreground">
      <Image
        src="/images/anchor.png"
        alt=""
        aria-hidden="true"
        width={320}
        height={440}
        className="pointer-events-none absolute -right-10 -top-10 w-64 opacity-5"
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src="/images/ffha-logo.png"
              alt="Fundy Female Hockey Association logo"
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
            />
            <span className="font-heading text-xl font-extrabold uppercase leading-none tracking-wide">
              Fundy Female
              <br />
              Hockey Association
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Growing the female game in the Fundy region of New Brunswick. Proud home of
            the Fundy Kraken.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-sky">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/80 transition-colors hover:text-sky">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-sky">
            Governed By
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>Hockey New Brunswick</li>
            <li>Hockey Canada</li>
            <li className="pt-2 text-white/60">Fundy Zone 4 &middot; St. Stephen to Sussex</li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-sky">
            Connect
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2 text-white/80">
              <MapPin className="h-4 w-4 text-sky" /> Saint John, New Brunswick
            </li>
            <li>
              <Link href="/contact" className="flex items-center gap-2 text-white/80 transition-colors hover:text-sky">
                <Mail className="h-4 w-4 text-sky" /> Contact us
              </Link>
            </li>
            <li className="flex items-center gap-4 pt-1">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FFHA on Facebook"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-sky hover:text-sky-foreground"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={HOCKEY_NB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hockey New Brunswick on Facebook"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-sky hover:text-sky-foreground"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-white/50">
          &copy; {new Date().getFullYear()} Fundy Female Hockey Association. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

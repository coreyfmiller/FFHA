'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks, REGISTER_URL } from '@/lib/site'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-sky/30 bg-navy text-navy-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="Fundy Female Hockey Association logo"
            width={52}
            height={52}
            className="h-12 w-12 object-contain"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-heading text-xl font-extrabold uppercase tracking-wide">
              Fundy Female Hockey Association
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-sky">
              Home of the Kraken
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-md px-3 py-2 font-heading text-lg font-semibold uppercase tracking-wide transition-colors',
                  active
                    ? 'bg-sky text-sky-foreground'
                    : 'text-navy-foreground hover:bg-white/10',
                )}
              >
                {link.label}
              </Link>
            )
          })}
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-md bg-sky px-4 py-2 font-heading text-lg font-bold uppercase tracking-wide text-sky-foreground transition-transform hover:scale-105"
          >
            Register
          </a>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 hover:bg-white/10 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-navy px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block rounded-md px-3 py-2 font-heading text-lg font-semibold uppercase tracking-wide',
                      active ? 'bg-sky text-sky-foreground' : 'hover:bg-white/10',
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
            <li>
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-md bg-sky px-3 py-2 text-center font-heading text-lg font-bold uppercase tracking-wide text-sky-foreground"
              >
                Register to Play
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

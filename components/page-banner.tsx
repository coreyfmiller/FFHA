import Image from 'next/image'

export function PageBanner({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <Image
        src="/images/anchor.png"
        alt=""
        aria-hidden="true"
        width={320}
        height={440}
        className="pointer-events-none absolute -bottom-16 right-4 w-52 opacity-10"
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="h-1 w-16 bg-sky" />
        <h1 className="mt-4 font-heading text-4xl font-extrabold uppercase tracking-wide text-balance sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-white/75">{subtitle}</p>
        )}
      </div>
    </section>
  )
}

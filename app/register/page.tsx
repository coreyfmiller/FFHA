import type { Metadata } from 'next'
import { PageBanner } from '@/components/page-banner'
import { ArrowRight, Mail } from 'lucide-react'
import { REGISTER_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Registration | Fundy Female Hockey Association',
  description:
    'Register for the 2025-2026 season with the Fundy Female Hockey Association. View season fees, competitive tryout costs, and step-by-step registration instructions.',
}

const seasonFees = [
  { division: 'U7', years: '2019-2021', fee: '$495' },
  { division: 'U9', years: '2017-2018', fee: '$570' },
  { division: 'U11', years: '2015-2016', fee: '$695' },
  { division: 'U13', years: '2013-2014', fee: '$695' },
  { division: 'U15', years: '2011-2012', fee: '$695' },
  { division: 'U18', years: '2008-2010', fee: '$695' },
]

const tryoutFees = [
  { division: 'U15 AAA', fee: '$175', email: 'ffhatreasureelite@gmail.com' },
  { division: 'U13 AAA', fee: '$175', email: 'ffhatreasureelite@gmail.com' },
  { division: 'U15 AA', fee: '$125', email: 'ffhatreasurer2025@gmail.com' },
  { division: 'U13 AA', fee: '$125', email: 'ffhatreasurer2025@gmail.com' },
  { division: 'U11 AA', fee: '$125', email: 'ffhatreasurer2025@gmail.com' },
]

const options = [
  {
    tag: 'Option 1',
    title: 'Returning FFHA Players',
    body: 'If you played with us last year, you will need your Hockey Canada ID to register, and you must use the exact name you used in your Hockey Canada account.',
  },
  {
    tag: 'Option 2',
    title: 'Played for a Different Association',
    body: 'If you played in a different minor hockey association last year, you will need to be transferred to FFHA. Email our registrar with your details to start the transfer.',
  },
  {
    tag: 'Option 3',
    title: 'New to Hockey',
    body: 'If you are new to hockey, first create a free Hockey Canada ID number and complete all required information. This gives you the ID you need to register.',
  },
]

const transferItems = [
  'Player\u2019s first and last name (exactly as used on their hockey account)',
  'Date of birth',
  'Hockey Canada number',
  'The association they played with last year',
  'The reason for your transfer',
  'Proof of address (driver\u2019s license or a bill with parent name and address)',
]

export default function RegisterPage() {
  return (
    <>
      <PageBanner
        title="Registration"
        subtitle="2025-2026 season registration is now open for the Fundy Kraken."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-sky/40 bg-sky/15 p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-heading text-2xl font-extrabold uppercase tracking-wide text-navy sm:text-3xl">
              Ready to register?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Complete your 2025-2026 registration through our Spordle portal.
            </p>
          </div>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-navy px-7 py-3 font-heading text-lg font-bold uppercase tracking-wide text-navy-foreground transition-transform hover:scale-105"
          >
            Register Now <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-navy">
              Season Fees
            </h3>
            <div className="mt-4 overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-left">
                <thead className="bg-navy text-navy-foreground">
                  <tr>
                    <th className="px-5 py-3 font-heading text-sm font-bold uppercase tracking-wide">Division</th>
                    <th className="px-5 py-3 font-heading text-sm font-bold uppercase tracking-wide">Birth Years</th>
                    <th className="px-5 py-3 text-right font-heading text-sm font-bold uppercase tracking-wide">Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {seasonFees.map((row, i) => (
                    <tr key={row.division} className={i % 2 ? 'bg-muted' : 'bg-card'}>
                      <td className="px-5 py-3 font-heading text-lg font-bold text-navy">{row.division}</td>
                      <td className="px-5 py-3 text-sm text-muted-foreground">{row.years}</td>
                      <td className="px-5 py-3 text-right font-semibold text-foreground">{row.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-navy">
              Competitive Tryouts <span className="text-base font-semibold text-muted-foreground">(Optional)</span>
            </h3>
            <div className="mt-4 overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-left">
                <thead className="bg-navy text-navy-foreground">
                  <tr>
                    <th className="px-5 py-3 font-heading text-sm font-bold uppercase tracking-wide">Level</th>
                    <th className="px-5 py-3 text-right font-heading text-sm font-bold uppercase tracking-wide">Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {tryoutFees.map((row, i) => (
                    <tr key={row.division} className={i % 2 ? 'bg-muted' : 'bg-card'}>
                      <td className="px-5 py-3 font-heading text-lg font-bold text-navy">{row.division}</td>
                      <td className="px-5 py-3 text-right font-semibold text-foreground">{row.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 rounded-xl border border-sky/40 bg-sky/10 p-5 text-sm leading-relaxed text-foreground">
              <p>
                <strong>AAA tryouts:</strong> send your $175 payment to{' '}
                <span className="font-semibold text-navy">ffhatreasureelite@gmail.com</span>.
              </p>
              <p className="mt-2">
                <strong>AA tryouts:</strong> send your $125 payment to{' '}
                <span className="font-semibold text-navy">ffhatreasurer2025@gmail.com</span>.
              </p>
              <p className="mt-2 text-muted-foreground">
                When sending your e-transfer, include your child&apos;s name and the team
                she is trying out for.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center">
            <div className="mx-auto h-1 w-16 bg-sky" />
            <h2 className="mt-4 font-heading text-3xl font-extrabold uppercase tracking-wide text-navy sm:text-4xl">
              How to Register
            </h2>
            <p className="mt-2 text-muted-foreground">
              Choose the option that best describes your player.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {options.map((opt) => (
              <div key={opt.tag} className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm">
                <span className="inline-block w-fit rounded-full bg-sky px-3 py-1 font-heading text-xs font-bold uppercase tracking-widest text-sky-foreground">
                  {opt.tag}
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold uppercase tracking-wide text-navy">
                  {opt.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{opt.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-card p-8">
            <div className="flex items-center gap-3">
              <Mail className="h-6 w-6 text-sky" />
              <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-navy">
                Transferring to FFHA?
              </h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Email our registrar at{' '}
              <span className="font-semibold text-navy">kraken.ffharegistrar@gmail.com</span>{' '}
              and include the following. Once your transfer is complete you&apos;ll receive
              an email to proceed, then you can register using the link above.
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {transferItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

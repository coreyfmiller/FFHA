import { Hero } from '@/components/home/hero'
import { IdCamp } from '@/components/home/id-camp'
import { AboutPreview } from '@/components/home/about-preview'
import { QuickLinks } from '@/components/home/quick-links'

export default function HomePage() {
  return (
    <>
      <Hero />
      <IdCamp />
      <AboutPreview />
      <QuickLinks />
    </>
  )
}

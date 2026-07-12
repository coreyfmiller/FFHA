import type { Metadata } from 'next'
import Image from 'next/image'
import { PageBanner } from '@/components/page-banner'

export const metadata: Metadata = {
  title: 'Gallery | Fundy Female Hockey Association',
  description:
    'Photos from the Fundy Kraken games, events, and community activities.',
}

const images = [
  'cEr0D2VGQiS-SHDSRzRiSg-768x1024.jpg',
  'IMG_9128-768x1024 (1).jpg',
  'IMG_9128-768x1024.jpg',
  'IMG_9129-1024x768 (1).jpg',
  'IMG_9129-1024x768.jpg',
  'IMG_9130-768x1024.jpg',
  'IMG_9131-1005x1024.jpg',
  'IMG_9133-1024x768.jpg',
  'IMG_9134-1024x651.jpg',
  'IsDRplsSS1CaATRwEZeEPw-768x1024.jpg',
  'Janik-Dionne-0AF90E34-6775-4D81-8845-25715C31BA09-768x1024.jpeg',
  'Janik-Dionne-8AF5C354-1313-4A87-95EB-5CDDA6128E5A-1024x768.jpeg',
  'Jeff-Urquhart-1EFC8CB3-9172-4178-BB91-33452C133114.jpeg',
  'Jeff-Urquhart-2B430983-9010-4DBB-A257-0310FD3B432A-1024x683.jpeg',
  'Jeff-Urquhart-384E3B51-3F4C-41FA-A8E4-D2CC1DCA523B-1024x683.jpeg',
  'Jeff-Urquhart-56F1B6FD-5A1D-4F91-AEC2-08D7B299DA7F-1024x683.jpeg',
  'Jeff-Urquhart-87D4E8C2-F4B0-45E2-A94C-9F93C3BC79BC-1024x683.jpeg',
  'Jeff-Urquhart-9F51FEA2-B2B1-4EC8-95A0-566F8001A175-1024x683.jpeg',
  'Jeff-Urquhart-A0A3DB49-DF9C-4A89-8CC6-CA5315757630-1024x683 (1).jpeg',
  'Jeff-Urquhart-A0A3DB49-DF9C-4A89-8CC6-CA5315757630-1024x683.jpeg',
  'Jeff-Urquhart-C776F9A9-D96C-439E-8AA0-7979BD04AEF0-768x1024.jpeg',
  'Joe-Savoie-F0F84CD5-61B5-421E-9864-A02898BD0C59.jpeg',
  'Layla-Beckwith-694FD994-00D0-4282-A698-9731D4C10327-768x1024.jpeg',
  'Layla-Beckwith-FB7ECDFF-3B4F-4712-A368-4865A93B5BC6-768x1024.jpeg',
  'lcDCVIGCQOesm3BFaFpmcA-768x1024.jpg',
  'Lynn-3012B171-A4EE-451D-BB8C-C4D3FF2CC567-768x1024.jpeg',
  'Natalie-107DBDC7-E1C3-46C0-9576-22DD55C34C53-768x1024 (1).jpeg',
  'Natalie-107DBDC7-E1C3-46C0-9576-22DD55C34C53-768x1024.jpeg',
  'Natalie-E8F75949-2D13-425B-A454-74B3B87EBF13-768x1024.jpeg',
  'Natalie-EEC53AE7-FDD3-4731-BC18-DE6CEE10B6FA-768x1024.jpeg',
  'Nick-DeMerchant-63E6FFF2-B45A-4C4F-93E3-E046ECFA09F5-1-768x1024.jpeg',
]

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        title="Gallery"
        subtitle="Moments from the ice — Fundy Kraken in action."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {images.map((filename) => (
            <div key={filename} className="mb-4 break-inside-avoid overflow-hidden rounded-xl">
              <Image
                src={`/gallery/${filename}`}
                alt="Fundy Kraken hockey"
                width={768}
                height={1024}
                className="h-auto w-full object-cover transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

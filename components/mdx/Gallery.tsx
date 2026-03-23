import Image from 'next/image'
import { GalleryImage } from '@/types'
import clsx from 'clsx'

interface GalleryProps {
  images: GalleryImage[]
  layout?: 'masonry' | 'grid'
}

export default function Gallery({ images, layout = 'grid' }: GalleryProps) {
  if (layout === 'masonry') {
    return (
      <div className="columns-2 md:columns-3 gap-3 my-8" role="group" aria-label="Galerie photos">
        {images.map((img, i) => (
          <figure key={i} className="break-inside-avoid mb-3">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={300}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
            </div>
            {img.caption && (
              <figcaption className="text-xs text-brun-muted text-center mt-1 italic">
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    )
  }

  return (
    <div
      className={clsx(
        'grid gap-3 my-8',
        images.length === 2 ? 'grid-cols-2' :
        images.length === 3 ? 'grid-cols-3' :
        'grid-cols-2 md:grid-cols-4'
      )}
      role="group"
      aria-label="Galerie photos"
    >
      {images.map((img, i) => (
        <figure key={i}>
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, 25vw"
            />
          </div>
          {img.caption && (
            <figcaption className="text-xs text-brun-muted text-center mt-1 italic">
              {img.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  )
}

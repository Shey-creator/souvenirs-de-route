import Image from 'next/image'
import Link from 'next/link'
import { DestinationCardProps } from '@/types'

export default function DestinationCard({
  ville,
  image,
  duree,
  budget,
  highlight,
  slug,
}: DestinationCardProps) {
  const href = slug || `/destinations/france/${ville.toLowerCase()}`

  return (
    <Link href={href} className="group block">
      <div className="card overflow-hidden">
        <div className="relative aspect-square">
          {image ? (
            <>
              <Image
                src={image}
                alt={`${ville} en famille`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brun/70 via-transparent to-transparent" />
            </>
          ) : (
            <div
              className="w-full h-full"
              style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #FFE66D 100%)' }}
            />
          )}
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <h3 className="font-display text-white font-bold text-lg leading-tight drop-shadow">
              {ville}
            </h3>
          </div>
        </div>
        <div className="p-3 bg-white">
          <p className="text-brun-muted text-xs mb-2 line-clamp-2">{highlight}</p>
          <div className="flex items-center justify-between">
            <span className="tag text-xs">{duree}</span>
            <span className="text-sage font-semibold text-sm">{budget}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

import { InfoBoxType } from '@/types'
import clsx from 'clsx'

interface InfoBoxProps {
  type: InfoBoxType
  emoji?: string
  title: string
  children: React.ReactNode
}

const styles: Record<InfoBoxType, { bg: string; border: string; icon: string }> = {
  conseil: {
    bg: 'bg-sage/10',
    border: 'border-sage',
    icon: '💡',
  },
  budget: {
    bg: 'bg-terracotta/10',
    border: 'border-terracotta',
    icon: '💶',
  },
  attention: {
    bg: 'bg-amber-50',
    border: 'border-amber-400',
    icon: '⚠️',
  },
  famille: {
    bg: 'bg-sable',
    border: 'border-sable-dark',
    icon: '👨‍👩‍👧‍👦',
  },
  transports: {
    bg: 'bg-blue-50',
    border: 'border-blue-300',
    icon: '🚗',
  },
  info: {
    bg: 'bg-blue-50',
    border: 'border-blue-300',
    icon: 'ℹ️',
  },
}

export default function InfoBox({ type, emoji, title, children }: InfoBoxProps) {
  const style = styles[type]
  const displayEmoji = emoji || style.icon

  return (
    <div
      className={clsx(
        'rounded-xl border-l-4 p-5 my-6',
        style.bg,
        style.border
      )}
      role="note"
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0" aria-hidden>
          {displayEmoji}
        </span>
        <div className="flex-1">
          <p className="font-display font-bold text-brun mb-2">{title}</p>
          <div className="text-brun-muted text-sm leading-relaxed [&>p]:mb-2 [&>p:last-child]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

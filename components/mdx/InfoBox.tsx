import clsx from 'clsx'

type InfoBoxType = 'conseil' | 'budget' | 'attention' | 'famille' | 'transports' | 'info'

interface InfoBoxProps {
  type?: InfoBoxType | string
  emoji?: string
  title: string
  children: React.ReactNode
}

const styles: Record<string, { bg: string; border: string; icon: string }> = {
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

const FALLBACK_STYLE = styles.conseil

export default function InfoBox(props: InfoBoxProps) {
  const safeType = props.type ?? 'conseil'
  const style = styles[safeType] ?? FALLBACK_STYLE
  const displayEmoji = props.emoji ?? style.icon

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
          <p className="font-display font-bold text-brun mb-2">{props.title}</p>
          <div className="text-brun-muted text-sm leading-relaxed [&>p]:mb-2 [&>p:last-child]:mb-0">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

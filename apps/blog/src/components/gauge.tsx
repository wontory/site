import { cn } from '@package/utility/cn'

export interface GaugeProps {
  max?: number
  min?: number
  value: number
  gaugeColor?: string
  className?: string
}

function Gauge({ max = 100, min = 0, value = 0, className }: GaugeProps) {
  const circumference = 2 * Math.PI * 45
  const percentPx = circumference / 100
  const currentPercent = Math.round(((value - min) / (max - min)) * 100)

  return (
    <div
      className={cn('relative size-40 font-semibold text-2xl', className)}
      style={
        {
          '--circle-size': '100px',
          '--circumference': circumference,
          '--percent-to-px': `${percentPx}px`,
          '--gap-percent': '5',
          '--offset-factor': '0',
          '--percent-to-deg': '3.6deg',
          transform: 'translateZ(0)',
        } as React.CSSProperties
      }
    >
      <svg
        fill="none"
        className="size-full"
        strokeWidth="2"
        viewBox="0 0 100 100"
      >
        <title>Gauge</title>
        {currentPercent <= 90 && currentPercent >= 0 && (
          <circle
            cx="50"
            cy="50"
            r="45"
            strokeWidth="10"
            strokeDashoffset="0"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-primary-foreground/20 opacity-100 transition-colors"
            style={
              {
                '--stroke-percent': 90 - currentPercent,
                '--offset-factor-secondary': 'calc(1 - var(--offset-factor))',
                strokeDasharray:
                  'calc(var(--stroke-percent) * var(--percent-to-px)) var(--circumference)',
                transform:
                  'rotate(calc(1turn - 90deg - (var(--gap-percent) * var(--percent-to-deg) * var(--offset-factor-secondary)))) scaleY(-1)',
                transformOrigin:
                  'calc(var(--circle-size) / 2) calc(var(--circle-size) / 2)',
              } as React.CSSProperties
            }
          />
        )}
        <circle
          cx="50"
          cy="50"
          r="45"
          strokeWidth="10"
          strokeDashoffset="0"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-primary-foreground opacity-100 transition-colors"
          style={
            {
              '--stroke-percent': currentPercent,
              strokeDasharray:
                'calc(var(--stroke-percent) * var(--percent-to-px)) var(--circumference)',
              transform:
                'rotate(calc(-90deg + var(--gap-percent) * var(--offset-factor) * var(--percent-to-deg)))',
              transformOrigin:
                'calc(var(--circle-size) / 2) calc(var(--circle-size) / 2)',
            } as React.CSSProperties
          }
        />
      </svg>
      <span
        data-current-value={currentPercent}
        className="absolute inset-0 m-auto size-fit"
      >
        {currentPercent}
      </span>
    </div>
  )
}

export { Gauge }

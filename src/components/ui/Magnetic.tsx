import {
  useRef,
  useState,
  useCallback,
  type ReactNode,
} from 'react'

interface MagneticProps {
  children: ReactNode
  className?: string
  strength?: number
}

export function Magnetic({
  children,
  className,
  strength = 0.35,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current
      if (!el || !active) return
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    },
    [active, strength],
  )

  const reset = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0, 0)'
  }, [])

  return (
    <div
      ref={ref}
      className={`inline-block transition-transform duration-200 ease-out will-change-transform ${className ?? ''}`}
      style={{ transitionProperty: 'transform' }}
      onMouseMove={onMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => {
        setActive(false)
        reset()
      }}
    >
      {children}
    </div>
  )
}
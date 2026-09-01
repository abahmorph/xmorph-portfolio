import { useRef, useCallback, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'

interface TiltCardProps {
  children: ReactNode
  className?: string
  maxTilt?: number
  onClick?: () => void
}

export function TiltCard({
  children,
  className,
  maxTilt = 7,
  onClick,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const gx = useMotionValue(50)
  const gy = useMotionValue(50)

  const sRX = useSpring(rx, { stiffness: 140, damping: 16, mass: 0.5 })
  const sRY = useSpring(ry, { stiffness: 140, damping: 16, mass: 0.5 })

  const glareLeft = useTransform(gx, [0, 100], ['-40%', '140%'])
  const glareTop = useTransform(gy, [0, 100], ['-40%', '140%'])

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      if (reduce) return
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height
      rx.set((py - 0.5) * -maxTilt)
      ry.set((px - 0.5) * maxTilt)
      gx.set(px * 100)
      gy.set(py * 100)
    },
    [reduce, rx, ry, gx, gy, maxTilt],
  )

  const onLeave = useCallback(() => {
    rx.set(0)
    ry.set(0)
  }, [rx, ry])

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      style={{ rotateX: reduce ? 0 : sRX, rotateY: reduce ? 0 : sRY, transformStyle: 'preserve-3d', perspective: 900 }}
      className={`relative ${className ?? ''}`}
    >
      {children}
      {/* Moving glass reflection */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-[inherit]"
      >
        <motion.div
          className="absolute inset-y-[-10%] w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
          style={{ left: glareLeft, top: glareTop }}
        />
      </motion.div>
    </motion.div>
  )
}
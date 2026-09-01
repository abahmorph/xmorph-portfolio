import { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useFinePointer, useReducedMotion } from '../hooks/useMedia'

export function Cursor() {
  const fine = useFinePointer()
  const reduce = useReducedMotion()
  const enabled = fine && !reduce

  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)

  const move = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e
    if (dotRef.current) {
      dotRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`
    }
    if (ringRef.current) {
      ringRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`
    }
  }, [])

  useEffect(() => {
    if (!enabled) return
    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor]',
      )
      setHovering(!!target)
    }
    window.addEventListener('mousemove', move, { passive: true })
    document.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', onOver)
    }
  }, [enabled, move])

  useEffect(() => {
    if (enabled) document.body.classList.add('custom-cursor')
    else document.body.classList.remove('custom-cursor')
    return () => document.body.classList.remove('custom-cursor')
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <motion.div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400"
        style={{ boxShadow: '0 0 12px rgba(79,124,255,0.8)' }}
      />
      <motion.div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/40"
        animate={{
          scale: hovering ? 1.8 : 1,
          opacity: hovering ? 0.6 : 1,
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      />
    </>
  )
}
import { m, useReducedMotion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 28,
    restDelta: 0.001,
  })

  if (reduceMotion) return null

  return (
    <m.div
      className="scroll-progress"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}

export default function Reveal({ children, className = '', delay = 0, direction = 'up', ...props }) {
  const reduceMotion = useReducedMotion()
  const offsets = {
    up: { x: 0, y: 28 },
    down: { x: 0, y: -28 },
    left: { x: 28, y: 0 },
    right: { x: -28, y: 0 },
  }
  const offset = offsets[direction] || offsets.up

  return (
    <m.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, x: offset.x, y: offset.y, scale: 0.985, filter: 'blur(5px)' }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.78, ease: [0.16, 1, 0.3, 1], delay }}
      {...props}
    >
      {children}
    </m.div>
  )
}

import React, { useRef } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

export default function Card({ children, className = '', style }) {
  const ref = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateY = useTransform(mouseX, [-150, 150], [18, -18])
  const rotateX = useTransform(mouseY, [-150, 150], [-10, 10])
  const translateZ = useTransform(mouseY, [-150, 150], [10, -10])

  function handlePointerMove(e) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    // normalize to [-100,100]
    const nx = (x / (rect.width / 2)) * 100
    const ny = (y / (rect.height / 2)) * 100
    mouseX.set(Math.max(-100, Math.min(100, nx)))
    mouseY.set(Math.max(-100, Math.min(100, ny)))
  }

  function handlePointerLeave() {
    // animate back to center
    animate(mouseX, 0, { type: 'spring', stiffness: 260, damping: 22 })
    animate(mouseY, 0, { type: 'spring', stiffness: 260, damping: 22 })
  }

  return (
    <motion.div
      ref={ref}
      className={`glass p-4 ${className}`}
      style={{ transformPerspective: 1200, transformOrigin: 'center', rotateX, rotateY, translateZ, ...style }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.995 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}

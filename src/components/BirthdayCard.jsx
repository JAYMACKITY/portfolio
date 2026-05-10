import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Card from './Card'

const birthdayEmojis = [
  { emoji: '🎈', left: '8%', delay: 0.0, duration: 3.5, size: 'text-2xl' },
  { emoji: '🎂', left: '20%', delay: 0.4, duration: 4.0, size: 'text-2xl' },
  { emoji: '🎈', left: '34%', delay: 0.2, duration: 3.6, size: 'text-2xl' },
  { emoji: '🧁', left: '48%', delay: 0.6, duration: 4.2, size: 'text-2xl' },
  { emoji: '🎉', left: '62%', delay: 0.1, duration: 3.4, size: 'text-2xl' },
  { emoji: '🎂', left: '76%', delay: 0.5, duration: 3.8, size: 'text-2xl' },
  { emoji: '🎈', left: '88%', delay: 0.75, duration: 4.1, size: 'text-2xl' }
]

export default function BirthdayCard() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60 * 1000)
    return () => clearInterval(id)
  }, [])

  const currentYear = now.getFullYear()
  let birthday = new Date(`${currentYear}-02-17T00:00:00`)
  if (birthday <= now) {
    birthday = new Date(`${currentYear + 1}-02-17T00:00:00`)
  }

  const diff = Math.max(0, birthday - now)
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))

  return (
    <Card className="birthday-card relative min-h-[140px]">
      <div className="relative z-10 space-y-2">
        <div className="text-sm text-zinc-400">Birthday</div>
        <div className="text-2xl font-semibold text-white">{days} days</div>
        <div className="text-sm text-zinc-300">Until Feb 17</div>
      </div>

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {birthdayEmojis.map((item, index) => (
          <motion.div
            key={`${item.emoji}-${index}`}
            className={`absolute top-[-10%] ${item.size}`}
            style={{ left: item.left }}
            animate={{ y: ['0%', '330%'], rotate: [-8, 8, -4, 6] }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            {item.emoji}
          </motion.div>
        ))}
      </div>
    </Card>
  )
}
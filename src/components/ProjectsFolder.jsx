import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  initial: {},
  hover: {}
}

const projectEmojis = [
  { emoji: '💻', x: -80, y: -28, rotate: -28, delay: 0.00 },
  { emoji: '⚙️', x: -40, y: -72, rotate: -14, delay: 0.04 },
  { emoji: '🚀', x: 0, y: -96, rotate: 0, delay: 0.08 },
  { emoji: '📈', x: 40, y: -72, rotate: 14, delay: 0.12 },
  { emoji: '💡', x: 80, y: -28, rotate: 28, delay: 0.16 }
]

const emojiVariants = {
  initial: { x: 0, y: 0, opacity: 0, scale: 0.6 },
  hover: ({ x, y, rotate, delay }) => ({
    x,
    y,
    opacity: 1,
    scale: 1,
    rotate,
    transition: { type: 'spring', stiffness: 500, damping: 18, delay }
  })
}

const folderVariants = {
  initial: { y: 0, scale: 1 },
  hover: {
    y: 2,
    scale: 1.01,
    transition: { type: 'spring', stiffness: 260, damping: 22 }
  }
}

export default function ProjectsFolder() {
  return (
    <motion.div
      className="relative flex h-full min-h-[132px] w-full items-center justify-center overflow-visible rounded-[16px] border border-zinc-800 bg-zinc-950 p-4 projects-folder-wrap"
      variants={containerVariants}
      initial="initial"
      whileHover="hover"
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      <div className="relative h-14 w-28 overflow-visible">
        <motion.div
          className="absolute inset-0 rounded-md border border-zinc-700 bg-gradient-to-b from-zinc-200 to-zinc-400 shadow-[0_12px_24px_rgba(0,0,0,0.45)]"
          variants={folderVariants}
          aria-hidden={true}
        />

        {projectEmojis.map((item, index) => (
          <div
            key={item.emoji}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ zIndex: 30 + index }}
          >
            <motion.div
              custom={item}
              variants={emojiVariants}
              aria-hidden={true}
            >
              <span className="inline-block text-center text-2xl sm:text-3xl">{item.emoji}</span>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-3 right-3 text-xs text-zinc-300">Projects</div>
    </motion.div>
  )
}

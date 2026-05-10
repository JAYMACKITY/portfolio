import React, { useEffect, useState } from 'react'

function formatTimeInZone(date, timeZone) {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone
  }).format(date)
}

export default function Clock() {
  const [now, setNow] = useState(new Date())
  const [clockEmojis, setClockEmojis] = useState(0)

  const clocks = ['🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛']

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setClockEmojis(prev => (prev + 1) % clocks.length)
    }, 500)
    return () => clearInterval(id)
  }, [])

  const timeMDT = formatTimeInZone(now, 'America/Edmonton')

  return (
    <div className="space-y-2 relative">
      <div className="absolute top-0 right-0 text-4xl opacity-20 pointer-events-none">{clocks[clockEmojis]}</div>
      <div className="text-3xl font-semibold">{timeMDT} <span className="text-sm text-zinc-400">MDT</span></div>
      <div className="text-sm text-zinc-400">Alberta Time</div>
    </div>
  )
}

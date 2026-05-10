import React from 'react'
import Card from './Card'

export default function HeaderBanner() {
  return (
    <Card className="w-full flex items-center space-x-6 card-shadow-strong banner-card" style={{ padding: 22 }}>
      <div className="avatar" style={{ width: 96, height: 96, fontSize: 30 }}>JM</div>
      <div>
        <div className="text-3xl font-extrabold">Jaden Mack</div>
        <div className="mt-1 text-zinc-300">14 y/o full stack developer <span style={{marginLeft:6}}>⭐</span></div>
      </div>
    </Card>
  )
}

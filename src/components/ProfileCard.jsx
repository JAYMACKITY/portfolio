import React from 'react'
import Card from './Card'

export default function ProfileCard() {
  return (
    <Card className="flex items-center space-x-4" style={{ width: '100%' }}>
      <div className="avatar">JM</div>
      <div>
        <div className="text-2xl font-bold">Jaden Mack</div>
        <div className="text-sm text-zinc-300">22 y/o full stack developer ⭐</div>
        <div className="mt-2 text-sm text-zinc-400">blog • schedule</div>
      </div>
    </Card>
  )
}

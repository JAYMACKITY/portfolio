import React from 'react'
import Card from './Card'

const spotifyProfileUrl = 'https://open.spotify.com/'
const spotifyEmbedUrl = 'https://open.spotify.com/embed/playlist/1oRBCHa5d34VIgCewrLNA9?utm_source=generator&theme=0'

export default function SpotifyNowPlaying() {
  return (
    <Card className="min-h-[500px]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-sm text-zinc-400">Spotify</div>
          <div className="mt-1 text-base font-semibold text-white">Now Playing</div>
        </div>

        <a
          className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-800"
          href={spotifyProfileUrl}
          target="_blank"
          rel="noreferrer"
        >
          Open Spotify
        </a>
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950 h-[420px]">
        <iframe
          title="Spotify now playing"
          src={spotifyEmbedUrl}
          style={{ borderRadius: 12 }}
          width="100%"
          height="420"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className="block h-[420px] w-full"
        />
      </div>
    </Card>
  )
}
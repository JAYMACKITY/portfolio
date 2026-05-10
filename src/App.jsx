import React from 'react'
import { motion } from 'framer-motion'
import HeaderBanner from './components/HeaderBanner'
import Clock from './components/Clock'
import ProjectsFolder from './components/ProjectsFolder'
import Card from './components/Card'
import SpotifyNowPlaying from './components/SpotifyNowPlaying'
import BirthdayCard from './components/BirthdayCard'

export default function App() {
  return (
    <div className="page-grid min-h-screen bg-black py-8 text-white sm:py-12">
      <div className="center-column w-full min-w-0 px-4 sm:px-6 lg:px-8">
        <HeaderBanner />

        <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)]">
          <div className="space-y-6 min-w-0">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="min-w-0">
                <Clock />
              </Card>

              <motion.div
                whileHover="hover"
                initial="initial"
              >
                <Card className="group relative min-w-0 overflow-visible">
                  <div className="relative z-10 text-sm text-zinc-400">Location</div>
                  <div className="relative z-10 mt-2 font-semibold text-white">Alberta, Canada</div>
                  <motion.div
                    className="text-6xl"
                    variants={{
                      initial: { opacity: 0 },
                      hover: { opacity: 1 }
                    }}
                    transition={{ duration: 0.3 }}
                    aria-hidden={true}
                  >
                    📍
                  </motion.div>
                </Card>
              </motion.div>
            </div>

            <Card className="min-h-[140px]">
              <div className="text-sm text-zinc-400">About</div>
              <div className="mt-2 max-w-2xl text-zinc-100">
                Hey! I'm Jaden, a 14-year-old full stack developer. My expertise lies in creating seamless, dynamic and user-friendly web applications. A lifelong learner, always looking for the next challenge to tackle.
              </div>
            </Card>

            <BirthdayCard />

            <SpotifyNowPlaying />
          </div>

          <aside className="space-y-6 min-w-0">
            <Card className="min-h-[230px]">
              <ProjectsFolder />
            </Card>

            <Card>
              <div className="text-sm text-zinc-400">Socials</div>
              <div className="mt-3 grid gap-2">
                <a className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-800" href="https://www.oddsrabbit.com/" target="_blank" rel="noreferrer">
                  Oddsrabbit
                </a>
                <a className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-800" href="https://github.com/JAYMACKITY" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-800" href="https://whop.com/@jmackity/" target="_blank" rel="noreferrer">
                  Whop
                </a>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  )
}

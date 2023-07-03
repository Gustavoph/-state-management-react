import Player from 'react-player'
import { Loader } from 'lucide-react'
import { useCurrentLesson, useStore } from '../zustand-store'

export function Video() {
  const { next, isLoading } = useStore((store) => ({
    next: store.next,
    isLoading: store.isLoading,
  }))

  const { currentLesson: video } = useCurrentLesson()

  function handlePlayNext() {
    next()
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {isLoading ? (
        <div className="flex w-full h-full items-center justify-center">
          <Loader className="h-6 w-6 text-zinc-400 animate-spin" />
        </div>
      ) : (
        <Player
          width="100%"
          height="100%"
          controls
          onEnded={handlePlayNext}
          url={`https://www.youtube.com/watch?v=${video?.id}`}
        />
      )}
    </div>
  )
}

import Player from 'react-player'
import { next, useCurrentLesson } from '../store/slices/player'
import { useAppDispatch, useAppSelector } from '../store'
import { Loader } from 'lucide-react'

export function Video() {
  const dispatch = useAppDispatch()
  const isCourseLoading = useAppSelector((state) => state.player.isLoading)
  const { currentLesson: video } = useCurrentLesson()

  function handlePlayNext() {
    dispatch(next())
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {isCourseLoading ? (
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

import { useAppSelector } from '../store'
import { useCurrentLesson } from '../store/slices/player'

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson()
  const isCourseLoading = useAppSelector((state) => state.player.isLoading)

  if (isCourseLoading) {
    return <h1>Carregando...</h1>
  }

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
      <span className="text-small text-zinc-400">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Módulo "{currentModule?.title}"
      </span>
    </div>
  )
}

import { cn } from '../../../../utils'
import { Recipe } from '../../recipe.types'

const difficultyColors: { [key: string]: string } = {
  Easy: 'bg-green-300',
  Medium: 'bg-yellow-300',
  Hard: 'bg-red-300',
}

const difficultyShadows: { [key: string]: string } = {
  Easy: 'shadow-green-300',
  Medium: 'shadow-yellow-300',
  Hard: 'shadow-red-300',
}

const difficultyBorder: { [key: string]: string } = {
  Easy: 'border-green-200',
  Medium: 'border-yellow-200',
  Hard: 'border-red-200',
}

const selectedDifficultyColors: { [key: string]: string } = {
  Easy: 'bg-green-600',
  Medium: 'bg-yellow-600',
  Hard: 'bg-red-600',
}

const selectedDifficultyShadows: { [key: string]: string } = {
  Easy: 'shadow-green-600',
  Medium: 'shadow-yellow-600',
  Hard: 'shadow-red-600',
}

export const DifficultyBadge = ({
  difficulty,
  isSelected,
}: {
  difficulty: Recipe['difficulty']['name']
  isSelected?: boolean
}) => {
  return (
    <div
      className={cn(
        'w-16 rounded-full border px-1.5 py-0.5 text-center text-xs font-semibold shadow-sm',
        isSelected
          ? 'border-gray-800 text-white'
          : difficultyBorder[difficulty],
        isSelected
          ? selectedDifficultyShadows[difficulty]
          : difficultyShadows[difficulty],
        isSelected
          ? selectedDifficultyColors[difficulty]
          : difficultyColors[difficulty] ?? 'bg-gray-500'
      )}
    >
      {difficulty}
    </div>
  )
}

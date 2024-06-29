import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { Combobox } from '../../../components/combobox'
import {
  useCuisineList,
  useDietList,
  useDifficultyList,
} from '../recipe.queries'
import { DifficultyBadge } from './DifficultyBadge'

export const DifficultySelectableBadges = ({
  value,
  setValue,
}: {
  value: string
  setValue: (value: string) => void
}) => {
  const { data: difficultyList } = useDifficultyList()

  if (!difficultyList) return null

  return (
    <ToggleGroup.Root
      className="flex flex-wrap gap-2"
      type="single"
      aria-label="Text alignment"
      value={value}
      onValueChange={(value) => setValue(value)}
    >
      {difficultyList.map((difficulty) => (
        <ToggleGroup.Item
          key={difficulty.id}
          value={difficulty.id}
          aria-label={difficulty.name}
        >
          <DifficultyBadge
            difficulty={difficulty.name}
            isSelected={value === difficulty.id}
          />
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  )
}

export const CuisineSelector = ({
  value,
  setValue,
}: {
  value: string
  setValue: (value: string) => void
}) => {
  const { data: cuisineList } = useCuisineList()

  if (!cuisineList) return null

  return (
    <Combobox
      value={value}
      setValue={setValue}
      options={cuisineList.map((cuisine) => ({
        label: cuisine.name,
        value: cuisine.id,
      }))}
    />
  )
}

export const DietSelector = ({
  value,
  setValue,
}: {
  value: string
  setValue: (value: string) => void
}) => {
  const { data: dietList } = useDietList()

  if (!dietList) return null

  return (
    <Combobox
      value={value}
      setValue={setValue}
      options={dietList.map((diet) => ({
        label: diet.name,
        value: diet.id,
      }))}
    />
  )
}

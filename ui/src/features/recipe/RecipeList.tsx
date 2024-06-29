import { Button } from '@/components/button'
import { Combobox } from '@/components/combobox'
import { Input } from '@/components/input'
import { Label } from '@/components/label'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { Link } from 'react-router-dom'
import { DifficultyBadge } from './components/DifficultyBadge'
import { RecipeCard } from './components/RecipeCard'
import { useRecipeListPaginationAndFilters } from './recipe.hooks'
import {
  useCuisineList,
  useDietList,
  useDifficultyList,
  useRecipeList,
} from './recipe.queries'

export const RecipeList = () => {
  const { filters, clearFilters, setFilter, incrementPage, decrementPage } =
    useRecipeListPaginationAndFilters()

  const { data: recipeList } = useRecipeList({
    _page: filters.page,
    difficultyId: filters.difficultyId,
    cuisineId: filters.cuisineId,
    dietId: filters.dietId,
    q: filters.q,
  })

  return (
    <div className="flex h-screen w-full bg-white">
      <div className="w-72 shrink-0 border-r-2 bg-orange-50 p-6 shadow-inner">
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label>Search</Label>
              <Input
                placeholder="Search"
                value={filters.q}
                onChange={(e) => setFilter('q', e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Difficulty</Label>
              <DifficultySelectableBadges
                value={filters.difficultyId}
                setValue={(value) => setFilter('difficultyId', value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Cuisine</Label>
              <CuisineSelector
                cuisineId={filters.cuisineId}
                setCuisineId={(value) => setFilter('cuisineId', value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Diet</Label>
              <DietSelector
                dietId={filters.dietId}
                setDietId={(value) => setFilter('dietId', value)}
              />
            </div>
            <Button variant="outline" onClick={() => clearFilters()}>
              Clear filters
            </Button>
          </div>
          <Button asChild variant="destructive">
            <Link to="/new">New Recipe</Link>
          </Button>
        </div>
      </div>

      {recipeList && (
        <div className="flex size-full flex-col gap-4 overflow-y-scroll p-6">
          {recipeList.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4">
              <div className="text-center text-xl font-bold">
                No recipe found.
              </div>
              <div className="text-center text-sm text-gray-600">
                No recipe found with the current filter.
              </div>
              <Button onClick={() => clearFilters()}>Reset</Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
                {recipeList.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
              <div className="flex justify-between">
                <Button
                  onClick={() => decrementPage()}
                  disabled={filters.page === 1}
                >
                  Prev
                </Button>
                <Button
                  onClick={() => incrementPage()}
                  disabled={recipeList.length < 10}
                >
                  Next
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

const DifficultySelectableBadges = ({
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

const CuisineSelector = ({
  cuisineId,
  setCuisineId,
}: {
  cuisineId: string
  setCuisineId: (value: string) => void
}) => {
  const { data: cuisineList } = useCuisineList()

  if (!cuisineList) return null

  return (
    <Combobox
      value={cuisineId}
      setValue={setCuisineId}
      options={cuisineList.map((cuisine) => ({
        label: cuisine.name,
        value: cuisine.id,
      }))}
    />
  )
}

const DietSelector = ({
  dietId,
  setDietId,
}: {
  dietId: string
  setDietId: (value: string) => void
}) => {
  const { data: dietList } = useDietList()

  if (!dietList) return null

  return (
    <Combobox
      value={dietId}
      setValue={setDietId}
      options={dietList.map((diet) => ({
        label: diet.name,
        value: diet.id,
      }))}
    />
  )
}

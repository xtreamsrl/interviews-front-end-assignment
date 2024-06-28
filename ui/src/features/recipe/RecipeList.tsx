import { Link } from 'react-router-dom'
import { Button } from '../../components/button'
import { Input } from '../../components/input'
import { Label } from '../../components/label'
import { RecipeCard } from './components/RecipeCard'
import {
  CuisineSelector,
  DietSelector,
  DifficultySelectableBadges,
} from './components/Selectors'
import { useRecipeListPaginationAndFilters } from './recipe.hooks'
import { useRecipeList } from './recipe.queries'

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
                value={filters.cuisineId}
                setValue={(value) => setFilter('cuisineId', value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Diet</Label>
              <DietSelector
                value={filters.dietId}
                setValue={(value) => setFilter('dietId', value)}
              />
            </div>
            <Button onClick={() => clearFilters()}>Clear all</Button>
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

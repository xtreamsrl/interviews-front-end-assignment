import { useState } from 'react'
import { NumberParam, StringParam, useQueryParams } from 'use-query-params'
import { Button } from '../../components/button'
import { Input } from '../../components/input'
import { Label } from '../../components/label'
import { cn } from '../../utils'
import { useRecipeList } from './recipe.queries'
import { Recipe } from './recipe.types'

export const RecipeList = () => {
  const [query, setQuery] = useQueryParams({
    page: NumberParam,
    q: StringParam,
  })
  const page = query.page ?? 1
  const { data: recipeList } = useRecipeList({
    _page: page,
    q: query.q,
  })

  const [searchQuery, setSearchQuery] = useState('')

  if (!recipeList) return null

  return (
    <div className="flex h-screen w-full bg-white">
      <div className="w-64 shrink-0 border-r-2 bg-orange-200 p-6">
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-col gap-4">
            <div>
              <Label>Search</Label>
              <Input
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                }}
              />
            </div>
          </div>

          <Button
            onClick={() => {
              setQuery({ q: searchQuery })
            }}
          >
            Apply
          </Button>
        </div>
      </div>

      <div className="flex size-full flex-col gap-4 p-6">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {recipeList.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
        <div className="flex justify-between">
          <Button
            onClick={() => setQuery({ page: page - 1 })}
            disabled={page === 1}
          >
            Prev
          </Button>
          <Button
            onClick={() => setQuery({ page: page + 1 })}
            disabled={recipeList.length < 10}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <div className="@container h-full min-w-64">
      <div className="@xs:flex-row @sm:p-5 flex h-full flex-col items-center gap-4 rounded-2xl border border-stone-300 bg-white p-4 shadow-md">
        <div className="@sm:size-32 @sm:min-w-32 @xs:size-24 @xs:min-w-24 flex size-40 w-full min-w-40 items-center justify-center overflow-hidden rounded-xl border border-stone-300">
          <img
            src={`http://localhost:8080${recipe.image}`}
            alt={recipe.name}
            loading="lazy"
            className="size-full object-cover"
          />
        </div>
        <div className="@sm:size-full flex flex-col justify-between">
          <div>
            <div className="@xs:flex-row @xs:items-center flex w-full flex-col-reverse items-start justify-between">
              <div className="@sm:text-2xl text-xl font-bold">
                {recipe.name}
              </div>
              <div>
                <DifficultyBadge difficulty={recipe.difficulty.name} />
              </div>
            </div>
            <div className="@sm:text-base flex gap-1 text-sm">
              <span>{recipe.cuisine.name}</span>
              <span>⋅</span>
              <span>{recipe.diet.name}</span>
            </div>
          </div>
          <div className="@sm:text-base @xs:pt-0 line-clamp-2 pt-4 text-sm text-gray-600">
            {recipe.ingredients.join(', ')}
          </div>
        </div>
      </div>
    </div>
  )
}

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

const DifficultyBadge = ({
  difficulty,
}: {
  difficulty: Recipe['difficulty']['name']
}) => {
  return (
    <div
      className={cn(
        'w-16 rounded-full border px-2 py-1 text-center text-xs font-semibold shadow-sm',
        difficultyBorder[difficulty],
        difficultyShadows[difficulty],
        difficultyColors[difficulty] ?? 'bg-gray-500'
      )}
    >
      {difficulty}
    </div>
  )
}

import { Recipe } from '../../recipe.types'
import { DifficultyBadge } from './DifficultyBadge'

export const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
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

import Image from "next/image";
import { Recipe } from "../utils/types";

interface RecipeCardProps {
  recipe: Recipe;
  onRecipeClick: (recipe: Recipe) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onRecipeClick }) => {
  return (
    <div className="bg-yellow">
      <div
        className="bg-white
                    transform hover:translate-x-[-8px] hover:translate-y-[-8px] transition-transform duration-200
                    hover:cursor-pointer"
        onClick={() => onRecipeClick(recipe)}
      >
        <div className="h-80 relative">
          <Image
            src={recipe.image}
            alt={recipe.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4">
          <h2 className="h-100 font-serif font-light text-4xl pb-20">
            {recipe.name}
          </h2>
          <p>Difficulty: {recipe.difficultyId}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

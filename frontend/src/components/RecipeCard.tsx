import Image from 'next/image';
import { Recipe } from "../utils/types";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <div className="bg-white">
      <div className="h-80 relative">
        <Image
          src={recipe.image}
          alt={recipe.name}
          layout="fill"
          objectFit="cover"
          />
      </div>
      <div className="p-4">
        <h2 className="h-100 font-serif font-light text-4xl pb-20">{recipe.name}</h2>
        <p>Difficulty: {recipe.difficultyId}</p>
      </div>
    </div>
  );
};

export default RecipeCard;

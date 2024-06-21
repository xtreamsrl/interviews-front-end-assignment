import Image from 'next/image';
import { Recipe } from "../utils/types";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <>
      <div className="h-80 relative">
        <Image
          src={recipe.image}
          alt={recipe.name}
          layout="fill"
          objectFit="cover"
          />
      </div>
      <h2 className="h-100 font-serif font-light text-4xl pt-4 pb-20">{recipe.name}</h2>
      <p>Difficulty: {recipe.difficultyId}</p>
    </>
  );
};

export default RecipeCard;

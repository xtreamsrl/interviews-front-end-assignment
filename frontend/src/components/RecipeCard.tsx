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
      <h2 className="h-100">{recipe.name}</h2>
    </>
  );
};

export default RecipeCard;

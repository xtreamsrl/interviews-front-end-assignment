import { Recipe } from "../utils/types";
import Image from "next/image";

const RecipeList = ({ recipes }: { recipes: Recipe[] }) => {
  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <h2>{recipe.name}</h2>
          <Image
            src={recipe.image}
            alt={recipe.name}
            width={200}
            height={200}
          />
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;

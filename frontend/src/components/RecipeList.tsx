import { Recipe } from "../utils/types";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }: { recipes: Recipe[] }) => {
  return (
    <ul className="grid grid-cols-3 gap-4">
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;

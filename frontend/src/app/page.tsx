'use client'

import { useEffect, useState } from "react";
import { Recipe } from "../utils/types";
import { fetchRecipes } from "../utils/api";

const Home = () => {

  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const data = await fetchRecipes();
        setRecipes(data);
      } catch (error) {
        console.error(error);
      }
    };

    getRecipes();

  }, []);

  return (
    <div>
      <ul>
        {recipes.map((recipe: Recipe) => (
          <li key={recipe.id}>
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

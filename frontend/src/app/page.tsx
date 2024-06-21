'use client'

import { useEffect, useState } from "react";
import { Recipe } from "../utils/types";
import { fetchRecipes } from "../utils/api";
import RecipeList from "../components/RecipeList";

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
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default Home;

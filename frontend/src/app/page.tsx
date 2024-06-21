"use client";

import { useEffect, useState } from "react";
import { Recipe } from "../utils/types";
import { fetchRecipes } from "../utils/api";
import RecipeList from "../components/RecipeList";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const data = await fetchRecipes();
        setRecipes(data);
        setFilteredRecipes(data);
      } catch (error) {
        console.error(error);
      }
    };

    getRecipes();
  }, []);

  const handleSearch = (query: string) => {
    const filtered = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(query)
    );
    setFilteredRecipes(filtered);
  };

  return (
    <div className="m-auto p-8 max-w-7xl">
      <SearchBar onSearch={handleSearch} />
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
};

export default Home;

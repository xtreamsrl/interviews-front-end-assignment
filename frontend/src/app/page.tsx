"use client";

import { useEffect, useState } from "react";
import { Recipe, Cuisine, Difficulty } from "../utils/types";
import { fetchCuisines, fetchRecipes, fetchDifficulties } from "../utils/api";

import RecipeList from "../components/RecipeList";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [cuisines, setCuisines] = useState<Cuisine[]>([]);
  const [selectedCuisineId, setSelectedCuisineId] = useState<Cuisine["id"]>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [difficulties, setDifficulties] = useState<Difficulty[]>([]);
  const [selectedDifficultyId, setSelectedDifficultyId] = useState<Difficulty["id"]>("");

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

    const getCuisines = async () => {
      try {
        const data = await fetchCuisines();
        setCuisines(data);
      } catch (error) {
        console.error(error);
      }
    };

    const getDifficulties = async () => {
      try {
        const data = await fetchDifficulties();
        setDifficulties(data);
      } catch (error) {
        console.error(error);
      }
    };

    getRecipes();
    getCuisines();
    getDifficulties();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterRecipes(query, selectedCuisineId, selectedDifficultyId);
  };

  const handleCuisineChange = (cuisineId: Cuisine["id"]) => {
    setSelectedCuisineId(cuisineId);
    filterRecipes(searchQuery, cuisineId, selectedDifficultyId);
  };

  const handleDifficultyChange = (difficultyId: Difficulty["id"]) => {
    setSelectedDifficultyId(difficultyId);
    filterRecipes(searchQuery, selectedCuisineId, difficultyId);
  }

  const filterRecipes = (
    query: string,
    cuisineId: Cuisine["id"],
    difficultyId: Difficulty["id"]
  ) => {
    const filtered = recipes.filter((recipe) => {
      const matchesQuery = recipe.name.toLowerCase().includes(query);
      const matchesCuisine = cuisineId === "" || recipe.cuisineId === cuisineId;
      const matchesDifficulty =
        difficultyId === "" || recipe.difficultyId === difficultyId;

      return matchesQuery && matchesCuisine && matchesDifficulty;
    });

    setFilteredRecipes(filtered);
  };

  return (
    <div className="m-auto p-8 max-w-7xl">
      <SearchBar
        onSearch={handleSearch}
        onCuisineChange={handleCuisineChange}
        cuisines={cuisines}
        onDifficultyChange={handleDifficultyChange}
        difficulties={difficulties}
      />
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
};

export default Home;

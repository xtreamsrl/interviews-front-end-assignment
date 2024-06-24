"use client";

import { useEffect, useState } from "react";
import { Recipe, Cuisine, Difficulty, Diet } from "../utils/types";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchRecipes } from "../features/recipes/recipesSlice";
import { fetchCuisines } from "../features/cuisines/cuisinesSlice";
import { fetchDifficulties } from "../features/difficulties/difficultiesSlice";
import { fetchDiets } from "../features/diets/dietsSlice";

import RecipeList from "../components/RecipeList";
import SearchBar from "../components/SearchBar";
import RecipeModal from "../components/RecipeModal";

const Home = () => {
  const dispatch = useAppDispatch();
  const recipes = useAppSelector((state) => state.recipes.data);
  const cuisines = useAppSelector((state) => state.cuisines.data);
  const difficulties = useAppSelector((state) => state.difficulties.data);
  const diets = useAppSelector((state) => state.diets.data);

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [selectedCuisineId, setSelectedCuisineId] = useState<Cuisine["id"]>("");
  const [selectedDifficultyId, setSelectedDifficultyId] =
  useState<Difficulty["id"]>("");
  const [selectedDietId, setSelectedDietId] = useState<Diet["id"]>("");
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    dispatch(fetchRecipes());
    dispatch(fetchDiets());
    dispatch(fetchDifficulties());
    dispatch(fetchCuisines());
  }, [dispatch]);

  useEffect(() => {
    filterRecipes(
      searchQuery,
      selectedCuisineId,
      selectedDifficultyId,
      selectedDietId
    );
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterRecipes(
      query,
      selectedCuisineId,
      selectedDifficultyId,
      selectedDietId
    );
  };

  const handleCuisineChange = (cuisineId: Cuisine["id"]) => {
    setSelectedCuisineId(cuisineId);
    filterRecipes(searchQuery, cuisineId, selectedDifficultyId, selectedDietId);
  };

  const handleDifficultyChange = (difficultyId: Difficulty["id"]) => {
    setSelectedDifficultyId(difficultyId);
    filterRecipes(searchQuery, selectedCuisineId, difficultyId, selectedDietId);
  };

  const handleDietChange = (dietId: Diet["id"]) => {
    setSelectedDietId(dietId);
    filterRecipes(searchQuery, selectedCuisineId, selectedDifficultyId, dietId);
  };

  const filterRecipes = (
    query: string,
    cuisineId: Cuisine["id"],
    difficultyId: Difficulty["id"],
    dietId: Diet["id"]
  ) => {
    if (!recipes) return;

    const filtered = recipes.filter((recipe) => {
      const matchesQuery =
        recipe.name.toLowerCase().includes(query.toLowerCase()) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(query.toLowerCase())
        ) ||
        recipe.instructions.toLowerCase().includes(query.toLowerCase());
      const matchesCuisine = cuisineId === "" || recipe.cuisineId === cuisineId;
      const matchesDifficulty =
        difficultyId === "" || recipe.difficultyId === difficultyId;
      const matchesDiet = dietId === "" || recipe.dietId === dietId;

      return matchesQuery && matchesCuisine && matchesDifficulty && matchesDiet;
    });

    setFilteredRecipes(filtered);
  };

  const handleRecipeClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="m-auto p-8 max-w-7xl">
      <SearchBar
        onSearch={handleSearch}
        onCuisineChange={handleCuisineChange}
        onDifficultyChange={handleDifficultyChange}
        onDietChange={handleDietChange}
        cuisines={cuisines}
        difficulties={difficulties}
        diets={diets}
      />
      <RecipeList recipes={filteredRecipes} onRecipeClick={handleRecipeClick} />
      {selectedRecipe && (
        <RecipeModal recipe={selectedRecipe} onClose={closeModal} />
      )}
    </div>
  );
};

export default Home;

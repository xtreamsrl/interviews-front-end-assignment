"use client";

import { useEffect, useState } from "react";
import { Recipe, Cuisine, Difficulty, Diet } from "../utils/types";
import { fetchCuisines, fetchRecipes, fetchDifficulties, fetchDiets } from "../utils/api";

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
  const [diets, setDiets] = useState<Diet[]>([]);
  const [selectedDietId, setSelectedDietId] = useState<Diet["id"]>("");

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

    const getDiets = async () => {
      try {
        const data = await fetchDiets();
        setDiets(data);
      } catch (error) {
        console.error(error);
      }
    }

    getRecipes();
    getCuisines();
    getDifficulties();
    getDiets();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterRecipes(query, selectedCuisineId, selectedDifficultyId, selectedDietId);
  };

  const handleCuisineChange = (cuisineId: Cuisine["id"]) => {
    setSelectedCuisineId(cuisineId);
    filterRecipes(searchQuery, cuisineId, selectedDifficultyId, selectedDietId);
  };

  const handleDifficultyChange = (difficultyId: Difficulty["id"]) => {
    setSelectedDifficultyId(difficultyId);
    filterRecipes(searchQuery, selectedCuisineId, difficultyId, selectedDietId);
  }

  const handleDietChange = (dietId: Diet["id"]) => {
    setSelectedDietId(dietId);
    filterRecipes(searchQuery, selectedCuisineId, selectedDifficultyId, dietId);
  }

  const filterRecipes = (
    query: string,
    cuisineId: Cuisine["id"],
    difficultyId: Difficulty["id"],
    dietId: Diet["id"]
  ) => {
    const filtered = recipes.filter((recipe) => {
      const matchesQuery = recipe.name.toLowerCase().includes(query);
      const matchesCuisine = cuisineId === "" || recipe.cuisineId === cuisineId;
      const matchesDifficulty =
        difficultyId === "" || recipe.difficultyId === difficultyId;
      const matchesDiet = dietId === "" || recipe.dietId === dietId;

      return matchesQuery && matchesCuisine && matchesDifficulty && matchesDiet;
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
        onDietChange={handleDietChange}
        diets={diets}
      />
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
};

export default Home;

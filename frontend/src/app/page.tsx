"use client";

import { useEffect, useState } from "react";
import { Recipe, Cuisine } from "../utils/types";
import { fetchCuisines, fetchRecipes } from "../utils/api";

import RecipeList from "../components/RecipeList";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [cuisines, setCuisines] = useState<Cuisine[]>([]);
  const [selectedCuisineId, setSelectedCuisineId] = useState<Cuisine["id"]>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

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

    getRecipes();
    getCuisines();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterRecipes(query, selectedCuisineId);
  };

  const handleCuisineChange = (cuisineId: Cuisine["id"]) => {
    setSelectedCuisineId(cuisineId);
    filterRecipes(searchQuery, cuisineId);
  };

  const filterRecipes = (query: string, cuisineId: Cuisine["id"]) => {
    const filtered = recipes.filter((recipe) => {
      const matchesQuery = recipe.name.toLowerCase().includes(query);

      const matchesCuisine =
        cuisineId === "" || recipe.cuisineId === cuisineId;

      return matchesQuery && matchesCuisine;
    });

    setFilteredRecipes(filtered);
  };


  return (
    <div className="m-auto p-8 max-w-7xl">
      <SearchBar
        onSearch={handleSearch}
        onCuisineChange={handleCuisineChange}
        cuisines={cuisines}
      />
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
};

export default Home;

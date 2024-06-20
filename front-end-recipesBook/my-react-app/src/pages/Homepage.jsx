import Wrapper from "../UI/Wrapper/wrapper";
import { useEffect, useState } from "react";
import { Navbar } from "../components/NavBar/navbar";
import { Filters } from "../components/Filters/filters";
import Title from "../UI/titles/title";
import Flex from "../UI/Flex/Flex";
import { RecipeItem } from "../components/Recipe/recipe";
import Button from "../UI/Button/button";
import { AddRecipe } from "./AddRecipe";

export const Homepage = () => {
  const [recipes, setRecipes] = useState([]);
  const [recipesPage, setRecipesPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(10);
  const [cousines, setCousines] = useState([]);
  const [difficulties, setDifficulties] = useState([]);
  const [diets, setDiets] = useState([]);
  // const totalPages = Math.ceil(recipes.length / recipesPerPage);
  // const startIndex = (recipesPage - 1) * recipesPerPage;
  // const endIndex = startIndex + recipesPerPage;

  useEffect(() => {
    // fetch cousines
    fetch("http://localhost:8080/cuisines")
      .then((response) => response.json())
      .then((data) => {
        setCousines(data);
      })
      .catch((error) => {
        console.error(error);
      });

    // fetch difficulties
    fetch("http://localhost:8080/difficulties")
      .then((response) => response.json())
      .then((data) => {
        setDifficulties(data);
      })
      .catch((error) => {
        console.error(error);
      });

    // fetch diets
    fetch("http://localhost:8080/diets")
      .then((response) => response.json())
      .then((data) => {
        setDiets(data);
      })
      .catch((error) => {
        console.error(error);
      });
    fetch(
      `http://localhost:8080/recipes?_page=${recipesPage}&_limit=${recipesPerPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        const recipes = data;
        setRecipes(recipes);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [recipesPage, recipesPerPage]);

  const onLoadMore = async () => {
    setRecipesPage((prevPage) => prevPage + 1);
    const response = await fetch(
      `http://localhost:8080/recipes?_page=${recipesPage}&_limit=${recipesPerPage}`
    );

    const data = await response.json();
    setRecipes([...recipes, ...data]);
  };
  const setFiltered = (recipes) => {
    setRecipes(recipes);
  };

  return (
    <Wrapper>
      <Navbar />
      <Filters
        setRecipes={setFiltered}
        cousines={cousines}
        difficulties={difficulties}
        diets={diets}
      />
      <AddRecipe
        cousines={cousines}
        difficulties={difficulties}
        diets={diets}
      />
      <Title fontSize="30px">
        Check out the latest recipes from our Community!
      </Title>
      <Flex justify="center" direction="row" gap="100px" wrap="wrap">
        {recipes
          ? recipes.map((recipe) => (
              <RecipeItem recipe={recipe} key={recipe.id} />
            ))
          : ""}
      </Flex>
      <Flex padding="10px" justify="center">
        {/* to fix on pageEnd */}
        {recipesPage !== 3 && (
          <Button fontSize="15px" padding="10px" onClick={onLoadMore}>
            Load More
          </Button>
        )}
      </Flex>
    </Wrapper>
  );
};

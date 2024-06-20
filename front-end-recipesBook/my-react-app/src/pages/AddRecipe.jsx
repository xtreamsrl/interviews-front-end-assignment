/* eslint-disable react/prop-types */
import { useState } from "react";
import Input from "../UI/Input/input";
import Label from "../UI/Input/label";
import Flex from "../UI/Flex/Flex";
import Button from "../UI/Button/button";

export const AddRecipe = ({ cousines, difficulties, diets }) => {
  const [showAddRecipe, setShowAddRecipe] = useState(false);
  const [recipeData, setRecipeData] = useState({
    name: "",
    instructions: "",
    cuisineId: "",
    difficultyId: "",
    dietId: "",
    ingredients: [],
    image: null,
  });

  const handleRecipeChange = (e) => {
    setRecipeData({
      ...recipeData,
      [e.target.name]: e.target.value,
    });
  };

  const createNewRecipe = () => {
    // transforming ingredients from object to array and pushing every value
    const ingredientsArray = [];
    for (const [key, value] of Object.entries(recipeData.ingredients)) {
      ingredientsArray.push(value);
    }
    setRecipeData({
      ...recipeData,
      ingredients: ingredientsArray,
    });

    // create new recipe
    const newRecipe = {
      name: recipeData.name,
      instructions: recipeData.instructions,
      cuisineId: recipeData.cuisineId,
      difficultyId: recipeData.difficultyId,
      dietId: recipeData.dietId,
      ingredients: ingredientsArray,
      image: recipeData.image,
    };
    const formData = new FormData();
    for (const key in newRecipe) {
      formData.append(key, newRecipe[key]);
    }
    fetch("http://localhost:8080/recipes", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Flex direction="column">
      <Button onClick={() => setShowAddRecipe(!showAddRecipe)}>
        Add Recipe
      </Button>
      {showAddRecipe && (
        <form onSubmit={(e) => e.preventDefault()}>
          <Flex direction="column" gap="10px">
            <Flex align="baseline" gap="10px">
              <Label htmlFor="name">Name</Label>
              <Input
                onChange={handleRecipeChange}
                id="name"
                name="name"
                type="text"
                value={recipeData.name}
              />
            </Flex>
            <Flex align="baseline" gap="10px">
              <Label htmlFor="name">Instructions</Label>
              <Input
                onChange={handleRecipeChange}
                id="instructions"
                name="instructions"
                type="text"
                value={recipeData.instructions}
              />
            </Flex>
            <Flex direction="column">
              <Label>Cuisine:</Label>
              <Flex>
                {cousines.map((cousine) => (
                  <Button
                    name="cuisineId"
                    value={cousine.id}
                    onClick={handleRecipeChange}
                    key={cousine.id}
                    width="100px"
                    height="40px"
                    fontSize="20px"
                  >
                    {cousine.name}
                  </Button>
                ))}
              </Flex>
            </Flex>
            <Flex direction="column">
              <Label>Difficulty:</Label>
              <Flex>
                {difficulties.map((difficulty) => (
                  <Button
                    name="difficultyId"
                    value={difficulty.id}
                    onClick={handleRecipeChange}
                    key={difficulty.id}
                    width="100px"
                    height="40px"
                    fontSize="20px"
                  >
                    {difficulty.id}
                  </Button>
                ))}
              </Flex>
            </Flex>
            <Flex direction="column">
              <Label>Diets:</Label>
              <Flex>
                {diets.map((diet) => (
                  <Button
                    name="dietId"
                    value={diet.id}
                    onClick={handleRecipeChange}
                    key={diet.id}
                    width="200px"
                    height="40px"
                    fontSize="20px"
                  >
                    {diet.name}
                  </Button>
                ))}
              </Flex>
            </Flex>
            <Flex direction="column">
              <Label>Ingredients:</Label>
              <Flex gap="10px">
                <Input
                  placeholder="Ingredient 1"
                  name="ingredient1"
                  type="text"
                  onChange={(e) =>
                    setRecipeData((prev) => ({
                      ...prev,
                      ingredients: {
                        ...prev.ingredients,
                        ingredient1: e.target.value,
                      },
                    }))
                  }
                />
                <Input
                  placeholder="Ingredient 2"
                  name="ingredient2"
                  type="text"
                  onChange={(e) =>
                    setRecipeData((prev) => ({
                      ...prev,
                      ingredients: {
                        ...prev.ingredients,
                        ingredient2: e.target.value,
                      },
                    }))
                  }
                />
                <Input
                  placeholder="Ingredient 3"
                  name="ingredient3"
                  type="text"
                  onChange={(e) =>
                    setRecipeData((prev) => ({
                      ...prev,
                      ingredients: {
                        ...prev.ingredients,
                        ingredient3: e.target.value,
                      },
                    }))
                  }
                />
                <Input
                  placeholder="Ingredient 4"
                  name="ingredient4"
                  type="text"
                  onChange={(e) =>
                    setRecipeData((prev) => ({
                      ...prev,
                      ingredients: {
                        ...prev.ingredients,
                        ingredient4: e.target.value,
                      },
                    }))
                  }
                />
              </Flex>
            </Flex>
            <Flex>
              <Input
                type="file"
                onChange={(e) =>
                  setRecipeData({ ...recipeData, image: e.target.files[0] })
                }
              />
            </Flex>
          </Flex>
          <Flex>
            <Button
              onClick={() => createNewRecipe()}
              width="100px"
              height="40px"
              fontSize="10px"
            >
              Create new Recipe
            </Button>
          </Flex>
        </form>
      )}
    </Flex>
  );
};

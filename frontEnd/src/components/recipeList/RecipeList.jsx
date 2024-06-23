import { useEffect, useState } from "react";
import RecipeCard from "../recipeCard/RecipeCard";
import axios from 'axios'

export default function RecipeList() {
    const [recipe, setRecipe] = useState([]);
    const [comment, setComment] = useState([])
    const [difficulty, setDifficulty] = useState([])
    const [diet, setDiet] = useState([])
    const [cuisine, setCuisine] = useState([])
    const [ingredient, setIngredient] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/recipes')
            .then(res => setRecipe(res.data))
            .catch(err => console.log(err));

        axios.get('http://localhost:8080/comments')
            .then(res => setComment(res.data))
            .catch(err => console.log(err));

        axios.get('http://localhost:8080/difficulties')
            .then(res => setDifficulty(res.data))
            .catch(err => console.log(err));

        axios.get('http://localhost:8080/diets')
            .then(res => setDiet(res.data))
            .catch(err => console.log(err));

        axios.get('http://localhost:8080/cuisines')
            .then(res => setCuisine(res.data))
            .catch(err => console.log(err));
    }, []);


    function getCurrentRecipe(recipeId) {
        return recipe.find(recipe => recipe.id === recipeId)

    }

    function getRecipeComments(recipeId) {
        return comment.filter(comment => comment.recipeId === recipeId);
    }

    function getRating(recipeId) {
        const recipeComments = getRecipeComments(recipeId)

        if (recipeComments.length === 0) return null;

        const totalRating = recipeComments.reduce((acc, comment) => acc + comment.rating, 0);
        return (totalRating / recipeComments.length).toFixed(1);
    }

    function getDifficulty(recipeId) {
        const currentRecipe = getCurrentRecipe(recipeId)
        const recipeDifficulty = difficulty.find(difficulty => difficulty.id === currentRecipe.difficultyId);
        return recipeDifficulty.name
    }

    function getDiet(recipeId) {
        const currentRecipe = getCurrentRecipe(recipeId)
        const recipeDiet = diet.find(diet => diet.id === currentRecipe.dietId);
        return recipeDiet.name
    }

    function getCuisine(recipeId) {
        const currentRecipe = getCurrentRecipe(recipeId)
        const recipeCuisine = cuisine.find(cuisine => cuisine.id === currentRecipe.dietId);
        return recipeCuisine.name
    }

    return (
        <>
            {
                recipe.map((dish) => {
                    return <RecipeCard
                        key={dish.id}
                        dishName={dish.name}
                        dishImg={dish.image}
                        dishRating={getRating(dish.id)}
                        dishReviews={getRecipeComments(dish.id).length}
                        dishDifficulty={getDifficulty(dish.id)}
                        dishDiet={getDiet(dish.id)}
                        dishCuisine={getCuisine(dish.id)}
                        dishIngredients={dish.ingredients}
                    />
                })
            }

        </>
    )
}
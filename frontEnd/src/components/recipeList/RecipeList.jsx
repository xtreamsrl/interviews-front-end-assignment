import { useEffect, useState } from "react";
import RecipeCard from "../recipeCard/RecipeCard";
import axios from 'axios'
import './recipeList.css'
import { getRecipes, getComments, getDifficulties, getDiets, getCuisines } from '../../utils/apiCalls.jsx';

export default function RecipeList() {
    const [recipe, setRecipe] = useState([]);
    const [comment, setComment] = useState([])
    const [difficulty, setDifficulty] = useState([])
    const [diet, setDiet] = useState([])
    const [cuisine, setCuisine] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const recipesPerPage = 10;

    useEffect(() => {
        setLoading(true);
        Promise.all([getRecipes(), getComments(), getDifficulties(), getDiets(), getCuisines()])
            .then(([recipe, comment, difficultie, diet, cuisine]) => {
                setRecipe(recipe);
                setComment(comment);
                setDifficulty(difficultie);
                setDiet(diet);
                setCuisine(cuisine);
            })
            .catch(err => setError(err))
            .finally(() => setLoading(false));
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

    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = recipe.slice(indexOfFirstRecipe, indexOfLastRecipe);

    const totalPages = Math.ceil(recipe.length / recipesPerPage);

    function handlePageChange(pageNumber) {
        setCurrentPage(pageNumber);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    if (loading) {
        return <div className="userMessage"><h2>Loading...</h2></div>;
    }

    if (error) {
        return <div><h2>Error: {error}</h2 ></div >;
    }

    return (
        <div className="recipeList">
            {
                currentRecipes.map((dish) => {
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
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={(index + 1 === currentPage ? 'active' : '') + "redButton"}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    )
}
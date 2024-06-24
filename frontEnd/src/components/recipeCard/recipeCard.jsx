import './recipeCard.css'
import Tag from './Tag.jsx'
import DishIngredient from './DishIngredient.jsx'

export default function RecipeCard({ dishName, dishImg, dishRating, dishReviews, dishDifficulty, dishDiet, dishCuisine, dishIngredients }) {


    return (
        <div className='card'>
            <div className='cardContent'>
                <div className='cardLeft'>
                    <img src={`http://localhost:8080${dishImg}`} className='dishImg'></img>
                </div>
                <div className='cardCenter'>
                    <div className='dishOverview'>
                        <h2 className='dishTitle'>{dishName}</h2>
                        <div className='dishIngredients'>
                            {
                                dishIngredients.map((ingredient, i) => {
                                    console.log(i)
                                    return <DishIngredient
                                        key={i}
                                        dishIngredient={ingredient} />
                                })
                            }
                        </div>
                    </div>

                    <h3>Tags:</h3>
                    <div className='dishTags'>
                        <Tag tagSubject={dishCuisine} />
                        <Tag tagSubject={dishDiet} />
                    </div>
                </div>
                <div className='cardRight'>
                    <div className='reviewsBlock'>
                        <div className='reviewsText'>
                            <h3 className='dishRating'>Rated {dishRating} Stars</h3>
                            <p className='numberOfReviews'>{dishReviews} {dishReviews > 1 ? " reviews" : " review"}</p>
                        </div>
                        <div className='reviewsVote'>
                            <button className='redButton dishVote'>{dishRating}</button>
                        </div>
                    </div>
                    <div className='actionBlock'>
                        <p className='dishDifficulty'><b>Recipe difficulty:</b> {dishDifficulty}</p>
                        <button className='redButton callToActionButton'>View details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
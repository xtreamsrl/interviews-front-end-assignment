import './recipeCard.css'
import Tag from './Tag.jsx'
import DishCategory from './DishCategory.jsx'
import DishIngredient from './DishIngredient.jsx'

export default function RecipeCard() {

    return (
        <div className='card'>
            <div className='cardLeft'>
                <img src="Beef-Tacos.jpg" className='dishImg'></img>
            </div>
            <div className='cardCenter'>
                <div className='dishOverview'>
                    <h2 className='dishTitle'>Tacos with meat</h2>
                    <div className='dishCategories'>
                        <DishCategory />
                        <DishCategory />
                    </div>
                </div>
                <div className='dishDetails'>
                    <h3 className='dishType'>Classic Italian Pasta Dish</h3>
                    <div className='dishIngredients'>
                        <DishIngredient />
                        <DishIngredient />
                    </div>
                </div>
                <div className='dishTags'>
                    <Tag />
                    <Tag />
                </div>
            </div>
            <div className='cardRight'>
                <div className='reviewsBlock'>
                    <div className='reviewsText'>
                        <h3 className='dishRating'>Rated 5.0 Stars</h3>
                        <p className='numberOfReviews'>500+ reviews</p>
                    </div>
                    <div className='reviewsVote'>
                        <button className='redButton dishVote'>5.0</button>
                    </div>
                </div>
                <div className='actionBlock'>
                    <h2 className='dishPrice'>$15</h2>
                    <p className='dishTime'>30 Minutes, 4 Servings</p>
                    <button className='redButton callToActionButton'>View details</button>
                </div>
            </div>
        </div>


    )
}

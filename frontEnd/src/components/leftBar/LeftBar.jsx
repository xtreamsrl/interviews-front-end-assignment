import { useEffect, useState } from "react";
import SelectOption from './SelectOption'
import './leftBar.css'
import { getDifficulties, getDiets, getCuisines } from '../../utils/apiCalls.jsx'
import Slider from './Slider.jsx'

export default function LeftBar() {
    const [difficulty, setDifficulty] = useState([])
    const [diet, setDiet] = useState([])
    const [cuisine, setCuisine] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [ratingFilter, setRatingFilter] = useState(1.0);
    const [difficultyFilter, setDifficultyilter] = useState(1);
    const [isSidebarHidden, setIsSidebarHidden] = useState(false); // Stato per gestire la visibilità della barra laterale

    useEffect(() => {
        setLoading(true);
        Promise.all([getDifficulties(), getDiets(), getCuisines()])
            .then(([difficulty, diet, cuisine]) => {
                setDifficulty(difficulty);
                setDiet(diet);
                setCuisine(cuisine);
            })
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, []);

    function getDifficultyName(difficultyId) {
        if (!difficulty || difficulty.length === 0) {
            console.log('Data not loaded yet');
            return null;
        }

        const recipeDifficulty = difficulty.find(difficulty => difficulty.id === difficultyId.toString());
        if (!recipeDifficulty) {
            console.log('Difficulty not found:', difficultyId);
            return null;
        }

        console.log(recipeDifficulty);
        return recipeDifficulty.name;
    }

    const handleRatingChange = (value) => {
        setRatingFilter(value);
    };

    const handleDifficultyChange = (value) => {
        setDifficultyilter(value);
    };

    const toggleSidebar = () => {
        setIsSidebarHidden(!isSidebarHidden);
    };

    if (loading) {
        return <div className="userMessage"><h2>Loading...</h2></div>;
    }

    if (error) {
        return <div><h2>Error: {error}</h2 ></div >;
    }

    return (
        <div className={`leftBar ${isSidebarHidden ? 'hidden' : ''}`}>
            <div className="toggleArrow" onClick={toggleSidebar}>
                <img src='./left-arrow.svg' alt='Toggle Arrow' className={`logoImg ${isSidebarHidden ? 'rotate' : ''}`} />
            </div>
            <form className="filtersForm">
                <h2>Discover recipes</h2>
                <div className="discoverForm">
                    <label>
                        <p className='formLabel'>Search by name:</p>
                        <input type="text" name="nome" placeholder='Pizza' className='input' />
                    </label>
                    <label>
                        <p className='formLabel'>Select cuisine:</p>
                        <select className='input' defaultValue="cocco">
                            {cuisine.map((cuisine, i) => (
                                <SelectOption
                                    key={i}
                                    label={cuisine.name}
                                    value={cuisine.id}
                                />
                            ))}
                        </select>
                    </label>
                    <label className='input'>
                        <p className='formLabel'>Select dietary:</p>
                        <select className='input'>
                            {diet.map((diet, i) => (
                                <SelectOption
                                    key={i}
                                    label={diet.name}
                                    value={diet.id}
                                />
                            ))}
                        </select>
                    </label>
                </div>
                <div className="difficultyFilters">
                    <h2>Difficulty: {getDifficultyName(difficultyFilter)}</h2>
                    <div className="selectDifficulty">
                        <Slider
                            sliderValue={difficultyFilter}
                            onSliderChange={handleDifficultyChange}
                            min="1"
                            max="3"
                            step="1"
                        />
                    </div>
                </div>
                <div className="userReviewsFilters">
                    <h2>Rating: {ratingFilter.toFixed(1)}</h2>
                    <div className="selectReviews">
                        <Slider
                            sliderValue={ratingFilter}
                            onSliderChange={handleRatingChange}
                            min="1.0"
                            max="5.0"
                            step="0.1"
                        />
                    </div>
                    <input type="submit" value="Submit" className='button redButton submitButton input' />
                </div>
            </form>
        </div>
    )
}

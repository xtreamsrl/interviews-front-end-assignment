import { useState } from 'react'
import './App.css'
import RecipeCard from './components/recipeCard/RecipeCard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RecipeCard />
    </>
  )
}

export default App

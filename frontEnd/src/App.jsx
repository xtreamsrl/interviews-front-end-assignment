import { useState } from 'react'
import './App.css'
import RecipeList from './components/recipeList/RecipeList.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RecipeList />
    </>
  )
}

export default App

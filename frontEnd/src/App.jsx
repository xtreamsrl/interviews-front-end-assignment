import { useState } from 'react'
import './App.css'
import RecipeList from './components/recipeList/RecipeList.jsx'
import NavBar from './components/navbar/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <NavBar />
      <RecipeList />
    </div>
  )
}

export default App

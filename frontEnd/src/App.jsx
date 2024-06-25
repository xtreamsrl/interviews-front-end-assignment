import { useState } from 'react'
import './App.css'
import RecipeList from './components/recipeList/RecipeList.jsx'
import NavBar from './components/navbar/Navbar.jsx'
import LeftBar from './components/leftBar/LeftBar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <NavBar />
      <div className='pageBody'>
        <LeftBar />
        <RecipeList className='recipeListComponent' />
      </div>
    </div>
  )
}

export default App

import { Route, Routes } from "react-router-dom"
import CreatePost from './components/Crud/Create'
import Update from "./components/Crud/Update";
import Posts from './components/screen/Posts'

function App() {
  return (
    <div className="">
      <h1 className=""></h1>
      <Routes>
        <Route path="/" element={<Posts/>} />
        <Route path="/createpost" element={<CreatePost/>} />
        <Route path="/updatepost/:id" element={<Update/>} />   
      </Routes>
    </div>
  );
}

export default App;
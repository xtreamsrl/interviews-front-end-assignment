import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar, Posts, SinglePost } from './components/index';
import AddPost from './pages/addPost/AddPost';
import { Home, Favourite } from './pages/index';

import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/posts' element={<Posts />} />

        <Route path='add-post/:id' element={<AddPost />} />

        <Route path='/single-post/:id' element={<SinglePost />} />

        <Route path='/favourite' element={<Favourite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

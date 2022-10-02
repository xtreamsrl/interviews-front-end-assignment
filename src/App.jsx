import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar, Posts } from './components/index';
import AddPost from './pages/addPost/AddPost';
import { Home, Favourite, EditPost } from './pages/index';

import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='post/' element={<Posts />} />

        <Route path='add-post/' element={<AddPost />} />

        <Route path='edit/:id' element={<EditPost />} />

        <Route path='/favourite' element={<Favourite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

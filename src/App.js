import { Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";

import Navigation from "./routes/navigation/navigation.component";
import PostList from "./components/post-list/post-list.component";
import Create from "./routes/create/create.component";

import { getPosts } from "./hooks/requests";

const App = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<PostList posts={posts} />} />
        <Route path="create" element={<Create />} />
      </Route>
    </Routes>
  );
};

export default App;

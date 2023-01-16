import { useEffect, useState } from "react";

import PostList from "./components/post-list/post-list.component";

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
    <div>
      <PostList posts={posts} />
    </div>
  );
};

export default App;

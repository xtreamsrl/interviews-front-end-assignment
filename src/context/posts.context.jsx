import { createContext, useState, useEffect } from "react";

import { getPosts } from "../hooks/requests";

export const PostsContext = createContext({
  posts: [],
});

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  // console.log(posts);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  const value = { posts, setPosts };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};

import { useState, useEffect } from "react";
import { Fragment } from "react";

import PostList from "../../components/post-list/post-list.component";

import { getPosts } from "../../hooks/requests";

import "./home.styles.scss";

const Home = () => {
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
    <Fragment>
      <PostList posts={posts} />
    </Fragment>
  );
};

export default Home;

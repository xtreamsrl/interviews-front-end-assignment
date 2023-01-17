import { useContext } from "react";
import { Fragment } from "react";

import { PostsContext } from "../../context/posts.context";
import PostList from "../../components/post-list/post-list.component";

import "./home.styles.scss";

const Home = () => {
  const { posts } = useContext(PostsContext);

  return (
    <Fragment>
      <PostList posts={posts} />
    </Fragment>
  );
};

export default Home;

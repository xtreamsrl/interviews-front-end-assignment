import Post from "../post/post.component";
import "./post-list.styles.scss";

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map((post) => {
        const { id } = post;
        return <Post key={id} post={post} />;
      })}
    </div>
  );
};

export default PostList;

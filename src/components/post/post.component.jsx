import "./post.styles.scss";

const Post = ({ post }) => {
  const { body, title } = post;

  return (
    <div className="post-container">
      <h1 className="post-title"> {title}</h1>
      <p className="post-body">{body} </p>
    </div>
  );
};

export default Post;

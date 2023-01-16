import "./post.styles.scss";

const Post = ({ post }) => {
  const { body, title } = post;

  return (
    <div className="post-container">
      <h2 className="post-title"> {title}</h2>
      <p className="post-body">{body} </p>
    </div>
  );
};

export default Post;

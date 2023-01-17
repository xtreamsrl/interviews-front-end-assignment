import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="title-container">
        <h1>The Blog</h1>
      </div>
      <div className="nav-links-container">
        <span className="nav-link">Home</span>
        <span className="nav-link">New Post</span>
      </div>
    </div>
  );
};

export default Navigation;

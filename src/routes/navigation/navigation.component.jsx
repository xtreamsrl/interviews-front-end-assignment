import { Fragment } from "react";

import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <div className="title-container">
          <h1>The Post</h1>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/"}>
            Home
          </Link>
          <Link className="nav-link" to="/create">
            New Post
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

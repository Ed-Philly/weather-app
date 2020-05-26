import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const HeaderBar = () => {
  return (
    <div className="header-container">
      <div className="logo-title">
        <h1>
          <Link to="/">Weather app</Link>
        </h1>
      </div>
      <div className="head-link">
        <div>
          <Link to="/resource">Resources</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;

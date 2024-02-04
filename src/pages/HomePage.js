import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="Home font-face-quiny">
      <div className="title-container">
        <div className="title">
          <span>- al</span>
          <span>varokoke -</span>
        </div>
      </div>
      <div className="home-link font-face-mulingar">
        <Link className="link" to="/gallery">
          Gallery
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

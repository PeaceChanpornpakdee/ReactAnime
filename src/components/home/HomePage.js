import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>My React Website</h1>
    <p>React, Redux and React Router for responsive web apps.</p>
    <Link to="about" className="btn btn-primary btn-lg">
      About Me
    </Link>
  </div>
);

export default HomePage;
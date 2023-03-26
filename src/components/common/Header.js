import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/collections" activeStyle={activeStyle}>
        Collection
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About Me
      </NavLink>
    </nav>
  );
};

export default Header;

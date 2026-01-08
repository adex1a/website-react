import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="Header-navbarContainer">
      <Link to="/" className="Header-navbarLink">
        Home
      </Link>
    </nav>
  );
};
export default NavBar;

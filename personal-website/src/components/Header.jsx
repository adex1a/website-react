import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1 className="Header-title">Aadya Sharma</h1>
      <nav className="Header-navbarContainer">
        <Link to="/" className="Header-navbarLink">
          Home
        </Link>
      </nav>
    </header>
  );
};
export default Header;

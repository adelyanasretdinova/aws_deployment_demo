import { Link } from "react-router-dom";
import { useState } from "react";

const Header = (props) => {
  return (
    <header>
      <h1> Welcome to my online wardrobe!</h1>
      <nav className="d-flex justify-content-center ">
        <ul className="nav border-bottom border-primary">
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Main page wardrobe
            </Link>
          </li>
          {props.isloggedIn ? (
            <li className="nav-item">
              <Link to="/newItem" className="nav-link">
                Create new item
              </Link>
            </li>
          ) : null}
          <li className="nav-item">
            <Link to="/registration" className="nav-link">
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

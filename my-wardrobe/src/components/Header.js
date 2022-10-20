import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1> Welcome to my online wardrobe!</h1>
      <nav className="d-flex justify-content-center ">
        <ul className="nav border-bottom border-primary">
          <li className="nav-item">
            {" "}
            <Link to="/" className="nav-link">
              Main page wardrobe
            </Link>
          </li>
          <li className="nav-item">
            {" "}
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            {" "}
            <Link to="/newItem" className="nav-link">
              Create new item
            </Link>
          </li>
          <li className="nav-item">
            {" "}
            <Link to="/registration" className="nav-link">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

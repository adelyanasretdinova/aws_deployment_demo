import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <h1> Welcome to my online wardrobe!</h1>
      <nav className="d-flex justify-content-center"> 
        <ul className="nav">
        <li className="nav-item"> <Link to="/" className="nav-link">Main page wardrobe</Link></li>
        <li className="nav-item"> <Link to="/about" className="nav-link">About</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
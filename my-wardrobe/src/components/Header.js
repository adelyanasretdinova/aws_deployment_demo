import { Link } from "react-router-dom"

// Create what we should see: html and js
const Header = () => {
  return (
    <header>
      <h1> Welcome to my online wardrobe!</h1>
      <nav> 
        <ul>
        <li> <Link to="/">Main page wardrobe</Link></li>
        <li> <Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
import CartWidget from "./CartWidget"
import "./navbar.css"
import Logo from "./Logo/Logo"
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <ul className="categories-navbar">
        <Link to="/category/termo" className="categorie-navbar">
          TERMOS
        </Link>
        <Link to="/category/mate" className="categorie-navbar">
          MATES
        </Link>
        <Link to="/category/bombilla" className="categorie-navbar">
          BOMBILLAS
        </Link>
      </ul>
      <CartWidget/>

    </nav>
  )
}

export default NavBar

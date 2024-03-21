import Carrito from "./Carrito"
import "./navbar.css"
import Logo from "./Logo"

const NavBar = () => {
  return (
    <nav className="navbar">
        <Logo />
        <ul className="list">
            <li>Mates</li>
            <li>Termos</li>
            <li>Bombillas</li>
            <li>Accesorios</li>
        </ul>
        <p>2</p>
        <Carrito />
    </nav>
  )
}

export default NavBar

import { Link } from "react-router-dom"
import CartButton from "./CartButton"

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo"> WEARIFY </Link>
            <ul className="navbar-links">
                <li className="navbar-item"> <Link to="/outlet"> Outlet </Link> </li>
                <li className="navbar-item"> <Link to="/women"> Dla kobiet </Link> </li>
                <li className="navbar-item"> <Link to="/men"> Dla mężczyzn </Link> </li>
            </ul>
            <CartButton />
        </nav>
    )
}

export default Navbar;
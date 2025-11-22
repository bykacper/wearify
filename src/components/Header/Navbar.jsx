import { Link } from "react-router-dom"
import CartButton from "./CartButton"
import styles from "./Header.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.logo}> WEARIFY </Link>
            <ul className={styles.navbarLinks}>
                <li className={styles.navbarItem}> <Link to="/outlet"> Outlet </Link> </li>
                <li className={styles.navbarItem}> <Link to="/women"> Dla kobiet </Link> </li>
                <li className={styles.navbarItem}> <Link to="/men"> Dla mężczyzn </Link> </li>
            </ul>
            <CartButton />
        </nav>
    )
}

export default Navbar;
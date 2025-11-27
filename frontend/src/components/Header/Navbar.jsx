import { Link } from "react-router-dom"
import CartButton from "./CartButton"
import styles from "./Header.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar} aria-label="Główna nawigacja">
            <Link to="/" className={styles.logo}> WEARIFY </Link>
            <ul className={styles.navList}>
                <li className={styles.navItem}> <Link to="/outlet"> Outlet </Link> </li>
                <li className={styles.navItem}> <Link to="/women"> Dla kobiet </Link> </li>
                <li className={styles.navItem}> <Link to="/men"> Dla mężczyzn </Link> </li>
            </ul>
            <CartButton />
        </nav>
    )
}

export default Navbar;
import { Link } from 'react-router';
import styles from './ProductDetails.module.css';

const Breadcrumbs = ({ name }) => {
    return (
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <ol>
                <li><Link to="/">Strona główna</Link></li>
                <li aria-current="page">/ {name}</li>
            </ol>
        </nav>
    )
}

export default Breadcrumbs;
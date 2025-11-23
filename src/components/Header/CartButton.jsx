import shoppingCartIcon from '../../assets/shoppingCartIcon.png';
import styles from "./Header.module.css";

const CartButton = () => {
    return (
        <button className={styles.cartButton} aria-label='Otwórz koszyk'>
            Koszyk
            <img src={shoppingCartIcon} alt="Koszyk z zakupami" />
        </button>
    )
}

export default CartButton;
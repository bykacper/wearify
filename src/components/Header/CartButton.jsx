import shoppingCartIcon from '../../assets/shoppingCartIcon.png';
import { useCartStore } from '../../store/cartStore';
import styles from "./Header.module.css";

const CartButton = () => {
    const toogleCart = useCartStore(state => state.toggleCart);

    return (
        <button onClick={toogleCart} className={styles.cartButton} aria-label='Otwórz koszyk'>
            Koszyk
            <img src={shoppingCartIcon} alt="Koszyk z zakupami" />
        </button>
    )
}

export default CartButton;
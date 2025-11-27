import styles from "./ProductDetails.module.css";
import Accordion from "./Accordion";
import { useCartStore } from "../../store/cartStore";

const ProductInfo = ({ product }) => {
    const genderLabel = product.gender === "men" ? "Kolekcja męska" : "Kolekcja damska";
    const addItemToCart = useCartStore(state => state.addItem);

    return (
        <div className={styles.productInfo}>
            <h1 className={styles.productName}>{product.name}</h1>
            <p className={styles.gender}>{genderLabel}</p>
            <p className={styles.price}>{product.price} zł</p>
            <button onClick={() => addItemToCart(product)} className={styles.button}>Dodaj do koszyka</button>
            <Accordion title="INFO PRODUKTU">
                <p>Lorem ipsum...</p>
            </Accordion>

            <Accordion title="POLITYKA ZWROTÓW">
                <p>Zwroty w ciągu 30 dni...</p>
            </Accordion>

            <Accordion title="INFO O WYSYŁCE">
                <p>Dostawa 24h...</p>
            </Accordion>
        </div>
    );
};

export default ProductInfo;

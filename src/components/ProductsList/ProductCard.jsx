import { Link } from "react-router-dom";
import styles from "./ProductsList.module.css"; 

const ProductCard = ({ product }) => {
    return (
        <Link
            to={`/product/${product.id}`}
            className={styles.productCard}
            aria-label={`Zobacz szczegóły produktu ${product.name}`}
        >
            <figure className={styles.figure}>
                <div className={styles.imageWrapper}>
                    <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        decoding="async"
                        className={styles.image}
                    />

                    {product.bestseller && (
                        <span className={styles.badge}>Bestseller</span>
                    )}
                </div>

                <figcaption className={styles.productInfo}>
                    <span>{product.name}</span>
                    <span>{product.price} zł</span>
                </figcaption>
            </figure>
        </Link>
    )
}

export default ProductCard;

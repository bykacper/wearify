import styles from "./ProductDetails.module.css";

const Gallery = ({ image, name }) => {
    return (
        <img
            src={image}
            alt={`Produkt ${name}`}
            className={styles.productImage}
            loading="lazy"
            decoding="async"
        />
    );
};

export default Gallery;

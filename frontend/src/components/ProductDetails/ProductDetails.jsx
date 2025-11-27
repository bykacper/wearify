import styles from './ProductDetails.module.css';
import Breadcrumbs from './Breadcrumbs';
import Gallery from './Gallery';
import Accordion from './Accordion';
import ProductInfo from './ProductInfo';

const ProductDetails = ({ product }) => {
    return (
        <article className={styles.productDetails}>
            <Breadcrumbs name={product.name} />
            <div className={styles.productDetailsWrapper}>
                <Gallery image={product.image} name={product.name} />
                <div className={styles.productInfo}>
                    <ProductInfo product={product}/>
                </div>
            </div>
        </article>
    )
}

export default ProductDetails;
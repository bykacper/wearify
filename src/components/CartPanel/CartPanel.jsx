import { useEffect } from 'react';
import { useCartStore } from '../../store/cartStore';
import styles from './CartPanel.module.css';
import ProductCard from './ProductCard';
import Summary from './Summary';

const CartPanel = () => {
    const isOpen = useCartStore(state => state.isOpen);
    const closeCart = useCartStore(state => state.closeCart);
    const products = useCartStore(state => state.items);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        return () => (document.body.style.overflow = 'auto');
    }, [isOpen]);


    return (
        <>
            {isOpen && (
                <div className={styles.overlay}
                    onClick={closeCart}
                    aria-hidden='true'
                    role='presentation'>
                </div>
            )}

            <aside className={`${styles.cartPanel} ${isOpen ? styles.cartPanelOpen : ""}`}>
                <h2 className={styles.title}> Koszyk ({products.length} artykułów) </h2>
                <div className={styles.products}>
                    {products.length > 0 ? (
                        products.map(product => {
                            return <ProductCard key={product.id} product={product} />
                        })
                    ) : <p className={styles.cartIsEmpty}> Twój koszyk jest pusty. </p>}
                </div>
                {products.length > 0 ? <Summary /> : null}
            </aside>
        </>

    )
}

export default CartPanel;
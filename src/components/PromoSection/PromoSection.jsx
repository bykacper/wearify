import lightning from '../../assets/lightning.png';
import sale_image from '../../assets/sale_image.png';
import styles from "./PromoSection.module.css";

const PromoSection = () => {
    return (
        <section className={styles.sale}>
            <div className={styles.textBlock}>
                <img 
                    src={lightning} 
                    alt="" 
                    className={styles.lightning} 
                />

                <h3 className={styles.title}>WYPRZEDAŻ!</h3>
                <h2 className={styles.discount}>-25%</h2>

                <p className={styles.description}>
                    25% zniżki na wszystko z kodem TEES25
                </p>
            </div>

            <img 
                src={sale_image} 
                alt="Modelka prezentująca ubrania Wearify"
                loading='lazy'
                decoding='async'
                className={styles.image}
            />
        </section>
    );
}

export default PromoSection;

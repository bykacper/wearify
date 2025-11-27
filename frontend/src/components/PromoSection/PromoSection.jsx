import { memo } from 'react';
import lightningImg from '../../assets/lightning.png';
import saleImage from '../../assets/sale_image.png';
import styles from './PromoSection.module.css';

const PromoSection = () => {

  return (
    <section
      className={styles.promoSection}
      role="region"
      aria-label="Promocja - wyprzedaż"
    >
      <div className={styles.promoText}>
        <img src={lightningImg} alt="" className={styles.lightning} aria-hidden="true" />

        <h2 className={styles.title}>WYPRZEDAŻ!</h2>
        <h3 className={styles.discount}>-25%</h3>

        <p className={styles.description}>
          25% zniżki na wszystko z kodem <strong>TEES25</strong>
        </p>
      </div>

      <figure className={styles.imageWrapper}>
        <img
          src={saleImage}
          alt="Modelka prezentująca ubrania Wearify"
          decoding="async"
          className={styles.image}
          width="1000"     
          height="666"      
        />
      </figure>
    </section>
  );
};

export default memo(PromoSection);

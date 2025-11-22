import hero_image_1 from '../../assets/heroImage1.png';
import hero_image_2 from '../../assets/heroImage2.png';
import hero_image_3 from '../../assets/heroImage3.png';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero} aria-label="Wearify hero section">
            
            <div className={styles.content}>
                <h1 className={styles.title}>WEARIFY</h1>
                <p className={styles.subtitle}>Nieograniczone możliwości</p>
            </div>

            <div className={styles.gallery}>
                <img 
                    src={hero_image_1} 
                    alt="Modelka w sportowej koszulce Wearify" 
                    decoding="async"
                />
                <img 
                    src={hero_image_2} 
                    alt="Koszulka Wearify na wieszaku"
                    decoding="async"
                />
                <img 
                    src={hero_image_3} 
                    alt="Model prezentujący sportową koszulkę"
                    decoding="async"
                />
            </div>
        </section>
    );
}

export default Hero;
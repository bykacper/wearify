import styles from './Newsletter.module.css';

const Newsletter = () => {
    return (
        <section className={styles.newsletter}>
            <button type='button'> 
                <span className={styles.arrow}> → </span> 
                <span className={styles.content}>-10% NA PIERWSZE ZAMÓWIENIE!</span>
                <span className={styles.arrow}> ← </span> 
            </button>
        </section>
    )
}

export default Newsletter;
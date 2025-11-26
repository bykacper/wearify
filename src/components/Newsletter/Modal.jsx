import styles from './Newsletter.module.css';
import modalImage from '../../assets/modalImage.png';

const Modal = () => {
    return (
        <>
            <section className={styles.modal} role='dialog' aria-modal='true'>
                <div className={styles.closeWrapper}>
                    <button className={styles.closeButton}> X </button>
                </div>
                <div className={styles.newsletterWrapper}>
                    <img src={modalImage} alt="" />
                    <div className={styles.newsletterForm}>
                        <input type="text" />
                        <input type="text" />
                    </div>
                </div>

            </section>

        </>

    )
}

export default Modal;
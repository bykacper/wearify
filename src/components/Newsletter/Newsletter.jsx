import { useEffect, useState } from 'react';
import Modal from './Modal';
import styles from './Newsletter.module.css';
import Overlay from '../Overlay/Overlay';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';

const Newsletter = () => {
    const [modalVisibility, setModalVisibility] = useState(false);

    const changeModalVisibility = () => {
        setModalVisibility(mV => !mV);
    }

    useLockBodyScroll(modalVisibility);

    return (
        <section className={styles.newsletter}>
            <button type='button' onClick={changeModalVisibility} className={styles.changeModalVisibilityButton}>
                <span className={styles.arrow}> → </span>
                <span className={styles.content}>-10% NA PIERWSZE ZAMÓWIENIE!</span>
                <span className={styles.arrow}> ← </span>
            </button>
            {modalVisibility && <Overlay closeOverlay={changeModalVisibility} />}
            {modalVisibility && <Modal />}
        </section>
    )
}

export default Newsletter;
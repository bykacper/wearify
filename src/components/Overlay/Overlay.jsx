import styles from './Overlay.module.css';

const Overlay = ({ closeOverlay }) => {
    return (
        <div className={styles.overlay}
            onClick={closeOverlay}
            aria-hidden='true'
            role='presentation'>
        </div>
    )
}

export default Overlay;
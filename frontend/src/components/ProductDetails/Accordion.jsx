import styles from "./ProductDetails.module.css";

const Accordion = ({ title, children }) => {
    return (
        <details className={styles.dropDown}>
            <summary>{title}</summary>
            <div className={styles.dropDownContent}>
                {children}
            </div>
        </details>
    );
};

export default Accordion;

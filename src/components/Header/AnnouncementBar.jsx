import styles from "./Header.module.css";

const AnnouncementBar = ({ message }) => {
    return <div className={styles.announcement}> {message} </div>
}

export default AnnouncementBar;
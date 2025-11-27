import styles from "./Footer.module.css";
import facebook from "../../assets/facebook-icon.png";
import instagram from "../../assets/instagram-icon.png";
import youtube from "../../assets/youtube-icon.png";

const Footer = () => {
    return (
        <footer className={styles.footer}>

            <address className={styles.contact}>
                <h3>WEARIFY</h3>
                <p>kacperus12345pl</p>
                <p>Tel.: 123-456-789</p>
            </address>

            <nav className={styles.links}>
                <div>
                    <h4>Sklep</h4>
                    <ul>
                        <li>Nowości</li>
                        <li>Kobiety</li>
                        <li>Mężczyźni</li>
                    </ul>
                </div>

                <div>
                    <h4>Nasz sklep</h4>
                    <ul>
                        <li>O nas</li>
                        <li>Subskrybuj</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                <div>
                    <h4>Zasady i Warunki</h4>
                    <ul>
                        <li>Nasze zasady</li>
                        <li>Wysyłka i płatności</li>
                        <li>Metody płatności</li>
                        <li>Cookies</li>
                    </ul>
                </div>
            </nav>

            <ul className={styles.social}>
                <li>
                    <img src={facebook} alt="Facebook" loading="lazy"/>
                </li>
                <li>
                    <img src={instagram} alt="Instagram" loading="lazy"/>
                </li>
                <li>
                    <img src={youtube} alt="Youtube" loading="lazy"/>
                </li>
            </ul>

            <section className={styles.copy}>
                <p> &copy; 2025 WEARIFY.</p>
            </section>

        </footer>
    );
};

export default Footer;

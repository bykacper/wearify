import AnnouncementBar from './AnnouncementBar';
import Navbar from './Navbar';

const Header = () => {
    const announcementMsg = "Wyprzedaż! 25% zniżki na wszystko z kodem TEES25";

    return (
        <header>
            <AnnouncementBar message={announcementMsg}/>
            <Navbar />
        </header>
    )
}

export default Header;
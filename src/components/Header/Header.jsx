import AnnouncementBar from './AnnouncementBar';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header>
            <AnnouncementBar message={"Wyprzedaż! 25% zniżki na wszystko z kodem TEES25"}/>
            <Navbar />
        </header>
    )
}

export default Header;
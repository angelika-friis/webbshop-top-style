import { Link } from 'react-router-dom';
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { PiHandbagLight } from "react-icons/pi";
import { PiUserLight } from "react-icons/pi";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="search-icon">
        <Link to="/search">
          <PiMagnifyingGlassLight />
        </Link>
      </div>
      <Link to="/">
        <p id='logo'>Top Style</p>
      </Link>
      <nav>
        <Link to="/user"><PiUserLight /></Link>
        <Link to="/cart"><PiHandbagLight /></Link>
      </nav>
    </header>
  );
}

export default Header;
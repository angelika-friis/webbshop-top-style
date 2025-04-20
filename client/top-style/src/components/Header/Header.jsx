import { Link } from 'react-router-dom';
import { CiUser } from "react-icons/ci";
import { PiHandbagLight } from "react-icons/pi";
import { GoSearch } from "react-icons/go";
import "./Header.css";

const Header = () => {
  return (
    <header>
        <GoSearch />
      <Link to="/">
        <p id='logo'>Top Style</p>
      </Link>
      <nav>
        <Link to="/user"><CiUser /></Link>
        <Link to="/cart"><PiHandbagLight /></Link>
      </nav>
    </header>
  );
}

export default Header;
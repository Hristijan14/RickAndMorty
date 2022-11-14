import "./Header.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.jpg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-info">
        <img className="header-img" src={Logo} alt="logo" />
        <div className="header-links">
          <Link className="reactLink" to="/">
            Characters
          </Link>
          <Link className="reactLink" to="/episodes">
            Episodes
          </Link>
        </div>
      </div>
      <h1 className="app-name">The Rick and Morty APP</h1>
    </div>
  );
};

export default Header;

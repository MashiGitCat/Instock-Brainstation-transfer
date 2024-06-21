import "./header.scss";
import logo from "../../assets/Logo/InStock-Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <img className="nav__logo" src={logo} alt="logo" />
      </Link>

      <article className="nav__links">
        <div className="nav__links-wrap">
          <Link to="/warehouse">
            <h3 className="nav__links-wrap-text">Warehouses</h3>
          </Link>
        </div>
        <div className="nav__links-wrap">
          <Link to="/inventory">
            <h3 className="nav__links-wrap-text">Inventory</h3>
          </Link>
        </div>
      </article>
    </nav>
  );
};

export default Header;

import "./Header.css";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

const Header = () => {
  return (
    <header className="header">
      <div>
        <h1>
          <Link to="/" className="logo">
            Electronics Shopping
          </Link>
        </h1>
      </div>
      <div className="header-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/cart" className="cart">
              <BsCart4 />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

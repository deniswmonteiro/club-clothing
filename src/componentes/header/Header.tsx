import "./Header.css";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="header-logo">
          Club Clothing
        </a>
        <ul className="header-menu">
          <li className="header-menu__item">
            <a href="#">Explorar</a>
          </li>
          <li className="header-menu__item">
            <a href="#">Login</a>
          </li>
          <li className="header-menu__item">
            <a href="#">Criar Conta</a>
          </li>
          <li className="header-menu__item">
            <a href="#">
              <BsCart3 size={16} />
              <span>5</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

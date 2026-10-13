import { BsCart3 } from "react-icons/bs";
import {
  StyledHeader,
  StyledHeaderContainer,
  StyledHeaderItem,
  StyledHeaderLogo,
  StyledHeaderMenu,
  StyledHeaderMenuItemBadge,
} from "./Header.styles";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer className="header-container">
        <StyledHeaderLogo href="/">Club Clothing</StyledHeaderLogo>
        <StyledHeaderMenu>
          <StyledHeaderItem>
            <Link to="#">Explorar</Link>
          </StyledHeaderItem>
          <StyledHeaderItem>
            <Link to="/login">Login</Link>
          </StyledHeaderItem>
          <StyledHeaderItem>
            <Link to="#">Criar Conta</Link>
          </StyledHeaderItem>
          <StyledHeaderItem>
            <Link to="#" data-cart>
              <BsCart3 size={16} />
              <StyledHeaderMenuItemBadge>5</StyledHeaderMenuItemBadge>
            </Link>
          </StyledHeaderItem>
        </StyledHeaderMenu>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;

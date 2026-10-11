import { BsCart3 } from "react-icons/bs";
import {
  StyledHeader,
  StyledHeaderContainer,
  StyledHeaderItem,
  StyledHeaderLogo,
  StyledHeaderMenu,
  StyledHeaderMenuItemBadge,
  StyledHeaderMenuItemLink,
} from "./Header.styles";

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer className="header-container">
        <StyledHeaderLogo href="/">Club Clothing</StyledHeaderLogo>
        <StyledHeaderMenu>
          <StyledHeaderItem>
            <StyledHeaderMenuItemLink href="#">
              Explorar
            </StyledHeaderMenuItemLink>
          </StyledHeaderItem>
          <StyledHeaderItem>
            <StyledHeaderMenuItemLink href="#">Login</StyledHeaderMenuItemLink>
          </StyledHeaderItem>
          <StyledHeaderItem>
            <StyledHeaderMenuItemLink href="#">
              Criar Conta
            </StyledHeaderMenuItemLink>
          </StyledHeaderItem>
          <StyledHeaderItem>
            <StyledHeaderMenuItemLink href="#">
              <BsCart3 size={16} />
              <StyledHeaderMenuItemBadge>5</StyledHeaderMenuItemBadge>
            </StyledHeaderMenuItemLink>
          </StyledHeaderItem>
        </StyledHeaderMenu>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;

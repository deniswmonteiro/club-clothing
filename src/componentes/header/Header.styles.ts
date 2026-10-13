import styled from "styled-components";
import Colors from "../../theme/theme.colors";

export const StyledHeader = styled.header`
  width: 100%;
  background-color: ${Colors.background.dark};
  padding: 24px 32px;
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledHeaderLogo = styled.a`
  font-family: "Love Ya Like A Sister", cursive;
  font-size: 32px;
  line-height: 1.2;
  font-weight: 400;
  color: ${Colors.text.light};
`;

export const StyledHeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const StyledHeaderItem = styled.li`
  display: flex;
  align-items: center;

  & > a {
    font-size: 14px;
    line-height: 1.2;
    font-weight: 400;
    color: ${Colors.text.light};
    text-transform: uppercase;
    padding: 0 6px;
    display: flex;
    align-items: center;
    gap: 6px;
    position: relative;
    transition: 0.3s ease-in-out;

    &:not([data-cart]) {
      &:hover::after {
        width: calc(100% - 12px);
        transition: 0.3s ease-in-out;
      }

      &::after {
        content: "";
        width: 0%;
        height: 1px;
        background-color: ${Colors.background.light};
        position: absolute;
        bottom: -3px;
        left: 6px;
        transition: 0.3s ease-in-out;
      }
    }
  }
`;

export const StyledHeaderMenuItemBadge = styled.span`
  font-size: 10px;
  color: ${Colors.primary};
  font-weight: 600;
  padding: 6px;
  background-color: ${Colors.background.light};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
`;

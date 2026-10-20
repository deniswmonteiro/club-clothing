import styled from "styled-components";
import Colors from "../../theme/theme.colors";

export const StyledButtonContainer = styled.button`
  width: 100%;
  background-color: ${Colors.background.dark};
  color: ${Colors.text.light};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 10px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border: none;
  padding: 10px 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #555555;
    transition: 0.3s ease-in-out;
  }

  &:disabled {
    background-color: #aaaaaa;
    cursor: not-allowed;
    transition: 0.3s ease-in-out;

    &.loading {
      cursor: wait;
    }
  }
`;

export const StyledButtonIconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

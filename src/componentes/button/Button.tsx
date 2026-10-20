import type { ButtonHTMLAttributes, FunctionComponent, ReactNode } from "react";
import {
  StyledButtonContainer,
  StyledButtonIconContainer,
} from "./Button.styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  startIcon?: ReactNode;
}

const Button: FunctionComponent<IButtonProps> = ({
  children,
  startIcon,
  ...rest
}) => {
  return (
    <StyledButtonContainer {...rest}>
      {startIcon && (
        <StyledButtonIconContainer>{startIcon}</StyledButtonIconContainer>
      )}
      {children}
    </StyledButtonContainer>
  );
};

export default Button;

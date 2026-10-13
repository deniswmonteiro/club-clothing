import type { ButtonHTMLAttributes, FunctionComponent, ReactNode } from "react";
import { ButtonContainer, IconContainer } from "./Button.styles";

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
    <ButtonContainer {...rest}>
      {startIcon && <IconContainer>{startIcon}</IconContainer>}
      {children}
    </ButtonContainer>
  );
};

export default Button;

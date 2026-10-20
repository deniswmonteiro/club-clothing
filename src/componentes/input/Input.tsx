import type { FunctionComponent, InputHTMLAttributes } from "react";
import { StyledInput, StyledInputContainer } from "./Input.styles";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  type: string;
  hasError?: boolean;
}

const Input: FunctionComponent<IInputProps> = ({
  label,
  id,
  type,
  hasError,
  ...rest
}) => {
  return (
    <StyledInputContainer>
      <label htmlFor={id}>{label}</label>
      <StyledInput type={type} id={id} hasError={hasError} {...rest} />
    </StyledInputContainer>
  );
};

export default Input;

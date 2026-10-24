import type { FunctionComponent, InputHTMLAttributes } from "react";
import { StyledInput, StyledInputContainer } from "./Input.styles";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  type: string;
  $hasError?: boolean;
  errorMessage?: string;
}

const Input: FunctionComponent<IInputProps> = ({
  label,
  id,
  type,
  $hasError,
  errorMessage,
  ...rest
}) => {
  return (
    <StyledInputContainer>
      <label htmlFor={id}>{label}</label>
      <StyledInput
        type={type}
        id={id}
        name={id}
        $hasError={$hasError || !!errorMessage}
        {...rest}
      />
      {errorMessage && <span>{errorMessage}</span>}
    </StyledInputContainer>
  );
};

export default Input;

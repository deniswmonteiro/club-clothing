import styled from "styled-components";
import Colors from "../../theme/theme.colors";

type TInputContainerProps = {
  hasError?: boolean;
};

export const StyledInputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;

  p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 5px;
  }
`;

export const StyledInput = styled.input<TInputContainerProps>`
  width: 100%;
  background-color: ${Colors.input.background};
  padding: 10px 16px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: ${Colors.text.dark};
  border: 2px solid;
  border-color: ${(props) => (props.hasError ? `${Colors.error}` : "transparent")};
  outline: none;
  transition: 0.3s ease-in-out;

  & > input {
  }

  &::placeholder {
    color: ${(props) =>
      props.hasError ? Colors.error : Colors.input.placeholder};
  }

  &:focus {
    border-color: ${(props) =>
      props.hasError ? "transparent" : `${Colors.input.placeholder}`};
    transition: 0.3s ease-in-out;
  }
`;

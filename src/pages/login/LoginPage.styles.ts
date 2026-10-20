import styled from "styled-components";
import Colors from "../../theme/theme.colors";

export const StyledLoginContainer = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLoginHeadline = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: ${Colors.text.dark};
`;

export const StyledLoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
`;

export const StyledLoginSubtitle = styled.p`
  color: ${Colors.text.dark};
  padding-bottom: 20px;
  border-bottom: 1px solid ${Colors.input.placeholder};
  width: 100%;
  margin-top: 20px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const StyleLoginForm = styled.form`
  width: 100%;
`;

import styled from "styled-components";
import Colors from "../../theme/theme.colors";

export const StyledSignUpContainer = styled.section`
  height: 100vw;
  padding: 60px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSignUpHeadline = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: ${Colors.text.dark};
  padding-bottom: 20px;
  border-bottom: 1px solid #6c757d;
  width: 100%;
  text-align: center;
`;

export const StyledSignUpContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
`;

export const StyledSignupForm = styled.form`
  width: 100%;
`;

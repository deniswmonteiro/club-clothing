import Header from "../../componentes/header/Header";
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle,
} from "./LoginPage.styles";

const LoginPage = () => {
  return (
    <>
      <Header />
      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com o Google</LoginHeadline>
          <LoginSubtitle>Ou entre com o seu e-mail e senha</LoginSubtitle>
          <form action="#">
            <LoginInputContainer></LoginInputContainer>
            <LoginInputContainer></LoginInputContainer>
          </form>
        </LoginContent>
      </LoginContainer>
    </>
  );
};

export default LoginPage;

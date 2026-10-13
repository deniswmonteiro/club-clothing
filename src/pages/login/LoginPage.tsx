import { BsGoogle } from "react-icons/bs";
import Button from "../../componentes/button/Button";
import Header from "../../componentes/header/Header";
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle,
} from "./LoginPage.styles";
import { FiLogIn } from "react-icons/fi";

const LoginPage = () => {
  return (
    <>
      <Header />
      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com o Google</LoginHeadline>
          <Button startIcon={<BsGoogle size={18} />}>Login com o Google</Button>
          <LoginSubtitle>Ou entre com o seu e-mail e senha</LoginSubtitle>
          <form action="#">
            <LoginInputContainer></LoginInputContainer>
            <LoginInputContainer></LoginInputContainer>
            <Button startIcon={<FiLogIn size={16} />}>Entrar</Button>
          </form>
        </LoginContent>
      </LoginContainer>
    </>
  );
};

export default LoginPage;

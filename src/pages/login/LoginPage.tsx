import { BsGoogle } from "react-icons/bs";
import Button from "../../componentes/button/Button";
import Header from "../../componentes/header/Header";
import {
  StyledLoginContainer,
  StyledLoginContent,
  StyledLoginHeadline,
  StyledLoginSubtitle,
  StyleLoginForm,
} from "./LoginPage.styles";
import { FiLogIn } from "react-icons/fi";
import Input from "../../componentes/input/Input";

const LoginPage = () => {
  return (
    <>
      <Header />
      <StyledLoginContainer>
        <StyledLoginContent>
          <StyledLoginHeadline>Entre com o Google</StyledLoginHeadline>
          <Button startIcon={<BsGoogle size={18} />}>Login com o Google</Button>
          <StyledLoginSubtitle>
            Ou entre com o seu e-mail e senha
          </StyledLoginSubtitle>
          <StyleLoginForm action="#">
            <Input
              type="email"
              id="email"
              label="Email"
              placeholder="Digite o seu e-mail"
            />
            <Input
              type="password"
              id="senha"
              label="Senha"
              placeholder="Digite a sua senha"
            />
            <Button startIcon={<FiLogIn size={18} />}>Entrar</Button>
          </StyleLoginForm>
        </StyledLoginContent>
      </StyledLoginContainer>
    </>
  );
};

export default LoginPage;

import { BsGoogle } from "react-icons/bs";
import Button from "../../componentes/button/Button";
import Header from "../../componentes/header/Header";
import {
  StyledLoginContainer,
  StyledLoginContent,
  StyledLoginForm,
  StyledLoginHeadline,
  StyledLoginSubtitle,
} from "./LoginPage.styles";
import { FiLogIn } from "react-icons/fi";
import Input from "../../componentes/input/Input";
import { useForm } from "react-hook-form";

interface IData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IData>({
    mode: "onTouched",
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

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
          <StyledLoginForm onSubmit={onSubmit}>
            <Input
              type="email"
              id="email"
              label="E-mail"
              placeholder="Digite o seu e-mail"
              errorMessage={errors.email?.message}
              {...register("email", {
                required: "O E-mail é obrigatório.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Insira um E-mail válido.",
                },
              })}
            />

            <Input
              type="password"
              id="password"
              label="Senha"
              placeholder="Digite a sua senha"
              errorMessage={errors.password?.message}
              {...register("password", {
                required: "A Senha é obrigatória.",
              })}
            />
            <Button type="submit" startIcon={<FiLogIn size={18} />}>
              Entrar
            </Button>
          </StyledLoginForm>
        </StyledLoginContent>
      </StyledLoginContainer>
    </>
  );
};

export default LoginPage;

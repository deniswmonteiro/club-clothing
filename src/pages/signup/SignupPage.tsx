import { FiLogIn } from "react-icons/fi";
import Button from "../../componentes/button/Button";
import Header from "../../componentes/header/Header";
import Input from "../../componentes/input/Input";
import {
  StyledSignUpContainer,
  StyledSignUpContent,
  StyledSignupForm,
  StyledSignUpHeadline,
} from "./SignupPage.styles";
import { useForm } from "react-hook-form";

interface IData {
  name: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <Header />
      <StyledSignUpContainer>
        <StyledSignUpContent>
          <StyledSignUpHeadline>Crie sua conta</StyledSignUpHeadline>
          <StyledSignupForm onSubmit={onSubmit}>
            <Input
              type="text"
              id="name"
              label="Nome"
              placeholder="Digite o seu nome"
              errorMessage={errors.name?.message}
              {...register("name", {
                required: "O Nome é obrigatório.",
              })}
            />
            <Input
              type="text"
              id="lastname"
              label="Sobrenome"
              placeholder="Digite o seu sobrenome"
              errorMessage={errors.lastName?.message}
              {...register("lastName", {
                required: "O Sobrenome é obrigatório.",
              })}
            />
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
                  message: "Insira um e-mail válido.",
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
                deps: ["passwordConfirmation"],
              })}
            />
            <Input
              type="password"
              id="password-confirmation"
              label="Confirmação de Senha"
              placeholder="Confirme a sua senha"
              errorMessage={errors.passwordConfirmation?.message}
              {...register("passwordConfirmation", {
                required: "A Confirmação de Senha é obrigatória.",
                validate: (value, { password }) => {
                  return password === value || "As Senhas não coincidem.";
                },
              })}
            />
            <Button type="submit" startIcon={<FiLogIn size={18} />}>
              Criar Conta
            </Button>
          </StyledSignupForm>
        </StyledSignUpContent>
      </StyledSignUpContainer>
    </>
  );
};

export default SignupPage;

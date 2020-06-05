import React, { useCallback, useRef } from 'react';
import { AiTwotoneMail, AiFillLock } from 'react-icons/ai';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { CabecalhoDesktop, CabecalhoMobile } from '../../components/Cabecalho';
import TituloPagina from '../../components/Container/Paginas';
import Container from '../../components/Container/Principal';
import InputText from '../../components/Inputs/Text';
import Checkbox from '../../components/Inputs/Checkbox';
import Social from '../../components/Sessoes/Social';
import Depoimentos from '../../components/Sessoes/Depoimentos';
import BtnHover from '../../components/Buttons/BtnHover';
import ValidacaoErrosForm from '../../utils/pegarErrosValidacao';
import { useAutenticacao } from '../../hooks/Autenticacao';
import { useToast } from '../../hooks/Toast';
import {
  LoginContainer,
  ContainerCriarConta,
  InputsLogin,
  Titulo,
  InputContainer,
  LembrarSenha,
  BtnLogar,
} from './styles';

interface ParametrosLogin {
  usuario: string;
  senha: string;
}

const Login: React.FC = () => {
  const { login, usuario } = useAutenticacao();
  const { addToast } = useToast();

  console.log('Usuario -> ', usuario);
  const sizeButtonLogin = window.innerWidth < 1024 ? '330px' : '410px';
  const FormRef = useRef<FormHandles>(null);

  const Logar = useCallback(
    async (data: ParametrosLogin) => {
      console.log(data);

      FormRef.current?.setErrors({});

      try {
        const esquemaValidacao = Yup.object().shape({
          usuario: Yup.string().required('campo obrigatorio'),

          senha: Yup.string().required('campo obrigatorio'),
        });

        await esquemaValidacao.validate(data, {
          abortEarly: false,
        });

        await login({
          usuario: data.usuario,
          senha: data.senha,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          console.log(err);
          const errors = ValidacaoErrosForm(err);
          FormRef.current?.setErrors(errors);
        } else {
          console.log('ERROR AQUI -> ', err);
          addToast({
            message: err.message,
            title: 'Teste Toast',
            type: 'success',
          });
        }
      }
    },
    [login, addToast],
  );

  return (
    <>
      {window.innerWidth < 1200 ? <CabecalhoMobile /> : <CabecalhoDesktop />}
      <TituloPagina altura="" cor="" titulo="Login" />
      <Container altura="" cor="">
        <LoginContainer>
          <ContainerCriarConta>
            <div>
              <h1>Novo no site?</h1>
              <p>uineckec ocopec ciopnc eopien </p>
              <button type="button">Criar conta</button>
            </div>
          </ContainerCriarConta>

          <InputContainer>
            <Titulo> Bem vindo de volta :)</Titulo>
            <InputsLogin ref={FormRef} onSubmit={Logar}>
              <InputText
                icon={AiTwotoneMail}
                sizeIcon={20}
                colorIcon="#B08EAD"
                placeholder="E-mail / CPF"
                name="usuario"
              />

              <InputText
                icon={AiFillLock}
                sizeIcon={20}
                colorIcon="#B08EAD"
                placeholder="Senha"
                type="password"
                name="senha"
              />
              <LembrarSenha>
                <Checkbox>Lembrar senha</Checkbox>
              </LembrarSenha>
              <BtnLogar>
                <BtnHover type="submit" width={sizeButtonLogin}>
                  Logar
                </BtnHover>
                <p>Esqueceu sua senha?</p>
              </BtnLogar>
            </InputsLogin>
          </InputContainer>
        </LoginContainer>
      </Container>
      <Depoimentos />
      <Social />
    </>
  );
};

export default Login;

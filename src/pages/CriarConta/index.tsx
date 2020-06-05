import React, { useCallback, useRef } from 'react';
import { AiOutlineUserAdd, AiTwotoneMail, AiFillLock } from 'react-icons/ai';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { CabecalhoDesktop, CabecalhoMobile } from '../../components/Cabecalho';
import TituloPagina from '../../components/Container/Paginas';
import Container from '../../components/Container/Principal';
import { ContainerCriarConta, Title, Buntton } from './styles';
import InputText from '../../components/Inputs/Text';
import Social from '../../components/Sessoes/Social';
import Depoimentos from '../../components/Sessoes/Depoimentos';
import BtnHover from '../../components/Buttons/BtnHover';

import ValidacaoErrosForm from '../../utils/pegarErrosValidacao';

const CriarConta: React.FC = () => {
  const FormRef = useRef<FormHandles>(null);

  const CadastrarUsuario = useCallback(async (data: object) => {
    console.log(data);
    FormRef.current?.setErrors({});
    try {
      const esquemaValidacao = Yup.object().shape({
        nome: Yup.string().required('campo obrigatorio'),
        email: Yup.string()
          .required('campo obrigatorio')
          .email('Digite um email valido'),
        cpf: Yup.string()
          .required('campo obrigatorio')
          .min(14, 'Quantidade de caracters não compativel'),
        senha: Yup.string().min(6, 'Senha de no minimo seis digitos'),
        confirmarsenha: Yup.string().required('campo obrigatorio'),
      });

      await esquemaValidacao.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);
      const errors = ValidacaoErrosForm(err);
      FormRef.current?.setErrors(errors);
    }
  }, []);
  return (
    <>
      {window.innerWidth < 1200 ? <CabecalhoMobile /> : <CabecalhoDesktop />}
      <TituloPagina altura="" cor="" titulo="Criar Conta" />
      <Container altura="" cor="">
        <ContainerCriarConta>
          <Title>Estou muito feliz em ter você como cliente :)</Title>
          <Form ref={FormRef} onSubmit={CadastrarUsuario}>
            <InputText
              icon={AiOutlineUserAdd}
              sizeIcon={20}
              colorIcon="#B08EAD"
              placeholder="Nome Completo"
              name="nome"
            />

            <InputText
              icon={AiTwotoneMail}
              sizeIcon={20}
              colorIcon="#B08EAD"
              placeholder="E-mail"
              type="email"
              name="email"
            />
            <InputText
              icon={AiOutlineUserAdd}
              sizeIcon={20}
              colorIcon="#B08EAD"
              placeholder="CPF"
              name="cpf"
            />
            <InputText
              icon={AiFillLock}
              sizeIcon={20}
              colorIcon="#B08EAD"
              placeholder="Senha"
              type="password"
              name="senha"
            />
            <InputText
              icon={AiFillLock}
              sizeIcon={20}
              colorIcon="#B08EAD"
              placeholder="Confirmar senha"
              type="password"
              name="confirmarsenha"
            />
            <Buntton>
              <BtnHover type="submit">Cadastrar</BtnHover>
            </Buntton>
          </Form>
        </ContainerCriarConta>
      </Container>
      <Depoimentos />
      <Social />
    </>
  );
};

export default CriarConta;

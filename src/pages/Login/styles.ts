import styled from 'styled-components';
import { Form } from '@unform/web';

export const LoginContainer = styled.div`
  display: grid;
  row-gap: 20px;
  margin-bottom: 50px;
  @media only screen and (min-width: 1024px) {
    display: grid;
    row-gap: 20px;
    grid-template-columns: 410px 410px;
    justify-content: center;
    align-items: center;
    column-gap: calc(1024px - 825px);
    margin-bottom: 50px;
  }

  @media only screen and (min-width: 1440px) {
    display: grid;
    row-gap: 20px;
    grid-template-columns: 555px 445px;
    justify-content: center;
    align-items: center;
    column-gap: calc(1200px - 555 * 2px);
    margin-bottom: 100px;
  }
`;

export const ContainerCriarConta = styled.div`
  height: 400px;
  width: 100%;
  background-image: linear-gradient(
    90deg,
    #b08ead 0%,
    #4b3049 64%,
    #b08ead 100%
  );
  background-size: 200% auto;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    display: grid;
    row-gap: 50px;
    width: auto;
    justify-content: center;
    align-items: center;
  }

  div > h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 35px;
    color: #fff;
    text-align: center;
  }

  div > p {
    color: #fff;
    line-height: 25px;
    text-align: center;
  }

  div > button {
    border: 1px solid #fff;
    background-color: transparent;
    font-size: 14px;
    color: #fff;
    height: 50px;
    border-radius: 5px;
    text-transform: uppercase;
    transition: 0.5s;
    &:hover {
      color: #b08ead;
      background-color: white;
    }
  }

  @media only screen and (min-width: 1024px) {
    height: 400px;
    width: 100%;
    background-image: linear-gradient(
      90deg,
      #b08ead 0%,
      #4b3049 64%,
      #b08ead 100%
    );
    background-size: 200% auto;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      display: grid;
      row-gap: 40px;
      width: auto;
      justify-content: center;
      align-items: center;
    }

    div > h1 {
      font-size: 24px;
      font-weight: 700;
      line-height: 35px;
      color: #fff;
      text-align: center;
    }

    div > p {
      color: #fff;
      line-height: 25px;
      text-align: center;
    }

    div > button {
      border: 1px solid #fff;
      background-color: transparent;
      font-size: 14px;
      color: #fff;
      height: 50px;
      border-radius: 5px;
      text-transform: uppercase;
      transition: 0.5s;
      &:hover {
        color: #b08ead;
        background-color: white;
      }
    }
  }

  @media only screen and (min-width: 1440px) {
    height: 600px;
    width: 100%;
    background-image: linear-gradient(
      90deg,
      #b08ead 0%,
      #4b3049 64%,
      #b08ead 100%
    );
    background-size: 200% auto;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      display: grid;
      row-gap: 40px;
      width: auto;
      justify-content: center;
      align-items: center;
    }

    div > h1 {
      font-size: 24px;
      font-weight: 700;
      line-height: 35px;
      color: #fff;
      text-align: center;
    }

    div > p {
      color: #fff;
      line-height: 25px;
      text-align: center;
    }

    div > button {
      border: 1px solid #fff;
      background-color: transparent;
      font-size: 14px;
      color: #fff;
      height: 50px;
      border-radius: 5px;
      text-transform: uppercase;
      transition: 0.5s;
      &:hover {
        color: #b08ead;
        background-color: white;
      }
    }
  }
`;

export const InputContainer = styled.div`
  display: grid;
  row-gap: 40px;

  @media only screen and (min-width: 1024px) {
  }

  @media only screen and (min-width: 1440px) {
  }
`;

export const InputsLogin = styled(Form)`
  display: grid;
  row-gap: 20px;
  @media only screen and (min-width: 1024px) {
    display: grid;
    row-gap: 20px;
  }

  @media only screen and (min-width: 1440px) {
    display: grid;
    row-gap: 10px;
  }
`;

export const Titulo = styled.h1`
  font-size: 16px;
  @media only screen and (min-width: 1024px) {
  }

  @media only screen and (min-width: 1440px) {
  }
`;

export const LembrarSenha = styled.div`
  width: 140px;
  margin-bottom: 40px;

  @media only screen and (min-width: 1024px) {
    width: 160px;
  }

  @media only screen and (min-width: 1440px) {
    width: 150px;
  }
`;

export const BtnLogar = styled.div`
  display: grid;
  row-gap: 15px;
  flex: 1;
  justify-content: center;
  align-items: center;
  p {
    text-align: end;
    color: #777777;
    cursor: pointer;
  }

  @media only screen and (min-width: 1024px) {
  }

  @media only screen and (min-width: 1440px) {
  }
`;

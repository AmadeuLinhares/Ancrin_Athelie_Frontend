import styled, { css } from 'styled-components';
import ButtonHover from '../../components/Buttons/BtnHover';

import AvatarImg from '../../assets/avatarPadrao.svg';

interface PropsAvatar {
  fotoUsuario: string;
}
export const AreaUsuarioContainer = styled.div`
  display: grid;
  row-gap: 20px;

  @media only screen and (min-width: 1024px) {
    display: grid;
    row-gap: 50px;
  }

  @media only screen and (min-width: 1440px) {
    display: grid;
    row-gap: 50px;
  }
`;

export const AreaEscolhida = styled.div`
  display: grid;
  grid-template-rows: 40px auto;
  border-radius: 5px;
  @media only screen and (min-width: 1024px) {
  }

  @media only screen and (min-width: 1440px) {
  }
`;

export const TituloAba = styled.div`
  display: grid;
  background-color: #b08ead;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  h1 {
    color: white;
    padding-left: 40px;
    font-size: 16px;
  }
  @media only screen and (min-width: 1024px) {
  }

  @media only screen and (min-width: 1440px) {
  }
`;
export const InfoUsuario = styled.div`
  display: grid;
  row-gap: 50px;
  padding: 20px;
  background-color: rgba(244, 237, 242, 1);
  /* margin-top: 10px; */
  border-radius: 5px;

  p {
  }
  @media only screen and (min-width: 1024px) {
    display: grid;
    row-gap: 40px;
    padding: 20px;
    background-color: rgba(244, 237, 242, 1);
    /* margin-top: 10px; */
    border-radius: 5px;
    grid-template-columns: auto auto;
  }

  @media only screen and (min-width: 1440px) {
    display: grid;
    row-gap: 40px;
    padding: 20px;
    background-color: rgba(244, 237, 242, 1);
    /* margin-top: 10px; */
    border-radius: 5px;
    grid-template-columns: auto auto;
  }
`;

export const ContainerMeusDados = styled.div`
  display: grid;
  row-gap: 30px;
  @media only screen and (min-width: 1024px) {
  }

  @media only screen and (min-width: 1440px) {
  }
`;
export const MeusDados = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  @media only screen and (min-width: 1440px) {
  }
`;

export const TituloMeusDados = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  p {
    font-weight: bold;
  }
  @media only screen and (min-width: 1024px) {
    p {
      font-weight: bold;
    }
  }

  @media only screen and (min-width: 1440px) {
    p {
      font-weight: bold;
    }
  }
`;

export const TextoMeusDados = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 170px;
  @media only screen and (min-width: 1024px) {
    max-width: 100%;
    margin-left: 20px;
  }

  @media only screen and (min-width: 1440px) {
  }
`;

export const Pedidos = styled.div`
  display: grid;
  row-gap: 40px;
  padding: 20px;
  background-color: rgba(244, 237, 242, 1);
  /* margin-top: 10px; */
  border-radius: 5px;
  @media only screen and (min-width: 1024px) {
  }

  @media only screen and (min-width: 1440px) {
  }
`;
export const Endereco = styled.div`
  display: grid;
  row-gap: 40px;
  padding: 20px;
  background-color: rgba(244, 237, 242, 1);
  /* margin-top: 10px; */
  border-radius: 5px;
  margin-bottom: 100px;
  @media only screen and (min-width: 1024px) {
  }

  @media only screen and (min-width: 1440px) {
  }
`;
export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  @media only screen and (min-width: 1440px) {
  }
`;
export const Button = styled(ButtonHover)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  text-transform: capitalize;
  border-color: white;
  @media only screen and (min-width: 1024px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 1440px) {
  }
`;
export const Avatar = styled.div<PropsAvatar>`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background-color: #fff;
  display: none;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  ${(props) =>
    props.fotoUsuario
      ? css`
          background-image: url(${props.fotoUsuario});
        `
      : css`
          background-image: url(${AvatarImg});
        `}
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  span {
    color: #eee;
    font-family: 'Rubik', sans-serif;
    visibility: hidden;
    opacity: 0;
  }

  &:hover {
    span {
      visibility: visible;
      opacity: 1;
    }
  }

  span {
    color: #fff;
    font-weight: bold;
    font-family: 'Rubik', sans-serif;
    visibility: hidden;
    opacity: 0;
    transition: 0.5s;
    font-size: 16px;
  }

  @media only screen and (min-width: 1024px) {
    width: 120px;
    height: 120px;
    display: flex;
    span {
      font-size: 20px;
    }
  }

  @media only screen and (min-width: 1440px) {
    width: 150px;
    height: 150px;
    span {
      font-size: 26px;
    }
  }
`;

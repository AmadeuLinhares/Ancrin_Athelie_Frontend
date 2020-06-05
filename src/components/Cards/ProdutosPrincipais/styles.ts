import styled, { css } from 'styled-components';

interface DirecaoCards {
  direita: boolean;
}
export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 28px 270px 28px;

  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 20px 990px 20px;
    grid-template-rows: 619px;
  }

  @media only screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: 20px 1200px 20px;
    grid-template-rows: 619px;
  }
`;

// ================ SUBCONTAINER ========================

export const CardSubcontainer = styled.div<DirecaoCards>`
  grid-area: 1/2/2/3;
  display: grid;
  grid-template-rows: auto auto;
  row-gap: 40px;

  @media only screen and (min-width: 1024px) {
    grid-area: 1/2/2/3;
    display: grid;
    grid-template-rows: auto;
    column-gap: 110px;
    ${(props) =>
      !props.direita
        ? css`
            grid-template-columns: 350px 530px;
          `
        : css`
            grid-template-columns: 530px 350px;
          `}
  }
  }

  @media only screen and (min-width: 1440px) {
    grid-area: 1/2/2/3;
    display: grid;
    grid-template-rows: auto;
    column-gap: 110px;

    ${(props) =>
      !props.direita
        ? css`
            grid-template-columns: 415px 560px;
          `
        : css`
            grid-template-columns: 560px 415px;
          `}
  }
`;

// ================ CONTAINER IMGS ========================

export const CardImgs = styled.div<DirecaoCards>`
  display: grid;
  grid-template-columns: 64px 140px 64px;
  grid-template-rows: 35px 170px 35px;

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-rows: 40px 370px 50px;
    grid-template-columns: 70px 320px 140px;
  }

  @media only screen and (min-width: 1440px) {
    display: grid;

    ${(props) =>
      !props.direita
        ? css`
            grid-template-rows: 17px 413px 47px;
            grid-template-columns: 170px 350px 44px;
          `
        : css`
            grid-template-rows: 47px 413px 17px;
            grid-template-columns: 44px 350px 170px;
          `}
  }
`;
export const ImgFundo = styled.div<DirecaoCards>`
  background-color: #b08ead;

  ${(props) =>
    props.direita
      ? css`
          grid-area: 1/1/4/3;
        `
      : css`
          grid-area: 1/2/4/4;
        `}

  @media only screen and (min-width: 1024px) {
    ${(props) =>
      props.direita
        ? css`
            grid-area: 1/1/4/3;
          `
        : css`
            grid-area: 1/2/4/4;
          `}
  }

  @media only screen and (min-width: 1440px) {
    ${(props) =>
      props.direita
        ? css`
            grid-area: 1/1/3/3;
          `
        : css`
            grid-area: 1/2/3/4;
          `}
  }
`;
export const ImgPrincipal = styled.img<DirecaoCards>`
  width: 100%;
  height: 100%;
  ${(props) =>
    props.direita
      ? css`
          grid-area: 2/2/3/4;
        `
      : css`
          grid-area: 2/1/3/3;
        `}
  @media only screen and (min-width: 1024px) {
    width: 100%;
    height: 100%;
    ${(props) =>
      props.direita
        ? css`
            grid-area: 2/2/3/4;
          `
        : css`
            grid-area: 2/1/3/3;
          `}
  }

  @media only screen and (min-width: 1440px) {
    ${(props) =>
      props.direita
        ? css`
            grid-area: 2/2/4/4;
          `
        : css`
            grid-area: 2/1/4/3;
          `}
  }
`;

// ================ INFORMACOES DO PRODUTO ========================

export const InfoProduto = styled.div<DirecaoCards>`
  display: grid;
  row-gap: 20px;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 1024px) {
    ${(props) =>
      !props.direita &&
      css`
        grid-area: 1/1/2/2;
      `}
  }

  @media only screen and (min-width: 1440px) {
  }
`;
export const Titulo = styled.h1`
  font-size: 16px;
  color: #795376;

  @media only screen and (min-width: 1024px) {
    font-size: 26px;
  }

  @media only screen and (min-width: 1440px) {
  }
`;
export const Descricao = styled.p`
  font-size: 14px;
  color: #4b3049;
  font-weight: bold;

  @media only screen and (min-width: 1024px) {
    font-size: 40px;
  }

  @media only screen and (min-width: 1440px) {
  }
`;
export const BtnExplorar = styled.button`
  width: 160px;
  height: 50px;
  text-transform: uppercase;
  border-radius: 5px;
  border: solid 1px #b08ead;
  color: #b08ead;
  font-size: 14px;
  transition: 0.5s;
  background-color: white;
  &:hover {
    background-color: #b08ead;
    color: white;
    transition: 0.5s;
  }

  @media only screen and (min-width: 1024px) {
    width: 175px;
    height: 60px;
  }

  @media only screen and (min-width: 1440px) {
  }
`;

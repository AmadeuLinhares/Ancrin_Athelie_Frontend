import styled, { css } from 'styled-components';

interface ImgItemSlider {
  imageBackground: string;
}

export const InfoProduto = styled.div`
  margin-top: -280px;
  display: grid;
  row-gap: 50px;

  @media only screen and (min-width: 1024px) {
    margin-top: -280px;
    display: grid;
    row-gap: 50px;
  }
  @media only screen and (min-width: 1440px) {
    margin-top: -380px;
    display: grid;
    row-gap: 50px;
  }
`;
export const Fotos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .swiper-container {
    width: 330px;
    height: auto;
    display: grid;
    grid-row-gap: 40px;
    grid-template-rows: auto auto;
  }

  .swiper-container .swiper-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: none;
  }

  .swiper-container .swiper-wrapper .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-pagination-bullet-active {
    background: #4b3049 !important;
  }

  @media only screen and (min-width: 1024px) {
    .swiper-container {
      margin: 40px 0;
      width: 930px;
      height: auto;
      display: grid;
      grid-row-gap: 80px;
      grid-template-rows: auto auto;
    }

    .swiper-container .swiper-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;

      box-shadow: none;
    }

    .swiper-container .swiper-wrapper .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media only screen and (min-width: 1440px) {
    .swiper-container {
      width: 1200px;
      height: auto;
      display: grid;
      grid-row-gap: 80px;
      grid-template-rows: auto auto;
    }

    .swiper-container .swiper-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;

      box-shadow: none;
    }

    .swiper-container .swiper-wrapper .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
export const Titulo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 25px;
    font-weight: bold;
    text-align: center;
  }

  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 25px;
      font-weight: bold;
      text-align: center;
    }
  }
  @media only screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 40px;
      font-weight: bold;
      text-align: center;
    }
  }
`;
export const Descricao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #707070;
    line-height: 2;
    font-size: 15px;
    font-weight: 400;
    text-align: center;
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1440px) {
  }
`;
export const Quantidade = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  @media only screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
`;
export const TextQtd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    line-height: 2;
    font-size: 15px;
  }
  @media only screen and (min-width: 1024px) {
    margin-right: 50px;
  }
  @media only screen and (min-width: 1440px) {
  }
`;
export const InputQtd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  input {
    width: 45px;
    height: 50px;
    background-color: #795376;
    color: white;
    border: solid 1px #795376;
    text-align: center;
    font-size: 16px;
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1440px) {
  }
`;
export const Add = styled.div`
  width: 45px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: solid 1px #795376;
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1440px) {
  }
`;
export const Sub = styled.div`
  width: 45px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: solid 1px #795376;
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1440px) {
  }
`;
export const PrecoProduto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 1024px) {
    margin-left: 50px;
  }
  @media only screen and (min-width: 1440px) {
  }
`;
export const AddCarrinho = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1440px) {
  }
`;

export const Proximo = styled.div`
  display: none;

  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border: 1px solid #e4d3df;
    background-color: #e4d3df;
    z-index: 999;
    transition: 1s;
    border-radius: 50%;
    margin-right: 40px;
    cursor: pointer;

    :hover {
      background-color: #4b3049;
      transition: 1s;
      border: solid 1px #4b3049;
    }
  }
  @media only screen and (min-width: 1440px) {
    :hover {
      background-color: #4b3049;
      border: solid 1px #4b3049;
      transition: 1s;
    }
  }
`;
export const Anterior = styled.div`
  display: none;

  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border: 1px solid #e4d3df;
    background-color: #e4d3df;
    z-index: 999;
    transition: 1s;
    border-radius: 50%;
    cursor: pointer;
    margin-left: 40px;
    :hover {
      background-color: #4b3049;
      transition: 1s;
      border: solid 1px #4b3049;
    }
  }
  @media only screen and (min-width: 1440px) {
    :hover {
      background-color: #4b3049;
      transition: 1s;
      border: solid 1px #4b3049;
    }
  }
`;

export const ItemSlider = styled.div<ImgItemSlider>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 330px;
  height: 280px;

  ${(props) =>
    props.imageBackground &&
    css`
      background-image: url(${props.imageBackground});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}

  @media only screen and (min-width: 1024px) {
    width: 930px;
    height: 560px;

    ${(props) =>
      props.imageBackground &&
      css`
        background-image: url(${props.imageBackground});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      `}
  }
  @media only screen and (min-width: 1440px) {
    width: 1200px;
    height: 700px;
    ${(props) =>
      props.imageBackground &&
      css`
        background-image: url(${props.imageBackground});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      `}
  }
`;

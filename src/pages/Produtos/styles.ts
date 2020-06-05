import styled, { css } from 'styled-components';
import { AiOutlineCaretDown } from 'react-icons/ai';

interface Expande {
  expandirFiltro: boolean;
}

export const ProdutosContainer = styled.div`
  display: grid;
  row-gap: 60px;
  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 325px 640px;
    column-gap: 70px;
  }

  @media only screen and (min-width: 1440px) {
    grid-template-columns: 325px 820px;
    column-gap: 50px;
  }
`;

// ==================== FILTROS ============================

export const ContainerFiltros = styled.div`
  display: grid;
  row-gap: 10px;
  grid-auto-rows: min-content;
  @media only screen and (min-width: 1024px) {
    grid-area: 1/1/2/2;
    grid-auto-rows: min-content;
  }

  @media only screen and (min-width: 1440px) {
  }
`;

export const Filtros = styled.div`
  display: grid;
  row-gap: 10px;
  @media only screen and (min-width: 1024px) {
  }

  @media only screen and (min-width: 1440px) {
  }
`;

export const ItemFiltro = styled.div<Expande>`
  display: flex;
  width: 100%;
  height: 40px;
  background-color: #f4edf2;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;
  p {
    color: #795376;
    margin-left: 40px;
    font-size: 18px;
    font-weight: bold;
  }

  @media only screen and (min-width: 1024px) {
  }

  @media only screen and (min-width: 1440px) {
  }
`;

export const Icon = styled(AiOutlineCaretDown)`
  margin-right: 10px;
`;

export const ListaFiltros = styled.div<Expande>`
  display: grid;
  row-gap: 10px;
  width: 100%;
  background-color: #f4edf2;
  margin: 0 auto;
  overflow: hidden;
  height: 0;

  ${(props) =>
    props.expandirFiltro
      ? css`
          height: auto;
        `
      : css`
          height: 0;
        `}

  ul {
    list-style: none;
  }
  /* li + li {
    margin-bottom: 10px;
  } */

  ul :first-child {
    margin-top: 10px;
  }

  ul li {
    padding-left: 15px;
    margin-bottom: 10px;
  }

  ul li a {
    text-decoration: none;
    color: #795376;
    font-weight: bold;
  }

  @media only screen and (min-width: 1024px) {
  }

  @media only screen and (min-width: 1440px) {
  }
`;
// ==================== FILTROS ============================

// ==================== PRODUTOS ============================

export const Lista = styled.div`
  display: grid;
  row-gap: 40px;
  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: auto auto;
  }

  @media only screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 90px;
  }
`;

export const CardProdutos = styled.div`
  cursor: pointer;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-auto-rows: min-content;
  row-gap: 20px;
  img {
    width: 240px;
    height: auto;
    margin: 0 auto;
  }

  h1 {
    font-size: 16px;
    text-align: center;
  }

  p {
    font-size: 14px;
    text-align: center;
  }

  @media only screen and (min-width: 1024px) {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-auto-rows: min-content;
    row-gap: 20px;
    img {
      width: 240px;
      height: auto;
      margin: 0 auto;
    }

    h1 {
      font-size: 16px;
      text-align: center;
    }

    p {
      font-size: 14px;
      text-align: center;
    }
  }

  @media only screen and (min-width: 1440px) {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-auto-rows: min-content;
    row-gap: 20px;
    img {
      width: 365px;
      height: auto;
      margin: 0 auto;
    }

    h1 {
      font-size: 24px;
      text-align: center;
    }

    p {
      font-size: 20px;
      text-align: center;
    }
  }
`;

// ==================== PRODUTOS ============================

// ==================== BTN ============================

export const BtnMaisProdutos = styled.div`
  display: grid;
  @media only screen and (min-width: 1024px) {
  }

  @media only screen and (min-width: 1440px) {
  }
`;

// ==================== BTN ============================

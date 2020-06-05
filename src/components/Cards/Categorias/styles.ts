import styled from 'styled-components';

export const CardCategoriaContainer = styled.div`
  display: grid;
  grid-template-columns: 240px;
  grid-template-rows: auto;

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 250px;
    grid-template-rows: auto;
  }

  @media only screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: 400px;
    grid-template-rows: auto;
  }
`;
export const CardCategoriaSubcontainer = styled.div`
  grid-area: 1/1/2/2;
  display: grid;
  row-gap: 10px;

  @media only screen and (min-width: 1024px) {
    display: grid;
    row-gap: 40px;
  }

  @media only screen and (min-width: 1440px) {
  }
`;
export const Image = styled.img`
  width: 240px;
  height: 165px;

  @media only screen and (min-width: 1024px) {
    width: 250px;
    height: 250px;
  }

  @media only screen and (min-width: 1440px) {
    width: 400px;
    height: 330px;
  }
`;
export const Descricao = styled.h1`
  font-size: 14px;
  text-align: center;

  @media only screen and (min-width: 1024px) {
    font-size: 22px;
    text-align: center;
  }

  @media only screen and (min-width: 1440px) {
  }
`;

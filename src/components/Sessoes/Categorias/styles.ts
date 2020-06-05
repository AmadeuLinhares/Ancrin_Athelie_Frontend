import styled from 'styled-components';

// Categorias, Title, CardsCategorias
export const CategoriasContainer = styled.div`
  margin: 40px 0;
  display: grid;
  grid-template-rows: auto auto;
  row-gap: 40px;

  @media only screen and (min-width: 1024px) {
    margin: 80px 0;
    display: grid;
    grid-template-rows: auto auto;
    row-gap: 60px;
  }

  @media only screen and (min-width: 1440px) {
    margin: 80px 0;
    display: grid;
    grid-template-rows: auto auto;
    row-gap: 60px;
  }
`;
export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 26px;
  }

  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 36px;
    }
  }

  @media only screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 36px;
    }
  }
`;
export const CardsCategorias = styled.div`
  display: grid;
  row-gap: 40px;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 80px;
    row-gap: 100px;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 170px;
    row-gap: 120px;
    justify-content: center;
    align-items: center;
  }
`;

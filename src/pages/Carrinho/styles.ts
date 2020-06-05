import styled from 'styled-components';

export const CarrinhoContainer = styled.div`
  display: grid;
  row-gap: 40px;
  @media only screen and (min-width: 1024px) {
    row-gap: 80px;
  }

  @media only screen and (min-width: 1440px) {
  }
`;
export const Botoes = styled.div`
  margin: 50px 0;
  display: grid;
  row-gap: 40px;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media only screen and (min-width: 1440px) {
  }
`;

import styled, { css } from 'styled-components';
// Container, Subcontainer, Principal
interface Parametros {
  cor: string;
  altura: string;
}
export const Container = styled.div<Parametros>`
  display: grid;
  grid-template-columns: auto 360px auto;
  grid-template-rows: auto;
  ${(props) =>
    props.cor &&
    css`
      background-color: ${props.cor};
    `}

  ${(props) =>
    props.altura &&
    css`
      height: ${props.altura};
    `}

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: auto 1024px auto;
    ${(props) =>
      props.cor &&
      css`
        background-color: ${props.cor};
      `}

    ${(props) =>
      props.altura &&
      css`
        height: ${props.altura};
      `}
  }

  @media only screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: auto 1440px auto;
    ${(props) =>
      props.cor &&
      css`
        background-color: ${props.cor};
      `}

    ${(props) =>
      props.altura &&
      css`
        height: ${props.altura};
      `}
  }
`;
export const Subcontainer = styled.div`
  grid-area: 1/2/2/3;
  display: grid;
  grid-template-columns: auto 330px auto;
  grid-template-rows: 20px auto 20px;

  @media only screen and (min-width: 1024px) {
    grid-area: 1/2/2/3;
    display: grid;
    grid-template-columns: auto 1024px auto;
    grid-template-rows: 20px auto 20px;
  }

  @media only screen and (min-width: 1440px) {
    grid-area: 1/2/2/3;
    display: grid;
    grid-template-columns: auto 1200px auto;
    grid-template-rows: 20px auto 20px;
  }
`;
export const Principal = styled.div`
  grid-area: 2/2/3/3;

  @media only screen and (min-width: 1024px) {
    grid-area: 2/2/3/3;
  }

  @media only screen and (min-width: 1440px) {
    grid-area: 2/2/3/3;
  }
`;

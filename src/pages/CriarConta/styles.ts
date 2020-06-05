import styled from 'styled-components';

export const ContainerCriarConta = styled.div`
  display: grid;
  row-gap: 15px;
  margin-bottom: 50px;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 1024px) {
    display: grid;
    row-gap: 15px;
    margin-bottom: 50px;
    justify-content: center;
    align-items: center;
    /* width: 900px; */
  }

  @media only screen and (min-width: 1440px) {
    display: grid;
    row-gap: 15px;
    margin-bottom: 50px;
  }
`;

export const Title = styled.h1`
  font-size: 15px;
`;

export const Buntton = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

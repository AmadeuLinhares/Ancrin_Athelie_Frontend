import styled from 'styled-components';

export const ContainerItens = styled.div`
  display: grid;
  grid-template-columns: auto 300px auto;
  justify-content: center;
  align-items: center;
  height: auto;
  padding-top: 40px;
  /* border-bottom: solid 1px #fff; */

  & + div {
    border-top: solid 4px #fff;
  }

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: auto 1000px auto;
    justify-content: center;
    align-items: center;
    height: auto;
    padding-top: 40px;
    /* border-bottom: solid 4px #fff; */
    & + div {
      border-top: solid 4px #fff;
    }
  }

  @media only screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: auto 1200px auto;
    justify-content: center;
    align-items: center;
    height: auto;
    /* border-bottom: solid 4px #fff; */
    & + div {
      border-top: solid 4px #fff;
    }
  }
`;

export const Itens = styled.div`
  display: grid;

  row-gap: 40px;
  grid-area: 2/2/3/3;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 1024px) {
    display: grid;
    row-gap: 40px;
    grid-template-columns: repeat(4, auto);
    grid-area: 2/2/3/3;
    justify-content: center;
    align-items: center;
    column-gap: 40px;
  }

  @media only screen and (min-width: 1440px) {
    display: grid;
    row-gap: 80px;
    grid-template-columns: repeat(4, auto);
    grid-area: 2/2/3/3;
    justify-content: center;
    align-items: center;
    column-gap: 40px;
  }
`;
export const Informacoes = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  row-gap: 10px;

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-auto-rows: max-content;
    justify-content: center;
    align-items: center;
    row-gap: 30px;
  }

  @media only screen and (min-width: 1440px) {
    row-gap: 30px;
  }
`;
export const InfoDescritivas = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  img {
    width: 150px;
    height: 150px;
    margin: 0 auto;
    border-radius: 5px;
  }

  p {
    font-size: 15px;
    text-align: center;
  }

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;
    row-gap: 20px;
    column-gap: 10px;
    img {
      width: 150px;
      height: 150px;
      margin: 0 auto;
    }

    p {
      font-size: 15px;
      text-align: center;
      min-width: 180px;
    }
  }

  @media only screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;
    row-gap: 20px;
    column-gap: 20px;
    img {
      width: 300px;
      height: 300px;
      margin: 0 auto;
    }

    p {
      min-width: 150px;
      font-size: 15px;
      text-align: center;
    }
  }
`;

export const PrecoUnidade = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    height: 100%;
  }

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-auto-rows: auto;
    height: 100%;
    div {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      height: 100%;
    }
  }

  @media only screen and (min-width: 1440px) {
  }
`;
// =============== QUANTIDADE PRODUTOS =================
export const Quantidade = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-auto-rows: auto;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
  }

  @media only screen and (min-width: 1440px) {
  }
`;
export const AdicionarQuantidade = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    height: 40px;
    width: 40px;
    text-align: center;
    color: #2a2a2a;
    font-size: 15px;
    background-color: transparent;
    border: none;
  }

  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      height: 60px;
      width: 80px;
      text-align: center;
      color: #2a2a2a;
      font-size: 18px;
      background-color: transparent;
      border: none;
    }
  }

  @media only screen and (min-width: 1440px) {
  }
`;

// =============== QUANTIDADE PRODUTOS =================
export const PrecoTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-auto-rows: auto;
    height: 100%;
    div {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      height: 100%;
    }
  }

  @media only screen and (min-width: 1440px) {
  }
`;
export const Title = styled.p`
  font-size: 14px;
  font-weight: bold;
  text-align: center;

  @media only screen and (min-width: 1024px) {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    min-width: 150px;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    min-width: 120px;
  }
`;
export const Preco = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #2a2a2a;

  @media only screen and (min-width: 1024px) {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }
`;

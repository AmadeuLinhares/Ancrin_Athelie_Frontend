import styled from 'styled-components';
// ImageUsuario
// Citacao
// UsuarioCitacao

// ============================================================

export const Depoimento = styled.div`
  display: grid;
  grid-template-columns: 300px;
  max-width: 300px;
  grid-template-rows: auto;
  row-gap: 25px;
  justify-content: center;
  align-items: center;
  background-color: #b08ead;

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 620px;
    max-width: 620px;
    grid-template-rows: auto;
    row-gap: 45px;
    justify-content: center;
    align-items: center;
    background-color: #b08ead;
  }

  @media only screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: 735px;
    max-width: 735px;
    grid-template-rows: auto;
    row-gap: 45px;
    justify-content: center;
    align-items: center;
    background-color: #b08ead;
  }
`;
export const ImageUsuario = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (min-width: 1024px) {
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media only screen and (min-width: 1440px) {
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
export const ImgPrincipal = styled.img`
  width: 105px;
  height: 105px;
  border-radius: 50%;
  background-color: #b08ead;

  @media only screen and (min-width: 1024px) {
    width: 175px;
    height: 175px;
    border-radius: 50%;
    background-color: #b08ead;
  }

  @media only screen and (min-width: 1440px) {
    width: 175px;
    height: 175px;
    border-radius: 50%;
    background-color: #b08ead;
  }
`;
export const Apas = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f4edf2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -40px;
  margin-left: 70px;

  @media only screen and (min-width: 1024px) {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #f4edf2;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -60px;
    margin-left: 110px;
  }

  @media only screen and (min-width: 1440px) {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #f4edf2;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -60px;
    margin-left: 120px;
  }
`;
export const Citacao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
    color: white;
    font-size: 14px;
    font-weight: bold;
  }

  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      text-align: center;
      color: white;
      font-size: 20px;
      font-weight: bold;
    }
  }

  @media only screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      text-align: center;
      color: white;
      font-size: 20px;
      font-weight: bold;
    }
  }
`;
export const UsuarioCitacao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
    color: white;
    font-size: 14px;
    font-weight: bold;
  }

  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      text-align: center;
      color: white;
      font-size: 20px;
      font-weight: bold;
    }
  }

  @media only screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      text-align: center;
      color: white;
      font-size: 20px;
      font-weight: bold;
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 360px auto;
  grid-template-rows: auto;
  margin: 40px 0;

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: auto 1024px auto;
    margin: 185px 0;
  }

  @media only screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: auto 1440px auto;
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
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 1024px) {
    grid-area: 2/2/3/3;
    justify-content: flex-start;
    align-items: center;
  }

  @media only screen and (min-width: 1440px) {
    grid-area: 2/2/3/3;
    justify-content: flex-start;
    align-items: center;
  }
`;

// ==================== IMG PRINCIPAL ====================

export const InformacoesHome = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  row-gap: 25px;
  h1 {
    font-size: 16px;
  }
  p {
    font-size: 14px;
  }
  button {
    width: 125px;
    height: 40px;
    background-color: #b08ead;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button p {
    font-size: 14px;
    color: white;
    font-weight: bold;
  }

  @media only screen and (min-width: 1024px) {
    display: grid;
    justify-content: flex-start;
    align-items: center;
    row-gap: 25px;
    width: 480px;
    h1 {
      font-size: 65px;
    }
    p {
      font-size: 20px;
    }
    button {
      width: 180px;
      height: 60px;
      background-color: #b08ead;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    button p {
      font-size: 20px;
      color: white;
      font-weight: bold;
    }
  }

  @media only screen and (min-width: 1440px) {
    display: grid;
    justify-content: flex-start;
    align-items: center;
    row-gap: 25px;
    width: 480px;
    h1 {
      font-size: 65px;
    }
    p {
      font-size: 20px;
    }
    button {
      width: 180px;
      height: 60px;
      background-color: #b08ead;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    button p {
      font-size: 20px;
      color: white;
      font-weight: bold;
    }
  }
`;

export const ImagesHome = styled.div`
  display: grid;
  justify-content: flex-end;
  align-items: center;
  /* grid-area: 1/2/2/4; */
  grid-area: 2/2/3/4;
  @media only screen and (min-width: 1024px) {
    display: grid;
    justify-content: flex-end;
    align-items: center;
    grid-area: 1/2/2/4;
    /* grid-area: 2/2/3/4; */
  }

  @media only screen and (min-width: 1440px) {
    display: grid;
    justify-content: flex-end;
    align-items: center;
    grid-area: 1/2/2/4;
    /* grid-area: 2/2/3/4; */
  }
`;
export const PrincipalHomeImg = styled.img`
  width: 324px;
  height: 300px;
  @media only screen and (min-width: 1024px) {
    width: 510px;
    height: 620px;
  }

  @media only screen and (min-width: 1440px) {
    width: 510px;
    height: 620px;
  }
`;
export const ImgComplemento = styled.img`
  width: 200px;
  height: 100px;
  margin-top: -100px;
  margin-left: -60px;
  @media only screen and (min-width: 1024px) {
    width: 470px;
    height: 200px;
    margin-top: -200px;
    margin-left: -80px;
  }

  @media only screen and (min-width: 1440px) {
    width: 470px;
    height: 200px;
    margin-top: -200px;
    margin-left: -80px;
  }
`;

export const BarraLateral = styled.div`
  display: none;
  @media only screen and (min-width: 1024px) {
    display: none;
  }

  @media only screen and (min-width: 1440px) {
    display: grid;
    justify-content: flex-end;
    align-items: center;
    grid-area: 1/1/2/2;
    height: 800px;
    width: 200px;
    /* grid-area: 2/2/3/4; */
    background-color: #b08ead;
  }
`;

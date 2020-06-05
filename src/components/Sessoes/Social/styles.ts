import styled from 'styled-components';

export const InfoMidias = styled.div`
  display: grid;
  row-gap: 30px;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  /* margin-top: 10px; */
  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    min-width: 1024px;
    min-height: 285px;
    /* margin-top: 40px; */
  }

  @media only screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    min-height: 285px;
    min-width: 1024px;
  }
`;
export const AncrinAthelie = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  @media only screen and (min-width: 1440px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;
export const Logo = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  @media only screen and (min-width: 1024px) {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  @media only screen and (min-width: 1440px) {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
`;
export const Nome = styled.h1`
  text-transform: uppercase;
  font-size: 14px;
  margin-left: 20px;
  @media only screen and (min-width: 1024px) {
    font-size: 14px;
    color: #795376;
    font-style: italic;
    letter-spacing: 5px;
    font-weight: 900;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 14px;
    color: #795376;
    font-style: italic;
    letter-spacing: 5px;
    font-weight: 900;
  }
`;
export const OpcoesMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 265px;
  a {
    font-size: 18px;
    font-weight: normal;
    cursor: pointer;
    text-decoration: none;
    color: #4b3049;
    font-family: 'Cinzel', serif;
  }
  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    a {
      font-size: 18px;
      font-weight: normal;
      cursor: pointer;
      text-decoration: none;
      color: #4b3049;
      font-family: 'Cinzel', serif;
    }
  }

  @media only screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    a {
      font-size: 18px;
      font-weight: normal;
      cursor: pointer;
      text-decoration: none;
      color: #4b3049;
      font-family: 'Cinzel', serif;
    }
  }
`;
export const RedesSocias = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #4b3049;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* width: 500px; */

    div {
      margin-right: 10px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #4b3049;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media only screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* width: 500px; */
    div {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #4b3049;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

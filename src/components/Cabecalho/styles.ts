import styled, { css } from 'styled-components';

interface BtnClicked {
  expandeElemento: boolean;
}

interface RotacionaMenu {
  rotacionaMenu: boolean;
}

export const CabecalhoContainer = styled.header`
  height: 40px;
  display: grid;
  grid-template-columns: auto 360px auto;

  @media only screen and (min-width: 1024px) {
    height: 40px;
    display: grid;
    grid-template-columns: auto 1024px auto;
  }

  @media only screen and (min-width: 1440px) {
    height: 40px;
    display: grid;
    grid-template-columns: auto 1440px auto;
  }
`;

export const CabecalhoSubcontainer = styled.div`
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
    grid-template-columns: auto 1024px auto;
    grid-template-rows: 20px auto 20px;
  }
`;

export const CabecalhoPrincipal = styled.div`
  grid-area: 2/2/3/3;
  display: grid;

  @media only screen and (min-width: 1024px) {
    grid-area: 2/2/3/3;
    display: grid;
  }

  @media only screen and (min-width: 1440px) {
    grid-area: 2/2/3/3;
    display: grid;
  }
`;

export const Informacoes = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto;
  row-gap: 20px;
  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 200px auto 80px 80px;
    grid-template-rows: auto auto;
  }

  @media only screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: 200px auto 80px 80px;
    grid-template-rows: auto auto;
  }
`;

export const IconMenuMobile = styled.div<RotacionaMenu>`
  display: grid;
  grid-area: 1/1/2/2;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.5s;

  ${(props) =>
    props.rotacionaMenu &&
    css`
      transition: 0.5s;
      transform: rotate(90deg);
    `}
`;

export const AncrinAthelie = styled.div`
  display: grid;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 14px;
    color: #795376;
    font-style: italic;
    letter-spacing: 5px;
    font-weight: 900;
  }

  @media only screen and (min-width: 1024px) {
    display: grid;
    flex: 1;
    h1 {
      font-size: 14px;
      color: #795376;
      font-style: italic;
      letter-spacing: 5px;
      font-weight: 900;
    }
  }

  @media only screen and (min-width: 1440px) {
    display: grid;
    flex: 1;
    h1 {
      font-size: 14px;
      color: #795376;
      font-style: italic;
      letter-spacing: 5px;
      font-weight: 900;
    }
  }
`;

export const CarrinhoIcon = styled.div`
  display: grid;
  /* grid-area: 1/3/2/4; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  @media only screen and (min-width: 1024px) {
    display: grid;
    flex: 1;
  }

  @media only screen and (min-width: 1440px) {
    display: grid;
    flex: 1;
  }
`;

export const OpcoesMobile = styled.div<BtnClicked>`
  grid-area: 2/1/3/4;
  display: grid;
  transition: 1s;
  background-color: #795376;
  height: 0px;
  width: 100%;
  position: relative;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: 1s;
  display: grid;
  grid-auto-rows: min-content;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.expandeElemento
      ? css`
          height: 100vh;
          transition: 1s;

          ul {
            overflow: visible !important;
            opacity: 1 !important;
            -webkit-transition: opacity 0.05 !important;
            transition: opacity 0.05 !important;
          }

          ul li {
            opacity: 1 !important;
            -webkit-transform: translate(0, 0) scale(1) !important;
            transform: translate(0, 0) scale(1) !important;
          }

          ul li:nth-child(1) {
            -webkit-transition-delay: 0.1s !important;
            transition-delay: 0.1s !important;
            z-index: 8 !important;
          }

          ul li:nth-child(2) {
            -webkit-transition-delay: 0.2s !important;
            transition-delay: 0.2s !important;
            z-index: 7 !important;
          }

          ul li:nth-child(3) {
            -webkit-transition-delay: 0.3s !important;
            transition-delay: 0.3s !important;
            z-index: 6 !important;
          }

          ul li:nth-child(4) {
            -webkit-transition-delay: 0.4s;
            transition-delay: 0.4s;
            z-index: 5;
          }
        `
      : css`
          height: 0;
          transition: 0.2s;

          ul {
            overflow: visible;
            opacity: 1;
            -webkit-transition: opacity 0.05;
            transition: opacity 0.05;
            transition: 2s !important;
          }

          ul > li:nth-child(4) {
            -webkit-transition-delay: 0.4s;
            transition-delay: 0.4s;
            z-index: 5;
          }

          ul > li:nth-child(3) {
            -webkit-transition-delay: 0.5s;
            transition-delay: 0.5s;
            z-index: 4;
          }

          ul > li:nth-child(2) {
            -webkit-transition-delay: 0.6s;
            transition-delay: 0.6s;
            z-index: 3;
          }

          ul > li:nth-child(1) {
            -webkit-transition-delay: 0.67;
            transition-delay: 0.7s;
            z-index: 3;
          }
        `}

  /* ========= UL ============= */
  ul {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 100%;
    flex: 0 1 100%;
    max-height: 0;
    opacity: 0;
    position: relative;
    top: 0.1875rem;
    overflow: hidden;
    list-style: none;
  }

  ul li {
    opacity: 0;
    -webkit-transform: translate(0, -10px) scale(1.07);
    transform: translate(0, -10px) scale(1.07);
    will-change: transform, opacity;
    -webkit-transition: opacity 0.25s,
      scale 0.2s cubic-bezier(0.165, 0.84, 0.44, 1),
      -webkit-transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: opacity 0.25s, scale 0.2s cubic-bezier(0.165, 0.84, 0.44, 1),
      -webkit-transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: opacity 0.25s, transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1),
      scale 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: opacity 0.25s, transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1),
      scale 0.2s cubic-bezier(0.165, 0.84, 0.44, 1),
      -webkit-transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
    margin-bottom: -1px;
    position: relative;
  }

  ul li a {
    display: block;
    width: calc(100% + 4rem);
    margin-left: -2rem;
    padding: 1rem 2rem;
    position: relative;
    background-color: transparent;
    color: #fff;
    font-size: 1rem;
    text-transform: none;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;
    z-index: 999;
    text-decoration: underline;
    cursor: pointer;
    font-family: 'Cinzel', serif;
  }
`;

export const OpcoesDesktop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  ul {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }

  ul li {
    list-style: none;
  }

  ul li a {
    text-decoration: none;
    font-size: 20px;
    font-weight: 500;
    color: #795376;
    font-family: 'Cinzel', serif;
  }

  @media only screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    ul {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-around;
      width: 100%;
    }

    ul li {
      list-style: none;
    }

    ul li a {
      text-decoration: none;
      font-size: 20px;
      font-weight: 500;
      color: #795376;
      font-family: 'Cinzel', serif;
    }
  }
`;

export const AreaUsuario = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

import styled, { css } from 'styled-components';

interface Props {
  altura?: string;
  largura?: string;
}
export const BtnExplorar = styled.button<Props>`
  width: 160px;
  height: 50px;
  text-transform: uppercase;
  border-radius: 5px;
  border: solid 1px #b08ead;
  color: #b08ead;
  font-size: 14px;
  transition: 0.5s;
  background-color: white;
  &:hover {
    background-color: #b08ead;
    color: white;
    transition: 0.5s;
  }

  ${(props) =>
    props.altura &&
    css`
      height: ${props.altura};
    `}

  ${(props) =>
    props.largura &&
    css`
      width: ${props.largura};
    `}

  @media only screen and (min-width: 1024px) {
    width: 175px;
    height: 60px;
    ${(props) =>
      props.altura &&
      css`
        height: ${props.altura};
      `}

    ${(props) =>
      props.largura &&
      css`
        width: ${props.largura};
      `}
  }

  @media only screen and (min-width: 1440px) {
    ${(props) =>
      props.altura &&
      css`
        height: ${props.altura};
      `}

    ${(props) =>
      props.largura &&
      css`
        width: ${props.largura};
      `}
  }
`;

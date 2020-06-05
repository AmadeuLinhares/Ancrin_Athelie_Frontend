import styled, { css } from 'styled-components';
import Tooltip from '../../Tooltip';

interface ContainerParameters {
  isFocused: boolean;
  estaPreenchido: boolean;
  isError: boolean;
}

export const ContainerInput = styled.div<ContainerParameters>`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 14px;
  border-radius: 10px;
  border: dashed 1px #b08ead;
  & + div {
    margin-top: 20px;
  }
  ${(props) =>
    props.isError &&
    css`
      border: dashed 1px #c53030;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      border: dashed 1px #4b3049;
      svg {
        color: #4b3049 !important;
      }
    `}

  ${(props) =>
    props.estaPreenchido &&
    css`
      /* border: dashed 1px #4b3049; */
      svg {
        color: #4b3049 !important;
      }
    `}



  @media only screen and (min-width: 1024px) {
    height: 50px;
    width: 100%;
    font-size: 18px;
  }

  svg {
    margin: 0 20px;
  }
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  color: #b08ead;
  font-size: 14px;
  border: none;
  flex: 1;
  font-family: 'Rubik', sans-serif;

  ::placeholder {
    font-family: 'Rubik', sans-serif;
    color: #b08ead;
    font-size: 14px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 15px;
    height: 100%;
    font-family: 'Rubik', sans-serif;
    ::placeholder {
      font-family: 'Rubik', sans-serif;
      color: #b08ead;
      font-size: 15px;
    }
  }

  @media only screen and (min-width: 1440px) {
    font-size: 16px;
    width: 100%;
    font-family: 'Rubik', sans-serif;
    ::placeholder {
      font-family: 'Rubik', sans-serif;
      color: #b08ead;
      font-size: 16px;
    }
  }
`;
export const ErrroContainer = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  span {
    background-color: #c53030;
    color: white;
    border-radius: 20px;

    &::before {
      border-color: #c53030 transparent;
    }
  }
  @media only screen and (min-width: 1024px) {
  }

  @media only screen and (min-width: 1440px) {
  }
`;

import styled, { css } from 'styled-components';
import Checked from '../../../assets/checkbox-checked.svg';
import NoChecked from '../../../assets/checkbox-noCheck.svg';

export const ContainerCheck = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Check = styled.input`
  margin: 0 6px 0 4px;
  padding: 0.5em;
  border: none;
  -webkit-appearance: none;
  height: 16px;
  width: 16px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 16px;
  ${(props) =>
    props.checked
      ? css`
          background-image: url(${Checked});
        `
      : css`
          background-image: url(${NoChecked});
        `}

  @media only screen and (min-width: 1024px) {
    border: none;
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 20px;
    ${(props) =>
      props.checked
        ? css`
            background-image: url(${Checked});
          `
        : css`
            background-image: url(${NoChecked});
          `}
  }

  @media only screen and (min-width: 1440px) {
    border: none;
    -webkit-appearance: none;
    height: 24px;
    width: 24px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 24px;
    ${(props) =>
      props.checked
        ? css`
            background-image: url(${Checked});
          `
        : css`
            background-image: url(${NoChecked});
          `}
  }
`;
export const Label = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 14px;
  }

  @media only screen and (min-width: 1024px) {
    p {
      font-size: 16px;
    }
  }

  @media only screen and (min-width: 1440px) {
    p {
      font-size: 16px;
    }
  }
`;

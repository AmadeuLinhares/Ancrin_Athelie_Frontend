import styled, { css } from 'styled-components';

const toastVariations = {
  info: css`
    p {
      color: #fff;
    }
    color: #fff;
    background: #4b3049;
  `,

  success: css`
    background: #f4edf2;
    color: #795376;
    p {
      color: #795376;
    }
  `,

  error: css`
    background: #fddede;
    color: #c53030;
    p {
      color: #c53030;
    }
  `,
};

interface ParametersToast {
  type?: 'success' | 'info' | 'error';
  descricao: boolean;
}
export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 30px;
  overflow: hidden;
  z-index: 9999;
  height: auto;
`;
export const Toast = styled.div<ParametersToast>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  box-shadow: rgba(0, 0, 0, 0.2);
  display: flex;
  border-radius: 12px;

  & + div {
    margin-top: 8px;
  }

  ${(props) => toastVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      line-height: 20px;
      opacity: 0.8;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    background: transparent;
    color: inherit;
    border: 0;
    opacity: 0.6;
  }

  ${(props) =>
    !props.descricao &&
    css`
      align-items: center;
      margin-top: 0;
    `}
`;

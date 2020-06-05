import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  span {
    width: 160px;
    background-color: #b08ead;
    padding: 8px;
    font-size: 14px;
    visibility: hidden;
    color: #fff;
    opacity: 0;
    transition: opacity 0.2s;
    font-weight: 500px;
    position: absolute;
    font-family: 'Rubik', sans-serif;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    &::before {
      content: '';
      border-style: solid;
      border-color: #b08ead transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  :hover span {
    opacity: 1;
    visibility: visible;
    text-align: center;
  }
`;

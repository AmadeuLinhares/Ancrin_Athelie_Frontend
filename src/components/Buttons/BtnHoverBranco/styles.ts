import styled from 'styled-components';

export const BtnExplorar = styled.button`
  width: 160px;
  height: 50px;
  border-radius: 5px;
  border: solid 1px #b08ead;
  color: white;
  line-height: 20px;
  font-size: 14px;
  font-weight: bold;
  transition: 0.5s;
  background-color: #b08ead;
  font-family: 'Rubik', sans-serif;
  &:hover {
    background-color: #fff;
    color: #b08ead;
    transition: 0.5s;
    border: solid 1px #b08ead;
  }

  @media only screen and (min-width: 1024px) {
    width: 175px;
    height: 60px;
  }

  @media only screen and (min-width: 1440px) {
  }
`;

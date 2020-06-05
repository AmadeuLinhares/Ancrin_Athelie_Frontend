import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&display=swap');
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

button{
  cursor: pointer;
  font-family: 'Rubik', sans-serif;
  border: none;
}

html, border-style, #rrot{
  min-height: 100vh;
  height: 100%;
}

body{
  -webkit-font-smoothing: antialiased !important;
}

h1{
  font-family: 'Poppins', sans-serif;
  color: #4B3049;
}

p, li{
  font-family: 'Rubik', sans-serif;
  color: #795376;
}

`;

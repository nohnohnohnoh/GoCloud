import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}



* {
  box-sizing: border-box; 
  ouline: none;
  font-family: ‘Black Han Sans’, sans-serif;
}

body{
  font-size: 100px;
}

img{
  width: 100%;
  height: 100%;
}




`;

export default GlobalStyle;

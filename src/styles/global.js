import { createGlobalStyle } from 'styled-components';

import background from '../assets/images/background.png';
import bg from '../assets/images/bg-rosa.png';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

 * {
     margin: 0;
     padding: 0;
     outline: 0;
     box-sizing: border-box;
 }

 html, body, #root {
     min-height: 100%;
 }

 body{
     background: url(${background}) no-repeat center top, url(${bg}) repeat right bottom ;
     -webkit-font-smoothing: antialiased !important;
 }

 body, input, button {
     color: #fff;
     font-size: 14px;
     font-family: Roboto, sans-serif;
 }

 button {
     cursor: pointer;
 }

 #root {
     max-width: 1020px;
     margin: 0 auto;
     padding: 0 20px 50px;
 }

`;

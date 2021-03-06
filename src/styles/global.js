import { createGlobalStyle } from 'styled-components';
import moonImage from '../assets/images/moonbg.jpg';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #F6F4F0;
    background-image: url(${moonImage});
    background-size: cover;
    background-attachment: fixed;
    color: #363537;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    display: flex;
    flex-flow: column nowrap;
    justify-content: start;
    align-items: start;
  }
`
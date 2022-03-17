import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, button, label {
    font-family: 'Noto Sans', sans-serif;
    color: #33475B;
  }

  button {
    cursor: pointer;
  }
`;

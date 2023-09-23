import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
    *{
        box-sizing: border-box;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    body {
      font-family: "Chewy", cursive;
      color: white;
      background-color: rgb(86, 85, 85);
    }
    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }
`;

export default GlobalStyles;

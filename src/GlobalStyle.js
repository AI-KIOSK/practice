import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    body{
        font-family: "Helvetica", "Arial", sans-serif;
        margin: 0;
    }
`

export default GlobalStyle
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        font-family: Helvetica;
        font-weight: 300;
    }

    body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        background-color: ${({ theme  }) => theme.bodyBackground };
    }
`
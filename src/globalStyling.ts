import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${normalize}

    html {
        height: 100%;
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
        color: currentColor;
    }

    p {
        margin: 0;
    }
`;

export default GlobalStyle;

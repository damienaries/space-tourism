import { createGlobalStyle } from 'styled-components';
/*******************
 TODO 
    create theme
    set up fonts
    set up variables

 *********************/

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        font-size: 62.5%;
    }

    body {
        position: relative;
        color: #fff;
    }
`
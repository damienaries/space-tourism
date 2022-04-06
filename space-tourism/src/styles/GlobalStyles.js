import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    
    /* Variables */
    :root {
        /* Fonts */
        --ff-title: 'Bellefair', serif;
        --ff-body: 'Barlow Condensed', sans-serif;
        /* Typography */
        --size-title-1: 15rem;
        --size-title-2: 10rem;
        --size-title-3: 5.6rem;
        --size-title-4: 3.2rem;
        --size-title-5: 2.8rem; /* Subtitle 1 */
        --size-title-sub: 1.4rem;
        --text-nav-large: 2rem;
        --text-nav: 1.6rem;
        --text-body: 1.6rem;
        --text-thin: 100;
        --text-medium: 500;
        --text-thick: 800;

        /* Colors */
        --color-dark: rgba(11, 13, 23, 1); /* #0b0d17 */
        --color-blue: rgba(208, 214, 249, 1); /* #d0d6f9 */
        --color-white: rgba(255, 255, 255, 1); /* #FFF */
        --color-white-hover: rgba(151, 151, 151, .4);
        /* Shadows and radius */
    }

    /* General styles */
    html {
        font-size: 62.5%; /* 1rem = 10px */
        scroll-behavior: smooth;
    }

    body {
        position: relative;
        color: #fff;
        height: 100vh;
        width: 100vw;
    }

    a,
    a:visited {
        color: inherit;
        text-decoration: none;
    }

    ul {
        list-style-type: none;
    }

    button {
        border: none;
        outline: 0;
    }
`
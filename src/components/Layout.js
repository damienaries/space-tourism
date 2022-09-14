import React from 'react';
import Topbar from './Topbar';
import { GlobalStyles } from '../styles/GlobalStyles';
import styled from 'styled-components';
import BackgroundImage from '../styles/BackgroundImage';


export default function Layout ({ children }) {
    return (
        <StyledLayout>
            <GlobalStyles />
            {/* navigation */}
            <Topbar />
            {/* Content */}    
            <main>{children}</main>
        </StyledLayout>
    )
}


const StyledLayout = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10rem;
    position: relative;
    background-image: url(${BackgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media only screen and (max-width: 800px) {
        padding: 5rem;
    }
`

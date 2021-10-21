import styled from 'styled-components';
import bgDesktop from '../assets/home/background-home-desktop.jpg';

export default function Home() {
    return (
        <StyledHome>
            <h1>Home Page</h1>
        </StyledHome>
    )
}

const StyledHome = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url(${bgDesktop});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`
import styled from 'styled-components';
import bgDesktop from '../assets/technology/background-technology-desktop.jpg';

export default function Technology() {
    return (
        <StyledTechnology>
            <h1>Technologys</h1>
        </StyledTechnology>
    )
}

const StyledTechnology = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url(${bgDesktop});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

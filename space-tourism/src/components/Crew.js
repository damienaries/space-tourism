import styled from 'styled-components';
import bgDesktop from '../assets/crew/background-crew-desktop.jpg';

export default function Crew() {
    return (
        <StyledCrew>
            <h1>Crews</h1>
        </StyledCrew>
    )
}

const StyledCrew = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url(${bgDesktop});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

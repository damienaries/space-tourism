import styled from 'styled-components';
import bgDesktop from '../assets/destination/background-destination-desktop.jpg';

export default function Destination() {
    return (
        <StyledDestination>
            <h1>Destinations</h1>
        </StyledDestination>
    )
}

const StyledDestination = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url(${bgDesktop});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

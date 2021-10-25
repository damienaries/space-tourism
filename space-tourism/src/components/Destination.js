import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bgDesktop from '../assets/destination/background-destination-desktop.jpg';
import Moon from '../assets/destination/image-moon.webp';


/* 
TODO
    set up global layout grid
    page layout
    tabs + routing
    import data from data.json
*/

export default function Destination() {
    return (
        <StyledDestination>
            <div className="content">
                <div className="content-left">
                    <h4 className="page-title">
                        <span className="destination-index">01</span>
                        Pick your destination
                    </h4>
                    <img src={Moon} alt="Moon" className="aster"/>
                </div>
                <div className="content-right">
                    <nav className="destination-tabs">
                        <Link to="1">Moon</Link>
                        <Link to="2">Mars</Link>
                        <Link to="3">Europa</Link>
                        <Link to="4">Titan</Link>
                    </nav>
                    <h2 classNAme="destination-title">Moon</h2>
                    <p className="destination-body">See our planet as you&apos;ve never seen it before. A perfect relaxing trip away to help regain perspective and come back frefreshed. While you&apos;re there, take in some history by visitng the Luna 2 and Apollo 11 landing sites.</p> 
                    <div className="stats">
                        <h6 className="stat-name">Avg. distance</h6>
                        <h4 className="stats-value">384,400 KM</h4>
                    </div>
                    <div className="stats">
                        <h6 className="stat-name">Est. travel time</h6>
                        <h4 className="stats-value">3 Days</h4>
                    </div>
                </div>
            </div>
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

    .content {
        width: 80%;
        display: flex;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        padding: 5rem 0;
    }

    .content-left {
        width: 50%;
        padding: 6rem 4rem;
        position: relative;
        border: 1px solid yellow;
        
        .page-title {
            font-size: var(--size-title-4);
            font-weight: 300;
            margin-bottom: 4rem;
            
            .destination-index {
                font-weight: var(--text-medium);
                margin-right: 2rem;
            }
        }

        .aster {
            border: 1px solid red;
        }
    }

    .content-right {
        width: 50%;
        position: relative;
        border: 1px solid green;
    }
`;

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Moon from '../assets/destination/image-moon.webp';


/* 
TODO
    page layout
    tabs + routing
    import data from data.json
*/

export default function Destination() {
    return (
        <StyledDestination>
            <div className="content-left">
                <h4 className="page-title">
                    <span className="page-index">01</span>
                    Pick your destination
                </h4>
                <img src={Moon} alt="Moon" className="aster"/>
            </div>
            <div className="content-right">
                <nav className="destination-tabs">
                    <Link to="1" className="dest-tab">Moon</Link>
                    <Link to="2" className="dest-tab">Mars</Link>
                    <Link to="3" className="dest-tab">Europa</Link>
                    <Link to="4" className="dest-tab">Titan</Link>
                </nav>
                <h2 className="destination-title">Moon</h2>
                <p className="destination-body">See our planet as you&apos;ve never seen it before. A perfect relaxing trip away to help regain perspective and come back frefreshed. While you&apos;re there, take in some history by visitng the Luna 2 and Apollo 11 landing sites.</p>
                <div className="stats">
                    <div className="stats-item">
                        <h6 className="stat-name">Avg. distance</h6>
                        <h4 className="stat-value">384,400 KM</h4>
                    </div>
                    <div className="stats-item">
                        <h6 className="stat-name">Est. travel time</h6>
                        <h4 className="stat-value">3 Days</h4>
                    </div>
                </div>  
            </div>
        </StyledDestination>
    )
}

const StyledDestination = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10rem auto 0;

    .content-left {
        width: 50%;
        padding: 4rem;
        position: relative;
        
        .page-title {
            font-size: var(--size-title-5);
            font-weight: 300;
            margin-bottom: 4rem;
            font-family: var(--ff-body);
            text-transform: uppercase;
            letter-spacing: 2px;
            
            .page-index {
                font-weight: var(--text-medium);
                margin-right: 2rem;
                color: var(--color-white-hover);
            }
        }

        .aster {
            min-width: 300px;
            width: 80%;
            height: auto;
            transform: translateX(20%);
        }
    }

    .content-right {
        width: 40%;
        margin: 0 auto;
        position: relative;
        padding: 3rem;

        .destination-tabs {
            font-size: var(--text-nav);
            font-family: var(--ff-body);
            text-transform: uppercase;
            margin-bottom: 4rem;
            letter-spacing: 1px;

            .dest-tab {
                padding-bottom: 1rem;
                margin-right: 1.5rem;
                border-bottom: 2px solid var(--color-white);

                &:hover,
                &:active {
                    border-bottom: 2px solid inherit;
                }
            }
        }

        .destination-title {
            font-size: var(--size-title-3);
            font-family: var(--ff-title);
            font-weight: var(--text-thin);
            text-transform: uppercase;
            margin: 1rem 0;
        }

        .destination-body {
            font-family: var(--ff-body);
            font-size: var(--text-body);
            line-height: 1.3;
            padding-bottom: 4rem;
            border-bottom: 1px solid var(--color-white-hover);
        }

        .stats {
            display: flex;
            justify-content: space-between;
            padding: 1.5rem 0;

            &-item {
                .stat-name {
                    font-size: var(--size-title-sub);
                    text-transform: uppercase;
                    font-weight: 200;
                    padding-bottom: 1rem;
                }

                .stat-value {
                    font-size: var(--size-title-5);
                    font-weight: 200;
                    font-family: var(--ff-title);
                }
            }
        }
    }

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

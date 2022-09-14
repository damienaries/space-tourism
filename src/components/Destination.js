import { useState } from 'react';
import styled from 'styled-components';
import data from '../data/data.json';

export default function Destination() {
    const destinations = data.destinations;
    const [currentAster, setCurrentAster] = useState(destinations[0]);
    const { name, description, distance, travel } = currentAster;

    const handleClick = (index) => {
        setCurrentAster(destinations[index]);
    }

    return currentAster && (
        <StyledDestination>
            <div className="content-left">
                <h4 className="page-title">
                    <span className="page-index">01</span>
                    Pick your destination
                </h4>
                <img src={`/img/destination/image-${name}.webp`} alt="Aster" className="aster"/>
            </div>
            <div className="content-right">
                <ul className="destination-tabs">
                    {
                        destinations && destinations.map((aster, index) => {
                            return (
                                <span onClick={() => handleClick(index)} className="dest-tab" key={index}>
                                    {aster.name}
                                </span>
                            )
                        })
                    }
                </ul>
               <h2 className="destination-title">{ name }</h2>
                <p className="destination-body">{ description }</p>
                <div className="stats">
                    <div className="stats-item">
                        <h6 className="stat-name">Avg. distance</h6>
                        <h4 className="stat-value">{ distance }</h4>
                    </div>
                    <div className="stats-item">
                        <h6 className="stat-name">Est. travel time</h6>
                        <h4 className="stat-value">{ travel }</h4>
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

        @media only screen and (max-width: 900px){
            padding: 2rem;
            width: 90%;
            margin-top: 1rem;
        }
        
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

            @media only screen and (max-width: 900px){
                transform: translateX(0);
            }

        }
    }

    .content-right {
        width: 40%;
        margin: 0 auto;
        position: relative;
        padding: 3rem;

        @media only screen and (max-width: 900px){
            display: flex;
            flex-direction: column;
            width: 100%;
            padding: 2rem 0;
            width: 100%;
        }


        .destination-tabs {
            font-size: var(--text-nav);
            font-family: var(--ff-body);
            text-transform: uppercase;
            margin-bottom: 4rem;
            letter-spacing: 1px;

            @media only screen and (max-width: 900px){
                width: 100%;
                display: flex;
                justify-content: space-between; 
                font-size: var(--text-nav-large);
                margin-bottom: 1rem;
            }


            .dest-tab {
                padding-bottom: 1rem;
                margin-right: 1.5rem;
                border-bottom: 2px solid var(--color-white);
                cursor: pointer;

                &:hover,
                &:active {
                    border-bottom: 2px solid inherit;
                }

                &::last-child {
                    margin-right: 0;
                }
            }
        }

        .destination-title {
            font-size: var(--size-title-3);
            font-family: var(--ff-title);
            font-weight: var(--text-thin);
            text-transform: uppercase;
            margin: 1rem 0;

            @media only screen and (max-width: 900px){
                font-size: var(--size-title-4);
            }

        }

        .destination-body {
            font-family: var(--ff-body);
            font-size: var(--text-body);
            line-height: 1.3;
            padding-bottom: 4rem;
            border-bottom: 1px solid var(--color-white-hover);
            
            @media only screen and (max-width: 900px){
                width: 100%;
            }

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
        max-height: 100vh;
    }
`;

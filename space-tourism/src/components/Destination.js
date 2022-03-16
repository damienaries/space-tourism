import { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { destinations } from '../data/data.json';

/* 
TODO
    page responsive
    figure out tabs + routing
*/

export default function Destination() {
    let match = useRouteMatch();
    const [currentAster, setCurrentAster] = useState(destinations[0]);
    const { name, description, distance, travel, images } = currentAster;
    const [imageUrl, setImageUrl] = useState(`.${images.webp}`);

    console.log(imageUrl);

    return currentAster && (
        <StyledDestination>
            <div className="content-left">
                <h4 className="page-title">
                    <span className="page-index">01</span>
                    Pick your destination
                </h4>
                <img src={imageUrl} alt="Aster" className="aster"/>
            </div>
            <div className="content-right">
                <ul className="destination-tabs">
                    {
                        destinations && destinations.map((aster, index) => {
                            return (
                                <Link to={`destination/${aster.name.toLowerCase()}`} className="dest-tab" key={index}>{aster.name}</Link>
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

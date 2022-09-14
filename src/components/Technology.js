import { useState } from 'react';
import styled from 'styled-components';
import data from '../data/data.json';

export default function Technology() {
    const technology = data.technology;
    const [currentTech, setCurrentTech] = useState(technology[0]);
    const { name, description } = currentTech;
    const urlName = name.split(' ').join('-').toLowerCase();

    const handleClick = index => {
        setCurrentTech(technology[index]);
    }

    return (
        <StyledTechnology>
            <div className="content-left">
                <h4 className="page-title">
                    <span className="page-index">03</span>
                    Space launch 101
                </h4>
                <div className="tech-tabs">
                    <div className="tab-numbers">
                    {
                        technology && technology.map((t, index) => (
                            <div className="tab-link" key={index} onClick={() => handleClick(index)}>{index + 1}</div>
                        ))
                    }
                    </div>
                    <article className="tab-content">
                        <h6 className="tab-sub">The terminology...</h6>
                        <h4 className="tab-title">{name}</h4>
                        <p className="tab-body">{description}</p>
                    </article>
                </div>
            </div>
            <img src={`/img/technology/image-${urlName}-portrait.jpg`} alt="rocekt img" className="content-right" />
        </StyledTechnology>
    )
}

const StyledTechnology = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10rem auto 0;

    .content-left {
        width: 60%;
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

        .tech-tabs {
            display: flex;
            padding: 1rem;

            .tab-numbers {
                padding: 0 2rem;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;

                .tab-link {
                    font-size: 2.5rem;
                    padding: 1.5rem 2rem;
                    margin: 1rem;
                    border: 1px solid var(--color-white);
                    border-radius: 50%;
                    cursor: pointer;    

                    &:hover {
                        background-color: var(--color-white-hover);
                        color: var(--color-dark);
                        cursor: pointer;
                    }
                }
            }

            .tab-content {
                padding: 2rem 0;

                .tab-sub {
                    font-size: var(--size-title-sub);
                    text-transform: uppercase;
                    font-family: var(--ff-body);
                    letter-spacing: 1px;
                    font-weight: 200;
                }

                .tab-title {
                    font-size: var(--size-title-3);
                    font-family: var(--ff-title);
                    font-weight: var(--text-thin);
                    text-transform: uppercase;

                }

                .tab-body {
                    font-size: var(--text-body);
                    line-height: 1.4;
                }
            }
        }
    }

    .content-right {
        height: auto;
        width: 400px; 
    }
`;

import { useState } from 'react';
import styled from 'styled-components';
import { crew } from '../data/data.json';


export default function Crew() {
    const [crewMember, setCrewMember] = useState(crew[0]);
    const { name, bio, role } = crewMember;
    const urlName = name.split(' ').join('-');

    const handleClick = index => {
        setCrewMember(crew[index]);
    }

    return (
        <StyledCrew>
            <div className="content-left">
                <h4 className="page-title">
                    <span className="page-index">02</span>
                    Meet your crew
                </h4>
                <h3 className="crew-role">{role}</h3>
                <h2 className="crew-name">{name}</h2>
                <p className="crew-bio">
                    {bio}
                </p>
                <div className="page-nav">
                    {
                        crew && crew.map((c, index) => (
                            <div className="dot" onClick={() => handleClick(index)}></div>
                        ))
                    } 
                </div>
            </div>
            <div className="content-right">
                <img src={`/img/crew/image-${urlName}.webp`} alt="crew member" className="crew-photo" />
            </div>
        </StyledCrew>
    )
}

const StyledCrew = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15rem auto 0;

    .content-left {
        width: 60%;
        padding: 4rem 1rem;
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

        .crew-role {
            font-size: var(--size-title-4);
            font-family: var(--ff-title);
            font-weight: var(--text-thin);
            text-transform: uppercase;
            color: var(--color-white-hover);
        }

        .crew-name {
            font-size: var(--size-title-3);
            font-family: var(--ff-title);
            font-weight: var(--text-thin);
            text-transform: uppercase;
            margin: 1rem 0;
        }

        .crew-bio {
            font-family: var(--ff-body);
            font-size: var(--text-body);
            line-height: 1.3;
            padding-bottom: 8rem;
            width: 70%;
        }

        .page-nav {
            display: flex;
            justify-content: flex-start;

            .dot {
                height: 10px;
                width: 10px;
                border-radius: 50%;
                margin-right: 1.5rem;
                background-color: var(--color-white);
                cursor: pointer;
            }
        }
    }

    .content-right {
        width: 40%;
        margin: 0 auto;
        position: relative;

        .crew-photo {
            width: auto;
            height: 80vh;
            margin-left: 5rem;
        }
    }
`;

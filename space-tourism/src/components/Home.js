import styled from 'styled-components';
import bgDesktop from '../assets/home/background-home-desktop.jpg';

export default function Home() {
    return (
        <StyledHome>
            <div className="content">
                <div className="content-left">
                    <h3 className="pre-title">So, you want to travel to</h3>
                    <h1 className="title">space</h1>
                    <p className="post-title">Let&apos;s face it: if you want to go to outer space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we&apos;ll give you a truly out f this world experience! </p>
                </div>
                <div className="content-right">
                    <button className="explore">
                        Explore
                    </button>
                </div>
            </div>
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

    .content {
        width: 80%;
        display: flex;
        bottom: 5rem;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        padding: 5rem 0;
    }

    .content-left {
        width: 50%;
        
        .pre-title {
            font-size: 2rem;
            text-transform: uppercase;
            color: var(--color-blue);
            font-family: var(--ff-body);
        }

        .title {
            font-size: var(--size-title-1);
            font-weight: var(--text-thin);
            font-family: var(--ff-title);
            text-transform: uppercase;
            padding: 2rem 0;
            color: var(--color-white);
        }

        .post-title {
            font-size: var(--text-body);
            padding: 1rem 0 0;
            line-height: 1.5;
            width: 90%;
            color: var(--color-blue);
            font-family: var(--ff-body);
        }
    }

    .content-right {
        width: 50%;
        position: relative;

        .explore {
            height: 23rem;
            width: 23rem;
            border-radius: 50%;
            font-size: 3rem;
            text-transform: uppercase;
            position: absolute;
            bottom: 0;
            right: 4rem;
            transition: all .2s ease;

            &:hover {   
                cursor: pointer;
                outline: 6rem solid var(--color-white-hover);
            }
        }
    }
`
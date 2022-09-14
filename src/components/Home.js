import styled from 'styled-components';

export default function Home() {
    return (
        <StyledHome>
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
        </StyledHome>
    )
}

const StyledHome = styled.div`
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;

        @media only screen and (max-width: 800px){
            flex-direction: column;
        }


    .content-left {
        width: 50%;

        @media only screen and (max-width: 800px) {
            width: 100%;
        }
    
        .pre-title {
            font-size: 2rem;
            text-transform: uppercase;
            color: var(--color-blue);
            font-family: var(--ff-body);

            @media only screen and (max-width: 500px){
                margin-top: 3rem;
            }

        }

        .title {
            font-size: var(--size-title-2);
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

            @media only screen and (max-width: 800px) {
                margin-bottom: 5rem;
            }
        }
    }

    .content-right {
        width: 50%;
        height: 100%;
        text-align: right;

        @media only screen and (max-width: 800px) {
            width: 100%;
            text-align: center;
        }


        .explore {
            height: 25rem;
            width: 25rem;
            border-radius: 50%;
            font-size: 3rem;
            text-transform: uppercase;
            transition: all .3s ease;

            &:hover {   
                cursor: pointer;
                outline: 6rem solid var(--color-white-hover);
            }

            @media only screen and (max-width: 500px){
                height: 20rem;
                width: 20rem;
            }
        }
    }
`
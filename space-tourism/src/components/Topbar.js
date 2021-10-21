import { Link } from 'react-router-dom';
import Logo from '../logo.svg';
import styled from 'styled-components';

export default function Topbar() {
    return (
        <StyledBar>
            <img src={Logo} alt="Logo" className="logo" />
            <div className="hr"></div>
            <nav className="main-nav">
              <Link to='/' className="main-nav-link">
                <span className="main-nav-link-index">00</span>
                <span className="main-nav-link-name">home</span>
              </Link>
              <Link to='/destination' className="main-nav-link">
                <span className="main-nav-link-index">01</span>
                <span className="main-nav-link-name">destination</span>
              </Link>
              <Link to='/crew' className="main-nav-link">
                <span className="main-nav-link-index">02</span>
                <span className="main-nav-link-name">crew</span>
              </Link>
              <Link to='/technology' className="main-nav-link">
                <span className="main-nav-link-index">03</span>
                <span className="main-nav-link-name">technology</span>
              </Link>
            </nav>
          </StyledBar>
    )
}

const StyledBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    background: transparent;
    position: absolute;
    margin-top: 3rem;
    padding: 1rem 0 1rem 3rem;

    .logo {
        margin-left: 2rem;
    }

    .hr {
        border-top: 2px solid rgba(255, 255, 255, .2);
        transform: translate(4rem, 1px);
        width: 50%;
        z-index: 5;
    }

    .main-nav {
        width: 60%;
        padding: 4rem 7rem;
        right: 0;
        backdrop-filter: blur(45px);
        text-align: center;

        &-link {
            color: #fff;
            font-size: 1.6rem;
            text-decoration: none;
            margin: 0 1rem;
            text-transform: uppercase;
            padding: 4rem .5rem;

            &-index {
                margin-right: .5rem;
            }

            &:hover {
                border-bottom: 2px solid #fff;
            }
        }
    }
`

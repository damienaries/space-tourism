import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.svg';
import styled from 'styled-components';
import useWindowDimensions from '../hooks/useWindowDimensions';

export default function Topbar() {
  const { width } = useWindowDimensions();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(prevState => !prevState);
    setTimeout(() => {
      setMobileNavOpen(false)
    }, 10000);
  }

    return (
        <StyledBar>
            <img src={Logo} alt="Logo" className="logo" />
            <div className="hr"></div>
            {
              width < 800 ? (
                <div className="hamburger" onClick={toggleMobileNav}>
                  |||
                </div>
              ) : (
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
              )
            }
            <div className="mobile-nav" style={{ top: mobileNavOpen ? '50%' : '-1000%', left: mobileNavOpen ? '50%' : 0}}>
              <h3>This is the mobile navigation modal placeholder</h3>
            </div>
          </StyledBar>
    )
}

const StyledBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 90px;
    background: transparent;
    position: fixed;
    top: 3rem;
    padding: 1rem 0 1rem 3rem;

    .logo {
        margin-left: 2rem;
    }

    .hr {
        border-top: 2px solid rgba(255, 255, 255, .2);
        transform: translate(4rem, 1px);
        width: 50%;
        z-index: 5;

        @media only screen and (max-width: 800px) {
          display: none;
        }

    }
    
    .hamburger {
      font-size: 4rem;
      transform: rotate(90deg);
      margin-right: 2rem;
      
      &:hover{
        cursor: pointer;
      }
    }

    .main-nav {
        width: 60%;
        padding: 4rem 7rem;
        right: 0;
        backdrop-filter: blur(40px);
        text-align: center;

        &-link {
            color: var(--color-white);
            font-size: var(--text-nav);
            font-family: var(--ff-body);
            text-decoration: none;
            margin: 0 1rem;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            padding: 4rem .5rem;

            &-index {
              margin-right: .75rem;
              font-weight: var(--text-thick);
            }

            &:hover {
              border-bottom: 3px solid var(--color-white-hover);
            }

            &:active {
              border-bottom: 3px solid var(--color-white);
            }
        }
    }

    .mobile-nav {
      position: absolute;
      transform: translate(-50%, -50%);
      transition: all .3s ease-in;
    }
`

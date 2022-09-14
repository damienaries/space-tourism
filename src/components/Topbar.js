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
    }, 5000);
  }

    return (
        <StyledBar>
            <Link to="/">
              <img src={Logo} alt="Logo" className="logo" />
            </Link>
            <div className="hr"></div>
            {
              width < 800 ? (
                <div className={`hamburger ${mobileNavOpen ? 'open' : ''}`} onClick={toggleMobileNav}>
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
            <nav className="mobile-nav" style={{ display: mobileNavOpen ? 'flex' : 'none'}}>
              <Link to='/' className="main-nav-link mobile" onClick={toggleMobileNav}>
                <span className="main-nav-link-index">00</span>
                <span className="main-nav-link-name">home</span>
              </Link>
              <Link to='/destination' className="main-nav-link mobile" onClick={toggleMobileNav}>
                <span className="main-nav-link-index">01</span>
                <span className="main-nav-link-name">destination</span>
              </Link>
              <Link to='/crew' className="main-nav-link mobile" onClick={toggleMobileNav}>
                <span className="main-nav-link-index">02</span>
                <span className="main-nav-link-name">crew</span>
              </Link>
              <Link to='/technology' className="main-nav-link mobile" onClick={toggleMobileNav}>
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
    height: 90px;
    background: transparent;
    position: fixed;
    top: 0;
    z-index: 100;
    padding: 1rem 0;

    .logo {
        margin-left: 2rem;
        z-index: 1000;
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
      z-index: 1000;
      color: var(--color-white);
      
      &:hover{
        cursor: pointer;
        color: var(--color-white-hover);
      }

      & .open {
        color: var(--color-blue);
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

            &.mobile {
              font-size: var(--size-title-5);
            }

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
      left: 0;
      top: 0;
      z-index: 100;
      transition: all .5s ease-in;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      width: 100%;
      background-color: var(--color-dark);
      border: 1px solid red;
    }
`

import { useLocation } from 'react-router-dom';

import homeDesktop from '../assets/home/background-home-desktop.jpg';
import homeTablet from '../assets/home/background-home-tablet.jpg';
import homeMobile from '../assets/home/background-home-mobile.jpg';

import destinationDesktop from '../assets/destination/background-destination-desktop.jpg';
import destinationTablet from '../assets/destination/background-destination-tablet.jpg';
import destinationMobile from '../assets/destination/background-destination-mobile.jpg';

import crewDesktop from '../assets/crew/background-crew-desktop.jpg';
import crewTablet from '../assets/crew/background-crew-tablet.jpg';
import crewMobile from '../assets/crew/background-crew-mobile.jpg';

import technologyDesktop from '../assets/technology/background-technology-desktop.jpg';
import technologyTablet from '../assets/technology/background-technology-tablet.jpg';
import technologyMobile from '../assets/technology/background-technology-mobile.jpg';

const BackgroundImage = () => {
    const location = useLocation();
    const { innerWidth } = window;
    let currentBg;

    // if location === '/' => if width < 500 => mobile ELSE if width < 800 render tablet ELSE desktop
    if (location.pathname === '/') {
        if (innerWidth < 500) {
            currentBg = homeMobile;
        } else if (innerWidth < 800) {
            currentBg = homeTablet;
        } else {
            currentBg = homeDesktop;
        }
    } else if (location.pathname === '/destination') {
        if (innerWidth < 500) {
            currentBg = destinationMobile;
        } else if (innerWidth < 800) {
            currentBg = destinationTablet;
        } else {
            currentBg = destinationDesktop;
        }
    } else if (location.pathname === '/crew') {
        if (innerWidth < 500) {
            currentBg = crewMobile;
        } else if (innerWidth < 800) {
            currentBg = crewTablet;
        } else {
            currentBg = crewDesktop;
        }
    } else if (location.pathname === '/technology') {
        if (innerWidth < 500) {
            currentBg = technologyMobile;
        } else if (innerWidth < 800) {
            currentBg = technologyTablet;
        } else {
            currentBg = technologyDesktop;
        }
    }
    
    return currentBg;
}

export default BackgroundImage;
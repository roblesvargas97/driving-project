import React from 'react';
import { FaBars } from "react-icons/fa";
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import HeaderLogic from './HeaderLogic';
import { useLocation } from 'react-router-dom';
import './Header.scss'
const Header = () => {

    const location = useLocation();

    const {state , onClickButtonMenu} = HeaderLogic();

    return (
        <header className='Header'>
            <button className='Header__button' 
                    onClick={onClickButtonMenu}
                    disabled={location.pathname === "/test"}
            >
                <FaBars size='50px'/>
            </button>
            <Logo/>
            {
                state.navState &&
                <NavBar/>
                
            }
        </header>
    );
}

export default Header;
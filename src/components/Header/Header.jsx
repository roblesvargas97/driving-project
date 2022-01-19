import React from 'react';
import { FaBars } from "react-icons/fa";
import Logo from '../Logo/Logo';
import './Header.scss'
const Header = () => {
    return (
        <header className='Header'>
            <button className='Header__button'>
                <FaBars size='50px'/>
            </button>
            <Logo/>
        </header>
    );
}

export default Header;
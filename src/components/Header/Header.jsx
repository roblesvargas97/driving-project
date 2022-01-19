import React from 'react';
import Logo from '../Logo/Logo';
import './Header.scss'
const Header = () => {
    return (
        <header>
            <button>Toggle</button>
            <Logo/>
        </header>
    );
}

export default Header;
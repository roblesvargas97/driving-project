import React from 'react';
import NavBarLogic from './NavBarLogic';
import { Link } from 'react-router-dom';
import {FaHome , FaBookReader , FaPencilAlt , FaUsers} from 'react-icons/fa';
import {AiFillCloseCircle} from 'react-icons/ai'
import './NavBar.scss'

const NavBar = () => {

    const { state , onClickButtonCloseMenu , onClickButtonCloseMenuDiv} = NavBarLogic();

    return (
        <div className='Container-Menu-Nav' onClick={e => onClickButtonCloseMenuDiv(e)}>
            <section className='Menu-Nav' >
                <h1>Driving</h1>
                <img src="https://i.imgur.com/QknyXTS.png" alt="Driving-logo" />
                <nav className='Nav'>
                    <Link to='#' >
                        <FaHome size='30px'/> 
                        Inicio
                    </Link>
                    <Link to='#' >
                        <FaBookReader size='30px'/>
                        Guia
                    </Link>
                    <Link to='#' >
                        <FaPencilAlt size='30px'/>
                        Prueba o test
                    </Link>
                    <Link to='#' >
                        <FaUsers size='30px'/>
                        Sobre Nosotros
                    </Link>
                </nav>
            </section>
            <button type='button' className='Container-Menu-Nav__button-close' onClick={onClickButtonCloseMenu}>
                <AiFillCloseCircle size='50px'/>
            </button>
        </div>
    );
}

export default NavBar;
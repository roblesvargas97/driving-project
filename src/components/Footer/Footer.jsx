import React from 'react';
import {FaTwitter , FaInstagram , FaFacebook} from 'react-icons/fa';
import './Footer.scss'

const Footer = () => {
    return (
        <footer className='Footer'>
            <div className='Footer__socialMedia'>
                <a href="#">
                    <FaTwitter size='30px' color='#fff' />
                </a>
                <a href="#">
                    <FaInstagram size='30px' color='#fff' />
                </a>
                <a href="#">
                    <FaFacebook size='30px' color='#fff' />
                </a>
            </div>
            <p>Desarrollado por Jesus Uriel Robles Vargas</p>;
        </footer>
    );
}

export default Footer;
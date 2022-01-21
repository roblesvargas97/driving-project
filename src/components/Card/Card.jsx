import React from 'react';
import './Card.scss'
import {FaSignInAlt} from 'react-icons/fa'

const Card = (props) => {
    return (
        <div className='Card' >
            <img src={props.image} alt="imagen de referencia" />
            <p>{props.text}</p>
            {props.button && <button type='button'>Ir ahora <FaSignInAlt/></button>}
        </div>
    );
}

export default Card;
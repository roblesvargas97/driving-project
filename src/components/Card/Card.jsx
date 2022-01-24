import React from 'react';
import './Card.scss'
import {FaSignInAlt} from 'react-icons/fa'

const Card = (props) => {
    return (
        <div className='Card' >
            <img className='Card__img' src={props.image} alt="imagen de referencia" />
            <p>{props.text}</p>
            <img className='Card__ornament' src="https://i.imgur.com/m69ARJX.png" alt="adorno" />
            {props.button && <button type='button'>Ir ahora <FaSignInAlt/></button>}
        </div>
    );
}

export default Card;
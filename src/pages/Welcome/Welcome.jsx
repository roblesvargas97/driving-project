import React from 'react';
import WelcomeLogic from './WelcomeLogic';
import {FaRegCheckCircle} from 'react-icons/fa';
import './Welcome.scss';

const Welcome = () => {

    const {state , onClickToTest } = WelcomeLogic();

    return (
        <section className='Welcome'>
            <h1 className='Welcome__Title'>
                {`!Hola Bienvenido ${state.nameUser}¡`} 
            </h1>
            <h2 className='Welcome__instruction'>
                -Presentaras 20 preguntas.
            </h2>
            <h2 className='Welcome__instruction'>
                -Al final te mostraremos tus resultados.
            </h2>
            <img 
                className='Welcome__image' 
                src="https://i.imgur.com/L1iCeus.png" 
                alt="Persona Preparandose" 
            />
            <button className='Welcome__button' type='button' onClick={onClickToTest}>
                Empezar
                <FaRegCheckCircle/>
            </button>
        </section>
    );
}

export default Welcome;
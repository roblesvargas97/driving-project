import React from 'react';
import WelcomeLogic from './WelcomeLogic';
import {FaRegCheckCircle} from 'react-icons/fa';
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
            <img src="https://i.imgur.com/l7dIKow.png" alt="Persona Preparandose" />
            <button type='button' onClick={onClickToTest}>
                Empezar
                <FaRegCheckCircle/>
            </button>
        </section>
    );
}

export default Welcome;
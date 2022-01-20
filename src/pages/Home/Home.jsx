import React from 'react';
import '../../sassStyles/__tipography.scss'
import './Home.scss'

const Home = () => {
    return (
        <section className='Home'>
            <h1>!Realiza tu test del Reglamento de Tránsito¡</h1>
            <h2>Ingresa con tu nombre</h2>
            <form className='Home__form'>
                <input className='form__input' type="text" placeholder='Nombre'/>
                <input className='form__submit' type="submit" value=''/>
            </form>
        </section>
    );
}

export default Home;
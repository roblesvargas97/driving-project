import React from 'react';
import Card from '../../components/Card/Card';
import HomeLogic from './HomeLogic';
import '../../sassStyles/__tipography.scss'
import './Home.scss'
import initial from '../../initial';

const Home = () => {

    const initialState = initial();
    const {info} = HomeLogic();
    

  

    return (
        <section className='Home'>
            <h1>!Realiza tu test del Reglamento de Tránsito¡</h1>
            <h2>Ingresa con tu nombre</h2>
            <form className='Home__form'>
                <input className='form__input' type="text" placeholder='Nombre'/>
                <input className='form__submit' type="submit" value=''/>
            </form>
            <div className='Home__Cards-container'>
                <Card 
                    image={info[0].image}
                    text={info[0].text}
                    button={info[0].button}    
                />
                <Card
                    image={info[1].image}
                    text={info[1].text}
                    button={info[1].button} 
                />
            </div>
        </section>
    );
}

export default Home;
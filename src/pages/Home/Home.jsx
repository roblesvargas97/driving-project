import React from 'react';
import Card from '../../components/Card/Card';
import HomeLogic from './HomeLogic';
import { useForm } from 'react-hook-form';
import '../../sassStyles/__tipography.scss'
import './Home.scss'


const Home = () => {

    const {register , handleSubmit , formState: {errors} ,} = useForm();
    
    const {info ,onSubmit , state } = HomeLogic();
    
    
    return (
        <section className='Home'>
            <h1>!Realiza tu test del Reglamento de Tránsito¡</h1>
            <h2>Ingresa con tu nombre</h2>
            <form className='Home__form' onSubmit={handleSubmit(onSubmit)}>
                <input 
                    className='form__input' 
                    type="text" 
                    placeholder='Nombre' 
                    id='Name'
                    {
                        ...register('name' , {
                            required: {
                                value:true,
                                message: 'El campo es requerido'
                            }
                        })
                    }
                />
                {errors.name && 
                    <span className='form__error'>{errors.name.message}</span>
                }
                <p>{state.nameUser}</p>
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
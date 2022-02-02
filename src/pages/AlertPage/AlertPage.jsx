import React from 'react';
import './AlertPage.scss';
import { useNavigate } from 'react-router-dom'; 

const AlertPage = ({message , image}) => {

    const history = useNavigate();

    const onCLickButtonAlertPage = () => {
        history('/');
    }

    return (
        <section className='AlertPage'>
            <h1>{message}</h1>
            <img src={image} alt="" />
            <button type='button' onClick={onCLickButtonAlertPage}>Ir a Inicio</button>
        </section>
    );
}

export default AlertPage;
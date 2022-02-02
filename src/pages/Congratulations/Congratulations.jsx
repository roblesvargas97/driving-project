import React from 'react';
import Context from '../../Context/Context';
import { useNavigate } from 'react-router-dom';
import './Congratulations.scss'
import {AiOutlineReload} from 'react-icons/ai';
const Congratulations = () => {

    const {state , onSetCurrentQuestion , onRestoreAnswersUserArray} = React.useContext(Context);

    const history = useNavigate();

    const correctQuestionsNumber = state.correctQuestionsNumber;
    
    const onCLickButtonRepeat = () => {
        history('/test');
        onSetCurrentQuestion(0);
        onRestoreAnswersUserArray();
    }

    return (
        <section className='Congratulations'>
            <h1>{correctQuestionsNumber>=15? '!Felicidades¡' : '!No te desanimes¡'}</h1>
            <h2>{`Has conseguido ${correctQuestionsNumber} de 20 aciertos.`}</h2>
            <img 
            src={correctQuestionsNumber>=15? 
                'https://i.imgur.com/E3L2WbQ.png':
                'https://i.imgur.com/88oa6j6.png'}>    
            </img>
            <button type='button' onClick={onCLickButtonRepeat}>Repetir <AiOutlineReload color='#fff' /></button>
        </section>
    );
}

export default Congratulations;
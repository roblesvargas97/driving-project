import React from 'react';
import ButtonsAnswersLogic from './ButtonsAnswersLogic';
import {BsCircle , BsCheckCircle} from 'react-icons/bs';
import './ButtonsAnswers.scss';
const ButtonsAnswers = ({currentQuestion}) => {

    const {state , onClickButtonQuestion} = ButtonsAnswersLogic();

    const answers = currentQuestion.options;


    return (
        <React.Fragment>
            <button 
                className='ButtonsAnswers' 
                onClick={(e) => onClickButtonQuestion(answers[0].answer ,e)}
            >  
                <div 
                    className='ButtonAnswer__Question'>
                        <p>{answers[0].answer}</p>
                </div>
                <div className='ButtonAnswer__icon'>
                    <BsCheckCircle color='#fff' size='30px'/>
                </div>
            </button>
            <button 
                className='ButtonsAnswers' 
                onClick={(e) => onClickButtonQuestion(answers[1].answer,e)}
            >  
                <div 
                    className='ButtonAnswer__Question'>
                        <p>{answers[1].answer}</p>
                </div>
                <div className='ButtonAnswer__icon'>
                    <BsCheckCircle color='#fff' size='30px'/>
                </div>
            </button>
            <button 
                className='ButtonsAnswers' 
                onClick={(e) => onClickButtonQuestion(answers[2].answer,e)}
            >  
                <div 
                    className='ButtonAnswer__Question'>
                        <p>{answers[2].answer}</p>
                </div>
                <div className='ButtonAnswer__icon'>
                    <BsCheckCircle color='#fff' size='30px'/>
                </div>
            </button>
        </React.Fragment>
    );
}

export default ButtonsAnswers;
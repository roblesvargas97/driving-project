import React from 'react';
import ButtonsAnswersLogic from './ButtonsAnswersLogic';

const ButtonsAnswers = ({currentQuestion}) => {

    const {state , onClickButtonQuestion} = ButtonsAnswersLogic();

    const answers = currentQuestion.options;
    
    console.log(state.answersUserArray);

    return (
        <React.Fragment>
            <button 
                className='ButtonsAnswers' 
                onClick={() => onClickButtonQuestion(answers[0].answer)}
            >  
                <div 
                    className='ButtonAnswer__Question'>
                        <p>{answers[0].answer}</p>
                </div>
                <div className='ButtonAnswer__icon'>

                </div>
            </button>
            <button 
                className='ButtonsAnswers' 
                onClick={() => onClickButtonQuestion(answers[1].answer)}
            >  
                <div 
                    className='ButtonAnswer__Question'>
                        <p>{answers[1].answer}</p>
                </div>
                <div className='ButtonAnswer__icon'>

                </div>
            </button>
            <button 
                className='ButtonsAnswers' 
                onClick={() => onClickButtonQuestion(answers[2].answer)}
            >  
                <div 
                    className='ButtonAnswer__Question'>
                        <p>{answers[2].answer}</p>
                </div>
                <div className='ButtonAnswer__icon'>

                </div>
            </button>
        </React.Fragment>
    );
}

export default ButtonsAnswers;
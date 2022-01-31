import React from 'react';
import ComponentTestLogic from './ComponentTestLogic';
import ButtonsAnswers from '../../components/ButtonsAnswers/ButtonsAnswers';
import {BsFillCaretRightFill , BsFillCaretLeftFill , BsCheckCircleFill} from 'react-icons/bs';
import './ComponentTest.scss'

const ComponentTest = () => {
    
    const {
        state,
        onClickNextQuestion,
        onClickPreviousQuestion, 
        pickedQuestions, 
        onValidate 
    } = ComponentTestLogic();

    const userAnswers = state.answersUserArray;
    const currentQuestion = pickedQuestions[state.currentQuestion];

    
    return (
        <section className='Test'>
            <h1>Test</h1>
            <div className='Test__questions'>
                <h2>{currentQuestion.question}</h2>
                <div className='questions__container'>
                    <ButtonsAnswers currentQuestion={currentQuestion}/>
                </div> 
            </div>
            <div className='Test__buttons'>
                <button 
                    type='button' 
                    className='Test__buttons__prev'
                    onClick={onClickPreviousQuestion} 
                    disabled={state.currentQuestion === 0}>
                        <BsFillCaretLeftFill color='#fff' size='30px'/>
                        Anterior
                </button>
                {
                    state.currentQuestion !== 19 &&
                    <button 
                        type='button' 
                        className='Test__buttons__next'
                        onClick={onClickNextQuestion} 
                        disabled={state.currentQuestion === 19 || state.stateClick === false }>
                        Siguiente
                        <BsFillCaretRightFill color='#fff' size='30px'/>
                    </button>
                }
                {
                    state.currentQuestion === 19 &&
                    <button 
                        type='button' 
                        className='Test__buttons__validate'
                        onClick={() => onValidate(userAnswers , pickedQuestions)} >
                        Validar
                        <BsCheckCircleFill color='#fff' size='30px'/>
                </button>
                }
            </div>
        </section>
    );
}

export default ComponentTest;
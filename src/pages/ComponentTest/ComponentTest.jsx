import React from 'react';
import ComponentTestLogic from './ComponentTestLogic';
import ButtonsAnswers from '../../components/ButtonsAnswers/ButtonsAnswers';


const ComponentTest = () => {
    
    const {
        state,
        onNextQuestion,
        onPreviousQuestion, 
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
                <button type='button' onClick={onPreviousQuestion} disabled={state.currentQuestion === 0}>
                    Anterior
                </button>
                {
                    state.currentQuestion !== 19 &&
                    <button type='button' onClick={onNextQuestion} disabled={state.currentQuestion === 19 || state.stateClick === false }>
                    siguiente
                    </button>
                }
                {
                    state.currentQuestion === 19 &&
                    <button type='button' onClick={() => onValidate(userAnswers , pickedQuestions)} >
                    Validar
                </button>
                }
            </div>
        </section>
    );
}

export default ComponentTest;
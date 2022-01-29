import React from 'react';
import ComponentTestLogic from './ComponentTestLogic';
import ButtonsAnswers from '../../components/ButtonsAnswers/ButtonsAnswers';
import QuestionsGenerator from '../../assets/QuestionsGenerator';

const ComponentTest = () => {
    
    const {state ,onNextQuestion,onPreviousQuestion , pickRandomQuestions , pickedQuestions } = ComponentTestLogic();

    const userAnswers = state.answersUserArray;
    const currentQuestion = pickedQuestions[state.currentQuestion];

    const onValidate = (arrayAnswers , arrayQuestions) =>{
        
        let correctAnswers =0;
        let wrongAnswers=0;

        const arrayQuestionsFiltered = arrayQuestions.map(
            element => element.options.filter(
                subElement =>  subElement.correct === true));
    
        for(let i=0; i<arrayAnswers.length ; i++){
            if(arrayAnswers[i] === arrayQuestionsFiltered[i][0].answer ){
                correctAnswers++;
            }else{
                wrongAnswers++;
            }
        }         
        
    }
    
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
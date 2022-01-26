import React from 'react';
import ComponentTestLogic from './ComponentTestLogic';
import Context from '../../Context/Context';

const {pickRandomQuestions , ArrayQuestions} = ComponentTestLogic();

const {FinalsQuestions} = pickRandomQuestions(ArrayQuestions.length , 20);

const ComponentTest = () => {

    const {state , onNextQuestion , onPreviousQuestion} = React.useContext(Context);

    return (
        <section className='Test'>
            <h1>Test</h1>

            
            <div className='Test__questions'>

            <h2>{FinalsQuestions[state.currentQuestion].question}</h2>
            

            </div>
             

            <div className='Test__buttons'>
                <button type='button' onClick={onPreviousQuestion} disabled={state.currentQuestion === 0}>
                    Anterior
                </button>

                <button type='button' onClick={onNextQuestion} disabled={state.currentQuestion === 19}>
                    siguiente
                </button>
            </div>

        </section>
    );
}

export default ComponentTest;
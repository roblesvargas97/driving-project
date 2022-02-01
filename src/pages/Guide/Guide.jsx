import React from 'react';
import GuideLogic from './GuideLogic';
import './Guide.scss';

const Guide = () => {
    
    const { filteredQuestionsWithAnswer} = GuideLogic();
    const questions = filteredQuestionsWithAnswer();

    return (
        <section className='Guide'>
            <h1 className='Guide__title'>Guia</h1>
            <div className='Guide__questions-container'>
                {
                    questions.map((element , index) => (
                        <div className='Guide__questions-container__question' key={index}>
                            <h2>{`${index+1}: ${element.question}`}</h2>
                            <p>{`R: ${element.answer}`}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Guide;
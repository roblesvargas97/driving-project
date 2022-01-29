import React from 'react';
import DBquestions from '../../assets/DBquestions';
import Context from '../../Context/Context';
import QuestionsGenerator from '../../assets/QuestionsGenerator';

const ComponentTestLogic = () => {

    const { ArrayQuestions } = DBquestions();

    const {state , onNextQuestion , onPreviousQuestion } = React.useContext(Context);
    
    const {selectedQuestions} = QuestionsGenerator();

    const pickedQuestions = selectedQuestions();

        return{
            state ,
            onNextQuestion,
            onPreviousQuestion,
            ArrayQuestions,
            pickedQuestions,
          
        }

}

export default ComponentTestLogic;
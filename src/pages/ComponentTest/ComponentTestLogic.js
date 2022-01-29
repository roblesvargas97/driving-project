import React from 'react';
import DBquestions from '../../assets/DBquestions';
import Context from '../../Context/Context';

const ComponentTestLogic = () => {

    const { ArrayQuestions } = DBquestions();

    const {state , onNextQuestion , onPreviousQuestion } = React.useContext(Context);
    

        return{
            state ,
            onNextQuestion,
            onPreviousQuestion,
            ArrayQuestions,
          
        }

}

export default ComponentTestLogic;
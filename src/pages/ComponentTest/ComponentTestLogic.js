import React from 'react';
import DBquestions from '../../assets/DBquestions';
import Context from '../../Context/Context';
import QuestionsGenerator from '../../assets/QuestionsGenerator';

const ComponentTestLogic = () => {

    const { ArrayQuestions } = DBquestions();

    const {state , onNextQuestion , onPreviousQuestion } = React.useContext(Context);
    
    const {selectedQuestions} = QuestionsGenerator();

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

    const pickedQuestions = selectedQuestions();

        return{
            state ,
            onNextQuestion,
            onPreviousQuestion,
            ArrayQuestions,
            pickedQuestions,
            onValidate,
          
        }

}

export default ComponentTestLogic;
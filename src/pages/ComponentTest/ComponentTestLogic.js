import React from 'react';
import DBquestions from '../../assets/DBquestions';
import Context from '../../Context/Context';
import QuestionsGenerator from '../../assets/QuestionsGenerator';
import { useNavigate } from 'react-router-dom';


const ComponentTestLogic = () => {

    const { ArrayQuestions } = DBquestions();

    const {state , onNextQuestion , onPreviousQuestion , onCorrectQuestionsNumber ,onSetCurrentQuestion } = React.useContext(Context);

    const history = useNavigate();
    
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
        onCorrectQuestionsNumber(correctAnswers);
        history('/congratulations');
    }

    const onClickNextQuestion = () => {
        onNextQuestion();
        const buttons=[...document.querySelectorAll('button.ButtonsAnswers')];
        for(let i=0 ; i<buttons.length ; i++){
            buttons[i].classList.remove('--active');
        }
    }

    const onClickPreviousQuestion = () => {
        onPreviousQuestion();
        const buttons=[...document.querySelectorAll('button.ButtonsAnswers')];
        for(let i=0 ; i<buttons.length ; i++){
            buttons[i].classList.remove('--active');
        }
    }

    const pickedQuestions = selectedQuestions();

        return{
            state ,
            onClickNextQuestion,
            onClickPreviousQuestion,
            ArrayQuestions,
            pickedQuestions,
            onValidate,
            onSetCurrentQuestion,
          
        }

}

export default ComponentTestLogic;
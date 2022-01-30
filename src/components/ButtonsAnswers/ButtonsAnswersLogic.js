import Context from "../../Context/Context";
import React from 'react';


const ButtonsAnswersLogic = () => {
    
    const {state , onStateClick , onAddUserAnswersArray} = React.useContext(Context);
    
    const currentQuestion = state.currentQuestion;

    React.useEffect(()=> {
        
        onStateClick(false);

        const buttonsParagraph=[...document.querySelectorAll('.ButtonAnswer__Question > p')];
        const answersUserArray = state.answersUserArray;

        for(let i=0 ; i<buttonsParagraph.length ; i++){

            if(buttonsParagraph[i].textContent === answersUserArray[state.currentQuestion] ){
                buttonsParagraph[i].parentElement.parentElement.classList.add('--active');
            }

        }
        
    },[state.currentQuestion])

    const  onClickButtonQuestion = (answer ,e) => {

        
        if(!state.answersUserArray[currentQuestion]){
            
            onAddUserAnswersArray([...state.answersUserArray , answer])
            
        }else{
            
            const currentArray = state.answersUserArray;
            currentArray[currentQuestion] = answer;
            onAddUserAnswersArray(currentArray);
            
        }
        onStateClick(true);
        
        const buttons=[...document.querySelectorAll('button.ButtonsAnswers')];
        for(let i=0 ; i<buttons.length ; i++){
            buttons[i].classList.remove('--active');
        }
        
        const activeButton = e.target.classList.add('--active');
       
    } 

    
    return {
        onClickButtonQuestion,
        state

    };
}

export default ButtonsAnswersLogic;
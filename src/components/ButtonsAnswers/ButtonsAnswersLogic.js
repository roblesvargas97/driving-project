import Context from "../../Context/Context";
import React from 'react';


const ButtonsAnswersLogic = () => {
    
    const {state , onStateClick , onAddUserAnswersArray} = React.useContext(Context);
    
    const currentQuestion = state.currentQuestion;
    
    // React.useEffect(()=> {
    //     onStateClick(false);
    // },[state.currentQuestion])

    const  onClickButtonQuestion = (answer) => {

        if(!state.answersUserArray[currentQuestion]){

            onAddUserAnswersArray([...state.answersUserArray , answer])

        }else{

            const currentArray = state.answersUserArray;
            currentArray[currentQuestion] = answer;
            onAddUserAnswersArray(currentArray);

        }
        onStateClick(true);
        
    } 

    
    return {
        onClickButtonQuestion,
        state

    };
}

export default ButtonsAnswersLogic;
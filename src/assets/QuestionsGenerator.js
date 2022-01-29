import React from 'react';
import DBquestions from './DBquestions';

const QuestionsGenerator = () => {
    
    const {ArrayQuestions} = DBquestions();

    const pickRandomQuestions =(totalQuestions , ouputQuestions ) =>{

        let arr = [];
    
        for(let i = 0 ; i<= totalQuestions ; i++){
            arr.push(i);
        }
    
        let result = [];
    
        for (let i = 1; i <= ouputQuestions; i++) {
            const random = Math.floor(Math.random() * (totalQuestions - i));
            result.push(arr[random]);
            arr[random] = arr[totalQuestions - i];
        }
    
        let FinalsQuestions = [];
    
        for (let i = 0; i < result.length; i++) {
            FinalsQuestions.push(ArrayQuestions[result[i]]);
        }
    
        return FinalsQuestions;
       
    }
    
    const selectedQuestions = () => {
        
        
        const randomQuestions = React.useMemo(()=> pickRandomQuestions(ArrayQuestions.length , 20) , []);
        return randomQuestions;
    
    }
    
    
    return {
        selectedQuestions,
    };
}

export default QuestionsGenerator;
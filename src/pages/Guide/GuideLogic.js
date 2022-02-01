import React from 'react';
import DBquestions from '../../assets/DBquestions';

const GuideLogic = () => {
    const {ArrayQuestions} = DBquestions();

    const filteredQuestionsWithAnswer = () => {

        const newArray = [];

        const arrayQuestionsFiltered = ArrayQuestions.map(
            (element , index) => {

                newArray.push({
                    question : element.question,
                });

                element.options.filter((subElement) => {

                    if(subElement.correct===true){
                        newArray[index]['answer'] = subElement.answer;
                    }

                })
            });

        return newArray;
    }

    
    return {
        filteredQuestionsWithAnswer,

    };
}

export default GuideLogic;
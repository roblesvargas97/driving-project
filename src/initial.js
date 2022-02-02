import React from 'react';

const initial = ()=>{

    const initialState = {
        nameUser: '',
        navState: false,
        currentQuestion: 0,
        stateClick: false,
        answersUserArray: [],
        correctQuestionsNumber: 0,
        testStatus: false,
    }

    const [state , dispatch ] = React.useReducer(reducer , initialState);

    const onAddName = (value) => dispatch({
        type:'ADDNAME',
        payload: value,
    });

    const onToggleNav = () => dispatch({
        type: 'TOGGLENAV',
    });

    const onSetCurrentQuestion = (value) => dispatch({
        type: 'SETCURRENTQUESTION',
        payload: value,
    })

    const onNextQuestion = () => dispatch({
        type: 'NEXTQUESTION'
    });

    const onPreviousQuestion = () => dispatch({
        type: 'PREVIOUSQUESTION'
    });

    const onStateClick = (value) => dispatch({
        type: 'STATECLICK',
        payload: value,
    });

    const onAddUserAnswersArray = (value) => dispatch({
        type: 'ADDUSERANSWERSARRAY',
        payload: value,
    })
   
    const onCorrectQuestionsNumber = (value) => dispatch({
        type: 'ADDCORRECTQUESTIONSNUMBER',
        payload: value,
    })
    
    const onAddTestStatus = () => dispatch({
        typeof: 'ADDTESTSTATUS',
        payload: value,
    })

    function reducer(state , action) {
        switch (action.type) {
            case 'ADDNAME':
                return {
                    ...state,
                    nameUser: action.payload,
                }
            case 'TOGGLENAV':
                return {
                    ...state,
                    navState: !state.navState,
                }
            case 'SETCURRENTQUESTION':
                return{
                    ...state,
                    currentQuestion: action.payload,
                }
            case 'NEXTQUESTION':
                return{
                    ...state,
                    currentQuestion: state.currentQuestion +1,
                }
            case 'PREVIOUSQUESTION':
                return{
                    ...state,
                    currentQuestion: state.currentQuestion -1,
                }
            case 'STATECLICK':
                return{
                    ...state,
                    stateClick: action.payload,
                }
            case 'ADDUSERANSWERSARRAY':
                return{
                    ...state,
                    answersUserArray: action.payload,
                }
            case 'ADDCORRECTQUESTIONSNUMBER':
                return{
                    ...state,
                    correctQuestionsNumber: action.payload,
                }
            case 'ADDTESTSTATUS':
                return{
                    ...state,
                    testStatus: action.payload,
                }
            default:
                return state; 
        }
    }

    
    return{
        state,
        onAddName,
        onToggleNav,
        onNextQuestion,
        onPreviousQuestion,
        onStateClick,
        onAddUserAnswersArray,
        onCorrectQuestionsNumber,
        onAddTestStatus,
        onSetCurrentQuestion,
    }

}

export default initial;
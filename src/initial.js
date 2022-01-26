import React from 'react';

const initial = ()=>{

    const initialState = {
        nameUser: '',
        navState: false,
        currentQuestion: 0,
    }

    const [state , dispatch ] = React.useReducer(reducer , initialState);

    const onAddName = (value) => dispatch({
        type:'ADDNAME',
        payload: value,
    });

    const onToggleNav = () => dispatch({
        type: 'TOGGLENAV',
    });

    const onNextQuestion = () => dispatch({
        type: 'NEXTQUESTION'
    });

    const onPreviousQuestion = () => dispatch({
        type: 'PREVIOUSQUESTION'
    });

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
            default:
                return state; 
        }
    }
    
    return{
        state,
        onAddName,
        onToggleNav,
        onNextQuestion,
        onPreviousQuestion
    }

}

export default initial;
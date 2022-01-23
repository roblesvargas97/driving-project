import React from 'react';

const initial = ()=>{

    const initialState = {
        nameUser: ''
    }

    const [state , dispatch ] = React.useReducer(reducer , initialState);

    const onAddName = (value) => dispatch({
        type:'ADDNAME',
        payload: value,
    });

    function reducer(state , action) {
        switch (action.type) {
            case 'ADDNAME':
                return {
                    nameUser: action.payload,
                }
        
            default:
                return state; 
        }
    }
    

    return{
        state,
        onAddName,
    }

}

export default initial;
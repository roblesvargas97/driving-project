import React from 'react';

const initial = ()=>{

    const initialState = {
        nameUser: ''
    }

    const [state , dispatch ] = React.useReducer(reducer , initialState);

    const onAddName = (value) => dispatch(
        {
            type: actionTypes.addName,
            payload: value,
        }
    );

    const actionTypes = {
        addName : 'ADDNAME',
    }

    const reducerObject = (state, payload) => ({
        [actionTypes.addName]:{ 
            ...state,
            nameUser: payload,
        }
    })

    const reducer = (state,action) => {
        if(reducerObject(state)[action.type]){
            return reducerObject(state)[action.type];
        }else{
            return state;
        }

    }

    return{
        state,
        onAddName,
    }

}

export default initial;
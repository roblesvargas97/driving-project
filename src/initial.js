import React from 'react';

const initial = ()=>{

    const initialState = {
        nameUser: ''
    }

    const [state , dispatch ] = React.useReducer(reducer , initialState);

    console.log(state);

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
        [actionTypes.confirm]:{ 
            ...state,
            nameUser: 'Uriel'
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
    }

}

export default initial;
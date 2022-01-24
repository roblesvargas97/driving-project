import React from 'react';

const initial = ()=>{

    const initialState = {
        nameUser: '',
        navState: false,
    }

    const [state , dispatch ] = React.useReducer(reducer , initialState);

    const onAddName = (value) => dispatch({
        type:'ADDNAME',
        payload: value,
    });

    const onToggleNav = () => dispatch({
        type: 'TOGGLENAV',
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
           
            default:
                return state; 
        }
    }
    
    return{
        state,
        onAddName,
        onToggleNav,
    }

}

export default initial;
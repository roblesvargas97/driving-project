import React from 'react';
import Context from '../../Context/Context';

const ComponentTestValidatorLogic = () => {
    
    const {state} = React.useContext(Context);
    
    return {
        state
    };
}

export default ComponentTestValidatorLogic;
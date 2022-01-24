import React from 'react';
import Context from '../../Context/Context';

const WelcomeValidatorLogic = () => {

    const {state} = React.useContext(Context);
    
    return{

        state,
    }
    
}

export default WelcomeValidatorLogic;
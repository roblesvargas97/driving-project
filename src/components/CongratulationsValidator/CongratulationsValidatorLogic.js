import React from 'react';
import Context from '../../Context/Context';


const CongratulationsValidatorLogic = () => {

    const {state} = React.useContext(Context);
    
    return {
        state,
    };
}

export default CongratulationsValidatorLogic;
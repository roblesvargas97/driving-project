import React from 'react';
import CongratulationsValidatorLogic from './CongratulationsValidatorLogic';
import Congratulations from '../../pages/Congratulations/Congratulations';
import AlertPage from '../../pages/AlertPage/AlertPage';

const CongratulationsValidator = () => {
    
    
    const {state} = CongratulationsValidatorLogic();    
    
    const stateUser = state.nameUser!== '';
    
    return (
        <React.Fragment>
            {
            stateUser? <Congratulations/> : <AlertPage 
                                        message='Lo sentimos aun no has ingresado tu nombre.'
                                        image = 'https://i.imgur.com/d3SGYcO.png'    
                                    />
            }
        </React.Fragment>
        
    );
}

export default CongratulationsValidator;
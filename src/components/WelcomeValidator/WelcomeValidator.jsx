import React from 'react';
import WelcomeValidatorLogic from './WelcomeValidatorLogic'
import Welcome from '../../pages/Welcome/Welcome';
import AlertPage from '../../pages/AlertPage/AlertPage';
const WelcomeValidator = () => {

    const {state} = WelcomeValidatorLogic();

    const stateUser = state.nameUser!== '';

    return (
        
        <React.Fragment>
            {
            stateUser? <Welcome/> : <AlertPage 
                                        message='Lo sentimos aun no has ingresado tu nombre.'
                                        image = 'https://i.imgur.com/d3SGYcO.png'    
                                    />
            }
        </React.Fragment>

    );
}

export default WelcomeValidator;
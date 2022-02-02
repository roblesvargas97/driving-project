import React from 'react';
import ComponentTestValidatorLogic from './ComponentTestValidatorLogic';
import AlertPage from '../../pages/AlertPage/AlertPage';
import ComponentTest from '../../pages/ComponentTest/ComponentTest';
const ComponentTestValidator = () => {
    const {state} = ComponentTestValidatorLogic();
    const stateUser = state.nameUser!== '';

    return (
        <React.Fragment>
        {
        stateUser? <ComponentTest/> : <AlertPage 
                                    message='Lo sentimos aun no has ingresado tu nombre.'
                                    image = 'https://i.imgur.com/d3SGYcO.png'    
                                />
        }
    </React.Fragment>
    );
}

export default ComponentTestValidator;
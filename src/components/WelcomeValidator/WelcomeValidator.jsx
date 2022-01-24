import React from 'react';
import WelcomeValidatorLogic from './WelcomeValidatorLogic'

const WelcomeValidator = () => {

    const {state} = WelcomeValidatorLogic();

    console.log(state);

    return (
        <h1>Hello World</h1>
    );
}

export default WelcomeValidator;
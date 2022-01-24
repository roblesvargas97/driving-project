import React from 'react';
import Context from '../../Context/Context';
import { useNavigate } from 'react-router-dom';

const WelcomeLogic = () => {
    
    const {state} = React.useContext(Context)
    const history = useNavigate();

    const onClickToTest = () => {
        history('/test')
    }
    
    return {
        state,
        onClickToTest
    };
}

export default WelcomeLogic;
import React from 'react';
import ComponentTestValidatorLogic from './ComponentTestValidatorLogic';
import AlertPage from '../../pages/AlertPage/AlertPage';
import ComponentTest from '../../pages/ComponentTest/ComponentTest';
const ComponentTestValidator = () => {
    const {state} = ComponentTestValidatorLogic();
    const stateUser = state.nameUser!== '';

    return (
        <React.Fragment>
            {/* {
            stateUser? <ComponentTest/> : <AlertPage/>
            } */}
            <ComponentTest/>
        </React.Fragment>
    );
}

export default ComponentTestValidator;
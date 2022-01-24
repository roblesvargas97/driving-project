import React from 'react';
import Context from '../../Context/Context';
const HeaderLogic = () => {

    const {state , onToggleNav} = React.useContext(Context);
    
    const onClickButtonMenu = () => {
        onToggleNav();
    }

    return{
        state,
        onClickButtonMenu,
    }

}

export default HeaderLogic;
import React from 'react';
import Context from '../../Context/Context';
const HeaderLogic = () => {

    const {state , onToggleNav} = React.useContext(Context);
    
    const onClickButtonMenu = () => {
        onToggleNav();
        scrollLock();
    }

    const scrollLock = () => {
        const bodyOverFlow = document.body.style.overflow = 'hidden';
    }

    return{
        state,
        onClickButtonMenu,
    }

}

export default HeaderLogic;
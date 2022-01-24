import React from 'react';
import Context from '../../Context/Context';

const NavBarLogic = () => {

    const { onToggleNav , state} = React.useContext(Context);

    const onClickButtonCloseMenu = () => {
        onToggleNav(); 
        scrollUnlock();
    }

    const onClickButtonCloseMenuDiv = (e) =>{
        if(e.target.classList.value === 'Container-Menu-Nav'){
            onToggleNav();
            scrollUnlock();
        }
    }

    const scrollUnlock = () => {
       const bodyOverFlow = document.body.style.overflow = 'scroll'
    }

    return{
        state,
        onClickButtonCloseMenu, 
        onClickButtonCloseMenuDiv
    }

}

export default NavBarLogic;
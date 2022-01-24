import React from 'react';
import Context from '../../Context/Context';

const NavBarLogic = () => {

    const { onToggleNav , state} = React.useContext(Context);

    const onClickButtonCloseMenu = () => {
        onToggleNav(); 
    }

    const onClickButtonCloseMenuDiv = (e) =>{
        if(e.target.classList.value === 'Container-Menu-Nav'){
            onToggleNav();
        }
    }

    return{
        state,
        onClickButtonCloseMenu, 
        onClickButtonCloseMenuDiv
    }

}

export default NavBarLogic;
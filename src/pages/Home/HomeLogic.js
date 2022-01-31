import React from 'react';
import Context from '../../Context/Context';
import { useNavigate } from 'react-router-dom';
const HomeLogic= ()=> {

    const {onAddName , state} = React.useContext(Context);

    const info = [
        {
            text: 'Si aun no te sientes preparado , repasa nuestra guia',
            image: 'https://i.imgur.com/cqkDZR9.png',
            button: true,
        },
        {
            text: 'Sigue practicando y presenta tu examen en tu oficina de transito.',
            image: 'https://i.imgur.com/wFzXSki.png',
            button: false,
        }
    ];

    const history = useNavigate();

    const onSubmit = (data) => {
        onAddName(data.name);
        history('/welcome');
    }


    return {
        info,
        onSubmit,
        state,
        
    }
}

export default HomeLogic;
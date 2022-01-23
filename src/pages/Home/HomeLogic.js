import React from 'react';
import initial from '../../initial';

const HomeLogic= ()=> {

    const {onAddName , state} = initial();

    const info = [
        {
            text: 'Si aun no te sientes preparado , repasa nuestra guia',
            image: 'https://i.imgur.com/a23YJQv.png',
            button: true,
        },
        {
            text: 'Sigue practicando y presenta tu examen en tu oficina de transito.',
            image: 'https://i.imgur.com/mL3lXfu.png',
            button: false,
        }
    ];

    const onSubmit = (data) => {
        onAddName(data.name);
    }

    return {
        info,
        onSubmit,
        state,
    }
}

export default HomeLogic;
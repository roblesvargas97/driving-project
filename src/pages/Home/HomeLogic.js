import React from 'react';

const HomeLogic= ()=> {
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
    return {info}
}

export default HomeLogic;
import React from 'react';

import './card.style.css'

export const Card = (props) =>(
    <div className='card-container'>
    <img 
    alt = 'monster'
    src={`https://robohash.org/${props.monister.id}?set=set4&size=180x180`} />
    
        <h2>{props.monister.name}</h2>
        <p> {props.monister.email}</p>
    </div>
) 
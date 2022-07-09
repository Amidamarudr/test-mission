import React from 'react';
import "./card.css";

export const Card = ({img, name}) => {
  return (
    <div className='card'>
        <img alt='картинка услуги' src={img}/>
        <span>{name}</span>
    </div>
  )
}

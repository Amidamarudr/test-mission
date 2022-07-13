import React from 'react';
import "./card.css";

export const Card = ({img, name}) => {
  return (
    <a className='card' href='#'>
        {img && <img alt="картинка услуги" src={`https://goodsurfing.org/${img}`} />}
        <span className='card-name'>{name}</span>
    </a>
  )
}

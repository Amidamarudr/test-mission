import React from 'react';
import "./list.css";

export const List = ({children}) => {
  return (
    <div className='list'>
        {children}
    </div>
  )
}

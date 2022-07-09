import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { List } from '../../components/list';
import { Card } from '../../components/card';
import "./categories.css";

export const Categories = () => {
  const [name, setNames] = useState([]);
  
  useEffect(() => {
    axios.get("https://goodsurfing.org/api/v1/hostcategory?fields=name_ru,image").then(({data}) => setNames(data))
  }, []);
  
  console.log(name);

  return (
    <div className='categories'>
      <List>
          {
            name.map(n => {
              const cardInfo = {
                img: n.image,
                name: n.name_ru
              };
              
              return (
                <Card key={n.name_ru} {...cardInfo}/>
              )
            })
          }
        </List>
    </div>
  )
}

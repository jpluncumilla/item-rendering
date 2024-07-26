import React from "react";

const ItemList = ({ items }) => {
  return (
    <div className='items'>
      {items.map((item) => (
        <div key={item.id} className='item'>
          <img src={item.img} alt={item.title} />
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import "./style.css"


const ItemCount = ({ stock, initial, onAdd}) =>{

    
  const [counter, setCounter] = useState(initial)
  
  return (
    <>
    <div className='button'>
      <Button onClick={() => counter > initial && setCounter(counter - 1)}>
        -
      </Button>
      <p> {counter} </p>
      <Button onClick={() => counter < stock && setCounter(counter + 1)}>
        +
      </Button>
    </div>
      

      <Button onClick={() => onAdd(counter)}>Agregar al carrito</Button>
    </>
  );
};


export default ItemCount
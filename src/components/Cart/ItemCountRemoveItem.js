import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ItemCountRemoveItem = ({ stock, initial, remove}) =>{
    
  const [counter, setCounter] = useState(initial)
  
  return (
    <>
      <button onClick={() => counter > initial && setCounter(counter - 1)}>
        -
      </button>
      {counter}
      <button onClick={() => counter < stock && setCounter(counter + 1)}>
        +
      </button>

      <Button onClick={ remove }>Quitar del carrito</Button>
    </>
  );
};


export default ItemCountRemoveItem
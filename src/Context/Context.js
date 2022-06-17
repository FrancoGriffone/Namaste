import { createContext, useState, useEffect } from 'react'

export const Context = createContext({})

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const [itemsTotal, setItemsTotal] = useState ()

  const [totalDeCompra, setTotalDeCompra] = useState()

  useEffect(() => {
    if (!localStorage.getItem("cartLocalS")) {
      localStorage.setItem("cartLocalS", JSON.stringify([]));
    } else {
      setCart(JSON.parse(localStorage.getItem("cartLocalS")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartLocalS', JSON.stringify(cart))
    const myCart = JSON.parse(localStorage.getItem('cartLocalS'));    
    const totalItemsCart = myCart.reduce((ant, items) => { return ant + items.quantity}, 0);  
    setItemsTotal(JSON.stringify(totalItemsCart)); 
    
    let resultado = myCart.reduce((ant, items) => { return ant + items.price*items.quantity}, 0)
    setTotalDeCompra(resultado.toString())
  
  }, [cart,itemsTotal,totalDeCompra]);

  const isInCart = (id) => cart.some((item) => item.id === id);

  const addItemToCart = (itemObtenido,quantity) => {
    if (isInCart(itemObtenido.id)) {
      const newCart = cart.map((cartObtenido) => {
        if (cartObtenido.id === itemObtenido.id) {
          return { ...cartObtenido, quantity: quantity}
          
        }else return cartObtenido
      })
      setCart(newCart);

    }else {
      setCart((prev) =>[...prev, { ...itemObtenido,quantity }]);

    }
  }

  const removeItem = (e) => {
  
    const newCartRemove = cart.filter((item) => item.id !== e.target.id);
    setCart(newCartRemove);
  }

  const vaciarCart=()=> setCart([])
  
  // const Datos = {addItemToCart, cart, removeItem, itemsTotal, totalDeCompra, vaciarCart}
  return(
    <Context.Provider
      value={{
        addItemToCart,
        cart,
        removeItem,
        itemsTotal,
        totalDeCompra,
        vaciarCart,
        // Item
      }}>
      {children}
    </Context.Provider>
    )
}
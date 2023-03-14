import { createContext, useContext, useState } from "react";

export const ShoppingCartContext = createContext({})

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}


  export function ShoppingCartProvider({children}) {
  const [cartItems, setCartItems ] = useState([])

  

  function getProductQuantity(id){
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  function addProductQuantity(id)  {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) { 
      return [...currItems, {id, quantity: 1 }]
    } else {
      return currItems.map(item => {
        if (item.id === id) {
          return {...item, quantity: item.quantity +1}
        } else {
          return item;
        }
      })
    }
    })
  }

  function decreaseProductQuantity(id)  {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) { 
      return currItems.filter(item => item.id !== id)
    } else {
      return currItems.map(item => {
        if (item.id === id) {
          return {...item, quantity: item.quantity - 1 }
        } else {
          return item;
        }
      })
    }
    })
  }

  function removeFromCart(id) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

 

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity, 
    0
   )





  return (
    <ShoppingCartContext.Provider value ={{getProductQuantity, addProductQuantity, decreaseProductQuantity, removeFromCart, cartQuantity, cartItems}}>
      {children}
      
    </ShoppingCartContext.Provider>
    );
}
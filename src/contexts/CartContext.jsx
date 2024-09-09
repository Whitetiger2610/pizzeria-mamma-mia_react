/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

//Creación Contexto
export const CartContext = createContext();

//Creación Provider

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

//Creación Funcion agregar

 const agregarCart = (pizza) => {
    const index = cart.findIndex((item) => item.id === pizza.id);
    if (index !== -1){
        const newCart = [...cart]
        newCart[index].quantity += 1;
        setCart(newCart);
    } else {
        setCart([...cart, {...pizza, quantity:1}]);
    }

 }

//Creación Función eliminar

const eliminarCart = (pizzaId) => {
    const index = cart.findIndex((item) => item.id === pizzaId);
    if (index === -1) return;
    let newCart = [...cart]

    if (newCart[index].quantity > 1) {
        newCart[index].quantity -= 1;
    } else {
        newCart = newCart.filter ((pizza) => pizza.id !==pizzaId)
    }
    setCart(newCart);
}


//Creación función Total compra

const obtenerTotal = () => {
    return cart.reduce ((acc, item) => acc + item.price*item.quantity, 0)
}


  return (
    <CartContext.Provider
    value = {{cart, setCart, agregarCart, eliminarCart,obtenerTotal}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider


import { useEffect, useState } from "react"
import { pizzaCart } from "../assets/pizzas"
import CartPizza from "../components/CartPizza"
import '../App.css'


const Cart = () => {
    const [pizzaList, setPizzaList] = useState(pizzaCart)
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        calcularTotal();
    }, [pizzaList])

    const calcularTotal = () =>{
        let totalPizza = 0;
        pizzaList.forEach((pizza) =>{
            totalPizza += pizza.price * pizza.count
        });
        setTotal(totalPizza)
    }

    const eliminarPizza = (id) => {
        const nuevaPizzaList = pizzaList.filter((pizza) => {
            return pizza.id !== id;
        })
        setPizzaList(nuevaPizzaList)
   
    }

    const incrementar = (id) => {
        const pizza = pizzaList.find((pizza)=> pizza.id === id)
        if (pizza.count === 10) return;
        pizza.count++
        setPizzaList([...pizzaList])
  
    }
    const decrementar = (id) => {
        const pizza = pizzaList.find((pizza)=> pizza.id === id)
        if (pizza.count === 1){
        eliminarPizza(id)
        return;
        }
        pizza.count--;
        setPizzaList([...pizzaList]);

    }

  return (

        <div className="cart">
            <h2>Carrito de Compras</h2>
            <h3>Total: $ {total}</h3>
            {pizzaList.map(pizza => 
                    <CartPizza 
                    key={pizza.id} 
                    pizza ={pizza} 
                    deletePizza={eliminarPizza}
                    increment = {incrementar}
                    decrement = {decrementar}
                    />   
            )}
            <button
            style={{width:"100px"}}
            > Pagar</button>
        </div>
  )
}

export default Cart
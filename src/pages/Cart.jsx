import { useContext, useEffect, useState } from "react"
import { pizzaCart } from "../assets/pizzas"
import CartPizza from "../components/CartPizza"
import '../App.css'
import { CartContext } from "../contexts/CartContext"
import { UserContext } from "../contexts/UserContext"


const Cart = () => {
    // const [pizzaList, setPizzaList] = useState(pizzaCart)
    // const [total, setTotal] = useState(0)

    // useEffect(()=>{
    //     calcularTotal();
    // }, [pizzaList])

    // const calcularTotal = () =>{
    //     let totalPizza = 0;
    //     pizzaList.forEach((pizza) =>{
    //         totalPizza += pizza.price * pizza.count
    //     });
    //     setTotal(totalPizza)
    // }

    // const eliminarPizza = (id) => {
    //     const nuevaPizzaList = pizzaList.filter((pizza) => {
    //         return pizza.id !== id;
    //     })
    //     setPizzaList(nuevaPizzaList)
   
    // }

    // const incrementar = (id) => {
    //     const pizza = pizzaList.find((pizza)=> pizza.id === id)
    //     if (pizza.count === 10) return;
    //     pizza.count++
    //     setPizzaList([...pizzaList])
  
    // }
    // const decrementar = (id) => {
    //     const pizza = pizzaList.find((pizza)=> pizza.id === id)
    //     if (pizza.count === 1){
    //     eliminarPizza(id)
    //     return;
    //     }
    //     pizza.count--;
    //     setPizzaList([...pizzaList]);

    // }
    const {cart, agregarCart, eliminarCart, obtenerTotal} = useContext(CartContext);
    const {user} = useContext(UserContext)

  return (

        <div className="cart">
            {cart.map(pizza => {
                return(
                    <div style={{width:"300px",margin:"10px",display:"flex", border:"solid black", justifyContent:"center", alignItems: "center", padding:"auto"}} key={pizza.id}>
                        <img src={pizza.img} style={{width:"100px", height:"100px", padding:"5px"}} alt={pizza.name}/>
                        <div style={{display:"flex", flexDirection:"column"}} >
                            <p style={{fontSize:"20px"}}>Pizza {pizza.name}</p>
                            <p>$ {pizza.price}</p>
                            <div style={{display:"flex",justifyContent:"center"}}>
                                <button 
                                className="btn btn-primary" 
                                style={{margin:"5px",display:"flex",width:"20px", height:"20px", alignItems:"center"}}
                                onClick={() =>{
                                    eliminarCart(pizza.id)
                                }} 
                                >-</button>
                                <p>{pizza.quantity}</p>
                                <button 
                                className="btn btn-primary" 
                                style={{margin:"5px",display:"flex",width:"20px", height:"20px", alignItems:"center"}}
                                onClick={()=>{
                                    agregarCart(pizza)
                                }
                                }
                                >+
                                </button>
                            </div>
                        </div>
                    </div>
                    )})
                    }
                    <h2>Carrito de Compras</h2>
                    <h3>Total: $ {obtenerTotal()}</h3>
            {user.token? (<button >Pagar</button>):(<button disabled >Pagar</button>)}
            
                
        </div>
        )
}
            //         <CartPizza 
            //         key={pizza.id} 
            //         pizza ={pizza} 
            //         deletePizza={eliminarPizza}
            //         increment = {incrementar}
            //         decrement = {decrementar}
            //         />   
            // )}
            // <button
            // style={{width:"100px"}}
            // > Pagar</button>

        

export default Cart
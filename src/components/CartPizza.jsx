import { useState } from "react"

const CartPizza = ({pizza, deletePizza, increment, decrement}) => {

  return (
    <div style={{width:"300px",display:"flex", border:"solid brown", justifyContent:"center", alignItems: "center", padding:"auto"}}>
                <img src={pizza.img} style={{width:"100px", height:"100px", padding:"5px"}} alt=""/>
                <div style={{display:"flex", flexDirection:"column"}}>
                <p style={{fontSize:"20px"}}>Pizza {pizza.name}</p>
                <p>$ {pizza.price}</p>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <button 
                    className="btn btn-primary" 
                    style={{margin:"5px",display:"flex",width:"20px", height:"20px", alignItems:"center"}}
                    onClick={() =>{
                        decrement(pizza.id)
                    }} 
                    >-</button>
                    <p>{pizza.count}</p>
                    <button 
                    className="btn btn-primary" 
                    style={{margin:"5px",display:"flex",width:"20px", height:"20px", alignItems:"center"}}
                    onClick={()=>{
                        increment(pizza.id)
                    }

                    }
                    >+</button>
                </div>
                </div>
                
            </div>

  )
}

export default CartPizza
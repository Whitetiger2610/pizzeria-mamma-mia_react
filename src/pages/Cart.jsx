import { useContext, useEffect } from "react"
import '../App.css'
import { CartContext } from "../contexts/CartContext"
import { UserContext } from "../contexts/UserContext";
// import { UserContext } from "../contexts/UserContext"


const Cart = () => {
    const {cart, agregarCart, eliminarCart, obtenerTotal, enviarCart} = useContext(CartContext);
    const {profile} = useContext(UserContext)
    // const {user} = useContext(UserContext)
    const token = localStorage.getItem("token")

    useEffect(() => {
        if (localStorage.getItem("token")){
      profile();
        }
    }, [profile]);
  
    const handleSent = () => {
      enviarCart();
    }

  return (

        <div onSubmit={handleSent} className="cart">
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
            {token? (<button onClick={handleSent} >Pagar</button>):(<button disabled >Pagar</button>)}
            
                
        </div>
        )
}

        

export default Cart
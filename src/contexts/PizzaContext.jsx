/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [pizza, setPizza] = useState([])
  const [error, setError] = useState(null)
  


  useEffect (() =>{
    consultarPizzas();
  }, [])

  const consultarPizzas = async () =>{
    const url = "http://localhost:3000/api/pizzas";
    const response = await fetch(url);
    const data = await response.json();

    setPizzas(data)
  }

  const getPizza = async(id) => {
   
    const url = 'http://localhost:3000/api/pizzas'
    try{
        const response = await fetch(`${url}/${id}`);
        if (!response.ok){
            throw new Error("No se encontró ninguna Pizza en ese ID")
        }
        const data = await response.json();
        setPizza(data)
        setError(null)

    } catch (err){
        setError(err.message)
        setPizza(null)
    } 
}



// useEffect(() => {
//     (async () => {
//       const response = await axios.get(
//         "http://localhost:3000/api/pizzas"
//       );
//       setPizzas(response.data);
//     })();
//   }, []);

  return (
    <PizzaContext.Provider value={{pizzas, setPizzas, pizza, setPizza, getPizza, error}}>
      {children}
    </PizzaContext.Provider>
  );
};
export default PizzaProvider;
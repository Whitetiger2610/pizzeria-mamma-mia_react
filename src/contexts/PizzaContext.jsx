/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);


  useEffect (() =>{
    consultarPizzas();
  }, [])

  const consultarPizzas = async () =>{
    const url = "http://localhost:3000/api/pizzas";
    const response = await fetch(url);
    const data = await response.json();

    setPizzas(data)
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
    <PizzaContext.Provider value={{pizzas, setPizzas}}>
      {children}
    </PizzaContext.Provider>
  );
};
export default PizzaProvider;
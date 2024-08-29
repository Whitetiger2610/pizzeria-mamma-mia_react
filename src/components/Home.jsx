import CardPizza from "./CardPizza"
import '../App.css'
// import {pizzas} from "../assets/pizzas"
import Header from "./Header"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";




const Home = () => {

  const [pizzas, setPizzas] = useState([])

  useEffect (() =>{
    consultarPizzas();
  }, [])

  const consultarPizzas = async () =>{
    const url = "http://localhost:3000/api/pizzas";
    const response = await fetch(url);
    const data = await response.json();

    setPizzas(data)
  }

    return (
      <div className = "cards">
        <Header/>
        <Col >
          <Row >
          {pizzas.map (pizza => 
          <CardPizza 
          key={pizza.id}
          name={pizza.name} 
          price={pizza.price}
          ingredients={pizza.ingredients}
          img= {pizza.img} 
          description = {pizza.desc}/>
          )}
          </Row>
        </Col>
      </div>
    )
  }
  
  export default Home
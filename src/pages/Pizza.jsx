import { useContext, useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaPizzaSlice} from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";
import { PizzaContext } from "../contexts/PizzaContext";
import { library } from "@fortawesome/fontawesome-svg-core";

const Pizza = () => {

    const {id} = useParams();
    // const [pizza, setPizza] = useState([])
    const {pizza,getPizza, error} = useContext(PizzaContext)
    
      // const consultarPizza = async (id) =>{
      //   const url = "http://localhost:3000/api/pizzas/"`${id}`;
      //   const response = await fetch(url);
      //   const data = await response.json();
    
      //   setPizza(data)
      // }

      useEffect (() =>{
        getPizza(id);
      }, [getPizza,id])

  return (
    <div>
      <Header/>
      <div style={{display:"flex", justifyContent:"center"}}>
      <Card style={{backgroundColor:'white', width: '30rem', margin:"5px" }} >
        {error && <p>{error}</p>}
        <Card.Img variant="top" src={pizza.img} style={{width:'auto', height:'200px'}}/>
        <Card.Body>
          <Card.Title className="d-flex justify-content-center">{pizza.name}</Card.Title>
          <hr/>
          <Card.Subtitle style={{fontSize:'15px',color:'gray',padding:'5px'}}>
            {pizza.desc}
          </Card.Subtitle>
          <hr/>
          <Card.Subtitle style={{fontSize:'15px',color:'gray',padding:'5px'}}>
            Ingredientes:
          </Card.Subtitle>
          <Card.Text style={{fontSize:'15px',color:'gray'}}>
          <FaPizzaSlice/>{pizza.ingredients?.map(ing => <li key={ing}>{ing}</li>)}
          </Card.Text>
          <hr />
          <Card.Subtitle style={{fontSize:'20px', fontWeight:'bold', padding:'10px'}}>
              Precio: $ {pizza.price}
          </Card.Subtitle>
          <Row>
          <Col><Button variant="outline-dark" style={{fontSize:'10px'}} href= "/">Volver</Button></Col>
          <Col><Button variant="dark" style={{fontSize:'10px'}}>Añadir</Button></Col>
          </Row>
        </Card.Body>
      </Card>
      </div>
    </div>
  )
}

export default Pizza
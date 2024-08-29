import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaPizzaSlice} from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Pizza = () => {

    const [pizza, setPizza] = useState([])

    useEffect (() =>{
        consultarPizza();
      }, [])
    
      const consultarPizza = async () =>{
        const url = "http://localhost:3000/api/pizzas/p001";
        const response = await fetch(url);
        const data = await response.json();
    
        setPizza(data)
      }

  return (
    <div>

    <Card style={{backgroundColor:'white', width: '18rem' }}>
      <Card.Img variant="top" src={pizza.img} style={{width:'auto', height:'150px'}}/>
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
        <FaPizzaSlice/>{pizza.ingredients.map(ingredient => <li key={pizza.id}>{ingredient}</li>)}
        </Card.Text>
        <hr />
        <Card.Subtitle style={{fontSize:'20px', fontWeight:'bold', padding:'10px'}}>
            Precio: $ {pizza.price.toLocaleString("de-DE")}
        </Card.Subtitle>
        <Row>
        <Col><Button variant="outline-dark" style={{fontSize:'10px'}}>Ver mas</Button></Col>
        <Col><Button variant="dark" style={{fontSize:'10px'}}>Añadir</Button></Col>
        </Row>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Pizza
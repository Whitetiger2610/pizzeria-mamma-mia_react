import '../App.css'
import Header from "../components/Header"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext} from "react";
import { CartContext } from "../contexts/CartContext";
import { PizzaContext } from "../contexts/PizzaContext";
import { Button, Card } from "react-bootstrap";
import { FaPizzaSlice } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Home = () => {


  const { pizzas } = useContext (PizzaContext);
  const { agregarCart } = useContext(CartContext)
  const productType = "Pizza"

    const navigate = useNavigate(); 
    const irAPizza = (pizzaId) => { navigate(`/pizzas/${pizzaId}`);};  

    return (
      <div className = "cards">
      
        <Header/>
        <div style={{display:"flex", justifyContent:"center"}}>
        <Col>
           <Row>
          {pizzas.map ((pizza) => {
            return(
          
          <Card style={{backgroundColor:'white', width: '18rem', margin:"5px" }} key={pizza.id}>
            <Card.Img variant="top" src={pizza.img} style={{width:'auto', height:'150px'}}/>
            <Card.Body>
            <Card.Title className="d-flex justify-content-center">{productType} {pizza.name}</Card.Title>
           <hr/>
            <Card.Subtitle style={{fontSize:'15px',color:'gray',padding:'5px'}}>
            Ingredientes:
            </Card.Subtitle>
            <Card.Text style={{fontSize:'15px',color:'gray'}}>
            <FaPizzaSlice/>{pizza.ingredients?.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
            </Card.Text>
            <hr />
            <Card.Subtitle style={{fontSize:'20px', fontWeight:'bold', padding:'10px'}}>
                Precio: $ {pizza.price?.toLocaleString("de-DE")}
            </Card.Subtitle>
            <Row>
            <Col><Button variant="outline-dark" style={{fontSize:'10px'}} onClick={
               () => irAPizza(pizza.id)
              }>Ver mas</Button></Col>
            <Col><Button variant="dark" style={{fontSize:'10px'}} onClick={()=>{
              agregarCart(pizza);
            }}>Añadir</Button></Col>
            </Row>
            </Card.Body>
          </Card>
          )
          })}
          </Row>
        </Col>
        </div>
      </div>
    )
  };
  
  export default Home
import CardPizza from "./CardPizza"
import {pizzas} from "../assets/pizzas"
import Header from "./Header"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Home = () => {

    return (
      <div>
        <Header/>
        <Col md={15} >
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
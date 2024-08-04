import CardPizza from "./CardPizza"
import Header from "./Header"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return (
      <div>
        <Header/>
        <Row>
        <Col xs={6} md={4}>
        <CardPizza 
        name="Napolitana" 
        price={5950}
        ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
        img= "https://imag.bonviveur.com/pizza-napolitana.jpg"  
        />
        </Col>
        <Col xs={6} md={4}>
        <CardPizza 
        name="Española" 
        price={6950}
        ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
        img= "https://lucasi.cl/wp-content/uploads/2020/02/pizza_espanola_chiguayante_lucasi_1.jpg"  
        />
        </Col>
        <Col xs={6} md={4}>
        <CardPizza 
        name="Pepperoni" 
        price={7950}
        ingredients={["mozzarella", "pepperoni","orégano"]}
        img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWeECgpU7ndozaDY-cS3QKLjvSL7stKvYsOQ&s"  
        />
        </Col>
        </Row>
      </div>
    )
  }
  
  export default Home
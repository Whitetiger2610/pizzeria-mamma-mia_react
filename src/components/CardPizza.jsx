import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaPizzaSlice} from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CardPizza = ({name, price, ingredients, img}) => {
    const productType = "Pizza"
  return (
    <>
    <Card style={{backgroundColor:'white', width: '18rem' }}>
      <Card.Img variant="top" src={img} style={{width:'auto', height:'150px'}}/>
      <Card.Body>
        <Card.Title className="d-flex justify-content-start">{productType} {name}</Card.Title>
        <hr/>
        <Card.Subtitle style={{fontSize:'15px',color:'gray',padding:'5px'}}>
          Ingredientes:
        </Card.Subtitle>
        <Card.Text style={{fontSize:'15px',color:'gray'}}>
        <FaPizzaSlice/> {ingredients[0]}, {ingredients[1]}, {ingredients[2]}, {ingredients[3]}
        </Card.Text>
        <hr />
        <Card.Subtitle style={{fontSize:'20px', fontWeight:'bold', padding:'10px'}}>
            Precio: $ {price.toLocaleString("de-DE")}
        </Card.Subtitle>
        <Row>
        <Col><Button variant="outline-dark" style={{fontSize:'10px'}}>Ver mas</Button></Col>
        <Col><Button variant="dark" style={{fontSize:'10px'}}>Añadir</Button></Col>
        </Row>
      </Card.Body>
    </Card>
    </>
  )
}

export default CardPizza
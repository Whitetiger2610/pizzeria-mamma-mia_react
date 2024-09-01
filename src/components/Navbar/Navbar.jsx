import Button from 'react-bootstrap/Button';
import { FaPizzaSlice, FaUserLock, FaUnlock, FaLock, FaShoppingCart} from "react-icons/fa";
import './navbar.css'
// import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const total = 25000;
  const token = false;
  const buttonStyle = {fontSize:'10px'}


  return (
    // <Stack className="container" direction="horizontal" gap={3}>  
      
    // <icon className="p-2">Pizzeria Mamma mia! </icon>
    // <Button className="p-2" variant="outline-light" style={buttonStyle}><FaPizzaSlice/> Home</Button>{' '}
    // <Button className= {token == false ? 'log': null} variant="outline-light" style={buttonStyle}><FaUnlock/> Profile</Button>{' '}
    // <Button className= {token == false ? 'log': null} variant="outline-light" style={buttonStyle}><FaLock/> Logout</Button>{' '}
    // <Button className= {token == true ? 'log': null} variant="outline-light" style={buttonStyle}><FaUserLock/> Login</Button>{' '}
    // <Button className= {token == true ? 'log': null}  variant="outline-light" style={buttonStyle}><FaUserLock/> Register</Button>{' '}
    // <Button className="p-2 ms-auto" variant="outline-info" style={buttonStyle}><FaShoppingCart/> Total:$ {total.toLocaleString("de-DE")}</Button>{' '}
    // </Stack>  
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Pizzeria Mamma Mia</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/" className="text-secondary ms-3" text-decoration-none>Home</Link>
          <Link to='/register' className="text-secondary ms-3" text-decoration-none>Register</Link>
          <Link to='/Login' className="text-secondary ms-3" text-decoration-none>Login</Link>
          <Link to='/cart' className="text-secondary ms-3" text-decoration-none>Cart</Link>
          <Link to='/profile' className="text-secondary ms-3" text-decoration-none>Profile</Link>
        </Nav>
        <Link to='/cart'>
        <Button className="p-2 ms-auto" variant="outline-dark" style={buttonStyle}><FaShoppingCart/> Total:$ {total.toLocaleString("de-DE")}</Button>{' '}
        </Link>

      </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default NavBar
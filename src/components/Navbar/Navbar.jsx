import Button from 'react-bootstrap/Button';
import { FaPizzaSlice, FaUserLock, FaUnlock, FaLock, FaShoppingCart} from "react-icons/fa";
import './navbar.css'
// import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import {UserContext} from '../../contexts/UserContext';
import { IoMdLogOut } from 'react-icons/io';
import { RiLoginCircleFill } from 'react-icons/ri';

const NavBar = () => {
  // const total = 25000;
  // const token = false;
  const buttonStyle = {fontSize:'10px'}

  const {obtenerTotal} = useContext(CartContext)
  const {user, login, logout} = useContext(UserContext)


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
    <Navbar expand="lg" className="bg-body-tertiary" style={{overflow:"hidden"}}>
    <Container >
      <Navbar.Brand href="#home">Pizzeria Mamma Mia</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/" className="text-secondary ms-3" text-decoration-none >Home</Link>
          {!user.token && <Link to='/register' className="text-secondary ms-3" text-decoration-none >Register</Link>}
          {!user.token && <Link to='/login' className="text-secondary ms-3" text-decoration-none >Login</Link>}
          <Link to='/cart' className="text-secondary ms-3" text-decoration-none >Cart</Link>
          {user.token && <Link to='/profile' className="text-secondary ms-3" text-decoration-none>Profile</Link>}
        </Nav>
        {user && user.token? 
        (<Link to="/login"><Button className="p-2 ms-auto" variant="outline-dark" style={buttonStyle} onClick={()=> logout()}><IoMdLogOut/>Logout</Button></Link>)
        :
        (<Link to="/profile"><Button className="p-2 ms-auto" variant="outline-dark" style={buttonStyle} onClick={()=> login()}><RiLoginCircleFill/>Login</Button></Link>)}{' '}
        <Link to='/cart'>
        <Button className="p-2 ms-auto" variant="outline-dark" style={buttonStyle} ><FaShoppingCart/> Total:$ {obtenerTotal()}</Button>{' '}
        </Link>

      </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default NavBar
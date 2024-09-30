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
import {UserContext} from '../../contexts/UserContext';
import { IoMdLogOut } from 'react-icons/io';
import { RiLoginCircleFill } from 'react-icons/ri';

const NavBar = () => {

  const buttonStyle = {fontSize:'10px'}

  const {obtenerTotal} = useContext(CartContext)
  const {user, logout} = useContext(UserContext)
  console.log(user)

  return ( 
    <Navbar expand="lg" className="bg-body-tertiary" style={{overflow:"hidden"}}>
    <Container >
      <Navbar.Brand href="#home">Pizzeria Mamma Mia</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/" className="text-secondary ms-3" text-decoration-none >Home</Link>
          {!user && <Link to='/register' className="text-secondary ms-3" text-decoration-none >Register</Link>}
          {!user && <Link to='/login' className="text-secondary ms-3" text-decoration-none >Login</Link>}
          <Link to='/cart' className="text-secondary ms-3" text-decoration-none >Cart</Link>
          {user && <Link to='/profile' className="text-secondary ms-3" text-decoration-none>Profile</Link>}
        </Nav>
        {user? 
        (<Link to="/"><Button className="p-2 ms-auto" variant="outline-dark" style={buttonStyle} onClick={logout}><IoMdLogOut/>Logout</Button></Link>)
        :
        (<Link to="/login"><Button className="p-2 ms-auto" variant="outline-dark" style={buttonStyle}><RiLoginCircleFill/>Login</Button></Link>)}{' '}
        <Link to='/cart'>
        <Button className="p-2 ms-auto" variant="outline-dark" style={buttonStyle} ><FaShoppingCart/> Total:$ {obtenerTotal()}</Button>{' '}
        </Link>

      </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default NavBar
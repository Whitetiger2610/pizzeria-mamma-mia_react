import Button from 'react-bootstrap/Button';
import { FaPizzaSlice, FaUserLock, FaUnlock, FaLock, FaShoppingCart} from "react-icons/fa";
import './navbar.css'
import Stack from 'react-bootstrap/Stack';

const Navbar = () => {
  const total = 25000;
  const token = false;
  const buttonStyle = {fontSize:'10px'}

  

  return (
    <Stack className="container" direction="horizontal" gap={3}>  
      
    <icon className="p-2">Pizzeria Mamma mia! </icon>
    <Button className="p-2" variant="outline-light" style={buttonStyle}><FaPizzaSlice/> Home</Button>{' '}
    <Button className= {token == false ? 'log': null} variant="outline-light" style={buttonStyle}><FaUnlock/> Profile</Button>{' '}
    <Button className= {token == false ? 'log': null} variant="outline-light" style={buttonStyle}><FaLock/> Logout</Button>{' '}
    <Button className= {token == true ? 'log': null} variant="outline-light" style={buttonStyle}><FaUserLock/> Login</Button>{' '}
    <Button className= {token == true ? 'log': null}  variant="outline-light" style={buttonStyle}><FaUserLock/> Register</Button>{' '}
    <Button className="p-2 ms-auto" variant="outline-info" style={buttonStyle}><FaShoppingCart/> Total:$ {total.toLocaleString("de-DE")}</Button>{' '}
    </Stack>  
  )
}

export default Navbar
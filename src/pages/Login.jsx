import { useContext, useState } from 'react';
import '../App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login} = useContext(UserContext);
    const [shown, setShown] = useState(false)
    const navigate = useNavigate()

   
    const switchShown = () => setShown(!shown);

        const handleSubmit = async (e) => {
            e.preventDefault();
            
                const response = await login(email, password);
             
                if (response) {
                    navigate("/")
                }
           
            }
        

  return (
    <Form onSubmit={handleSubmit} className='login'>
        <p>Todos los campos son obligatorios</p>
        <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control 
                type="email"
                name="email" 
                placeholder="name@example.com"
                onChange = {(e) => setEmail(e.target.value)}  
                value={email}/>
                
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control 
            type={shown ? 'text' : 'password'}
            name="contraseña" 
            placeholder="contraseña"
            onChange= {(e) => setPassword(e.target.value)}
            value={password} />
            <Button size='sm' style={{margin:"5px"}} variant="outline-secondary" onClick={switchShown}>
            {shown ? 'Ocultar' : 'Mostrar'}</Button>
        </Form.Group>
        <div>
        <Button type="submit" style={{margin:"5px"}}>Enviar</Button>
        </div>
    </Form>
  )
}

export default Login
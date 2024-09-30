
import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css'
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmar, setConfirmar] = useState('')
    const [shown, setShown] = useState(false)
    const navigate = useNavigate()
    

    const {register} = useContext(UserContext)

    const onChange1 = ({ currentTarget }) => setPassword(currentTarget.value);
    const onChange2 = ({ currentTarget }) => setConfirmar(currentTarget.value);
    const switchShown = () => setShown(!shown);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
            const response = await register(email, password) 
            if (response) {
                navigate("/")
            }
       
        }


  return (
    <Form onSubmit={handleSubmit} className='reg'>
        <p>Todos los campos son obligatorios</p>
        <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control 
                type="email"
                name="email" 
                placeholder="name@example.com"
                onChange= {(e) => setEmail(e.target.value)} 
                value={email} />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control 
            type={shown ? 'text' : 'password'}
            name="contraseña" 
            placeholder="contraseña"
            onChange={onChange1}
            // onChange= {(e) => setContraseña(e.target.value)} 
            value={password} />
            <Button size='sm' style={{margin:"5px"}} variant="outline-secondary" onClick={switchShown}>
            {shown ? 'Ocultar' : 'Mostrar'}</Button>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Confirmar contraseña</Form.Label>
            <Form.Control 
            type={shown ? 'text' : 'password'}
            name="confirmar" 
            placeholder="confirmar contraseña"
            onChange={onChange2}
            // onChange={(e="true") => setConfirmar(e.target.value)}
            value={confirmar} />
        </Form.Group>
        <div>
        <Button type="submit" style={{margin:"5px"}}>Enviar</Button>
        </div>
    </Form>

  )
}

export default Register
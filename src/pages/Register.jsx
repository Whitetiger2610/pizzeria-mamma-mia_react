
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css'

const Register = () => {

    const [email, setEmail] = useState('')
    const [contraseña, setContraseña] = useState('')
    const onChange1 = ({ currentTarget }) => setContraseña(currentTarget.value);
    const [confirmar, setConfirmar] = useState('')
    const onChange2 = ({ currentTarget }) => setConfirmar(currentTarget.value);

    const [shown, setShown] = useState(false)
    const switchShown = () => setShown(!shown);

    const [error, setError] = useState(false)

    const validateData = (e) => {
        e.preventDefault()

        if (!email.trim() || !contraseña.trim() || !confirmar.trim()){
            setError(true)

        return
        }
        if (contraseña.trim().length < 6) {
            alert("contraseña debe tener mínimo 6 caracteres ")
         return
        }
        if (contraseña.trim() !== confirmar.trim()) {
            alert("confirmación de contraseña no coincide")

         return
        }

    setError(false);
    setEmail('');
    setContraseña('');
    setConfirmar('');

    }

  return (
    <Form onSubmit={validateData} className='reg'>
        {error ? <p>Todos los campos son obligatorios</p> : null}
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
            value={contraseña} />
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
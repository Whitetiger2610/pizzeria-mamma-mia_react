import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    
    const [email, setEmail] = useState('')
    const [contraseña, setContraseña] = useState('')
    const onChange1 = ({ currentTarget }) => setContraseña(currentTarget.value);
    const [shown, setShown] = useState(false)
    const switchShown = () => setShown(!shown);

    const myemail = "mauricio.gonzalez@gmail.com"
    const mypassword = "123456789"

    const [error, setError] = useState(false)

    const validateData = (e) => {
        e.preventDefault()


        if (!email.trim() || !contraseña.trim()){
            setError(true)
        return
        }
        if (contraseña.trim().length < 6) {
            alert("contraseña debe tener mínimo 6 caracteres ")
         return
        }

        if (email === myemail & contraseña === mypassword) {
            alert("Los datos son correctos")
            return 
        } else {
            alert("Los datos son incorrectos")
        }

        setError(false)
        setEmail('');
        setContraseña('');
        
 }

  return (
    <Form onSubmit={validateData}>
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
        <div>
        <Button type="submit" style={{margin:"5px"}}>Enviar</Button>
        </div>
    </Form>
  )
}

export default Login
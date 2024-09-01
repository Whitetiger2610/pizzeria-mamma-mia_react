import { Link } from 'react-router-dom'
import '../App.css'

const NotFound = () =>  {
    return (
      <div className="not">
          <h1>No se encuentra la página</h1>
          <hr />
          <Link to="/">Volver a Home</Link>
        

      </div>
    )
  }
  
  export default NotFound
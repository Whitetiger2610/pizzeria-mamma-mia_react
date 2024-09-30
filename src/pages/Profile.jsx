import { useContext, useEffect } from 'react'
import '../App.css'
import { UserContext } from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom'

const Profile = () =>  {

    const {user, profile, logout } = useContext(UserContext)
  

    useEffect(() => {
      if (localStorage.getItem("token")){
    profile();
      }
  }, [profile]);

  const handleLogout = () => {
    logout();
  }

  return (
    <div className="prof">
      {user ? (
        <div>
        <h1>Usuario</h1>
        <hr />
        <p>{user.email}</p>
        <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
      ) :(
        <p>No has iniciado sesion</p>
        )}
       
    </div>
  )
}

export default Profile
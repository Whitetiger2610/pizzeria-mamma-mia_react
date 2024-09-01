import '../App.css'

const Profile = () =>  {

    const email = "mga.asesor.esolar@gmail.com"

  return (
    <div className="prof">
        <h1>Usuario</h1>
        <hr />
        <p>{email}</p>
        <button>Cerrar Sesión</button>
    </div>
  )
}

export default Profile
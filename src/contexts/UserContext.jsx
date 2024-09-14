import { createContext, useState } from "react"

export const UserContext = createContext();

const UserProvider = ({ children }) => {

const [user,setUser] = useState({
        email:"hola@hola.com",
        username:"Mauricio",
        token:true
}
)

const login = () => {
    setUser({
        email:"hola@hola.com",
        username:"Mauricio",
        token:true
        })
}


const logout = () => {
    return setUser([])
}

  return (
    <UserContext.Provider value={{user, setUser, logout, login}}>
      {children}  
    </UserContext.Provider>
  )
}

export default UserProvider
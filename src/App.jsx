import './App.css'
import NavBar from './components/Navbar/NavBar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import { Navigate, Route, Routes } from 'react-router-dom'
import PizzaProvider from './contexts/PizzaContext'
import { useContext } from 'react'
import { UserContext } from './contexts/UserContext'


function App() {

  const {user} = useContext(UserContext)

  return (
    <div className='page'>
        <NavBar/>
        {/* <Home /> */}
        {/* <Register/> */}
        {/* <Login/> */}
        {/* <Cart/> */}
        {/* <Pizza/> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={
            !user.token? <Register/> :<Navigate to="/home"/> }/>
          <Route path="/login" element={
            !user.token? <Login/> : <Navigate to="/home"/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/pizzas/:id" element={<Pizza/>}/>
          <Route path="/profile" element={
            user.token? <Profile/> : <Navigate to="/login"/>}/>
          <Route path="/404" element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App

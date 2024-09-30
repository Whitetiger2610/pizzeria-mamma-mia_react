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
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'


function App() {

  
  return (
    <div className='page'>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/pizzas/:id" element={<Pizza/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/404" element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App

import './App.css'
import Navbar from './components/Navbar/Navbar'
// import Home from './components/Home'
// import Cart from './components/Cart'

// import Login from './components/Login'
// import Register from './components/Register'
import Pizza from './components/Pizza'
import Footer from './components/Footer'


function App() {

  return (
    <div className='page'>
      <Navbar/>
      {/* <Home /> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Cart/> */}
      <Pizza/>
      <Footer/>
    </div>
  )
}

export default App

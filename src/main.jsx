import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import PizzaProvider from './contexts/PizzaContext.jsx'
import CartProvider from './contexts/CartContext.jsx'
import UserProvider from './contexts/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <PizzaProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </PizzaProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

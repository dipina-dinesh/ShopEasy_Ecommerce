import Home from './Components/Home'
import Navpage from './Components/Navpage'
import Products from './Components/Products'
import Cart from './Components/Cart'
import CategoryPage from "./Components/CategoryPage";
import Login from "./Components/Login";
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import CartContextProvider from "./Components/Context/CartContext";

function App() {
  return (
     <CartContextProvider>
    <Router>
      <Navpage />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
         <Route path="/category/:category" element={<CategoryPage />} />
         <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </CartContextProvider>
  )
}

export default App
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  const user = true

  return (
    <Router>
      <Routes>
        <Route path="/ecommerce" element={<Home />} />
        <Route path="/ecommerce/products/:category" element={<ProductList />} />
        <Route path="/ecommerce/product/:id" element={<Product />} />
        <Route path="/ecommerce/cart" element={<Cart />} />
        <Route
          path="/ecommerce/login"
          element={user ? <Navigate replace to="/" /> : <Login />}
        />
        <Route
          path="/ecommerce/register"
          element={user ? <Navigate replace to="/" /> : <Register />}
        />
      </Routes>
    </Router>
  )
}

export default App
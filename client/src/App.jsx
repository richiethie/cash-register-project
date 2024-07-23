import React from 'react'
import{Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateProducts from './pages/CreateProducts'
import ShowProducts from './pages/ShowProducts'
import EditProducts from './pages/EditProducts'
import DeleteProducts from './pages/DeleteProducts'
import ProductsCard from './components/ProductsCard'
import DeleteCart from './pages/DeleteCart'
import AddToCart from './pages/AddToCart'

const App = () => {

  return (
    <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/products/add' element={<CreateProducts />} />
      <Route path='/products/:id' element={<ShowProducts />} />
      <Route path='/cart/:id' element={<AddToCart />} />
      <Route path='/products/update/:id' element={<EditProducts />} />
      <Route path='/products/delete/:id' element={<DeleteProducts />} />
      <Route path='/cart/delete/:id' element={<DeleteCart />} />
    </Routes>
  )
}

export default App

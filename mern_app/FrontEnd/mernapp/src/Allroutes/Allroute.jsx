import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Createproduct from '../Pages/Createproduct'
import Deleteproduct from '../Pages/Deleteproduct'
import Editproduct from '../Pages/Editproduct'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Product from '../Pages/Product'
import Signup from '../Pages/Signup'

const Allroute = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />}/>
            <Route path='/product' element={<Product />}/>
            <Route path='/product/create' element={<Createproduct />}/>
            <Route path='/product/:productId/edit' element={<Editproduct />}/>
            <Route path='/product/:id/delete' element={<Deleteproduct />}/>
        </Routes>
    </div>
  )
}

export default Allroute
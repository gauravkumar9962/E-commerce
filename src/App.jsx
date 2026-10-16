import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import { Router } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import ProductListing from './Pages/ProductListing'
import ProductDetails from './Pages/ProductDetails'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={"/"} exact={true} element={<Home/>}/>
        <Route path={"/productListing"} exact={true} element={<ProductListing/>}/>
        <Route path={"/productDetails/:id"} exact={true} element={<ProductDetails/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App

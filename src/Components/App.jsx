import React from 'react'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import Footer from './Footer'

export default function App() {
  return (
    <>
    {/* <h1>This is App</h1> */}
    <BrowserRouter>
    <Nav/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='' */}
    </Routes>

    </BrowserRouter>
    <Footer/>
    
    
    
    </>
  )
}

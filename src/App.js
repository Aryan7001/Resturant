import React from 'react'
import Home from './Component/Home/Home'
import{Routes, Route} from 'react-router-dom'
import Cart from './Component/Pages/Cart/Cart'
import Navbar from './Component/Navbar/Navbar'
import Menu from './Component/NavbarInfo/Menu/Menu'
import ContactUs from './Component/NavbarInfo/Contact us/Contact us'
import Aboutus from './Component/NavbarInfo/About us/About us'
import { useState } from 'react'

import About from './Component/NavbarInfo/About/About'
import Footer from './Component/Footer/Footer'
import Login from './Component/Login/Login'
import Reservation from './Component/Reservation/Reservation'


const App = () => {
  const[category, setCategory] = useState('All')
const[login, setLogin] = useState(false)
  return (
    <>
    {login? <Login setLogin={setLogin}  />   : '' }
        <div>
 <Navbar setLogin={setLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/About us' element={<Aboutus/>}/>
        <Route path='/Contact us' element={<ContactUs/>}   />
        <Route path='/Menu' element={<Menu/>} category={category} setCategory={setCategory}     />
        <Route path='/Non-Veg' element={<Menu/>} />
        <Route path='/vegan' element={<Menu/>} />
        <Route path='/gluten-free' element={<Menu/>} />
        <Route path='/All' element={<Menu/>} />
        <Route path='/About' element={<About/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Reservation' element={<Reservation/>}/>
      </Routes>
   <Footer/>

    </div>
    </>

  )
}

export default App

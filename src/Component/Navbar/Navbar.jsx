import React from 'react'
import './Navbar.css'
import { icons } from '../Images/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setLogin}) => {
  return (
    <div className='main-nav'>
      <div className='nav-details'>
      <Link to = './'><img src={icons.Logo} alt="" /></Link>
<ul className='nav-list'>
  <Link  className='link-nav' to = './'><li>Home</li></Link>
  <Link  className='link-nav' to = './About'><li>About</li> </Link>
  <Link  className='link-nav' to = './Contact Us'><li>Contact Us</li></Link>
  <Link  className='link-nav' to = './Menu'><li>Menu</li> </Link>
  <Link  className='link-nav' to = './Reservation'><li>Reservation</li> </Link>
  
</ul>

<div className='nav-icons'>
 <span onClick={()=>setLogin(true)}  class="material-symbols-outlined">login</span>
<Link to = './Cart'> <span class="material-symbols-outlined">shopping_cart</span> </Link>
</div>

      </div>
    </div>
  )
}

export default Navbar

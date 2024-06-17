import React from 'react'
import { icons } from '../Images/assets'
import './Heading.css'
import { Link } from 'react-router-dom'

const Heading = () => {
  return (
    <div className='main-heading'>
      <div className='left-headings'>
<h1>Best Resturant <span>In The City </span></h1>
<p>We provied best services to our customer</p>
<div className='left-button'>
<Link to = './Menu'><button>Order Now</button></Link>
<Link to = './Reservation'> <button>Reservation</button></Link>
</div>
      </div>

<div className='right-heading'> 
<img src={icons.image1} alt="" />
</div>
    </div>

  )
}

export default Heading

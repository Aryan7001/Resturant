import React from 'react'
import { icons } from '../Images/assets'
import './Heading2.css'
import { Link } from 'react-router-dom'

const Heading2 = () => {
  return (
    <div className='main-heading1'>
      <div className='left-heading'>
<img src={icons.image2} alt="" />
      </div>

<div className='right-main' >
<div className='right-text'>
<h1>Best Food Of All Time</h1>
<p>This is the best food made in this entire planet</p>
<div className='button'>
<Link to = './Menu'><button>Order Now</button></Link>
<Link to = './Reservation'> <button>Reservation</button></Link>
</div>
</div>
</div>

    </div>
  )
}

export default Heading2

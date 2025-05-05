import React from 'react'
import { icons } from '../Images/assets'
import './Heading.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion' // 👈 import motion

const Heading = () => {
  return (
    <div className='main-heading'>

      {/* LEFT: Text content slides from left */}
      <motion.div
        className='left-headings'
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1>
          Best Resturant <span>In The City</span>
        </h1>
        <p>We provide best services to our customer</p>
        <div className='left-button'>
          <Link to='./Menu'><button>Order Now</button></Link>
          <Link to='./Reservation'><button>Reservation</button></Link>
        </div>
      </motion.div>

      {/* RIGHT: Image zooms and fades in */}
      <motion.div
        className='right-heading'
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={icons.image1} alt="" />
      </motion.div>

    </div>
  )
}

export default Heading

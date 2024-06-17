import React from 'react'
import './SingleCart.css'

const SingleCart = ({id,image,title,price}) => {
  return (
    <div className='main-single'>
      <div className='img-main'>
<img src={image} alt="" />
      </div>

<div className="cart-details">
    <h1>{title}</h1>
    <p>Rs {price}</p>
</div>


    </div>
  )
}

export default SingleCart

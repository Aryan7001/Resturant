import React, { useContext } from 'react'
import { StoreContext } from '../../Storecontext/Storecontext'
import './Cart.css'
import { Link } from 'react-router-dom'

const Cart = () => {

const{products,removeFunction,addItems}= useContext(StoreContext)

  return (
    <div className='cart-main'>
      <h1>My Orders</h1>

<div className='cart-totals'>
  <li>ITEMS</li>
  <li>QUANTITY</li>
  <li>PRICE </li>
<li>Total MRP</li>
<li>Remove</li>

</div>

      <div className='order-list'>
{products.map((product,index)=>{

if(addItems[product.id]>0){

return(

<div className='cart-details'>
  <div className="img-cart">
  <img src={product.image} alt="" />
  <p>{product.title} </p>
  <p>{'⭐⭐⭐⭐⭐'}</p>
  </div>
<div className="quantity">
  <h4>{addItems[product.id]}</h4>
</div>

<div className="products-price">
 <h4>{product.pricePerServing}</h4>
</div>

<div className='total'>
<h3>{addItems[product.id]*product.pricePerServing}</h3>
</div>

<div className="products-action">
<span onClick={()=>removeFunction(product.id)} class="material-symbols-outlined">delete</span>
</div>



</div>


)
}
})}
<div className='button-cart'>
<Link to = '/Menu'><button>Continue Ordering</button></Link>
<Link to = '/'> <button>CheckOut</button></Link>
</div>


      </div>
    </div>
  )
}

export default Cart

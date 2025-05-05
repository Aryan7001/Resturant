import React, { useContext } from 'react';
import { StoreContext } from '../../Storecontext/Storecontext';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { products, removeFunction, addItems } = useContext(StoreContext);

  return (
    <div className="cart-main">
      <h1>My Orders</h1>

      <div className="cart-totals">
        <li>ITEM</li>
        <li>PRICE</li>
        <li>QUANTITY</li>
        <li>TOTAL</li>
        <li>REMOVE</li>
      </div>

      <div className="order-list">
        {products.map((product) => {
          if (addItems[product.id] > 0) {
            return (
              <div className="cart-details" key={product.id}>
                <div className="cart-item">
  <div className="cart-image-title">
    <img src={product.image} alt={product.title} className="item-image" />
    <span className="item-title">{product.title}</span>
  </div>
</div>


<div className="cart-price">
<span>{product.pricePerServing}</span>
</div>

<div className="cart-quantity">
<span>{addItems[product.id]}</span>
</div>

 <div className="cart-total">
  <span>{addItems[product.id] * product.pricePerServing}</span>
  </div>

   <div className="cart-action">
  <span onClick={() => removeFunction(product.id)} 
  className="material-symbols-outlined">
   delete
    </span>
   </div>
  </div>
   );
 }
   return null;
  })}
 <div className="button-cart">
          <Link to="/Menu"><button>Continue Ordering</button></Link>
          <Link to="/"><button>CheckOut</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;

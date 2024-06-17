import React, { useContext } from 'react'
import './Item.css'
import { StoreContext } from '../Storecontext/Storecontext'


const Item = ({id,image,title,price}) => {

const{addItems,addFunction,removeFunction} = useContext(StoreContext);

  return (
    <div className='main-item'>
      <div className="main-img">
      <img src={image} alt="" />
      </div>
     
     <div className="main-contents">
     <p>{title}</p>
     <p>{'⭐⭐⭐⭐⭐'}</p>
     </div>
<p> Rs {price}</p>
     <div className="main-rating">

{!addItems[id] ? <span onClick={()=>addFunction(id)} class="material-symbols-outlined cart">garden_cart</span> : 

<div className='items-add-remove'>
<span  onClick={()=>addFunction(id)} class="material-symbols-outlined">add_shopping_cart</span>
<p> {addItems[id]} </p>
<span onClick={()=>removeFunction(id)} class="material-symbols-outlined">remove_shopping_cart</span>
</div>
}
     </div>
    
    </div>
  )
}

export default Item

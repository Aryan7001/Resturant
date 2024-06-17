import React, { useContext } from 'react'
import './PopularMenu.css'
import { StoreContext } from '../Storecontext/Storecontext'
import Item from '../Item/Item'

const PopularMenu = () => {

const{products,loading} = useContext(StoreContext)
console.log('dami', products)

if(!loading){
<p>loading.....</p>

}


const filterPopular = products.filter((product)=> product.healthScore>18 )
console.log('vayo filter', filterPopular)

  return (
    <div className='main-popular'>   
    
      <div className='popular-list'>
<h1>Our Popular Menu</h1>
<div className="popular-products">
{filterPopular.map((product)=>(
<Item id={product.id} image={product.image} title={product.title} price={product.pricePerServing} />

))}
</div>
      </div>
    </div>
  )
}

export default PopularMenu

import React, { useContext } from 'react'
import { StoreContext } from '../Storecontext/Storecontext'
import Item from '../Item/Item'

const Body = () => {

const{products,loading} = useContext(StoreContext)

if(loading){
    <p>xaina aako.....</p>
}

  return (
    <div>
      <h1>body</h1>

  {products.map((product)=>(

<Item id={product.id} /*image={product.image}*/ title={product.title} />

      ))}
    </div>
  )
}

export default Body

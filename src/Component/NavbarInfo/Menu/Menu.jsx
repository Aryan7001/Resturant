import React, { useContext, useState,} from 'react'
import './Menu.css'
import { StoreContext } from '../../Storecontext/Storecontext'
import MenuDisplay from '../../MenuDisplay/MenuDisplay'


const Menu = () => {

const{products,loading} = useContext(StoreContext)
const[filter, setFilter]= useState({
 cuisines:'All',
  diets:'All',
  dishTypes:'All',
  vegan: false,
  vegetarian: false,
  veryHealthy: false,
  veryPopular: false,

})
const[search,setSearch] = useState('')

const handleCategory= ((cuisines)=>{
  setFilter((prevfilter)=>({...prevfilter, cuisines}))
})

const handleDiets= ((diets)=>{
  setFilter((prevfilter)=>({...prevfilter,diets}))
})

const handleDishTypes= ((dishTypes)=>{
  setFilter((prevfilter)=>({...prevfilter,dishTypes}))
})

const handleTypes = ((dishName)=>{

  setFilter((prevfilter)=>({...prevfilter, [dishName]:!prevfilter[dishName]}))

})


const filterMenu = products.filter((product)=> {
  const{cuisines,diets,dishTypes,vegan,vegetarian,veryHealthy,veryPopular} = filter;

  const dishMatch = dishTypes==='All' || product.dishTypes.includes(dishTypes);
  const dietMatch = diets === 'All' || product.diets.includes(diets);
  const cuisinesMatch = cuisines ==='All' || product.cuisines.includes(cuisines);
  const veganMatch = !vegan || product.vegan;
  const vegetarianMatch = !vegetarian || product.vegetarian;
  const veryHealthyMatch = !veryHealthy || product.veryHealthy;
const veryPopularMatch = !veryPopular || product.veryPopular; 
const searchMatch = product.title.toLowerCase().includes(search.toLowerCase());

return dishMatch && dietMatch && cuisinesMatch && veganMatch && vegetarianMatch && veryHealthyMatch && veryPopularMatch && searchMatch;

} )




if(!loading){
  <p>pakh vai....</p>
}



  return (
    <div className='main-menu'>
      <div className='menu-category'>
<div className='menu-list'>
  <h1 >Our Menu Items</h1>
 
</div>
<div className='search-items'>
<input type="search" name="search" placeholder='search for food...' value={search} onChange={(e)=>setSearch(e.target.value)} />
</div>
<div className='main-category'>
<div className="cusines">
  <h1>cuisines</h1>
  <li onClick={()=>handleCategory('All')}>All</li>
  <li onClick={()=>handleCategory('Indian')}>Indian</li>
  <li onClick={()=>handleCategory('Asian')}>Asian</li>
  <li onClick={()=>handleCategory('Mediterranean')}>Mediterranean</li>
  <li onClick={()=>handleCategory('European')}>European</li>
  <li onClick={()=>handleCategory('Greek')}>Greek</li>
  <li></li>
  <li></li>
</div>

<div className="diets">
  <h1>Diet types</h1>
  <label className='list-label'>
  <input onClick={()=>handleDiets('All')} type="checkbox" /> All
    <input onClick={()=>handleDiets('gluten free')} type="checkbox" /> gluten free
    <input onClick={()=>handleDiets('ketogenic')} type="checkbox" /> ketogenic
    <input onClick={()=>handleDiets('primal')}  type="checkbox" /> primal
    <input onClick={()=>handleDiets('gluten free')}   type="checkbox" /> gluten free
  </label>
</div>

<div className='dish_types'>
<h1>Dish Types</h1>
<li onClick={()=>handleDishTypes('All')} >All</li>
<li onClick={()=>handleDishTypes('lunch')} >lunch</li>
<li onClick={()=>handleDishTypes('dinner')} >dinner</li>
<li onClick={()=>handleDishTypes('main dish')} >main dish</li>
<li onClick={()=>handleDishTypes('main course')} >main course</li>
<li onClick={()=>handleDishTypes('dessert')} >dessert</li>
<li onClick={()=>handleDishTypes('breakfast')} >breakfast</li>
<li onClick={()=>handleDishTypes('morning meal')} >morning meal</li>
<li onClick={()=>handleDishTypes('soup')} >soup</li>

</div>

<div className='items-types'>
<label className='label'>
  <h1>Types Category</h1>
  <input onClick={()=>handleTypes('All')} type="checkbox" /> All
    <input onClick={()=>handleTypes('vegan')} type="checkbox" /> vegan
    <input onClick={()=>handleTypes('vegetarian')} type="checkbox" /> vegetarian
    <input onClick={()=>handleTypes('veryHealthy')} type="checkbox" /> veryHealthy
    <input onClick={()=>handleTypes('veryPopular')} type="checkbox" />  veryPopular
  </label>
</div>


</div>

      </div>


<div className='main-products'>
  {filterMenu.length > 0 ?(

filterMenu.map((product,index)=>{
  return(
  <MenuDisplay id={product.id} image={product.image} title={product.title} price={product.pricePerServing} />
  )
  
  }))

 : <div className='products-para'> <p>oops! the items u are looking for is finished :( </p>  </div>   }

</div>


    </div>
  )
}

export default Menu



import React, { useContext, useState } from 'react'
import './Menu.css'
import { StoreContext } from '../../Storecontext/Storecontext'
import MenuDisplay from '../../MenuDisplay/MenuDisplay'

const Menu = () => {
  const { products, loading } = useContext(StoreContext)
  const [filter, setFilter] = useState({
    cuisines: 'All',
    diets: 'All',
    dishTypes: 'All',
    vegan: false,
    vegetarian: false,
    veryHealthy: false,
    veryPopular: false,
  })
  const [search, setSearch] = useState('')

  const handleCategory = (cuisines) => {
    setFilter((prev) => ({ ...prev, cuisines }))
  }
  const handleDiets = (diets) => {
    setFilter((prev) => ({ ...prev, diets }))
  }
  const handleDishTypes = (dishTypes) => {
    setFilter((prev) => ({ ...prev, dishTypes }))
  }
  const handleTypes = (typeName) => {
    setFilter((prev) => ({ ...prev, [typeName]: !prev[typeName] }))
  }

  const filterMenu = products.filter((product) => {
    const {
      cuisines,
      diets,
      dishTypes,
      vegan,
      vegetarian,
      veryHealthy,
      veryPopular,
    } = filter

    const dishMatch = dishTypes === 'All' || product.dishTypes.includes(dishTypes)
    const dietMatch = diets === 'All' || product.diets.includes(diets)
    const cuisinesMatch = cuisines === 'All' || product.cuisines.includes(cuisines)
    const veganMatch = !vegan || product.vegan
    const vegetarianMatch = !vegetarian || product.vegetarian
    const veryHealthyMatch = !veryHealthy || product.veryHealthy
    const veryPopularMatch = !veryPopular || product.veryPopular
    const searchMatch = product.title.toLowerCase().includes(search.toLowerCase())

    return (
      dishMatch &&
      dietMatch &&
      cuisinesMatch &&
      veganMatch &&
      vegetarianMatch &&
      veryHealthyMatch &&
      veryPopularMatch &&
      searchMatch
    )
  })

if(loading) return <p>...loading</p>

  return (
    <div className='main-menu'>
      <div className='menu-list'>
        <h1>Our Menu Items</h1>
      </div>

      <div className='search-items'>
        <input
          type='search'
          placeholder='Search for food...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className='main-category'>
        <div className='filter-section'>
          <div className='filter-group'>
            <span className='filter-title'>Cuisines:</span>
            <div className='filter-items'>
              {['All', 'Indian', 'Asian', 'Mediterranean', 'European', 'Greek'].map((item, i) => (
                <span key={i} className='filter-item' onClick={() => handleCategory(item)}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className='filter-group'>
            <span className='filter-title'>Diet Types:</span>
            <div className='filter-items'>
              {['All', 'gluten free', 'ketogenic', 'primal'].map((item, i) => (
                <span key={i} className='filter-item' onClick={() => handleDiets(item)}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className='filter-group'>
            <span className='filter-title'>Dish Types:</span>
            <div className='filter-items'>
              {[
                'All',
                'lunch',
                'dinner',
                'main dish',
                'main course',
                'dessert',
                'breakfast',
                'morning meal',
                'soup',
              ].map((item, i) => (
                <span key={i} className='filter-item' onClick={() => handleDishTypes(item)}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className='filter-group'>
            <span className='filter-title'>Types:</span>
            <div className='filter-items'>
              {['vegan', 'vegetarian', 'veryHealthy', 'veryPopular'].map((item, i) => (
                <span key={i} className='filter-item' onClick={() => handleTypes(item)}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='main-products'>
        {filterMenu.length > 0 ? (
          filterMenu.map((product, index) => (
            <MenuDisplay
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.pricePerServing}
            />
          ))
        ) : (
          <div className='products-para'>
            <p>Oops! The items you are looking for are finished :(</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Menu
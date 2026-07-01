import React, { useState } from 'react'
import Card from '../components/Card'
import NewArrivalsProducts from '../data/NewArrivalsProducts'
import SearchBar from '../components/SearchBar'


const NewArrival = ({cart, setCart}) => {

  const [search, setSearch] = useState("")

  const filterProducts = newArrivalsProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  return (

    <>
      <SearchBar search={search} setSearch={setSearch} />

      <div className='card-arr'>

        {filterProducts.length > 0 ? (
          filterProducts.map((product) => (
            <Card key={product.id} product={product} cart={cart} setCart={setCart} />
          ))
        ) : (
          <h2 style={{color:'#0097aa'}} className='no-products'>No Products Found</h2>
        )}

      </div>
    </>

  )
}

export default NewArrival
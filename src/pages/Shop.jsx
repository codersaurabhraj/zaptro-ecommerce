import React, { useState } from 'react'
import Card from '../components/Card'
import ShopProducts from '../data/ShopProducts'
import SearchBar from '../components/SearchBar'


const Shop = ({ cart, setCart }) => {

  const [search, setSearch] = useState("")

  const filterProducts = shopProducts.filter((product) =>
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

export default Shop

